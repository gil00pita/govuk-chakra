import { defineSlotRecipe } from '@chakra-ui/react'
import { sliderAnatomy } from '@chakra-ui/react/anatomy'

import { govukTypeScale, pxToRem } from '@/utils'
import { getInsetFocusStyles } from '@/utils/fieldFocusStyles'

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

const sliderRecipe = defineSlotRecipe({
  className: 'govuk-slider',
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(4),
      position: 'relative',
      isolation: 'isolate',
      touchAction: 'none',
    },
    label: {
      ...getTextStyles(19),
      color: 'fg',
      fontWeight: '700',
    },
    valueText: {
      ...getTextStyles(16),
      color: 'fg.muted',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
    },
    track: {
      overflow: 'hidden',
      flex: '1',
      bg: 'bg.muted',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
    },
    range: {
      width: 'inherit',
      height: 'inherit',
      bg: 'colorPalette.solid',
      _disabled: {
        bg: 'border.emphasized',
      },
    },
    thumb: {
      width: 'var(--slider-thumb-size)',
      height: 'var(--slider-thumb-size)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 0,
      zIndex: '2',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      bg: 'bg.muted',
      transitionProperty: 'translate, background-color, border-color',
      transitionDuration: 'fast',
      _focus: getInsetFocusStyles(),
      _focusVisible: getInsetFocusStyles(),
      _disabled: {
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
      },
    },
    markerGroup: {
      position: 'absolute!',
      zIndex: '1',
    },
    marker: {
      '--slider-marker-bg': {
        base: 'bg',
        _underValue: 'colorPalette.solid',
      },
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(var(--slider-thumb-size) / 2)',
      color: 'fg.muted',
      ...getTextStyles(16),
    },
    markerIndicator: {
      width: 'var(--slider-marker-size)',
      height: 'var(--slider-marker-size)',
      borderRadius: '0',
      bg: 'var(--slider-marker-bg)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.input',
      rounded: 'full',
    },
    markerLabel: {
      ...getTextStyles(16),
      color: 'fg.muted',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          '--slider-thumb-size': pxToRem(16),
          '--slider-track-size': pxToRem(6),
          '--slider-marker-center': pxToRem(6),
          '--slider-marker-size': pxToRem(4),
          '--slider-marker-inset': pxToRem(3),
        },
      },
      md: {
        root: {
          '--slider-thumb-size': pxToRem(20),
          '--slider-track-size': pxToRem(8),
          '--slider-marker-center': pxToRem(8),
          '--slider-marker-size': pxToRem(4),
          '--slider-marker-inset': pxToRem(4),
        },
      },
      lg: {
        root: {
          '--slider-thumb-size': pxToRem(24),
          '--slider-track-size': pxToRem(10),
          '--slider-marker-center': pxToRem(9),
          '--slider-marker-size': pxToRem(6),
          '--slider-marker-inset': pxToRem(5),
        },
      },
    },
    variant: {
      outline: {
        thumb: {
          bg: 'colorPalette.600',
          borderColor: 'border.input',
          outline: '2px solid {colors.bg}',
        },
        range: {
          bg: 'colorPalette.300',
        },
      },
      solid: {
        track: {
          bg: 'bg.subtle',
          borderColor: 'colorPalette.solid',
        },
        range: {
          bg: 'colorPalette.solid',
        },
        thumb: {
          bg: 'fg',
          borderColor: 'colorPalette.solid',
        },
      },
    },
    orientation: {
      vertical: {
        root: {
          display: 'inline-flex',
        },
        control: {
          flexDirection: 'column',
          height: '100%',
          minWidth: 'var(--slider-thumb-size)',
        },
        track: {
          width: 'var(--slider-track-size)',
        },
        thumb: {
          left: '50%',
          translate: '-50% 0',
        },
        markerGroup: {
          insetStart: 'var(--slider-marker-center)',
          insetBlock: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'row',
        },
      },
      horizontal: {
        control: {
          flexDirection: 'row',
          width: '100%',
          minHeight: 'var(--slider-thumb-size)',
        },
        track: {
          height: 'var(--slider-track-size)',
        },
        thumb: {
          top: '50%',
          translate: '0 -50%',
        },
        markerGroup: {
          top: 'var(--slider-marker-center)',
          insetInline: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'column',
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    colorPalette: 'blue',
    variant: 'outline',
    orientation: 'horizontal',
  },
})

export default sliderRecipe
