import { defineRecipe } from '@chakra-ui/react'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const highlightColorPalettes = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const

function createHighlightCompoundVariants(colorPalette: (typeof highlightColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const solidBaseForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const solidDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')
  const outlineBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const outlineDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        bg: {
          base: `${paletteToken}.100`,
          _dark: `${paletteToken}.800`,
        },
        color: {
          base: subtleBaseForeground,
          _dark: subtleDarkForeground,
        },
      },
    },
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        bg: {
          base: `${paletteToken}.600`,
          _dark: `${paletteToken}.400`,
        },
        color: {
          base: solidBaseForeground,
          _dark: solidDarkForeground,
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        bg: 'transparent',
        color: {
          base: outlineBaseForeground,
          _dark: outlineDarkForeground,
        },
        boxShadow: `inset 0 0 0 1px var(--govuk-colors-${paletteToken}-400)`,
      },
    },
    {
      variant: 'plain' as const,
      colorPalette,
      css: {
        bg: 'transparent',
        color: {
          base: `${paletteToken}.700`,
          _dark: `${paletteToken}.200`,
        },
      },
    },
  ]
}

const highlightCompoundVariants = highlightColorPalettes.flatMap(createHighlightCompoundVariants)

const highlightRecipe = defineRecipe({
  base: {
    px: '1',
    py: '0.5',
    borderRadius: 'l1',
  },
  variants: {
    variant: {
      subtle: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      },
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      outline: {
        bg: 'transparent',
        color: 'colorPalette.fg',
        boxShadow: 'inset 0 0 0 1px var(--govuk-colors-color-palette-border)',
      },
      plain: {
        bg: 'transparent',
        color: 'colorPalette.fg',
      },
    },
  },
  compoundVariants: highlightCompoundVariants,
  defaultVariants: {
    variant: 'subtle',
    colorPalette: 'blue',
  },
})

export default highlightRecipe
