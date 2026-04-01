import { defineSlotRecipe } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]
  return {
    fontFamily: 'body',
    fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
    lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
  }
}

const menuRecipe = defineSlotRecipe({
  className: 'govuk-menu',
  slots: menuAnatomy.keys(),
  base: {
    content: {
      outline: 0,
      '--menu-bg': 'colors.bg.panel',
      bg: 'var(--menu-bg)',
      boxShadow: 'lg',
      color: 'fg',
      maxHeight: 'var(--available-height)',
      '--menu-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--menu-z-index) + var(--layer-index, 0))',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      overflow: 'hidden',
      overflowY: 'auto',
      _open: { animationStyle: 'slide-fade-in', animationDuration: 'fast' },
      _closed: { animationStyle: 'slide-fade-out', animationDuration: 'faster' },
    },
    item: {
      ...getTextStyles(16),
      textDecoration: 'none',
      color: 'fg',
      userSelect: 'none',
      width: '100%',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      textAlign: 'start',
      position: 'relative',
      flex: '0 0 auto',
      outline: 0,
      borderRadius: '0',
      _highlighted: {
        bg: 'bg.subtle',
      },
      _focusVisible: getFieldFocusStyles(),
      _disabled: {
        opacity: 1,
        color: 'fg.disabled',
      },
      '&[data-type]': {
        ps: pxToRem(32),
      },
    },
    itemText: {
      flex: '1',
    },
    itemIndicator: {
      position: 'absolute',
      insetStart: pxToRem(8),
      transform: 'translateY(-50%)',
      top: '50%',
    },
    itemGroupLabel: {
      ...getTextStyles(16),
      px: pxToRem(8),
      py: pxToRem(6),
      fontWeight: '700',
      color: 'fg.muted',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
    },
    itemCommand: {
      opacity: '0.8',
      ...getTextStyles(16),
      ms: 'auto',
      ps: pxToRem(16),
      fontFamily: 'body',
      color: 'fg.muted',
    },
    separator: {
      height: '1px',
      bg: 'border.muted',
      my: '1',
      mx: '0',
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--menu-bg)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderColor: 'border.input',
    },
  },
  variants: {
    variant: {
      subtle: {},
      solid: {
        item: {
          _highlighted: {
            bg: 'primary',
            color: 'bg',
          },
        },
      },
    },
    size: {
      sm: {
        content: { minW: pxToRem(160), padding: pxToRem(4), scrollPadding: pxToRem(4) },
        item: { gap: pxToRem(4), py: pxToRem(4), px: pxToRem(6) },
      },
      md: {
        content: { minW: pxToRem(160), padding: pxToRem(6), scrollPadding: pxToRem(6) },
        item: { gap: pxToRem(8), py: pxToRem(6), px: pxToRem(8) },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
})

export default menuRecipe
