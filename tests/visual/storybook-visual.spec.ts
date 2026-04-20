import { expect, test, type Page } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

type StoryIndexEntry = {
  id: string
  name: string
  title: string
  type: 'docs' | 'story'
}

type StoryIndex = {
  entries: Record<string, StoryIndexEntry>
}

const indexPath = resolve(process.cwd(), 'storybook-static/index.json')
const storyIndex = JSON.parse(readFileSync(indexPath, 'utf8')) as StoryIndex

const componentStories = Object.values(storyIndex.entries)
  .filter((entry) => entry.type === 'story')
  .filter((entry) => entry.title.startsWith('GOV.UK/Components/'))
  .sort(
    (left, right) => left.title.localeCompare(right.title) || left.name.localeCompare(right.name)
  )

function sanitizeSegment(value: string) {
  return value
    .replace(/^GOV\.UK\//, '')
    .replace(/[^\w.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

async function getVisualParameters(page: Page, storyId: string) {
  return page.evaluate(async (currentStoryId: string) => {
    const preview = (
      window as typeof window & {
        __STORYBOOK_PREVIEW__?: {
          storyStoreValue?: {
            fromId?: (id: string) => { parameters?: { visual?: { disable?: boolean } } } | undefined
            loadStory?: (input: { storyId: string }) => Promise<{
              parameters?: { visual?: { disable?: boolean } }
            }>
          }
        }
      }
    ).__STORYBOOK_PREVIEW__

    const store = preview?.storyStoreValue

    if (store?.fromId) {
      return store.fromId(currentStoryId)?.parameters?.visual ?? null
    }

    if (store?.loadStory) {
      const story = await store.loadStory({ storyId: currentStoryId })
      return story?.parameters?.visual ?? null
    }

    return null
  }, storyId)
}

for (const story of componentStories) {
  test(`${story.title} / ${story.name}`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }
      `,
    })

    await page.waitForFunction(() => {
      const root = document.querySelector('#storybook-root')
      return Boolean(root && root.childElementCount > 0)
    })

    await page.evaluate(async () => {
      if ('fonts' in document) {
        await document.fonts.ready
      }
    })

    const visual = await getVisualParameters(page, story.id)
    test.skip(visual?.disable === true, 'Story opted out of visual regression testing.')

    const directory = sanitizeSegment(story.title)
    const fileName = `${sanitizeSegment(story.name)}.png`

    await expect(page).toHaveScreenshot(`${directory}/${fileName}`, {
      animations: 'disabled',
      caret: 'hide',
    })
  })
}
