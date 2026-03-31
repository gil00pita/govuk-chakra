import { defineRecipe } from '@chakra-ui/react'

import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const skeletonColorPalettes = [
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

const skeletonColorPaletteVariants = {
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

function createSkeletonCompoundVariants(colorPalette: (typeof skeletonColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const pulseBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const pulseDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const shineBaseForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const shineDarkForeground = getAccessiblePaletteForeground(colorPalette, '900')
  const noneBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const noneDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')

  return [
    {
      variant: 'pulse' as const,
      colorPalette,
      css: {
        background: {
          base: `${paletteToken}.100`,
          _dark: `${paletteToken}.800`,
        },
        borderColor: {
          base: `${paletteToken}.200`,
          _dark: `${paletteToken}.700`,
        },
        color: {
          base: pulseBaseForeground,
          _dark: pulseDarkForeground,
        },
      },
    },
    {
      variant: 'shine' as const,
      colorPalette,
      css: {
        '--start-color': {
          base: `{colors.${paletteToken}.50}`,
          _dark: `{colors.${paletteToken}.900}`,
        },
        '--end-color': {
          base: `{colors.${paletteToken}.200}`,
          _dark: `{colors.${paletteToken}.700}`,
        },
        color: {
          base: shineBaseForeground,
          _dark: shineDarkForeground,
        },
      },
    },
    {
      variant: 'none' as const,
      colorPalette,
      css: {
        background: {
          base: `${paletteToken}.100`,
          _dark: `${paletteToken}.800`,
        },
        borderColor: {
          base: `${paletteToken}.200`,
          _dark: `${paletteToken}.700`,
        },
        color: {
          base: noneBaseForeground,
          _dark: noneDarkForeground,
        },
      },
    },
  ]
}

const skeletonCompoundVariants = skeletonColorPalettes.flatMap(createSkeletonCompoundVariants)

const skeletonRecipe = defineRecipe({
  className: 'govuk-skeleton',
  base: {},
  variants: {
    loading: {
      true: {
        borderRadius: 'l2',
        boxShadow: 'none',
        backgroundClip: 'padding-box',
        cursor: 'default',
        color: 'transparent',
        pointerEvents: 'none',
        userSelect: 'none',
        flexShrink: '0',
        '&::before, &::after, *': {
          visibility: 'hidden',
        },
      },
      false: {
        background: 'unset',
        animation: 'fade-in var(--fade-duration, 0.1s) ease-out !important',
      },
    },
    variant: {
      pulse: {
        background: 'bg.emphasized',
        animation: 'pulse',
        animationDuration: 'var(--duration, 1.2s)',
      },
      shine: {
        '--animate-from': '200%',
        '--animate-to': '-200%',
        '--start-color': 'colors.bg.muted',
        '--end-color': 'colors.bg.emphasized',
        backgroundImage:
          'linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))',
        backgroundSize: '400% 100%',
        animation: 'bg-position var(--duration, 5s) ease-in-out infinite',
      },
      none: {
        animation: 'none',
      },
    },
    colorPalette: skeletonColorPaletteVariants,
  },
  compoundVariants: skeletonCompoundVariants,
  defaultVariants: {
    variant: 'pulse',
    loading: true,
    colorPalette: 'gray',
  },
})

export default skeletonRecipe
