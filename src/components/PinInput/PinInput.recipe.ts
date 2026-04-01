import { defineSlotRecipe } from '@chakra-ui/react'
import { pinInputAnatomy } from '@chakra-ui/react/anatomy'

import { govukFontSizes, govukTypeScale, pxToRem } from '@/utils'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'

const pinInputRecipe = defineSlotRecipe({
  className: 'govuk-pin-input',
  slots: pinInputAnatomy.keys(),
  base: {
    control: {
      display: 'inline-flex',
      gap: pxToRem(8),
      isolation: 'isolate',
    },
    input: {
      width: 'var(--pin-input-width)',
      height: 'var(--pin-input-height)',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: pxToRem(2),
      borderColor: 'border.input',
      border: '2px solid {colors.border.input}',
      focusVisibleRing: 'none',
      boxShadow: 'none',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'body',
      textAlign: 'center',
      px: pxToRem(4),
      py: pxToRem(5),
      _placeholder: {
        color: 'fg.muted',
        opacity: 1,
      },
      _hover: {
        borderColor: 'border.input',
      },
      _focus: getFieldFocusStyles(),
      _focusVisible: getFieldFocusStyles(),
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
    label: {
      color: 'fg',
      fontWeight: '700',
      fontFamily: 'body',
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          '--pin-input-height': pxToRem(36),
          '--pin-input-width': pxToRem(36),
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
      },
      md: {
        input: {
          '--pin-input-height': pxToRem(40),
          '--pin-input-width': pxToRem(40),
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
      },
      lg: {
        input: {
          '--pin-input-height': pxToRem(48),
          '--pin-input-width': pxToRem(48),
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
      },
    },
    variant: {
      outline: {
        input: {
          bg: 'transparent',
        },
      },
      subtle: {
        input: {
          bg: 'bg.muted',
        },
      },
    },
    attached: {
      true: {
        control: {
          gap: '0',
        },
        input: {
          _notFirst: {
            marginInlineStart: '-2px',
          },
          _notFirstOrLast: {
            borderRadius: '0',
          },
          _first: {
            borderEndRadius: '0',
          },
          _last: {
            borderStartRadius: '0',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

export default pinInputRecipe
