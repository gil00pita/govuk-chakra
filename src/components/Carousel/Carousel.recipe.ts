import { defineSlotRecipe } from '@chakra-ui/react'
import { carouselAnatomy } from '@ark-ui/react/carousel'
import { govukFontSizes } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const carouselColorPalettes = [
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

const carouselColorPaletteVariants = {
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

function createCarouselCompoundVariants(colorPalette: (typeof carouselColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const solidBaseForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const solidDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        prevTrigger: {
          border: '0 solid transparent',
          bg: {
            base: `${paletteToken}.50`,
            _dark: `${paletteToken}.900`,
          },
          color: {
            base: subtleBaseForeground,
            _dark: subtleDarkForeground,
          },
          _hover: {
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
        nextTrigger: {
          border: '0 solid transparent',
          bg: {
            base: `${paletteToken}.50`,
            _dark: `${paletteToken}.900`,
          },
          color: {
            base: subtleBaseForeground,
            _dark: subtleDarkForeground,
          },
          _hover: {
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
        autoplayTrigger: {
          border: '0 solid transparent',
          _hover: {
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
        indicator: {
          bg: {
            base: `${paletteToken}.100`,
            _dark: `${paletteToken}.800`,
          },
          _current: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
        },
      },
    },
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        prevTrigger: {
          bg: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.400`,
          },
          border: '0',
          color: {
            base: solidBaseForeground,
            _dark: solidDarkForeground,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.700`,
              _dark: `${paletteToken}.300`,
            },
          },
        },
        nextTrigger: {
          bg: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.400`,
          },
          border: '0',
          color: {
            base: solidBaseForeground,
            _dark: solidDarkForeground,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.700`,
              _dark: `${paletteToken}.300`,
            },
          },
        },
        autoplayTrigger: {
          bg: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.400`,
          },
          color: {
            base: solidBaseForeground,
            _dark: solidDarkForeground,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.700`,
              _dark: `${paletteToken}.300`,
            },
          },
        },
        indicator: {
          bg: {
            base: `${paletteToken}.200`,
            _dark: `${paletteToken}.700`,
          },
          _current: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        prevTrigger: {
          borderColor: `border.input`,
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
          },
        },
        nextTrigger: {
          borderColor: `border.input`,
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
          },
        },
        autoplayTrigger: {
          borderColor: `border.input`,
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
          },
        },
        indicator: {
          borderColor: {
            base: `${paletteToken}.300`,
            _dark: `${paletteToken}.600`,
          },
          _current: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            borderColor: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
        },
      },
    },
    {
      variant: 'plain' as const,
      colorPalette,
      css: {
        prevTrigger: {
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
        },
        nextTrigger: {
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
        },
        autoplayTrigger: {
          color: {
            base: `${paletteToken}.700`,
            _dark: `${paletteToken}.200`,
          },
        },
        indicator: {
          bg: {
            base: `${paletteToken}.200`,
            _dark: `${paletteToken}.700`,
          },
          _current: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
          },
        },
      },
    },
  ]
}

const carouselCompoundVariants = carouselColorPalettes.flatMap(createCarouselCompoundVariants)

const carouselRecipe = defineSlotRecipe({
  className: 'govuk-carousel',
  slots: carouselAnatomy.keys(),
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      gap: '3',
      _horizontal: {
        flexDirection: 'column',
      },
      _vertical: {
        flexDirection: 'row',
      },
    },
    itemGroup: {
      width: 'full',
      overflow: 'hidden',
      borderRadius: '0',
    },
    item: {
      _horizontal: {
        width: '100%',
      },
      _vertical: {
        height: '100%',
      },
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      _horizontal: {
        flexDirection: 'row',
        width: '100%',
      },
      _vertical: {
        flexDirection: 'column',
        height: '100%',
      },
    },
    prevTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'transparent',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      _icon: {
        boxSize: '4',
      },
    },
    nextTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'transparent',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      _icon: {
        boxSize: '4',
      },
    },
    autoplayTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'transparent',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      _icon: {
        boxSize: '4',
      },
    },
    indicatorGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3',
      _horizontal: {
        flexDirection: 'row',
      },
      _vertical: {
        flexDirection: 'column',
      },
    },
    indicator: {
      width: '10px',
      height: '10px',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'transparent',
      bg: 'bg.muted',
      cursor: 'pointer',
      _current: {
        bg: 'fg',
      },
    },
    progressText: {
      color: 'fg.muted',
      fontFamily: 'body',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
      minW: '4ch',
      textAlign: 'center',
    },
    autoplayIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    variant: {
      subtle: {},
      solid: {},
      outline: {},
      plain: {
        prevTrigger: {
          borderWidth: '0',
        },
        nextTrigger: {
          borderWidth: '0',
        },
        autoplayTrigger: {
          borderWidth: '0',
        },
        indicator: {
          borderWidth: '0',
        },
      },
    },
    colorPalette: carouselColorPaletteVariants,
    size: {
      sm: {
        prevTrigger: {
          boxSize: '32px',
        },
        nextTrigger: {
          boxSize: '32px',
        },
        autoplayTrigger: {
          boxSize: '32px',
        },
        indicator: {
          width: '8px',
          height: '8px',
        },
        progressText: {
          fontSize: govukFontSizes[14],
          lineHeight: '1.25',
        },
      },
      md: {
        prevTrigger: {
          boxSize: '36px',
        },
        nextTrigger: {
          boxSize: '36px',
        },
        autoplayTrigger: {
          boxSize: '36px',
        },
      },
      lg: {
        prevTrigger: {
          boxSize: '44px',
        },
        nextTrigger: {
          boxSize: '44px',
        },
        autoplayTrigger: {
          boxSize: '44px',
        },
        indicator: {
          width: '12px',
          height: '12px',
        },
        progressText: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
    },
  },
  compoundVariants: carouselCompoundVariants,
  defaultVariants: {
    colorPalette: 'teal',
    size: 'md',
    variant: 'subtle',
  },
})

export default carouselRecipe
