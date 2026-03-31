import { defineSlotRecipe } from '@chakra-ui/react'
import { editableAnatomy } from '@chakra-ui/react/anatomy'

import { govukFontSizes, govukTypeScale, pxToRem } from '@/utils'

const editableRecipe = defineSlotRecipe({
  className: 'govuk-editable',
  slots: editableAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      gap: pxToRem(8),
      width: 'full',
      fontFamily: 'body',
      color: 'fg',
    },
    area: {
      flex: '1',
      minW: 0,
    },
    label: {
      color: 'fg',
      fontWeight: '700',
      fontFamily: 'body',
    },
    preview: {
      width: 'full',
      minH: 'var(--editable-height)',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: pxToRem(2),
      borderColor: 'transparent',
      bg: 'transparent',
      color: 'fg',
      px: pxToRem(12),
      py: pxToRem(5),
      transitionProperty: 'common',
      transitionDuration: 'normal',
      cursor: 'text',
      _hover: {
        borderColor: 'border.input',
      },
      _focusVisible: {
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'focus',
        outlineOffset: '0',
        borderColor: 'border.input',
        boxShadow: 'inset 0 0 0 2px {colors.border.input}',
      },
      _disabled: {
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
      },
    },
    input: {
      width: 'full',
      h: 'var(--editable-height)',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: pxToRem(2),
      borderColor: 'border.input',
      focusVisibleRing: 'none',
      boxShadow: 'none',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'body',
      px: pxToRem(12),
      py: pxToRem(5),
      outline: '0',
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
        boxShadow: 'inset 0 0 0 2px {colors.border.input}',
      },
      _disabled: {
        opacity: 1,
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
      },
    },
    textarea: {
      width: 'full',
      minH: 'calc(var(--editable-height) * 2)',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: pxToRem(2),
      borderColor: 'border.input',
      focusVisibleRing: 'none',
      boxShadow: 'none',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'body',
      px: pxToRem(12),
      py: pxToRem(8),
      outline: '0',
      resize: 'vertical',
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
        boxShadow: 'inset 0 0 0 2px {colors.border.input}',
      },
      _disabled: {
        opacity: 1,
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
      },
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: pxToRem(8),
      flexShrink: 0,
    },
    editTrigger: {
      borderRadius: '0',
    },
    submitTrigger: {
      borderRadius: '0',
    },
    cancelTrigger: {
      borderRadius: '0',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          '--editable-height': pxToRem(36),
        },
        preview: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
        input: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
        textarea: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
      },
      md: {
        root: {
          '--editable-height': pxToRem(40),
        },
        preview: {
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
        input: {
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
        textarea: {
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
      },
      lg: {
        root: {
          '--editable-height': pxToRem(48),
        },
        preview: {
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
        input: {
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
        textarea: {
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default editableRecipe
