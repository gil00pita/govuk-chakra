import { defineRecipe } from '@chakra-ui/react'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const codeColorPalettes = [
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

const codeColorPaletteVariants = {
  gray: {},
  red: {},
  orange: {},
  yellow: {},
  green: {},
  teal: {},
  blue: {},
  cyan: {},
  purple: {},
  pink: {},
} as const

function createCodeCompoundVariants(colorPalette: (typeof codeColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const solidBaseForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const solidDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')
  const surfaceBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const surfaceDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')
  const outlineBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const outlineDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')
  const plainBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const plainDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        bg: {
          base: `${paletteToken}.50`,
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
      variant: 'surface' as const,
      colorPalette,
      css: {
        bg: {
          base: `${paletteToken}.50`,
          _dark: `${paletteToken}.900`,
        },
        color: {
          base: surfaceBaseForeground,
          _dark: surfaceDarkForeground,
        },
        boxShadow: `inset 0 0 0 1px var(--govuk-colors-${paletteToken}-200)`,
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
          base: plainBaseForeground,
          _dark: plainDarkForeground,
        },
      },
    },
  ]
}

const codeCompoundVariants = codeColorPalettes.flatMap(createCodeCompoundVariants)

const codeRecipe = defineRecipe({
  base: {
    fontFamily: 'mono',
    fontWeight: 'medium',
    borderRadius: 'l1',
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      subtle: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      },
      surface: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        boxShadow: 'inset 0 0 0 1px var(--govuk-colors-color-palette-border)',
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
    colorPalette: codeColorPaletteVariants,
  },
  compoundVariants: codeCompoundVariants,
  defaultVariants: {
    variant: 'subtle',
    colorPalette: 'gray',
  },
})

export default codeRecipe
