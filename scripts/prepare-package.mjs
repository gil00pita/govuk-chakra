import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const distTypesDir = path.join(rootDir, 'dist', 'types')

const aliasTargets = {
  '@/components': ['components', 'index'],
  '@/theme': ['theme', 'index'],
  '@/utils': ['utils', 'index'],
}

function resolveAliasTarget(specifier) {
  if (specifier in aliasTargets) {
    return path.join(distTypesDir, ...aliasTargets[specifier])
  }

  if (specifier.startsWith('@/components/')) {
    return path.join(distTypesDir, 'components', specifier.slice('@/components/'.length))
  }

  if (specifier.startsWith('@/theme/')) {
    return path.join(distTypesDir, 'theme', specifier.slice('@/theme/'.length))
  }

  if (specifier.startsWith('@/utils/')) {
    return path.join(distTypesDir, 'utils', specifier.slice('@/utils/'.length))
  }

  if (specifier.startsWith('@/')) {
    return path.join(distTypesDir, specifier.slice(2))
  }

  return null
}

function rewriteSpecifier(filePath, specifier) {
  const target = resolveAliasTarget(specifier)

  if (!target) {
    return specifier
  }

  let relative = path.relative(path.dirname(filePath), target).replaceAll(path.sep, '/')

  if (!relative.startsWith('.')) {
    relative = `./${relative}`
  }

  return relative
}

function rewriteDeclarationFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  const rewritten = original
    .replace(/(from\s+['"])(@\/[^'"]+)(['"])/g, (_, prefix, specifier, suffix) => {
      return `${prefix}${rewriteSpecifier(filePath, specifier)}${suffix}`
    })
    .replace(/(import\(\s*['"])(@\/[^'"]+)(['"]\s*\))/g, (_, prefix, specifier, suffix) => {
      return `${prefix}${rewriteSpecifier(filePath, specifier)}${suffix}`
    })

  if (rewritten !== original) {
    fs.writeFileSync(filePath, rewritten)
  }
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      walk(fullPath)
      continue
    }

    if (entry.isFile() && fullPath.endsWith('.d.ts')) {
      rewriteDeclarationFile(fullPath)
    }
  }
}

if (fs.existsSync(distTypesDir)) {
  walk(distTypesDir)
}
