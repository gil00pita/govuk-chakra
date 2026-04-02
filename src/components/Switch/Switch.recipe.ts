import { switchAnatomy } from '@chakra-ui/react/anatomy'
import { defineSlotRecipe } from '@chakra-ui/react'
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

export const switchRecipeConfig = {
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
    control: {
      display: 'inline-flex',
      flexShrink: 0,
      borderColor: 'border.input',
      boxShadow: '0 0 0 2px {colors.border.input}',
      bg: 'bg.muted',
      transition: 'background-color 0.12s ease',
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
        bg: 'colorPalette.400',
      },
    },
    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      borderRadius: '0',
      width: 'calc(var(--switch-height) - 4px)',
      height: 'calc(var(--switch-height) - 4px)',
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
      solid: {
        thumb: {
          boxShadow: 'none',
          _checked: {
            bg: 'colorPalette.solid',
            borderColor: 'colorPalette.solid',
          },
        },
        control: {
          borderRadius: 0,
          _checked: {
            bg: 'colorPalette.100',
            borderColor: 'colorPalette.100',
          },
          _focus: { ...getFieldFocusStyles() },
          _focusVisible: { ...getFieldFocusStyles() },
        },
      },
      raised: {
        control: {
          height: 'calc((var(--switch-height) / 2) + 1px)',
          borderRadius: 0,
          bg: 'bg.subtle',
          boxShadow: 'inset',
        },
        thumb: {
          position: 'relative',
          boxShadow: 'none',
          borderWidth: '2px',
          top: 0,
          _focus: { ...getFieldFocusStyles() },
          _focusVisible: { ...getFieldFocusStyles() },
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
    variant: 'solid' as const,
    size: 'md' as const,
  },
} as const

const switchRecipe: ReturnType<typeof defineSlotRecipe> = defineSlotRecipe(switchRecipeConfig)

export default switchRecipe
