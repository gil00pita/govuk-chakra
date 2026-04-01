import { defineSlotRecipe } from '@chakra-ui/react'
import { ratingGroupAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'

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

const ratingRecipe = defineSlotRecipe({
  className: 'govuk-rating',
  slots: ratingGroupAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: pxToRem(8),
    },
    label: {
      ...getTextStyles(19),
      color: 'fg',
      fontWeight: '700',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: pxToRem(4),
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      cursor: 'pointer',
      color: 'fg.muted',
      _disabled: {
        cursor: 'not-allowed',
        color: 'fg.disabled',
      },
      _focus: getFieldFocusStyles(),
      _focusVisible: getFieldFocusStyles(),
    },
    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1em',
      height: '1em',
      position: 'relative',
      transition: 'color 0.2s ease',
      '--clip-path': { base: 'inset(0 50% 0 0)', _rtl: 'inset(0 0 0 50%)' },
      _icon: {
        stroke: 'currentColor',
        fill: 'currentColor',
        width: '100%',
        height: '100%',
        display: 'inline-block',
        flexShrink: 0,
        position: 'absolute',
        left: 0,
        top: 0,
      },
      '& [data-bg]': {
        color: { base: 'gray.300', _dark: 'gray.700' },
      },
      '& [data-fg]': {
        color: 'transparent',
      },
      '&[data-highlighted]:not([data-half])': {
        '& [data-fg]': {
          color: 'colorPalette.solid',
        },
      },
      '&[data-half]': {
        '& [data-fg]': {
          color: 'colorPalette.solid',
          clipPath: 'var(--clip-path)',
        },
      },
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          ...getTextStyles(16),
        },
      },
      sm: {
        item: {
          ...getTextStyles(19),
        },
      },
      md: {
        item: {
          ...getTextStyles(24),
        },
      },
      lg: {
        item: {
          fontFamily: 'body',
          fontSize: {
            base: govukTypeScale[24].small.fontSize,
            md: govukTypeScale[27].large.fontSize,
          },
          lineHeight: {
            base: govukTypeScale[24].small.lineHeight,
            md: govukTypeScale[27].large.lineHeight,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    colorPalette: 'orange',
  },
})

export default ratingRecipe
