import { spawnSync } from 'node:child_process'

const checks = [
  { script: 'visual:test', label: 'Visual regression' },
  { script: 'lint', label: 'Lint' },
  { script: 'test:run', label: 'Unit tests' },
]

const env = { ...process.env, CI: '1', FORCE_COLOR: '1' }
delete env.NO_COLOR

for (const [index, { script, label }] of checks.entries()) {
  console.log(`\n[${index + 1}/${checks.length}] ${label}: yarn ${script}`)

  // CI mode checks existing baselines and requires a freshly built Storybook.
  const result = spawnSync('yarn', script === 'lint' ? [script, '--color'] : [script], {
    stdio: 'inherit',
    env,
  })

  if (result.error) console.error(result.error.message)
  if (result.status !== 0) {
    console.error(`Commit blocked: ${label} failed. Review the output above before committing.`)
    process.exit(result.status ?? 1)
  }
}

console.log('\nAll pre-commit checks passed.')
