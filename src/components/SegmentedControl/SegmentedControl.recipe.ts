import { defineSlotRecipe } from '@chakra-ui/react'
import { segmentGroupAnatomy } from '@chakra-ui/react/anatomy'

import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'
import { govukTypeScale, pxToRem } from '@/utils'

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

const segmentedControlRecipe = defineSlotRecipe({
  className: 'govuk-segmented-control',
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      '--segment-radius': '0',
      '--segment-indicator-shadow': 'none',
      display: 'inline-flex',
      minW: 'max-content',
      textAlign: 'center',
      position: 'relative',
      isolation: 'isolate',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      border: '2px solid {colors.border.input}',
      bg: 'bg.muted',
      _vertical: {
        flexDirection: 'column',
      },
    },
    item: {
      ...getTextStyles(16),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      position: 'relative',
      color: 'fg',
      borderRadius: 'var(--segment-radius)',
      fontWeight: '700',
      transition: 'color 0.2s',
      _checked: {
        color: 'colorPalette.contrast',
      },
      _disabled: {
        opacity: 1,
        color: 'fg.disabled',
        bg: 'bg.disabled',
      },
      '&:has(input:focus-visible)': getFieldFocusStyles(),
      _before: {
        content: '""',
        position: 'absolute',
        bg: 'border.muted',
        transition: 'opacity 0.2s',
      },
      _horizontal: {
        _before: {
          insetInlineStart: 0,
          insetBlock: pxToRem(8),
          width: '1px',
        },
      },
      _vertical: {
        _before: {
          insetBlockStart: 0,
          insetInline: pxToRem(8),
          height: '1px',
        },
      },
      '& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type': {
        _before: {
          opacity: '0',
        },
      },
      '&[data-state=checked][data-ssr]': {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
    },
    indicator: {
      pos: 'absolute',
      bg: 'colorPalette.solid',
      width: 'var(--width)',
      height: 'var(--height)',
      top: 'var(--top)',
      left: 'var(--left)',
      zIndex: -1,
      borderRadius: 'var(--segment-radius)',
      boxShadow: 'none',
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          ...getTextStyles(16),
          px: pxToRem(8),
          gap: pxToRem(4),
          height: pxToRem(32),
        },
      },
      sm: {
        item: {
          ...getTextStyles(16),
          px: pxToRem(12),
          gap: pxToRem(8),
          height: pxToRem(36),
        },
      },
      md: {
        item: {
          ...getTextStyles(19),
          px: pxToRem(12),
          gap: pxToRem(8),
          height: pxToRem(40),
        },
      },
      lg: {
        item: {
          ...getTextStyles(24),
          px: pxToRem(16),
          gap: pxToRem(8),
          height: pxToRem(48),
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default segmentedControlRecipe
