import { defineSlotRecipe } from '@chakra-ui/react'
import { hoverCardAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]
  return {
    fontFamily: 'body',
    fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
    lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
  }
}

const hoverCardRecipe = defineSlotRecipe({
  className: 'govuk-hover-card',
  slots: hoverCardAnatomy.keys(),
  base: {
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ...getTextStyles(16),
      '--hovercard-bg': 'colors.bg.panel',
      bg: 'var(--hovercard-bg)',
      boxShadow: 'lg',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      maxWidth: pxToRem(320),
      borderRadius: '0',
      '--hover-card-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--hover-card-z-index) + var(--layer-index, 0))',
      transformOrigin: 'var(--transform-origin)',
      outline: '0',
      _open: { animationStyle: 'slide-fade-in', animationDuration: 'fast' },
      _closed: { animationStyle: 'slide-fade-out', animationDuration: 'faster' },
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--hovercard-bg)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderColor: 'border.input',
    },
  },
  variants: {
    size: {
      xs: { content: { padding: pxToRem(12) } },
      sm: { content: { padding: pxToRem(16) } },
      md: { content: { padding: pxToRem(20) } },
      lg: { content: { padding: pxToRem(24) } },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default hoverCardRecipe
