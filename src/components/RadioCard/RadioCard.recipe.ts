import { defineSlotRecipe } from '@chakra-ui/react'
import { radioCardAnatomy } from '@chakra-ui/react/anatomy'

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

const radioCardRecipe = defineSlotRecipe({
  className: 'govuk-radio-card',
  slots: radioCardAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(8),
      isolation: 'isolate',
    },
    item: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      userSelect: 'none',
      borderRadius: '0',
      _disabled: {
        opacity: 1,
      },
      _checked: {
        zIndex: '1',
      },
      _focus: getFieldFocusStyles(),
      _focusVisible: getFieldFocusStyles(),
    },
    itemControl: {
      display: 'inline-flex',
      flex: '1',
      position: 'relative',
      flexDirection: 'var(--radio-card-direction)',
      justifyContent: 'var(--radio-card-justify)',
      alignItems: 'var(--radio-card-align)',
      textAlign: 'var(--radio-card-text-align)',
      gap: pxToRem(12),
      borderRadius: 'inherit',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      border: '2px solid {colors.border.input}',
      boxShadow: 'none',
      bg: 'transparent',
      color: 'fg',
      transition: 'background-color 0.1s, border-color 0.1s, box-shadow 0.1s',
      _hover: {
        borderColor: 'border.input',
      },
      _disabled: {
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
      },
      _checked: {
        borderColor: 'border.input',
        boxShadow: 'inset 0 0 0 2px {colors.border.input}',
      },
      _focusVisible: getFieldFocusStyles(),
    },
    itemContent: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      justifyContent: 'var(--radio-card-justify)',
      alignItems: 'var(--radio-card-align)',
      textAlign: 'inherit',
      gap: pxToRem(4),
    },
    itemText: {
      ...getTextStyles(19),
      color: 'inherit',
      fontWeight: '700',
      flex: '1',
    },
    itemDescription: {
      ...getTextStyles(16),
      color: 'fg.muted',
    },
    itemIndicator: {
      width: pxToRem(20),
      height: pxToRem(20),
      flexShrink: '0',
      borderRadius: 'full',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      bg: 'bg',
      position: 'relative',
      _before: {
        content: '""',
        position: 'absolute',
        inset: pxToRem(3),
        borderRadius: 'full',
        bg: 'currentColor',
        opacity: '0',
      },
      _checked: {
        color: 'fg',
        _before: {
          opacity: '1',
        },
      },
      _disabled: {
        borderColor: 'border.disabled',
      },
    },
    itemAddon: {
      borderTopWidth: '1px',
      borderTopColor: 'inherit',
      color: 'fg.muted',
    },
  },
  variants: {
    size: {
      sm: {
        itemControl: {
          minH: pxToRem(36),
          p: pxToRem(8),
        },
        itemText: getTextStyles(16),
        itemDescription: getTextStyles(16),
      },
      md: {
        itemControl: {
          minH: pxToRem(40),
          p: pxToRem(12),
        },
        itemText: getTextStyles(19),
        itemDescription: getTextStyles(16),
      },
      lg: {
        itemControl: {
          minH: pxToRem(48),
          p: pxToRem(16),
        },
        itemText: getTextStyles(24),
        itemDescription: getTextStyles(19),
      },
    },
    variant: {
      surface: {
        item: {
          bg: 'transparent',
          border: '1px solid transparent',
          boxShadow: 'none',
          _checked: {
            boxShadow: 'none',
            borderColor: 'border.input',
          },
        },
        itemControl: {
          bg: 'transparent',
          border: '1px solid transparent',
          boxShadow: '0 0 0 2px {colors.border}',
          _checked: {
            boxShadow: 'inset 0 0 0 1px {colors.border}',
            bgColor: { base: 'gray.300', _dark: 'gray.700' },
          },
        },
        itemIndicator: {
          border: '1px solid {colors.border}',
          _checked: {
            color: 'fg',
            bg: 'transparent',
            _before: {},
          },
        },
      },
      subtle: {
        item: {
          bg: 'transparent',
          border: '1px solid transparent',
          boxShadow: 'none',
          _checked: {
            boxShadow: 'none',
            border: '1px solid transparent',
          },
        },
        itemControl: {
          border: '1px solid transparent',
          boxShadow: 'none',
          bg: 'bg.muted',
          _checked: {
            boxShadow: 'none',
            bgColor: { base: 'gray.300', _dark: 'gray.700' },
            border: '1px solid transparent',
          },
        },
      },
      outline: {
        item: {
          bg: 'transparent',
          border: '1px solid transparent',
          boxShadow: 'none',
          _checked: {
            boxShadow: 'none',
          },
        },
        itemControl: {
          bg: 'transparent',
          border: '1px solid transparent',
          boxShadow: '0 0 0 2px {colors.border.input}',
          _checked: {
            bgColor: 'fg',
            color: 'fg.inverted',
            boxShadow: 'inset 0 0 0 1px {colors.border.input}',
          },
        },
        itemIndicator: {
          _checked: {
            color: 'fg',
            bg: 'bg',
            _before: {},
          },
        },
      },
      solid: {
        item: {
          border: '1px solid transparent',
          boxShadow: 'none',
          bgColor: { base: 'gray.300', _dark: 'gray.700' },
        },
        itemControl: {
          border: '1px solid transparent',
          _checked: {
            bg: 'fg',
            color: 'bg',
            borderColor: 'fg',
            boxShadow: 'inset 0 0 0 2px {colors.border.input}',
          },
        },
        itemDescription: {
          _checked: {
            color: 'inherit',
          },
        },
        itemIndicator: {
          border: '1px solid {colors.border}',
          _checked: {
            borderColor: 'currentColor',
            bg: 'bg',
            color: 'fg',
          },
        },
      },
    },
    justify: {
      start: {
        item: {
          '--radio-card-justify': 'flex-start',
        },
      },
      end: {
        item: {
          '--radio-card-justify': 'flex-end',
        },
      },
      center: {
        item: {
          '--radio-card-justify': 'center',
        },
      },
    },
    align: {
      start: {
        item: {
          '--radio-card-align': 'flex-start',
          '--radio-card-text-align': 'left',
        },
      },
      end: {
        item: {
          '--radio-card-align': 'flex-end',
          '--radio-card-text-align': 'right',
        },
      },
      center: {
        item: {
          '--radio-card-align': 'center',
          '--radio-card-text-align': 'center',
        },
      },
    },
    orientation: {
      vertical: {
        item: {
          '--radio-card-direction': 'column',
        },
      },
      horizontal: {
        item: {
          '--radio-card-direction': 'row',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    align: 'start',
    justify: 'start',
    orientation: 'horizontal',
  },
})

export default radioCardRecipe
