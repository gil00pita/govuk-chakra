import { defineSlotRecipe } from '@chakra-ui/react'
import { stepsAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const stepsColorPalettes = [
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

const stepsColorPaletteVariants = {
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

function createStepsCompoundVariants(colorPalette: (typeof stepsColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const solidBaseForeground = getAccessiblePaletteForeground(colorPalette, '900')
  const solidDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')
  const outlineBaseForeground = getAccessiblePaletteForeground(colorPalette, '900')
  const outlineDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')

  return [
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        indicator: {
          border: 0,
          _current: {
            bg: {
              base: `${paletteToken}.500`,
              _dark: `${paletteToken}.400`,
            },
            borderColor: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
          },
          _complete: {
            bg: {
              base: `${paletteToken}.900`,
              _dark: `${paletteToken}.400`,
            },
            borderColor: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
          },
        },
        separator: {
          _complete: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
        },
        trigger: {
          _current: {
            '& .govuk-steps__title': {
              color: {
                base: `${paletteToken}.500`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
        },
      },
    },
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        indicator: {
          border: 0,
          _current: {
            border: 0,
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
          },
          _complete: {
            bg: {
              base: `green.100`,
              _dark: `green.900`,
            },
            color: {
              base: 'green.900',
              _dark: 'green.100',
            },
          },
        },
        separator: {
          _complete: {
            bg: {
              base: `${paletteToken}.200`,
              _dark: `${paletteToken}.700`,
            },
          },
        },
        trigger: {
          _current: {
            '& .govuk-steps__title': {
              color: {
                base: `${paletteToken}.500`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        indicator: {
          _current: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.950`,
            },
            borderColor: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
          _complete: {
            bg: {
              base: `${paletteToken}.900`,
              _dark: `${paletteToken}.400`,
            },
            borderColor: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: outlineBaseForeground,
              _dark: outlineDarkForeground,
            },
          },
        },
        separator: {
          _complete: {
            bg: {
              base: `${paletteToken}.300`,
              _dark: `${paletteToken}.600`,
            },
          },
        },
        trigger: {
          _current: {
            '& .govuk-steps__title': {
              color: {
                base: `${paletteToken}.500`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
        },
      },
    },
  ]
}

const stepsCompoundVariants = stepsColorPalettes.flatMap(createStepsCompoundVariants)

const stepsRecipe = defineSlotRecipe({
  className: 'govuk-steps',
  slots: stepsAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      width: 'full',
      fontFamily: 'body',
      color: 'fg',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      '--steps-gutter': '8px',
      '--steps-thickness': '2px',
    },
    title: {
      fontWeight: 'bold',
      color: 'fg',
      fontFamily: 'body',
    },
    description: {
      color: 'fg.muted',
      fontFamily: 'body',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
    },
    separator: {
      bg: 'border.input',
      flex: '1',
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
      borderRadius: '0',
      fontWeight: 'bold',
      width: 'var(--steps-size)',
      height: 'var(--steps-size)',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      _icon: {
        flexShrink: '0',
        width: 'var(--steps-icon-size)',
        height: 'var(--steps-icon-size)',
      },
    },
    item: {
      position: 'relative',
      display: 'flex',
      gap: '3',
      flex: '1 0 0',
      '&:last-of-type': {
        flex: 'initial',
        '& [data-part=separator]': {
          display: 'none',
        },
      },
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      gap: '3',
      textAlign: 'start',
      focusVisibleRing: 'none',
      borderRadius: '0',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
    },
    content: {
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
    },
    nextTrigger: {
      fontFamily: 'body',
    },
    prevTrigger: {
      fontFamily: 'body',
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: 'row',
          height: '100%',
        },
        list: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        separator: {
          position: 'absolute',
          width: 'var(--steps-thickness)',
          height: '100%',
          maxHeight: 'calc(100% - var(--steps-size) - var(--steps-gutter) * 2)',
          top: 'calc(var(--steps-size) + var(--steps-gutter))',
          insetStart: 'calc(var(--steps-size) / 2 - 1px)',
        },
        item: {
          alignItems: 'flex-start',
        },
      },
      horizontal: {
        root: {
          flexDirection: 'column',
          width: '100%',
        },
        list: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        separator: {
          width: '100%',
          height: 'var(--steps-thickness)',
          marginX: 'var(--steps-gutter)',
        },
        item: {
          alignItems: 'center',
        },
      },
    },
    variant: {
      solid: {
        indicator: {
          _incomplete: {
            borderWidth: 'var(--steps-thickness)',
            borderColor: 'border.input',
            bg: 'bg.muted',
            color: 'fg',
          },
        },
      },
      outline: {
        indicator: {
          _incomplete: {
            bg: 'transparent',
            borderWidth: 'var(--steps-thickness)',
            borderColor: 'border.input',
            color: 'fg',
          },
        },
      },
      subtle: {
        indicator: {
          _incomplete: {
            bg: 'bg.muted',
            borderColor: 'transparent',
            color: 'fg',
          },
        },
      },
    },
    colorPalette: stepsColorPaletteVariants,
    size: {
      xs: {
        root: {
          gap: '10px',
        },
        list: {
          '--steps-size': '24px',
          '--steps-icon-size': '14px',
        },
        title: {
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
      },
      sm: {
        root: {
          gap: '12px',
        },
        list: {
          '--steps-size': '32px',
          '--steps-icon-size': '16px',
        },
        title: {
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
      },
      md: {
        root: {
          gap: '16px',
        },
        list: {
          '--steps-size': '40px',
          '--steps-icon-size': '16px',
        },
        title: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
      lg: {
        root: {
          gap: '24px',
        },
        list: {
          '--steps-size': '44px',
          '--steps-icon-size': '20px',
        },
        title: {
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
        },
      },
    },
  },
  compoundVariants: stepsCompoundVariants,
  defaultVariants: {
    colorPalette: 'blue',
    size: 'md',
    variant: 'solid',
    orientation: 'horizontal',
  },
})

export default stepsRecipe
