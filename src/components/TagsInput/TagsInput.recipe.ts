import { defineSlotRecipe } from '@chakra-ui/react'
import { tagsInputAnatomy } from '@chakra-ui/react/anatomy'

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

const tagsInputRecipe = defineSlotRecipe({
  slots: tagsInputAnatomy.keys(),
  className: 'govuk-tags-input',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(8),
      width: 'full',
    },
    label: {
      ...getTextStyles(19),
      fontWeight: '700',
      color: 'fg',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    control: {
      minH: 'var(--tags-input-height)',
      '--input-height': 'var(--tags-input-height)',
      px: 'var(--tags-input-px)',
      py: 'var(--tags-input-py)',
      gap: 'var(--tags-input-gap)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      borderRadius: '0',
      position: 'relative',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      border: '2px solid {colors.border.input}',
      bg: 'transparent',
      transitionProperty: 'border-color, box-shadow, outline-color',
      transitionDuration: 'normal',
      _focusWithin: getFieldFocusStyles(),
      _disabled: {
        opacity: 1,
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
      },
      _invalid: {
        borderColor: 'border.error',
      },
    },
    input: {
      ...getTextStyles(19),
      flex: '1',
      minWidth: '20',
      outline: 'none',
      bg: 'transparent',
      color: 'fg',
      px: 'calc(var(--tags-input-item-px) / 1.25)',
      height: 'var(--tags-input-item-height)',
      _placeholder: {
        color: 'fg.muted',
        opacity: 1,
      },
      _readOnly: {
        display: 'none',
      },
    },
    item: {
      maxWidth: '100%',
      minWidth: '0',
    },
    itemText: {
      lineClamp: '1',
      minWidth: '0',
    },
    itemInput: {
      ...getTextStyles(16),
      outline: 'none',
      bg: 'transparent',
      minWidth: '2ch',
      color: 'inherit',
      px: 'var(--tags-input-item-px)',
      height: 'var(--tags-input-item-height)',
    },
    itemPreview: {
      ...getTextStyles(16),
      height: 'var(--tags-input-item-height)',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: pxToRem(4),
      borderRadius: '0',
      px: 'var(--tags-input-item-px)',
      maxWidth: '100%',
      bg: 'bg.muted',
      borderWidth: '1px',
      borderColor: 'border.muted',
      _highlighted: {
        bg: 'bg.subtle',
        borderColor: 'border.input',
      },
    },
    itemDeleteTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      boxSize: 'calc(var(--tags-input-item-height) / 1.5)',
      cursor: { base: 'pointer', _disabled: 'initial' },
      me: '-1',
      opacity: '0.7',
      _hover: {
        opacity: '1',
      },
      _icon: {
        boxSize: '80%',
      },
    },
    clearTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'calc(var(--tags-input-item-height) / 1.5)',
      cursor: { base: 'pointer', _disabled: 'initial' },
      color: 'fg.muted',
      borderRadius: '0',
      _focusVisible: getFieldFocusStyles(),
      _icon: {
        boxSize: '5',
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          '--tags-input-height': pxToRem(32),
          '--tags-input-px': pxToRem(4),
          '--tags-input-py': pxToRem(4),
          '--tags-input-gap': pxToRem(4),
          '--tags-input-item-height': pxToRem(24),
          '--tags-input-item-px': pxToRem(8),
        },
      },
      sm: {
        root: {
          '--tags-input-height': pxToRem(36),
          '--tags-input-px': pxToRem(6),
          '--tags-input-py': pxToRem(4),
          '--tags-input-gap': pxToRem(4),
          '--tags-input-item-height': pxToRem(24),
          '--tags-input-item-px': pxToRem(8),
        },
      },
      md: {
        root: {
          '--tags-input-height': pxToRem(40),
          '--tags-input-px': pxToRem(6),
          '--tags-input-py': pxToRem(4),
          '--tags-input-gap': pxToRem(4),
          '--tags-input-item-height': pxToRem(28),
          '--tags-input-item-px': pxToRem(8),
        },
      },
      lg: {
        root: {
          '--tags-input-height': pxToRem(44),
          '--tags-input-px': pxToRem(6),
          '--tags-input-py': pxToRem(4),
          '--tags-input-gap': pxToRem(4),
          '--tags-input-item-height': pxToRem(32),
          '--tags-input-item-px': pxToRem(8),
        },
      },
    },
    variant: {
      outline: {},
      subtle: {
        control: {
          bg: 'bg.subtle',
        },
        itemPreview: {
          bg: 'bg',
        },
      },
      flushed: {
        control: {
          borderWidth: '0 0 2px 0',
          px: '0',
          borderBottomColor: 'border.input',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

export default tagsInputRecipe
