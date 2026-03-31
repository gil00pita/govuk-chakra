import { defineSlotRecipe } from '@chakra-ui/react'
import { emptyStateAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes, pxToRem } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const emptyStateColorPalettes = [
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

const emptyStateColorPaletteVariants = {
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

function createEmptyStateCompoundVariants(colorPalette: (typeof emptyStateColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const solidForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const outlineForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const plainForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const subtleForegroundDark = getAccessiblePaletteForeground(colorPalette, '900')
  const solidForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')
  const outlineForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')
  const plainForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        root: {
          borderColor: {
            base: `${paletteToken}.200`,
            _dark: `${paletteToken}.800`,
          },
          bg: {
            base: `${paletteToken}.50`,
            _dark: `${paletteToken}.950`,
          },
        },
        indicator: {
          bg: 'transparent',
          color: {
            base: subtleForeground,
            _dark: subtleForegroundDark,
          },
          border: 0,
        },
        title: {
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
        },
      },
    },
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        root: {
          borderColor: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.700`,
          },
          bg: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.700`,
          },
        },
        indicator: {
          bg: 'transparent',
          color: {
            base: solidForeground,
            _dark: solidForegroundDark,
          },
          border: 0,
        },
        title: {
          color: {
            base: solidForeground,
            _dark: solidForegroundDark,
          },
        },
        description: {
          color: {
            base: solidForeground,
            _dark: solidForegroundDark,
          },
          opacity: '0.85',
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        root: {
          borderColor: {
            base: `${paletteToken}.300`,
            _dark: `${paletteToken}.800`,
          },
          bg: 'bg',
        },
        indicator: {
          bg: 'transparent',
          color: {
            base: outlineForeground,
            _dark: outlineForegroundDark,
          },
          border: 0,
        },
        title: {
          color: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.300`,
          },
        },
      },
    },
    {
      variant: 'plain' as const,
      colorPalette,
      css: {
        root: {
          borderColor: 'transparent',
          bg: 'transparent',
        },
        indicator: {
          bg: 'transparent',
          color: {
            base: plainForeground,
            _dark: plainForegroundDark,
          },
          border: 0,
        },
        title: {
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
        },
      },
    },
  ]
}

const emptyStateCompoundVariants = emptyStateColorPalettes.flatMap(createEmptyStateCompoundVariants)

const emptyStateRecipe = defineSlotRecipe({
  slots: emptyStateAnatomy.keys(),
  className: 'govuk-empty-state',
  base: {
    root: {
      width: 'full',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'bg.panel',
      color: 'fg',
      fontFamily: 'body',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: pxToRem(8),
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'var(--empty-state-indicator-size)',
      height: 'var(--empty-state-indicator-size)',
      bg: 'bg.muted',
      color: 'fg',
      fontFamily: 'body',
      fontWeight: 'bold',
      _icon: {
        boxSize: 'calc(var(--empty-state-indicator-size) * 0.6)',
      },
    },
    title: {
      fontWeight: 'bold',
      fontFamily: 'body',
      color: 'fg',
    },
    description: {
      color: 'fg.muted',
      fontFamily: 'body',
      maxW: '36rem',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          px: '16px',
          py: '24px',
        },
        title: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
        description: {
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
        content: {
          gap: pxToRem(8),
        },
        indicator: {
          '--empty-state-indicator-size': pxToRem(48),
        },
      },
      md: {
        root: {
          px: '24px',
          py: '32px',
        },
        title: {
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
        },
        description: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
        content: {
          gap: pxToRem(10),
        },
        indicator: {
          '--empty-state-indicator-size': pxToRem(56),
        },
      },
      lg: {
        root: {
          px: '32px',
          py: '40px',
        },
        title: {
          fontSize: govukFontSizes[27],
          lineHeight: '1.1111111111',
        },
        description: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
        content: {
          gap: pxToRem(15),
        },
        indicator: {
          '--empty-state-indicator-size': pxToRem(80),
        },
      },
    },
    variant: {
      subtle: {},
      solid: {},
      outline: {},
      plain: {},
    },
    colorPalette: emptyStateColorPaletteVariants,
  },
  compoundVariants: emptyStateCompoundVariants,
  defaultVariants: {
    colorPalette: 'gray',
    size: 'md',
    variant: 'subtle',
  },
})

export default emptyStateRecipe
