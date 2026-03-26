import { createShikiAdapter } from '@chakra-ui/react'
import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki'

export type ShikiHighlighter = HighlighterGeneric<BundledLanguage, BundledTheme>

export interface GovUkShikiAdapterOptions {
  languages?: BundledLanguage[]
  themes?: BundledTheme[]
  theme?: string | Record<string, string>
}

const defaultShikiLanguages: BundledLanguage[] = [
  'bash',
  'html',
  'javascript',
  'json',
  'python',
  'tsx',
  'typescript',
]
const defaultShikiThemes: BundledTheme[] = ['github-light', 'github-dark']
const defaultShikiTheme = {
  light: 'github-light',
  dark: 'github-dark',
} satisfies Record<string, string>

export const shikiLanguages = defaultShikiLanguages
export const shikiThemes = defaultShikiThemes

export const shikiAdapter = createShikiAdapter<ShikiHighlighter>({
  async load() {
    const { createHighlighter } = await import('shiki')

    return createHighlighter({
      langs: defaultShikiLanguages,
      themes: defaultShikiThemes,
    })
  },
  theme: defaultShikiTheme,
})

export function createGovUkShikiAdapter({
  languages = defaultShikiLanguages,
  themes = defaultShikiThemes,
  theme = defaultShikiTheme,
}: GovUkShikiAdapterOptions = {}) {
  return createShikiAdapter<ShikiHighlighter>({
    async load() {
      const { createHighlighter } = await import('shiki')

      return createHighlighter({
        langs: languages,
        themes,
      })
    },
    theme,
  })
}
