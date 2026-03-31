import { defineSlotRecipe } from '@chakra-ui/react'
import { avatarAnatomy } from '@ark-ui/react/avatar'
import { govukFontSizes } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const avatarColorPalettes = [
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

const avatarColorPaletteVariants = {
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

function createAvatarCompoundVariants(colorPalette: (typeof avatarColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const solidForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const outlineForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const subtleForegroundDark = getAccessiblePaletteForeground(colorPalette, '900')
  const solidForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')
  const outlineForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        root: {
          bg: `${paletteToken}.100`,
          color: subtleForeground,
          _dark: {
            bg: `${paletteToken}.950`,
            color: subtleForegroundDark,
          },
        },
      },
    },
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        root: {
          bg: `${paletteToken}.500`,
          color: solidForeground,
          _dark: {
            bg: `${paletteToken}.700`,
            color: solidForegroundDark,
          },
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        root: {
          bg: 'transparent',
          color: outlineForeground,
          border: `2px solid {colors.${paletteToken}.300}`,
          _dark: {
            bg: 'transparent',
            border: `2px solid {colors.${paletteToken}.950}`,
            color: outlineForegroundDark,
          },
        },
      },
    },
  ]
}

const avatarCompoundVariants = avatarColorPalettes.flatMap(createAvatarCompoundVariants)

const avatarRecipe = defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  className: 'govuk-avatar',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      verticalAlign: 'top',
      flexShrink: '0',
      userSelect: 'none',
      width: 'var(--avatar-size)',
      height: 'var(--avatar-size)',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
      bg: 'bg.muted',
      color: 'fg',
      fontFamily: 'body',
      fontWeight: 'bold',
      overflow: 'hidden',
      '&[data-group-item]': {
        borderWidth: '2px',
        borderColor: 'bg',
      },
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--avatar-radius)',
    },
    fallback: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      lineHeight: '1',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 'var(--avatar-font-size)',
      fontFamily: 'body',
      borderRadius: 'var(--avatar-radius)',
      bg: 'transparent',
      color: 'inherit',
    },
  },
  variants: {
    size: {
      full: {
        root: {
          '--avatar-size': '100%',
          '--avatar-font-size': '100%',
        },
      },
      '2xs': {
        root: {
          '--avatar-font-size': govukFontSizes[14],
          '--avatar-size': '24px',
        },
      },
      xs: {
        root: {
          '--avatar-font-size': govukFontSizes[16],
          '--avatar-size': '32px',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': govukFontSizes[16],
          '--avatar-size': '36px',
        },
      },
      md: {
        root: {
          '--avatar-font-size': govukFontSizes[19],
          '--avatar-size': '40px',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': govukFontSizes[19],
          '--avatar-size': '44px',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': govukFontSizes[24],
          '--avatar-size': '48px',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': govukFontSizes[24],
          '--avatar-size': '64px',
        },
      },
    },
    variant: {
      subtle: {
        root: {
          bg: 'colorPalette.muted',
          color: 'colorPalette.fg',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.solid',
          color: 'colorPalette.contrast',
        },
      },
      outline: {
        root: {
          bg: 'transparent',
          color: 'colorPalette.fg',
          borderColor: 'colorPalette.muted',
          borderWidth: '2px',
        },
      },
    },
    colorPalette: avatarColorPaletteVariants,
    shape: {
      square: {
        root: { '--avatar-radius': '0' },
      },
      rounded: {
        root: { '--avatar-radius': '8px' },
      },
      full: {
        root: { '--avatar-radius': '9999px' },
      },
    },
    borderless: {
      true: {
        root: {
          borderWidth: '0',
          '&[data-group-item]': {
            borderWidth: '0',
          },
        },
      },
    },
  },
  compoundVariants: avatarCompoundVariants,
  defaultVariants: {
    colorPalette: 'gray',
    size: 'md',
    shape: 'full',
    variant: 'subtle',
  },
})

export default avatarRecipe
