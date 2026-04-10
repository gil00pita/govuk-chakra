import { defineSlotRecipe } from '@chakra-ui/react'
import { listboxAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes } from '@/utils/px-to-rem'

const listboxRecipe = defineSlotRecipe({
  className: 'govuk-listbox',
  slots: listboxAnatomy.keys(),
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
      fontSize: govukFontSizes[19],
      lineHeight: '1.3157894737',
      fontFamily: 'body',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      maxH: '96',
      overflowY: 'auto',
      scrollPadding: '0',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      boxShadow: 'none',
      gap: '0',
      p: '0',
      textStyle: 'unset',
      fontFamily: 'body',
      outline: 'none',
      '--listbox-item-padding-x': '8px',
      '--listbox-item-padding-y': '8px',
      _horizontal: {
        flexDirection: 'row',
        overflowX: 'auto',
      },
      _vertical: {
        flexDirection: 'column',
        overflowY: 'auto',
      },
    },
    item: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: '1',
      gap: '2',
      px: 'var(--listbox-item-padding-x)',
      py: 'var(--listbox-item-padding-y)',
      color: 'fg',
      fontFamily: 'body',
      textAlign: 'start',
      userSelect: 'none',
      cursor: 'pointer',
      borderRadius: '0',
      _highlighted: {
        bg: 'bg.muted',
        outline: 'none',
      },
      _selected: {
        bg: 'bg.muted',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    empty: {
      px: 'var(--listbox-item-padding-x)',
      py: 'var(--listbox-item-padding-y)',
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
      _icon: {
        boxSize: '6',
      },
    },
    itemGroup: {
      mt: '0',
    },
    itemGroupLabel: {
      px: 'var(--listbox-item-padding-x)',
      py: 'var(--listbox-item-padding-y)',
      color: 'fg',
      fontWeight: 'bold',
      fontFamily: 'body',
    },
    input: {
      fontFamily: 'body',
      color: 'fg',
    },
    valueText: {
      lineClamp: '1',
      maxW: '80%',
      fontFamily: 'body',
    },
  },
  variants: {
    variant: {
      subtle: {
        content: {
          bg: 'bg.muted',
          borderColor: 'border.input',
        },
        item: {
          _hover: {
            bgColor: 'gray.100',
          },
          _selected: {
            bg: 'bg.muted',
          },
        },
      },
      solid: {
        content: {
          bg: 'bg',
          borderColor: 'border.input',
        },
        item: {
          _selected: {
            bg: 'primary',
            color: 'fg.inverted',
          },
        },
        itemIndicator: {
          color: 'fg.inverted',
        },
      },
      plain: {
        content: {
          bg: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    size: {
      sm: {
        content: {
          textStyle: 'unset',
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
          p: '0',
          '--listbox-item-padding-x': '8px',
          '--listbox-item-padding-y': '6px',
        },
        item: {
          textStyle: 'unset',
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
        empty: {
          textStyle: 'unset',
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
      },
      md: {
        content: {
          textStyle: 'unset',
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
          p: '0',
          '--listbox-item-padding-x': '8px',
          '--listbox-item-padding-y': '8px',
        },
        item: {
          textStyle: 'unset',
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
        empty: {
          textStyle: 'unset',
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
      lg: {
        content: {
          textStyle: 'unset',
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
          p: '0',
          '--listbox-item-padding-x': '12px',
          '--listbox-item-padding-y': '10px',
        },
        item: {
          textStyle: 'unset',
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
        },
        empty: {
          textStyle: 'unset',
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
})

export default listboxRecipe
