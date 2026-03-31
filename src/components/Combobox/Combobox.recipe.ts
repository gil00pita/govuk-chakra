import { defineSlotRecipe } from '@chakra-ui/react'
import { comboboxAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes, govukTypeScale, pxToRem } from '@/utils/px-to-rem'

const comboboxRecipe = defineSlotRecipe({
  className: 'govuk-combobox',
  slots: comboboxAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      width: 'full',
    },
    label: {
      color: 'fg',
      fontWeight: 'bold',
      fontFamily: 'body',
      fontSize: govukFontSizes[19],
      lineHeight: '1.3157894737',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    control: {
      position: 'relative',
      '--padding-factor': '1',
      '--combobox-input-padding-end': 'var(--combobox-input-padding-x)',
      '&:has([data-part=trigger]), &:has([data-part=clear-trigger])': {
        '--combobox-input-padding-end':
          'calc(var(--combobox-input-height) * var(--padding-factor))',
      },
      '&:has([data-part=trigger]):has([data-part=clear-trigger]:not([hidden]))': {
        '--padding-factor': '1.5',
      },
    },
    input: {
      width: 'full',
      minH: 'var(--combobox-input-height)',
      ps: 'var(--combobox-input-padding-x)',
      pe: 'var(--combobox-input-padding-end)',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'body',
      fontSize: 'var(--combobox-input-fontsize, 16px)',
      outline: '0',
      focusVisibleRing: 'none',
      _placeholder: {
        color: 'fg.muted',
        opacity: 1,
      },
      _hover: {
        borderColor: 'border.input',
      },
      _focusVisible: {
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'focus',
        outlineOffset: '0',
        borderColor: 'border.input',
        boxShadow: 'inset 0 0 0 2px {colors.border.input})',
      },
      _invalid: {
        borderColor: 'border.error',
      },
      _disabled: {
        opacity: 1,
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
      },
    },
    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    clearTrigger: {
      color: 'fg.muted',
      pointerEvents: 'auto',
      rounded: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1',
      position: 'absolute',
      insetEnd: '0',
      top: '0',
      bottom: '0',
      px: 'var(--combobox-input-padding-x)',
      _icon: {
        boxSize: 'var(--combobox-indicator-size)',
      },
      '[data-disabled] &': {
        opacity: 1,
        color: 'fg.disabled',
      },
    },
    positioner: {
      zIndex: 'popover',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      boxShadow: 'md',
      maxH: '96',
      overflowY: 'auto',
    },
    list: {
      p: '0',
    },
    item: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2',
      px: 'var(--combobox-item-padding-x)',
      py: 'var(--combobox-item-padding-y)',
      color: 'fg',
      cursor: 'pointer',
      userSelect: 'none',
      textAlign: 'start',
      borderRadius: '0',
      _highlighted: {
        bg: 'bg.muted',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
      _icon: {
        boxSize: 'var(--combobox-indicator-size)',
      },
    },
    empty: {
      px: 'var(--combobox-item-padding-x)',
      py: 'var(--combobox-item-padding-y)',
      color: 'fg.muted',
      fontFamily: 'body',
    },
    itemText: {
      flex: '1',
    },
    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg',
    },
    itemGroup: {
      pb: 'var(--combobox-item-padding-y)',
      _last: {
        pb: '0',
      },
    },
    itemGroupLabel: {
      px: 'var(--combobox-item-padding-x)',
      py: 'var(--combobox-item-padding-y)',
      color: 'fg',
      fontWeight: 'bold',
    },
  },
  variants: {
    variant: {
      outline: {
        input: {
          bg: 'transparent',
          borderWidth: '2px',
          borderColor: 'border.input',
          focusVisibleRing: 'none',
          _focusVisible: {
            outline: `${pxToRem(3)} solid`,
            outlineColor: 'focus',
            outlineOffset: '0',
            borderColor: 'border.input',
            boxShadow: 'inset 0 0 0 2px {colors.border.input})',
          },
        },
      },
      subtle: {
        input: {
          borderWidth: '2px',
          borderColor: 'border.input',
          bg: 'bg.muted',
          focusVisibleRing: 'none',
        },
      },
    },
    size: {
      sm: {
        root: {
          '--combobox-input-height': '36px',
          '--combobox-input-padding-x': '8px',
          '--combobox-indicator-size': '16px',
        },
        empty: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[16] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[16].large.lineHeight,
          },
        },
        input: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[16] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[16].large.lineHeight,
          },
        },
        content: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[16] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[16].large.lineHeight,
          },
          p: '0',
        },
      },
      md: {
        root: {
          '--combobox-input-height': '40px',
          '--combobox-input-padding-x': '8px',
          '--combobox-indicator-size': '18px',
        },
        empty: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
        input: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
        content: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
          p: '0',
        },
      },
      lg: {
        root: {
          '--combobox-input-height': '48px',
          '--combobox-input-padding-x': '12px',
          '--combobox-indicator-size': '20px',
        },
        input: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
        content: {
          textStyle: 'unset',
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
          p: '0',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})

export default comboboxRecipe
