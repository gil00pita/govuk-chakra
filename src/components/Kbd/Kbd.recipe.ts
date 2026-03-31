import { defineRecipe } from '@chakra-ui/react'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const kbdColorPalettes = [
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

function createKbdCompoundVariants(colorPalette: (typeof kbdColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const raisedBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const raisedDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const outlineBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const outlineDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')
  // const plainBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  // const plainDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')

  return [
    {
      variant: 'raised' as const,
      colorPalette,
      css: {
        bg: {
          base: `${paletteToken}.50`,
          _dark: `${paletteToken}.800`,
        },
        color: {
          base: raisedBaseForeground,
          _dark: raisedDarkForeground,
        },
        borderColor: {
          base: `${paletteToken}.100`,
          _dark: `${paletteToken}.700`,
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        color: {
          base: outlineBaseForeground,
          _dark: outlineDarkForeground,
        },
        borderColor: {
          base: `${paletteToken}.200`,
          _dark: `${paletteToken}.700`,
        },
      },
    },
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
      variant: 'plain' as const,
      colorPalette,
      css: {
        color: {
          base: `${paletteToken}.600`,
          _dark: `${paletteToken}.300`,
        },
      },
    },
  ]
}

const kbdCompoundVariants = kbdColorPalettes.flatMap(createKbdCompoundVariants)

const kbdRecipe = defineRecipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'medium',
    fontFamily: 'mono',
    flexShrink: '0',
    whiteSpace: 'nowrap',
    wordSpacing: '-0.5em',
    userSelect: 'none',
    px: '1',
    borderRadius: 'l2',
  },
  variants: {
    variant: {
      raised: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        borderWidth: '1px',
        borderBottomWidth: '2px',
        borderColor: 'colorPalette.muted',
      },
      outline: {
        bg: 'transparent',
        color: 'colorPalette.fg',
        borderWidth: '1px',
        borderColor: 'colorPalette.muted',
      },
      subtle: {
        bg: 'colorPalette.muted',
        color: 'colorPalette.fg',
        borderColor: 'transparent',
      },
      plain: {
        bg: 'transparent',
        color: 'colorPalette.fg',
        borderColor: 'transparent',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        height: '4.5',
      },
      md: {
        textStyle: 'sm',
        height: '5',
      },
      lg: {
        textStyle: 'md',
        height: '6',
      },
    },
  },
  compoundVariants: kbdCompoundVariants,
  defaultVariants: {
    size: 'md',
    variant: 'raised',
    colorPalette: 'gray',
  },
})

export default kbdRecipe
