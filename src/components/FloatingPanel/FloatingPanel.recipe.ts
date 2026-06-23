import { defineSlotRecipe } from '@chakra-ui/react'
import { floatingPanelAnatomy } from '@chakra-ui/react/anatomy'

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

const floatingPanelRecipe = defineSlotRecipe({
  className: 'govuk-floating-panel',
  slots: floatingPanelAnatomy.keys(),
  base: {
    positioner: {
      '--floating-panel-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--floating-panel-z-index) + var(--layer-index, 0))',
      '&:has([data-topmost])': {
        '--layer-index': '100',
      },
      '&:has([data-behind])': {
        '--layer-index': '-100',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      bg: 'bg.panel',
      color: 'fg',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      boxShadow: 'xl',
      overflow: 'hidden',
      outline: 0,
      position: 'relative',
      minW: pxToRem(260),
      _open: {
        animationName: 'scale-in, fade-in',
        animationDuration: 'moderate',
      },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: pxToRem(8),
      px: pxToRem(12),
      py: pxToRem(8),
      borderBottomWidth: pxToRem(2),
      borderBottomStyle: 'solid',
      borderBottomColor: 'border.input',
      bg: 'bg.subtle',
      flex: 'none',
    },
    dragTrigger: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      gap: pxToRem(8),
      minW: '0',
      cursor: 'move',
      userSelect: 'none',
      _focusVisible: getFieldFocusStyles(),
    },
    title: {
      ...getTextStyles(19),
      flex: '1',
      minW: '0',
      color: 'fg',
      fontWeight: '700',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: pxToRem(4),
      flexShrink: 0,
    },
    stageTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg',
      bg: 'transparent',
      borderRadius: '0',
      borderWidth: '0',
      cursor: 'pointer',
      fontSize: pxToRem(18),
      minW: pxToRem(32),
      h: pxToRem(32),
      p: 0,
      _hover: {
        bg: 'bg.muted',
      },
      _focusVisible: getFieldFocusStyles(),
    },
    closeTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg',
      bg: 'transparent',
      borderRadius: '0',
      borderWidth: '0',
      cursor: 'pointer',
      fontSize: pxToRem(18),
      minW: pxToRem(32),
      h: pxToRem(32),
      p: 0,
      _hover: {
        bg: 'bg.muted',
      },
      _focusVisible: getFieldFocusStyles(),
    },
    body: {
      ...getTextStyles(16),
      flex: '1',
      overflow: 'auto',
      p: pxToRem(16),
      color: 'fg',
      bg: 'bg.panel',
    },
    resizeTrigger: {
      zIndex: '1',
      '--size': pxToRem(10),
      '&[data-axis="n"], &[data-axis="s"]': {
        h: 'var(--size)',
      },
      '&[data-axis="e"], &[data-axis="w"]': {
        w: 'var(--size)',
      },
      '&[data-axis]:is([data-axis="ne"], [data-axis="nw"], [data-axis="se"], [data-axis="sw"])': {
        w: 'var(--size)',
        h: 'var(--size)',
      },
    },
  },
})

export default floatingPanelRecipe
