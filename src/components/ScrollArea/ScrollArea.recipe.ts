import { defineSlotRecipe } from '@chakra-ui/react'
import { scrollAreaAnatomy } from '@chakra-ui/react/anatomy'

import { pxToRem } from '@/utils'

const scrollAreaRecipe = defineSlotRecipe({
  className: 'govuk-scroll-area',
  slots: scrollAreaAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      '--scrollbar-margin': '0px',
      '--scrollbar-click-area': 'calc(var(--scrollbar-size) + 8px)',
    },
    viewport: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      _focusVisible: {
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'focus',
        outlineOffset: '0',
        boxShadow: `inset 0 0 0 ${pxToRem(2)} {colors.border.input}`,
      },
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    content: {
      minWidth: '100%',
    },
    scrollbar: {
      display: 'flex',
      userSelect: 'none',
      touchAction: 'none',
      colorPalette: 'gray',
      transition: 'opacity 150ms 300ms',
      position: 'relative',
      margin: 'var(--scrollbar-margin)',
      bg: 'bg.muted',
      borderColor: 'border.input',
      borderStyle: 'solid',
      '--thumb-bg': '{colors.border.input}',
      '&:not([data-overflow-x], [data-overflow-y])': {
        display: 'none',
      },
      '&:is(:hover, :active)': {
        '--thumb-bg': '{colors.govuk.blue}',
      },
      _before: {
        content: '""',
        position: 'absolute',
      },
      _vertical: {
        width: 'var(--scrollbar-size)',
        flexDirection: 'column',
        borderLeftWidth: pxToRem(1),
        '&::before': {
          width: 'var(--scrollbar-click-area)',
          height: '100%',
          insetInlineStart: 'calc((var(--scrollbar-click-area) - var(--scrollbar-size)) / -2)',
        },
      },
      _horizontal: {
        height: 'var(--scrollbar-size)',
        flexDirection: 'row',
        borderTopWidth: pxToRem(1),
        '&::before': {
          height: 'var(--scrollbar-click-area)',
          width: '100%',
          top: 'calc((var(--scrollbar-click-area) - var(--scrollbar-size)) / -2)',
        },
      },
    },
    thumb: {
      bg: 'var(--thumb-bg)',
      minHeight: pxToRem(24),
      minWidth: pxToRem(24),
      transition: 'background-color 150ms',
      _vertical: {
        width: 'full',
      },
      _horizontal: {
        height: 'full',
      },
    },
    corner: {
      bg: 'bg.muted',
      borderTopWidth: pxToRem(1),
      borderLeftWidth: pxToRem(1),
      borderColor: 'border.input',
    },
  },
  variants: {
    variant: {
      hover: {
        scrollbar: {
          opacity: '0',
          '&[data-hover], &[data-scrolling]': {
            opacity: '1',
            transitionDuration: 'faster',
            transitionDelay: '0ms',
          },
        },
      },
      always: {
        scrollbar: {
          opacity: '1',
        },
      },
    },
    size: {
      sm: {
        root: {
          '--scrollbar-size': pxToRem(8),
        },
      },
      md: {
        root: {
          '--scrollbar-size': pxToRem(12),
        },
      },
      lg: {
        root: {
          '--scrollbar-size': pxToRem(16),
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'always',
  },
})

export default scrollAreaRecipe
