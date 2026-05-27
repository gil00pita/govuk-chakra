import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const checkOnly = process.argv.includes('--check')
const outputPath = path.join(
  rootDir,
  'skills',
  'govuk-chakra-design-system',
  'references',
  'component-catalog.generated.md'
)

const sourceLinks = [
  ['GOV.UK Design System components', 'https://design-system.service.gov.uk/components/'],
  ['Chakra UI components', 'https://chakra-ui.com/docs/components/concepts/overview'],
  ['Chakra UI LLM component docs', 'https://chakra-ui.com/llms-components.txt'],
  ['Chakra UI charts docs', 'https://chakra-ui.com/docs/charts/installation'],
]

const missingOfficial = [
  {
    component: 'CharacterCount',
    govukName: 'Character count',
    notes: 'No exported wrapper. Compose a text field or textarea with a live character counter.',
  },
  {
    component: 'ErrorMessage',
    govukName: 'Error message',
    notes:
      'No standalone export. Prefer local form component error props or compose GOV.UK-styled Text.',
  },
  {
    component: 'ExitThisPage',
    govukName: 'Exit this page',
    notes: 'Directory exists but has no implementation or export.',
  },
  {
    component: 'PasswordInput',
    govukName: 'Password input',
    notes: 'Directory exists but has no implementation or export.',
  },
]

const brandHelpers = new Set(['GOVUKCrest', 'GOVUKCrown', 'GOVUKLogo', 'GOVUKOGL'])
const chakraGovSkinWithoutStory = new Set(['Chart'])

const govukNameOverrides = {
  BackLink: 'Back link',
  Breadcrumbs: 'Breadcrumbs',
  Checkbox: 'Checkboxes',
  CookieBanner: 'Cookie banner',
  DateInput: 'Date input',
  ErrorSummary: 'Error summary',
  FileUpload: 'File upload',
  GOVUKFooter: 'GOV.UK footer',
  GOVUKHeader: 'GOV.UK header',
  InsetText: 'Inset text',
  NotificationBanner: 'Notification banner',
  PhaseBanner: 'Phase banner',
  Radio: 'Radios',
  ServiceNavigation: 'Service navigation',
  SkipLink: 'Skip link',
  SummaryList: 'Summary list',
  TaskList: 'Task list',
  Textinput: 'Text input',
  WarningText: 'Warning text',
}

function readFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8')
}

function walkFiles(directory, predicate) {
  const files = []

  if (!fs.existsSync(directory)) {
    return files
  }

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...walkFiles(entryPath, predicate))
      continue
    }

    if (entry.isFile() && predicate(entryPath)) {
      files.push(entryPath)
    }
  }

  return files
}

function parseNamedExports(relativePath) {
  const file = readFile(relativePath)
  const exports = new Set()

  for (const match of file.matchAll(/export\s+\{\s*([\s\S]*?)\s*\}\s+from\s+['"][^'"]+['"]/g)) {
    const names = match[1]
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean)

    for (const name of names) {
      const exportName = name
        .split(/\s+as\s+/)
        .pop()
        ?.trim()

      if (exportName) {
        exports.add(exportName)
      }
    }
  }

  for (const match of file.matchAll(/export\s+\*\s+from\s+['"]\.\/components\/([^'"]+)['"]/g)) {
    exports.add(match[1].split('/')[0])
  }

  for (const match of file.matchAll(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]/g)) {
    const name = match[1].split('/')[0]

    if (!['provider', 'theme', 'utils'].includes(name)) {
      exports.add(name)
    }
  }

  return exports
}

function parseStoryTitles() {
  const storyFiles = walkFiles(path.join(rootDir, 'src', 'components'), (filePath) =>
    filePath.endsWith('.stories.tsx')
  )
  const titles = new Map()

  for (const storyFile of storyFiles) {
    const source = fs.readFileSync(storyFile, 'utf8')
    const titleMatches = Array.from(source.matchAll(/title:\s*['"]([^'"]+)['"]/g)).map(
      (match) => match[1]
    )
    const title =
      titleMatches.find(
        (candidate) =>
          candidate.startsWith('GOV.UK/Components/') || candidate.startsWith('Chakra Components/')
      ) ?? titleMatches[0]

    if (!title) {
      continue
    }

    const component = path.basename(path.dirname(storyFile))
    titles.set(component, {
      component,
      title,
      path: path.relative(rootDir, storyFile).replaceAll(path.sep, '/'),
    })
  }

  return titles
}

function parseProps(component) {
  const componentDir = path.join(rootDir, 'src', 'components', component)
  const sourceFiles = walkFiles(componentDir, (filePath) => filePath.endsWith('.tsx'))
  const props = new Set()

  for (const sourceFile of sourceFiles) {
    if (sourceFile.endsWith('.stories.tsx') || sourceFile.endsWith('.test.tsx')) {
      continue
    }

    const source = fs.readFileSync(sourceFile, 'utf8')

    for (const match of source.matchAll(
      /export\s+(?:interface|type)\s+([A-Z][A-Za-z0-9]*Props)\b/g
    )) {
      props.add(match[1])
    }
  }

  return Array.from(props).sort((a, b) => a.localeCompare(b))
}

function sentenceCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/G O V U K/g, 'GOV.UK')
    .replace(/Q R/g, 'QR')
}

function entrypointsFor(component, exportSets) {
  const entrypoints = []

  if (exportSets.main.has(component)) {
    entrypoints.push('govuk-chakra')
  }

  if (exportSets.charts.has(component)) {
    entrypoints.push('govuk-chakra/charts')
  }

  if (exportSets.editor.has(component)) {
    entrypoints.push('govuk-chakra/editor')
  }

  if (entrypoints.length === 0 && exportSets.componentBarrel.has(component)) {
    entrypoints.push('internal component barrel')
  }

  return entrypoints
}

function classify(component, storyTitle) {
  if (brandHelpers.has(component)) {
    return 'brand-helper'
  }

  if (storyTitle?.startsWith('GOV.UK/Components/')) {
    return 'official-govuk'
  }

  if (storyTitle?.startsWith('Chakra Components/')) {
    return 'chakra-gov-skin'
  }

  if (chakraGovSkinWithoutStory.has(component)) {
    return 'chakra-gov-skin'
  }

  return 'uncategorized'
}

function markdownTable(rows) {
  if (rows.length === 0) {
    return '_None found._'
  }

  return [
    '| Component | Story title | Entrypoints | Props | Notes |',
    '| --- | --- | --- | --- | --- |',
    ...rows.map((row) => {
      const props = row.props.length > 0 ? row.props.map((prop) => `\`${prop}\``).join(', ') : '-'
      const entrypoints =
        row.entrypoints.length > 0
          ? row.entrypoints.map((entrypoint) => `\`${entrypoint}\``).join(', ')
          : '-'

      return `| \`${row.component}\` | ${row.storyTitle ? `\`${row.storyTitle}\`` : '-'} | ${entrypoints} | ${props} | ${row.notes} |`
    }),
  ].join('\n')
}

function buildCatalog() {
  const storyTitles = parseStoryTitles()
  const exportSets = {
    main: parseNamedExports('src/govuk-chakra.ts'),
    componentBarrel: parseNamedExports('src/components/index.ts'),
    charts: parseNamedExports('src/charts-entry.ts'),
    editor: parseNamedExports('src/editor-entry.ts'),
  }

  const components = new Set([
    ...storyTitles.keys(),
    ...exportSets.componentBarrel,
    ...brandHelpers,
  ])

  const rows = Array.from(components)
    .sort((a, b) => a.localeCompare(b))
    .map((component) => {
      const story = storyTitles.get(component)
      const classification = classify(component, story?.title)
      const entrypoints = entrypointsFor(component, exportSets)
      const govukName = govukNameOverrides[component] ?? sentenceCase(component)
      const notes =
        classification === 'official-govuk'
          ? `Use for ${govukName} patterns before composing a fallback.`
          : classification === 'chakra-gov-skin'
            ? story?.title
              ? 'Chakra GOV skin local wrapper; use when no GOV.UK component intent applies.'
              : 'Chakra GOV skin helper without its own Storybook page.'
            : classification === 'brand-helper'
              ? 'Brand/licence helper, not a GOV.UK Design System component.'
              : 'No recognized Storybook classification prefix.'

      return {
        component,
        storyTitle: story?.title,
        classification,
        entrypoints,
        props: parseProps(component),
        notes,
      }
    })

  const groups = {
    official: rows.filter((row) => row.classification === 'official-govuk'),
    govSkin: rows.filter((row) => row.classification === 'chakra-gov-skin'),
    brand: rows.filter((row) => row.classification === 'brand-helper'),
    uncategorized: rows.filter((row) => row.classification === 'uncategorized'),
  }

  const sourceList = sourceLinks.map(([label, href]) => `- ${label}: ${href}`).join('\n')
  const missingRows = missingOfficial
    .map(
      (row) => `| \`${row.component}\` | ${row.govukName} | \`missing-official\` | ${row.notes} |`
    )
    .join('\n')

  return `# Component Catalog

Generated by \`yarn skill:catalog\`. Do not edit by hand.

## Classification Rules

- \`GOV.UK/Components/**\` Storybook titles are \`official-govuk\`.
- \`Chakra Components/**\` Storybook titles are \`chakra-gov-skin\`.
- Logo, crown, crest, and OGL helpers are \`brand-helper\`.
- GOV.UK Design System component pages without exported implementations are \`missing-official\`.

## Sources

${sourceList}

## Official GOV.UK Local Components

${markdownTable(groups.official)}

## Chakra GOV Skin Components

${markdownTable(groups.govSkin)}

## Missing Official GOV.UK Components

| Component | GOV.UK docs name | Classification | Notes |
| --- | --- | --- | --- |
${missingRows}

## Brand Helpers

${markdownTable(groups.brand)}

## Uncategorized Local Components

${markdownTable(groups.uncategorized)}
`
}

const generated = buildCatalog()

if (checkOnly) {
  const current = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : ''

  if (current !== generated) {
    console.error(`${path.relative(rootDir, outputPath)} is out of date. Run yarn skill:catalog.`)
    process.exit(1)
  }

  console.log(`${path.relative(rootDir, outputPath)} is up to date.`)
  process.exit(0)
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, generated)
console.log(`Wrote ${path.relative(rootDir, outputPath)}`)
