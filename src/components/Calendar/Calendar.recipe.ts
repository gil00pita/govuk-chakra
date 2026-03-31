import { defineSlotRecipe } from '@chakra-ui/react'
import { datePickerAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const calendarColorPalettes = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const

const calendarColorPaletteVariants = {
  gray: {},
  red: {},
  orange: {},
  yellow: {},
  green: {},
  teal: {},
  blue: {},
  cyan: {},
  purple: {},
  pink: {},
} as const

function createCalendarCompoundVariants(colorPalette: (typeof calendarColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleBaseForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const subtleDarkForeground = getAccessiblePaletteForeground(colorPalette, '800')
  const solidBaseForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const solidDarkForeground = getAccessiblePaletteForeground(colorPalette, '400')

  return [
    {
      colorPalette,
      css: {
        prevTrigger: {
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
          },
        },
        nextTrigger: {
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
          },
        },
        viewTrigger: {
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
          },
        },
        tableCellTrigger: {
          _hover: {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
          },
          _today: {
            color: {
              base: `${paletteToken}.700`,
              _dark: `${paletteToken}.200`,
            },
          },
          _selected: {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
            _hover: {
              bg: {
                base: `${paletteToken}.600`,
                _dark: `${paletteToken}.400`,
              },
              color: {
                base: solidBaseForeground,
                _dark: solidDarkForeground,
              },
            },
          },
          '&[data-in-range]': {
            bg: {
              base: `${paletteToken}.100`,
              _dark: `${paletteToken}.800`,
            },
            color: {
              base: subtleBaseForeground,
              _dark: subtleDarkForeground,
            },
            _hover: {
              bg: {
                base: `${paletteToken}.100`,
                _dark: `${paletteToken}.800`,
              },
            },
          },
          '&[data-range-start]': {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
            _hover: {
              bg: {
                base: `${paletteToken}.600`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
          '&[data-range-end]': {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
            _hover: {
              bg: {
                base: `${paletteToken}.600`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
          '&[data-selected][data-in-range]': {
            bg: {
              base: `${paletteToken}.600`,
              _dark: `${paletteToken}.400`,
            },
            color: {
              base: solidBaseForeground,
              _dark: solidDarkForeground,
            },
            _hover: {
              bg: {
                base: `${paletteToken}.600`,
                _dark: `${paletteToken}.400`,
              },
            },
          },
        },
      },
    },
  ]
}

const calendarCompoundVariants = calendarColorPalettes.flatMap(createCalendarCompoundVariants)

const calendarRecipe = defineSlotRecipe({
  className: 'govuk-calendar',
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      width: 'full',
      fontFamily: 'body',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      p: '12px',
      minW: '18rem',
      bg: 'bg',
      borderWidth: '2px',
      borderColor: 'border.input',
      borderRadius: '0',
      boxShadow: 'none',
      color: 'fg',
      maxHeight: 'var(--available-height)',
      '--date-picker-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--date-picker-z-index) + var(--layer-index, 0))',
      outline: 'none',
    },
    view: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    viewControl: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      height: 'var(--datepicker-nav-trigger-size)',
    },
    viewTrigger: {
      display: 'inline-flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1',
      py: '6px',
      px: '8px',
      fontSize: govukFontSizes[19],
      lineHeight: '1.3157894737',
      fontWeight: 'bold',
      borderRadius: '0',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
    },
    prevTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'var(--datepicker-nav-trigger-size)',
      borderRadius: '0',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      _icon: {
        boxSize: '4',
      },
    },
    nextTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'var(--datepicker-nav-trigger-size)',
      borderRadius: '0',
      color: 'fg',
      focusVisibleRing: 'none',
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      _icon: {
        boxSize: '4',
      },
    },
    rangeText: {
      fontSize: govukFontSizes[19],
      lineHeight: '1.3157894737',
      fontWeight: 'bold',
      fontFamily: 'body',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: '0',
    },
    tableHeader: {
      width: 'var(--table-cell-size)',
      py: '8px',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
      fontWeight: 'bold',
      color: 'fg.muted',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    tableCell: {
      py: '2px',
    },
    tableCellTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 'var(--table-cell-size)',
      minHeight: 'var(--table-cell-size)',
      fontFamily: 'body',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
      borderRadius: '0',
      focusVisibleRing: 'none',
      cursor: 'default',
      position: 'relative',
      color: 'fg',
      _hover: {
        bg: 'transparent',
      },
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
      },
      '[data-view=month] &, [data-view=year] &': {
        width: 'calc(var(--table-cell-size) * 1.75)',
      },
      _today: {
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
      },
      '&[data-in-range]': {
        borderRadius: '0',
      },
      '&[data-range-start]': {
        borderRadius: '0',
      },
      '&[data-range-end]': {
        borderRadius: '0',
      },
      '&[data-range-start][data-range-end]': {
        borderRadius: '0',
      },
      _disabled: {
        opacity: 0.4,
      },
    },
    monthSelect: {
      height: 'var(--datepicker-select-height)',
      ps: '8px',
      pe: '32px',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
      borderWidth: '2px',
      borderColor: 'border.input',
      borderRadius: '0',
      outline: 'none',
      focusVisibleRing: 'none',
      appearance: 'none',
      fieldSizing: 'content',
      bg: 'transparent',
    },
    yearSelect: {
      height: 'var(--datepicker-select-height)',
      ps: '8px',
      pe: '32px',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
      borderWidth: '2px',
      borderColor: 'border.input',
      borderRadius: '0',
      outline: 'none',
      focusVisibleRing: 'none',
      appearance: 'none',
      fieldSizing: 'content',
      bg: 'transparent',
    },
  },
  variants: {
    variant: {
      subtle: {
        content: {
          bg: 'bg.muted',
        },
      },
      solid: {
        content: {
          bg: 'bg',
        },
      },
      outline: {
        content: {
          bg: 'transparent',
          boxShadow: 'none',
        },
      },
      plain: {
        content: {
          bg: 'transparent',
          boxShadow: 'none',
          borderWidth: '0',
        },
      },
    },
    size: {
      sm: {
        view: {
          '--table-cell-size': '36px',
          '--datepicker-nav-trigger-size': '32px',
          '--datepicker-select-height': '36px',
        },
      },
      md: {
        view: {
          '--table-cell-size': '40px',
          '--datepicker-nav-trigger-size': '36px',
          '--datepicker-select-height': '40px',
        },
      },
      lg: {
        view: {
          '--table-cell-size': '48px',
          '--datepicker-nav-trigger-size': '40px',
          '--datepicker-select-height': '48px',
        },
        tableCellTrigger: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
    },
    colorPalette: calendarColorPaletteVariants,
  },
  compoundVariants: calendarCompoundVariants,
  defaultVariants: {
    colorPalette: 'blue',
    size: 'lg',
    variant: 'solid',
  },
})

export default calendarRecipe
