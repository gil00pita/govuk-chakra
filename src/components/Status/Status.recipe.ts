import { defineSlotRecipe } from '@chakra-ui/react'
import { statusAnatomy } from '@chakra-ui/react/anatomy'
import { govukTypeScale } from '@/utils'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]

  return {
    fontFamily: 'body',
    fontSize: {
      base: scale.small.fontSize,
      md: scale.large.fontSize,
    },
    lineHeight: {
      base: scale.small.lineHeight,
      md: scale.large.lineHeight,
    },
  }
}

const statusRecipe = defineSlotRecipe({
  className: 'govuk-status',
  slots: statusAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2',
      color: 'fg',
      ...getTextStyles(16),
    },
    indicator: {
      width: '0.75em',
      height: '0.75em',
      flexShrink: 0,
      borderRadius: 'full',
      forcedColorAdjust: 'none',
      bg: 'colorPalette.solid',
      boxShadow: 'inset 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent)',
    },
  },
  variants: {
    size: {
      sm: {
        root: getTextStyles(16),
      },
      md: {
        root: getTextStyles(19),
      },
      lg: {
        root: getTextStyles(24),
      },
    },
  },
  defaultVariants: {
    size: 'md',
    colorPalette: 'blue',
  },
})

export default statusRecipe
