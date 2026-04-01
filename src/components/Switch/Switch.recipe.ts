import { defineSlotRecipe } from '@chakra-ui/react'
import { switchAnatomy } from '@chakra-ui/react/anatomy'

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

const switchRecipe = defineSlotRecipe({
  slots: switchAnatomy.keys(),
  className: 'govuk-switch',
  base: {
    root: {
      display: 'inline-flex',
      gap: pxToRem(10),
      alignItems: 'center',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    label: {
      ...getTextStyles(19),
      color: 'fg',
      fontWeight: '700',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    indicator: {
      position: 'absolute',
      height: 'var(--switch-height)',
      width: 'var(--switch-height)',
      fontSize: 'var(--switch-indicator-font-size)',
      fontWeight: '700',
      flexShrink: 0,
      userSelect: 'none',
      display: 'grid',
      placeContent: 'center',
      transition: 'inset-inline-start 0.12s ease',
      insetInlineStart: 'calc(var(--switch-x) - 2px)',
      _checked: {
        insetInlineStart: '2px',
      },
    },
    control: {
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'flex-start',
      cursor: 'pointer',
      borderRadius: '999px',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      alignItems: 'center',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      bg: 'bg.muted',
      transition: 'background-color 0.12s ease',
      _focusVisible: getFieldFocusStyles(),
      _disabled: {
        opacity: 1,
        cursor: 'not-allowed',
        borderColor: 'border.disabled',
        bg: 'bg.disabled',
      },
      _invalid: {
        borderColor: 'border.error',
      },
      _checked: {
        bg: 'primary',
      },
    },
    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      borderRadius: 'inherit',
      width: 'var(--switch-height)',
      height: 'var(--switch-height)',
      scale: '0.7',
      bg: 'bg',
      borderWidth: '1px',
      borderColor: 'border.input',
      _checked: {
        translate: 'var(--switch-x) 0',
        bg: 'bg',
      },
    },
  },
  variants: {
    variant: {
      solid: {},
      raised: {
        control: {
          bg: 'bg.subtle',
          boxShadow: 'inset',
        },
        thumb: {
          position: 'relative',
          top: 'calc(var(--switch-height) * -0.15)',
          boxShadow: 'sm',
        },
      },
    },
    size: {
      xs: {
        root: {
          '--switch-width': pxToRem(24),
          '--switch-height': pxToRem(12),
          '--switch-indicator-font-size': '0.625rem',
        },
      },
      sm: {
        root: {
          '--switch-width': pxToRem(32),
          '--switch-height': pxToRem(16),
          '--switch-indicator-font-size': '0.625rem',
        },
      },
      md: {
        root: {
          '--switch-width': pxToRem(40),
          '--switch-height': pxToRem(20),
          '--switch-indicator-font-size': '0.875rem',
        },
      },
      lg: {
        root: {
          '--switch-width': pxToRem(48),
          '--switch-height': pxToRem(24),
          '--switch-indicator-font-size': '1rem',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

export default switchRecipe
