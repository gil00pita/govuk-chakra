import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { buildExport, exportDesign, root, inputLimit } from './export-open-design.mjs'

const files = await buildExport()
const markdown = files['DESIGN.md']

test('committed import package is reproducible and current', async () => {
  await exportDesign({ check: true })
  assert.deepEqual(await buildExport(), files)
})

test('standalone import preserves every pattern and example within the app input limit', async () => {
  assert.ok(markdown.length < inputLimit)
  const names = (await readdir(resolve(root, 'design/govuk/patterns'))).filter(
    (name) => name.endsWith('.md') && name !== 'README.md'
  )
  assert.equal(names.length, 30)
  for (const name of names) {
    const source = await readFile(resolve(root, 'design/govuk/patterns', name), 'utf8')
    assert.ok(markdown.includes(`##${source.split('\n')[0]}`), `${name}: title missing`)
    const safeguards = source
      .split('## Accessibility and service safeguards\n')[1]
      ?.split('\n## ')[0]
      .trim()
    assert.ok(safeguards, `${name}: safeguards missing in source`)
    assert.ok(markdown.includes(safeguards), `${name}: safeguards lost in export`)
  }
  for (const name of ['shared.tsx', 'AskUsersFor.tsx', 'HelpUsersTo.tsx', 'Pages.tsx']) {
    const source = await readFile(resolve(root, 'src/stories/patterns', name), 'utf8')
    assert.ok(
      markdown.includes(source.trim().replaceAll("from '@/govuk-chakra'", "from 'govuk-chakra'"))
    )
  }
  const prose = markdown.replace(/```[\s\S]*?```/g, '')
  for (const [, href] of prose.matchAll(/\]\(([^\s)]+)\)/g)) {
    assert.match(href, /^(https:\/\/|#)/, `Nonportable link: ${href}`)
    assert.ok(!href.includes('localhost'), `Local link: ${href}`)
  }
  assert.ok(!markdown.includes("from '@/"))
})

test('manifest references complete package files and semantic CSS aliases resolve', () => {
  const manifest = JSON.parse(files['manifest.json'])
  assert.equal(manifest.id, 'govuk-chakra')
  assert.equal(manifest.schemaVersion, 'od-design-system-project/v1')
  for (const file of Object.values(manifest.files)) assert.ok(files[file])
  const css = files['tokens.css']
  const defined = new Set([...css.matchAll(/--([\w-]+):/g)].map((match) => match[1]))
  for (const [, token] of css.matchAll(/var\(--([\w-]+)\)/g)) {
    assert.ok(defined.has(token), `Undefined token: ${token}`)
  }
  for (const key of [
    'bg',
    'surface',
    'fg',
    'accent',
    'success',
    'warn',
    'danger',
    'focus-ring',
    'font-body',
    'container-max',
  ]) {
    assert.ok(defined.has(key), `Missing semantic token: ${key}`)
  }
  assert.match(css, /prefers-reduced-motion: reduce/)
  assert.match(css, /--success: #0f7a52;/)
  assert.match(css, /--accent: #1d70b8;/)
})
