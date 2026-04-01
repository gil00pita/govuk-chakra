import { defineSlotRecipe } from '@chakra-ui/react'
import { tooltipAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]
  return {
    fontFamily: 'body',
    fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
    lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
  }
}

const tooltipRecipe = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  className: 'govuk-tooltip',
  base: {
    content: {
      '--tooltip-bg': 'colors.fg',
      bg: 'var(--tooltip-bg)',
      color: 'fg.inverted',
      px: pxToRem(12),
      py: pxToRem(6),
      borderRadius: '0',
      ...getTextStyles(16),
      fontWeight: '700',
      boxShadow: 'md',
      maxW: pxToRem(320),
      zIndex: 'tooltip',
      transformOrigin: 'var(--transform-origin)',
      borderWidth: '1px',
      borderColor: 'var(--tooltip-bg)',
      _open: { animationStyle: 'scale-fade-in', animationDuration: 'fast' },
      _closed: { animationStyle: 'scale-fade-out', animationDuration: 'fast' },
    },
    arrow: {
      '--arrow-size': 'sizes.2',
      '--arrow-background': 'var(--tooltip-bg)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderColor: 'var(--tooltip-bg)',
    },
  },
})

export default tooltipRecipe
