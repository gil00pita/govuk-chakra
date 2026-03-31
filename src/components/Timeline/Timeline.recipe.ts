import { defineSlotRecipe } from '@chakra-ui/react'
import { timelineAnatomy } from '@chakra-ui/react/anatomy'
import { govukFontSizes } from '@/utils/px-to-rem'
import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'

const timelineColorPalettes = [
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

const timelineColorPaletteVariants = {
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

function createTimelineCompoundVariants(colorPalette: (typeof timelineColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const solidForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const outlineForeground = getAccessiblePaletteForeground(colorPalette, '50')

  return [
    {
      variant: 'subtle' as const,
      colorPalette,
      css: {
        indicator: {
          bg: `${paletteToken}.100`,
          color: subtleForeground,
        },
        separator: {
          borderColor: `${paletteToken}.200`,
        },
      },
    },
    {
      variant: 'solid' as const,
      colorPalette,
      css: {
        indicator: {
          bg: `${paletteToken}.600`,
          color: solidForeground,
        },
        separator: {
          borderColor: `${paletteToken}.300`,
        },
      },
    },
    {
      variant: 'outline' as const,
      colorPalette,
      css: {
        indicator: {
          bg: 'transparent',
          color: outlineForeground,
          borderColor: `${paletteToken}.300`,
        },
        separator: {
          borderColor: `${paletteToken}.200`,
        },
      },
    },
    {
      variant: 'plain' as const,
      colorPalette,
      css: {
        indicator: {
          bg: 'transparent',
          color: `${paletteToken}.700`,
        },
        separator: {
          borderColor: `${paletteToken}.200`,
        },
      },
    },
  ]
}

const timelineCompoundVariants = timelineColorPalettes.flatMap(createTimelineCompoundVariants)

const timelineRecipe = defineSlotRecipe({
  slots: timelineAnatomy.keys(),
  className: 'govuk-timeline',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      '--timeline-thickness': '2px',
      '--timeline-gutter': '4px',
      color: 'fg',
      fontFamily: 'body',
    },
    item: {
      '--timeline-content-gap': '24px',
      display: 'flex',
      position: 'relative',
      alignItems: 'flex-start',
      flexShrink: 0,
      gap: '4',
      _last: {
        '--timeline-content-gap': '0',
      },
    },
    separator: {
      display: 'var(--timeline-separator-display)',
      position: 'absolute',
      borderStartWidth: 'var(--timeline-thickness)',
      ms: 'calc(-1 * var(--timeline-thickness) / 2)',
      insetInlineStart: 'calc(var(--timeline-indicator-size) / 2)',
      insetBlock: '0',
      borderColor: 'border.input',
    },
    indicator: {
      outline: '2px solid var(--govuk-colors-bg)',
      position: 'relative',
      flexShrink: '0',
      boxSize: 'var(--timeline-indicator-size)',
      fontSize: 'var(--timeline-font-size)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'full',
      fontWeight: 'bold',
      bg: 'bg.muted',
      color: 'fg',
    },
    connector: {
      alignSelf: 'stretch',
      position: 'relative',
    },
    content: {
      pb: 'var(--timeline-content-gap)',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      gap: '2',
    },
    title: {
      display: 'flex',
      fontWeight: 'bold',
      flexWrap: 'wrap',
      gap: '1.5',
      alignItems: 'center',
      mt: 'var(--timeline-margin)',
      color: 'fg',
      fontFamily: 'body',
    },
    description: {
      color: 'fg.muted',
      fontFamily: 'body',
      fontSize: govukFontSizes[16],
      lineHeight: '1.25',
    },
  },
  variants: {
    variant: {
      subtle: {},
      solid: {},
      outline: {
        indicator: {
          borderWidth: '2px',
          borderColor: 'border.input',
          bgColor: 'bg',
        },
      },
      plain: {
        indicator: {
          bgColor: 'bg',
        },
      },
    },
    colorPalette: timelineColorPaletteVariants,
    showLastSeparator: {
      true: {
        item: {
          _last: {
            '--timeline-separator-display': 'initial',
          },
        },
      },
      false: {
        item: {
          _last: {
            '--timeline-separator-display': 'none',
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          '--timeline-indicator-size': '16px',
          '--timeline-font-size': govukFontSizes[14],
        },
        title: {
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
        },
      },
      md: {
        root: {
          '--timeline-indicator-size': '20px',
          '--timeline-font-size': govukFontSizes[16],
        },
        title: {
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
      lg: {
        root: {
          '--timeline-indicator-size': '24px',
          '--timeline-font-size': govukFontSizes[16],
        },
        title: {
          mt: '2px',
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
        },
      },
      xl: {
        root: {
          '--timeline-indicator-size': '32px',
          '--timeline-font-size': govukFontSizes[19],
        },
        title: {
          mt: '6px',
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
        },
      },
    },
  },
  compoundVariants: timelineCompoundVariants,
  defaultVariants: {
    colorPalette: 'gray',
    size: 'md',
    variant: 'solid',
    showLastSeparator: false,
  },
})

export default timelineRecipe
