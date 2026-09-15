import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve, relative, posix } from 'node:path'
import { fileURLToPath } from 'node:url'

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const output = 'adapters/open-design/govuk-chakra'
export const inputLimit = 240_000
const repository = 'https://github.com/gil00pita/govuk-chakra/blob/main/'
const read = (path) => readFile(resolve(root, path), 'utf8')
const dimension = (px) => `max(${px}px, ${px / 16}rem)`

// Links are references only: every pattern's guidance and implementation is embedded below.
function absoluteLinks(markdown, source) {
  return markdown.replace(/\]\(([^\s)]+)\)/g, (match, href) => {
    if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(href)) return match
    const path = posix.normalize(posix.join(posix.dirname(source), href))
    return `](${repository}${path})`
  })
}

export async function buildExport() {
  const design = await read('DESIGN.md')
  if (!/^---\n/.test(design) || !design.includes('\ncolors:\n')) {
    throw new Error('DESIGN.md must contain YAML frontmatter with a flat colors map.')
  }
  const colorSection = design.split('\ncolors:\n')[1].split('\ntypography:')[0]
  const colors = Object.fromEntries(
    [...colorSection.matchAll(/^ {2}([\w-]+): ['"]?(#[\da-fA-F]{6})['"]?$/gm)].map((m) => [
      m[1],
      m[2],
    ])
  )
  const color = (key) => {
    if (!colors[key]) throw new Error(`Missing DESIGN.md color: ${key}`)
    return colors[key]
  }
  const roles = {
    'page-background': color('govuk-white'),
    foreground: color('govuk-text'),
    'primary-brand': color('govuk-blue'),
    border: color('govuk-border'),
    surface: color('govuk-white'),
    muted: color('govuk-secondary-text'),
    success: color('govuk-green'),
    danger: color('govuk-red'),
  }
  let markdown = absoluteLinks(design, 'DESIGN.md')
    .replace('\nname:', '\ncategory: Government & Public Services\nsurface: web\nname:')
    .replace(
      '\ncolors:\n',
      `\ncolors:\n${Object.entries(roles)
        .map(([k, v]) => `  ${k}: '${v}'`)
        .join('\n')}\n`
    )
    .replaceAll("from '@/theme'", "from 'govuk-chakra/theme'")
    .replaceAll("from '@/components'", "from 'govuk-chakra'")
    .replace(
      'local `@/` imports above are repository aliases.',
      'the example above uses published package imports.'
    )

  markdown += `\n## Open Design integration\n\nThis is a generated, self-contained export of the repository DESIGN.md and its 30 user-centred patterns. Import this entire document as DESIGN.md content. Importing Markdown supplies design guidance; it does not install React dependencies or implement backend services.\n\nUse the existing govuk-chakra components with govUKThemeSystem. Do not replace them with Open Design's default components or a new UI kit. Preserve the validation, accessibility and service safeguards below. Install the package and its required peers in the generated project; use the integration example above.\n\nThe companion tokens.css provides Open Design semantic aliases for previews. The React theme and component recipes remain authoritative. Blue is the brand accent; primary action buttons are green. Do not recolour primary buttons blue merely because --accent is blue. Links, focus treatments and dark mode must follow the original recipes. CSS aliases alone cannot reproduce the component system.\n\nThe adapter uses square radii and flat surfaces. Its section spacing aliases use the existing 48/32/24px spacing steps. --radius-pill is reserved for circular controls. Motion aliases use Chakra's inherited fast/moderate durations and ease-out easing; respect reduced motion. Do not apply tokens.css globally over the Chakra theme. GDS Transport font files are not bundled by this export; retain the documented font fallback and licensing requirements.\n\n## User-centred patterns\n\nPatterns describe service decisions and multi-component journeys. Preserve their intent and safeguards instead of treating them as visual templates. The examples use local demo state; production integration responsibilities are recorded for each pattern.\n`
  const paths = (await readdir(resolve(root, 'design/govuk/patterns')))
    .filter((file) => file.endsWith('.md') && file !== 'README.md')
    .sort()
  if (paths.length !== 30)
    throw new Error(
      `Expected all 30 patterns, found ${paths.length}. Update the export contract deliberately.`
    )
  for (const file of paths) {
    const source = `design/govuk/patterns/${file}`
    let content = (await read(source)).replace(
      /\n## Example in this repository\n[\s\S]*?(?=\n## )/,
      '\n'
    )
    // Local Storybook links cannot be opened from a standalone import.
    content = content
      .replace(/^.*\]\(http:\/\/localhost:[^\n]+\n/gm, '')
      .replace(/from '@\/components\/[^']+'/g, "from 'govuk-chakra'")
    content = absoluteLinks(content, source).replace(/^(#{1,2}) /gm, '$1## ')
    markdown += `\n${content.trim()}\n`
  }
  markdown += `\n## React pattern examples\n\nThese are reference source files using only this repository's UI components and React. To run them, save the four blocks to the filenames shown in one directory and render a named example inside the configured Chakra provider. Imports below use the published govuk-chakra package. The original files remain in src/stories/patterns.\n\nReplace storyHref's Storybook URLs with your application's routes. Implement page titles and focus management for your router; the examples include Storybook-specific title handling. Replace demo confirmations, verification codes and local state with secure service integrations. Never collect real payment card or bank data through a prototype. The Markdown importer does not execute these blocks.\n`
  for (const file of ['shared.tsx', 'AskUsersFor.tsx', 'HelpUsersTo.tsx', 'Pages.tsx']) {
    const source = (await read(`src/stories/patterns/${file}`)).replaceAll(
      "from '@/govuk-chakra'",
      "from 'govuk-chakra'"
    )
    markdown += `\n### ${file}\n\n\`\`\`tsx\n${source.trim()}\n\`\`\`\n`
  }
  if (markdown.length > inputLimit)
    throw new Error(
      `Export has ${markdown.length} characters; Open Design's DESIGN.md input limit is ${inputLimit}.`
    )

  const tokens = {
    bg: color('govuk-white'),
    surface: color('govuk-white'),
    'surface-warm': color('govuk-light-grey'),
    fg: color('govuk-text'),
    'fg-2': color('govuk-secondary-text'),
    muted: color('govuk-secondary-text'),
    meta: color('govuk-secondary-text'),
    border: color('govuk-border'),
    'border-soft': color('govuk-light-grey'),
    accent: color('govuk-blue'),
    'accent-on': color('govuk-white'),
    'accent-hover': color('govuk-link-hover'),
    'accent-active': color('govuk-link-hover'),
    success: color('govuk-green'),
    warn: color('govuk-focus-yellow'),
    danger: color('govuk-red'),
    'font-display': '"GDS Transport", arial, sans-serif',
    'font-body': '"GDS Transport", arial, sans-serif',
    'font-mono': 'monospace',
    ...Object.fromEntries(
      ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'].map((key, index) => [
        `text-${key}`,
        dimension([14, 16, 19, 24, 27, 36, 48, 80][index]),
      ])
    ),
    'leading-body': '1.315789',
    'leading-tight': '1.111111',
    'tracking-display': '0',
    ...Object.fromEntries(
      [1, 2, 3, 4, 5, 6, 8, 12].map((step) => [`space-${step}`, dimension(step * 4)])
    ),
    'section-y-desktop': 'var(--space-12)',
    'section-y-tablet': 'var(--space-8)',
    'section-y-phone': 'var(--space-6)',
    'radius-sm': '0',
    'radius-md': '0',
    'radius-lg': '0',
    'radius-pill': '9999px',
    'elev-flat': 'none',
    'elev-ring': '0 0 0 1px var(--border)',
    'elev-raised': 'none',
    'focus-ring': `0 0 0 3px ${color('govuk-focus-yellow')}`,
    'motion-fast': '150ms',
    'motion-base': '200ms',
    'ease-standard': 'cubic-bezier(0, 0, 0.58, 1)',
    'container-max': '1200px',
    'container-gutter-desktop': '30px',
    'container-gutter-tablet': '30px',
    'container-gutter-phone': '15px',
  }
  const css = `/* Generated by scripts/export-open-design.mjs. Preview aliases only; use govUKThemeSystem for React components. */\n:root {\n${Object.entries(
    tokens
  )
    .map(([k, v]) => `  --${k}: ${v};`)
    .join('\n')}\n}\n\n@media (max-width: 639px) {\n  :root {\n${Object.entries({
    lg: 21,
    xl: 21,
    '2xl': 27,
    '3xl': 32,
    '4xl': 53,
  })
    .map(([k, v]) => `    --text-${k}: ${dimension(v)};`)
    .join(
      '\n'
    )}\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --motion-fast: 0ms;\n    --motion-base: 0ms;\n  }\n}\n`
  const manifest = {
    schemaVersion: 'od-design-system-project/v1',
    id: 'govuk-chakra',
    name: 'GOV.UK Chakra',
    category: 'Government & Public Services',
    description:
      'Repository-backed Chakra UI design guidance and 30 user-centred GOV.UK pattern examples.',
    source: { type: 'github', url: 'https://github.com/gil00pita/govuk-chakra' },
    files: { design: 'DESIGN.md', tokens: 'tokens.css' },
  }
  return {
    'DESIGN.md': markdown,
    'tokens.css': css,
    'manifest.json': `${JSON.stringify(manifest, null, 2)}\n`,
  }
}

export async function exportDesign({ check = false } = {}) {
  const files = await buildExport()
  if (!check) await mkdir(resolve(root, output), { recursive: true })
  for (const [name, content] of Object.entries(files)) {
    const path = resolve(root, output, name)
    if (check) {
      const actual = await readFile(path, 'utf8').catch((error) => {
        if (error.code === 'ENOENT') return null
        throw error
      })
      if (actual !== content)
        throw new Error(`${relative(root, path)} is missing or stale. Run yarn design:open-design.`)
    } else {
      await writeFile(path, content)
    }
  }
  return files
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.some((arg) => arg !== '--check')) {
    console.error('Usage: node scripts/export-open-design.mjs [--check]')
    process.exitCode = 1
  } else {
    try {
      const files = await exportDesign({ check: args.includes('--check') })
      console.log(
        `${args.includes('--check') ? 'Verified' : 'Generated'} ${output} (${files['DESIGN.md'].length} characters).`
      )
    } catch (error) {
      console.error(error.message)
      process.exitCode = 1
    }
  }
}
