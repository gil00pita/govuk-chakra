import { defineSlotRecipe } from '@chakra-ui/react'
import { dialogAnatomy } from '@chakra-ui/react/anatomy'

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

const dialogRecipe = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  className: 'govuk-dialog',
  base: {
    backdrop: {
      bg: 'blackAlpha.600',
      pos: 'fixed',
      left: 0,
      top: 0,
      w: '100dvw',
      h: '100dvh',
      zIndex: 'var(--z-index)',
      _open: { animationName: 'fade-in', animationDuration: 'slow' },
      _closed: { animationName: 'fade-out', animationDuration: 'moderate' },
    },
    positioner: {
      display: 'flex',
      width: '100dvw',
      height: '100dvh',
      position: 'fixed',
      left: 0,
      top: 0,
      '--dialog-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--dialog-z-index) + var(--layer-index, 0))',
      justifyContent: 'center',
      overscrollBehaviorY: 'none',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      outline: 0,
      borderRadius: '0',
      my: 'var(--dialog-margin, var(--dialog-base-margin))',
      '--dialog-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--dialog-z-index) + var(--layer-index, 0))',
      bg: 'bg.panel',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      boxShadow: 'xl',
      _open: { animationDuration: 'moderate' },
      _closed: { animationDuration: 'faster' },
    },
    header: {
      display: 'flex',
      gap: pxToRem(8),
      flex: 0,
      px: pxToRem(24),
      pt: pxToRem(24),
      pb: pxToRem(12),
    },
    body: {
      ...getTextStyles(19),
      flex: '1',
      px: pxToRem(24),
      pt: pxToRem(4),
      pb: pxToRem(24),
      color: 'fg',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: pxToRem(12),
      px: pxToRem(24),
      pt: pxToRem(8),
      pb: pxToRem(16),
    },
    title: {
      ...getTextStyles(27),
      fontWeight: '700',
      color: 'fg',
    },
    description: {
      ...getTextStyles(16),
      color: 'fg.muted',
    },
    closeTrigger: {
      pos: 'absolute',
      top: pxToRem(8),
      insetEnd: pxToRem(8),
      _focusVisible: getFieldFocusStyles(),
    },
  },
  variants: {
    placement: {
      center: {
        positioner: { alignItems: 'center' },
        content: { '--dialog-base-margin': 'auto', mx: 'auto' },
      },
      top: {
        positioner: { alignItems: 'flex-start' },
        content: { '--dialog-base-margin': 'spacing.16', mx: 'auto' },
      },
      bottom: {
        positioner: { alignItems: 'flex-end' },
        content: { '--dialog-base-margin': 'spacing.16', mx: 'auto' },
      },
    },
    scrollBehavior: {
      inside: {
        positioner: { overflow: 'hidden' },
        content: { maxH: 'calc(100% - 7.5rem)' },
        body: { overflow: 'auto' },
      },
      outside: {
        positioner: { overflow: 'auto', pointerEvents: 'auto' },
      },
    },
    size: {
      xs: { content: { maxW: 'sm' } },
      sm: { content: { maxW: 'md' } },
      md: { content: { maxW: 'lg' } },
      lg: { content: { maxW: '2xl' } },
      xl: { content: { maxW: '4xl' } },
      cover: {
        positioner: { padding: '10' },
        content: { width: '100%', height: '100%', '--dialog-margin': '0' },
      },
      full: {
        content: { maxW: '100dvw', minH: '100dvh', '--dialog-margin': '0', borderRadius: '0' },
      },
    },
    motionPreset: {
      scale: {
        content: {
          _open: { animationName: 'scale-in, fade-in' },
          _closed: { animationName: 'scale-out, fade-out' },
        },
      },
      'slide-in-bottom': {
        content: {
          _open: { animationName: 'slide-from-bottom, fade-in' },
          _closed: { animationName: 'slide-to-bottom, fade-out' },
        },
      },
      'slide-in-top': {
        content: {
          _open: { animationName: 'slide-from-top, fade-in' },
          _closed: { animationName: 'slide-to-top, fade-out' },
        },
      },
      'slide-in-left': {
        content: {
          _open: { animationName: 'slide-from-left, fade-in' },
          _closed: { animationName: 'slide-to-left, fade-out' },
        },
      },
      'slide-in-right': {
        content: {
          _open: { animationName: 'slide-from-right, fade-in' },
          _closed: { animationName: 'slide-to-right, fade-out' },
        },
      },
      none: {},
    },
  },
  defaultVariants: {
    size: 'md',
    scrollBehavior: 'outside',
    placement: 'top',
    motionPreset: 'scale',
  },
})

export default dialogRecipe
