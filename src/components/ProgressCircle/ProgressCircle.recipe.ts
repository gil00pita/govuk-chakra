import { defineSlotRecipe } from '@chakra-ui/react'
import { progressAnatomy } from '@chakra-ui/react/anatomy'

import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'
import { govukFontSizes, pxToRem } from '@/utils/px-to-rem'

const progressCircleColorPalettes = [
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

const progressCircleColorPaletteVariants = {
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

function createProgressCircleCompoundVariants(
  colorPalette: (typeof progressCircleColorPalettes)[number]
) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const textForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const textForegroundDark = getAccessiblePaletteForeground(colorPalette, '900')

  return [
    {
      colorPalette,
      css: {
        circleTrack: {
          stroke: {
            base: `${paletteToken}.50`,
            _dark: `${paletteToken}.950`,
          },
        },
        circleRange: {
          stroke: {
            base: `${paletteToken}.600`,
            _dark: `${paletteToken}.400`,
          },
        },
        valueText: {
          color: {
            base: textForeground,
            _dark: textForegroundDark,
          },
        },
        label: {
          color: {
            base: textForeground,
            _dark: textForegroundDark,
          },
        },
      },
    },
  ]
}

const progressCircleCompoundVariants = progressCircleColorPalettes.flatMap(
  createProgressCircleCompoundVariants
)

const progressCircleRecipe = defineSlotRecipe({
  className: 'govuk-progress-circle',
  slots: progressAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      position: 'relative',
      color: 'fg',
      fontFamily: 'body',
    },
    view: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      _indeterminate: {
        animation: 'spin 2s linear infinite',
      },
    },
    label: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'fg',
      fontFamily: 'body',
      fontWeight: '700',
    },
    track: {
      stroke: 'border.input',
    },
    range: {
      stroke: 'currentColor',
      transitionProperty: 'stroke-dashoffset, stroke-dasharray',
      transitionDuration: '0.6s',
      _indeterminate: {
        animation: 'circular-progress 1.5s linear infinite',
      },
    },
    circleTrack: {
      stroke: 'border.muted/30',
    },
    circleRange: {
      stroke: 'currentColor',
      transitionProperty: 'stroke-dashoffset, stroke-dasharray',
      transitionDuration: '0.6s',
      _indeterminate: {
        animation: 'circular-progress 1.5s linear infinite',
      },
    },
    valueText: {
      color: 'fg',
      fontFamily: 'body',
      fontWeight: '500',
      lineHeight: '1',
      letterSpacing: 'tight',
      fontVariantNumeric: 'tabular-nums',
    },
  },
  variants: {
    colorPalette: progressCircleColorPaletteVariants,
    size: {
      xs: {
        circle: {
          '--size': pxToRem(48),
          '--thickness': pxToRem(4),
        },
        valueText: {
          fontSize: govukFontSizes[14],
        },
      },
      sm: {
        circle: {
          '--size': pxToRem(56),
          '--thickness': pxToRem(5),
        },
        valueText: {
          fontSize: govukFontSizes[16],
        },
      },
      md: {
        circle: {
          '--size': pxToRem(64),
          '--thickness': pxToRem(6),
        },
        valueText: {
          fontSize: govukFontSizes[16],
        },
      },
      lg: {
        circle: {
          '--size': pxToRem(72),
          '--thickness': pxToRem(7),
        },
        valueText: {
          fontSize: govukFontSizes[19],
        },
      },
      xl: {
        circle: {
          '--size': pxToRem(80),
          '--thickness': pxToRem(8),
        },
        valueText: {
          fontSize: govukFontSizes[19],
        },
      },
    },
  },
  compoundVariants: progressCircleCompoundVariants,
  defaultVariants: {
    colorPalette: 'gray',
    size: 'md',
  },
})

export default progressCircleRecipe
