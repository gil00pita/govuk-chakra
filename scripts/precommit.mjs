import { spawnSync } from 'node:child_process'

const stagedDiff = spawnSync('git', ['diff', '--cached', '--name-only', '-z'], {
  encoding: 'utf8',
})

if (stagedDiff.error) {
  console.error(`Unable to inspect staged changes: ${stagedDiff.error.message}`)
  process.exit(1)
}

if (stagedDiff.status !== 0) {
  console.error('Unable to inspect staged changes.')
  process.exit(stagedDiff.status ?? 1)
}

const hasStagedVisualChanges = stagedDiff.stdout
  .split('\0')
  .filter(Boolean)
  .some((file) => {
    const isSupportingFile = /\.(stories|test|spec)\.(ts|tsx)$/.test(file)
    const isIndexFile = file.endsWith('/index.ts')

    if (isSupportingFile || isIndexFile) return false

    return (
      (file.startsWith('src/components/') && file.endsWith('.tsx')) ||
      (file.startsWith('src/theme/') && file.endsWith('.ts'))
    )
  })
const checks = [
  ...(hasStagedVisualChanges ? [{ script: 'visual:test', label: 'Visual regression' }] : []),
  { script: 'lint', label: 'Lint' },
  { script: 'test:run', label: 'Unit tests' },
]

const env = { ...process.env, CI: '1', FORCE_COLOR: '1' }
delete env.NO_COLOR

if (!hasStagedVisualChanges) {
  console.log(
    '\nVisual regression skipped: no staged component .tsx or theme .ts implementation files.'
  )
}

for (const [index, { script, label }] of checks.entries()) {
  console.log(`\n[${index + 1}/${checks.length}] ${label}: corepack yarn ${script}`)

  // CI mode checks existing baselines and requires a freshly built Storybook.
  const result = spawnSync(
    'corepack',
    script === 'lint' ? ['yarn', script, '--color'] : ['yarn', script],
    {
      stdio: 'inherit',
      env,
    }
  )

  if (result.error) console.error(result.error.message)
  if (result.status !== 0) {
    console.error(`Commit blocked: ${label} failed. Review the output above before committing.`)
    process.exit(result.status ?? 1)
  }
}

console.log('\nAll pre-commit checks passed.')
