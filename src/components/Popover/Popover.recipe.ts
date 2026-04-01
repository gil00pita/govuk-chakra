import { defineSlotRecipe } from '@chakra-ui/react'
import { popoverAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]
  return {
    fontFamily: 'body',
    fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
    lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
  }
}

const popoverRecipe = defineSlotRecipe({
  className: 'govuk-popover',
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ...getTextStyles(16),
      '--popover-bg': 'colors.bg.panel',
      bg: 'var(--popover-bg)',
      boxShadow: 'lg',
      '--popover-size': 'sizes.xs',
      '--popover-mobile-size': 'calc(100dvw - 1rem)',
      width: {
        base: 'min(var(--popover-mobile-size), var(--popover-size))',
        sm: 'var(--popover-size)',
      },
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      '--popover-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--popover-z-index) + var(--layer-index, 0))',
      outline: '0',
      transformOrigin: 'var(--transform-origin)',
      maxHeight: 'var(--available-height)',
      _open: { animationStyle: 'scale-fade-in', animationDuration: 'fast' },
      _closed: { animationStyle: 'scale-fade-out', animationDuration: 'faster' },
    },
    title: {
      ...getTextStyles(19),
      fontWeight: '700',
      color: 'fg',
    },
    header: {
      paddingInline: 'var(--popover-padding)',
      paddingTop: 'var(--popover-padding)',
    },
    body: {
      padding: 'var(--popover-padding)',
      flex: '1',
      color: 'fg',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      paddingInline: 'var(--popover-padding)',
      paddingBottom: 'var(--popover-padding)',
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--popover-bg)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderColor: 'border.input',
    },
  },
  variants: {
    size: {
      xs: { content: { '--popover-padding': pxToRem(12) } },
      sm: { content: { '--popover-padding': pxToRem(16) } },
      md: { content: { '--popover-padding': pxToRem(20) } },
      lg: { content: { '--popover-padding': pxToRem(24) } },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default popoverRecipe
