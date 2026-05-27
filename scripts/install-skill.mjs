import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const rootDir = process.cwd()
const skillName = 'govuk-chakra-design-system'
const sourceDir = path.join(rootDir, 'skills', skillName)
const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex')
const targetDir = path.join(codexHome, 'skills', skillName)

if (!fs.existsSync(sourceDir)) {
  console.error(`Missing skill source: ${path.relative(rootDir, sourceDir)}`)
  process.exit(1)
}

fs.mkdirSync(path.dirname(targetDir), { recursive: true })
fs.cpSync(sourceDir, targetDir, { recursive: true, force: true })

console.log(`Installed ${skillName} to ${targetDir}`)
