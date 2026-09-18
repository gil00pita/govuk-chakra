import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { tmpdir } from 'node:os'

const DEFAULT_MAX_BYTES = 2_000_000
const maxBytes = Number(process.env.MAX_PACKAGE_SIZE_BYTES ?? DEFAULT_MAX_BYTES)

if (!Number.isFinite(maxBytes) || maxBytes <= 0) {
  throw new Error('MAX_PACKAGE_SIZE_BYTES must be a positive number')
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const result = spawnSync(npmCommand, ['pack', '--dry-run', '--json', '--ignore-scripts'], {
  encoding: 'utf8',
  env: {
    ...process.env,
    npm_config_cache: process.env.npm_config_cache ?? path.join(tmpdir(), 'govuk-chakra-npm-cache'),
  },
})

if (result.status !== 0) {
  process.stderr.write(result.stderr)
  process.exit(result.status ?? 1)
}

const [packageInfo] = JSON.parse(result.stdout)

if (!packageInfo || typeof packageInfo.size !== 'number') {
  throw new Error('npm pack did not return package size information')
}

const sizeInMb = (packageInfo.size / 1_000_000).toFixed(2)
const limitInMb = (maxBytes / 1_000_000).toFixed(2)

console.log(
  `${packageInfo.filename}: ${sizeInMb} MB compressed (${packageInfo.entryCount} files); limit ${limitInMb} MB`
)

if (packageInfo.size > maxBytes) {
  console.error('Published package is too large. Check for accidentally bundled dependencies.')
  process.exit(1)
}
