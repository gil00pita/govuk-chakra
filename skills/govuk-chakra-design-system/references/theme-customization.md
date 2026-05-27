# Theme Customization

Use this reference when a task asks to change colours, typography, spacing, breakpoints, recipes, semantic tokens, or app provider setup.

## Source Exports

- `govUKTheme` from `govuk-chakra/theme` is the Chakra v3 config object.
- `govUKThemeSystem` from `govuk-chakra/theme` is the prebuilt Chakra system.
- `GOVUKProvider` from `govuk-chakra` accepts a Chakra provider `value`, so pass a custom system there.

## Token Override Pattern

Use Chakra v3's `defineConfig` and `createSystem`. Start from `govUKTheme`, override only the needed branches, and preserve existing tokens, semantic tokens, recipes, slot recipes, breakpoints, and global CSS unless the user explicitly asks to replace them.

```tsx
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { govUKTheme } from 'govuk-chakra/theme'

const customConfig = defineConfig({
  ...govUKTheme,
  theme: {
    ...govUKTheme.theme,
    tokens: {
      ...govUKTheme.theme.tokens,
      colors: {
        ...govUKTheme.theme.tokens.colors,
        primary: {
          50: { value: '#F7F2F6' },
          100: { value: '#E5D5E1' },
          200: { value: '#C4A9C0' },
          300: { value: '#9E7A98' },
          400: { value: '#77516F' },
          500: { value: '#532A45' },
          600: { value: '#47223B' },
          700: { value: '#391A2E' },
          800: { value: '#2A1221' },
          900: { value: '#1C0B15' },
          950: { value: '#12060D' },
        },
      },
    },
    semanticTokens: {
      ...govUKTheme.theme.semanticTokens,
      colors: {
        ...govUKTheme.theme.semanticTokens.colors,
        primary: {
          value: {
            base: '{colors.primary.600}',
            _dark: '{colors.primary.300}',
          },
        },
        'fg.link': {
          value: {
            base: '{colors.primary.600}',
            _dark: '{colors.primary.200}',
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
```

## Provider Pattern

Pass the custom system through `GOVUKProvider`.

```tsx
import { GOVUKProvider } from 'govuk-chakra'
import { system } from './theme'

export function AppRoot() {
  return (
    <GOVUKProvider value={system}>
      <App />
    </GOVUKProvider>
  )
}
```

## Guidance

- Prefer overriding semantic tokens such as `primary`, `fg.link`, `link`, `focus`, `danger`, `success`, and `info` when the user's request is brand-level.
- Override raw `tokens.colors` when adding or replacing a palette.
- Keep GOV.UK focus treatment accessible; do not weaken contrast for focus, text, links, errors, or warnings.
- Keep `cssVarsPrefix: 'govuk'` unless the user explicitly asks for different CSS variable names.
- If changing component-specific styling, prefer extending the existing recipe or slot recipe instead of restyling every usage.
- Use `govUKThemeSystem` directly only when no customization is needed.
