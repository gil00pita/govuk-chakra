import { spawnSync } from 'node:child_process'

const componentDiff = spawnSync('git', ['diff', '--cached', '--quiet', '--', 'src'], {
  stdio: 'ignore',
})

if (componentDiff.error) {
  console.error(`Unable to inspect staged changes: ${componentDiff.error.message}`)
  process.exit(1)
}

if (componentDiff.status !== 0 && componentDiff.status !== 1) {
  console.error('Unable to inspect staged component changes.')
  process.exit(componentDiff.status ?? 1)
}

const hasStagedComponentChanges = componentDiff.status === 1
const checks = [
  ...(hasStagedComponentChanges ? [{ script: 'visual:test', label: 'Visual regression' }] : []),
  { script: 'lint', label: 'Lint' },
  { script: 'test:run', label: 'Unit tests' },
]

const env = { ...process.env, CI: '1', FORCE_COLOR: '1' }
delete env.NO_COLOR

if (!hasStagedComponentChanges) {
  console.log('\nVisual regression skipped: no staged changes under src/.')
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
