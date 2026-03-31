import { defineSlotRecipe } from '@chakra-ui/react'
import { colorPickerAnatomy } from '@chakra-ui/react/anatomy'

import colorSwatchRecipe from '@/components/ColorSwatch/ColorSwatch.recipe'
import { govukFont, govukFontSizes, govukTypeScale, pxToRem } from '@/utils'

const colorPickerRecipe = defineSlotRecipe({
  className: 'govuk-color-picker',
  slots: colorPickerAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(8),
      width: 'full',
    },
    label: {
      ...govukFont(19),
      fontWeight: '700',
      color: 'fg',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    control: {
      display: 'flex',
      alignItems: 'stretch',
      gap: pxToRem(8),
      width: 'full',
    },
    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      w: 'var(--color-picker-trigger-width)',
      h: 'var(--color-picker-input-height)',
      p: '0',
      gap: '0',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: pxToRem(2),
      borderColor: 'primary.500',
      border: { base: '2px solid {colors.primary.600}', _dark: '2px solid {colors.primary.400}' },
      boxShadow: 'none',
      bg: 'transparent',
      color: 'fg',
      _hover: {
        border: {
          base: '2px solid {colors.primary.700}',
          _dark: '2px solid {colors.primary.400}',
        },
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
      '&[data-fit-content]': {
        minH: 'auto',
        minW: 'auto',
        p: '0',
        border: '0',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      width: 'var(--color-picker-panel-width)',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      p: '0 0 4px 0',
      boxShadow: 'md',
      zIndex: 'popover',
      '& > .chakra-stack': {
        p: pxToRem(8),
      },
    },
    area: {
      width: 'full',
      aspectRatio: '4 / 3',
      minH: pxToRem(180),
      borderRadius: '0',
      overflow: 'hidden',
      borderWidth: '1px',
      borderColor: 'border',
    },
    areaThumb: {
      height: 'var(--color-picker-thumb-size)',
      width: 'var(--color-picker-thumb-size)',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'bg',
      boxShadow: 'sm',
    },
    areaBackground: {
      h: 'full',
    },
    channelSlider: {
      flex: '1',
      minW: 0,
    },
    channelSliderTrack: {
      height: 'var(--color-picker-slider-height)',
      borderRadius: '0',
      borderWidth: '1px',
      borderColor: 'border',
      overflow: 'hidden',
    },
    channelSliderThumb: {
      height: 'var(--color-picker-thumb-size)',
      width: 'var(--color-picker-thumb-size)',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'bg',
      boxShadow: 'sm',
      transform: 'translate(-50%, -50%)',
    },
    channelInput: {
      flex: '1',
      width: 'full',
      h: 'var(--color-picker-input-height)',
      borderRadius: '0',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'border.input',
      border: { base: '2px solid {colors.border.input}', _dark: '2px solid {colors.border.input}' },
      boxShadow: 'none',
      focusVisibleRing: 'none',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'body',
      fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
      lineHeight: {
        base: govukTypeScale[16].small.lineHeight,
        md: govukTypeScale[19].large.lineHeight,
      },
      px: pxToRem(12),
      py: pxToRem(5),
      _placeholder: {
        color: 'fg.muted',
        opacity: 1,
      },
      _hover: {
        borderColor: 'border.input',
      },
      _focusVisible: {
        borderColor: 'border.input',
        boxShadow: '0 0 0 3px {colors.focus}',
      },
      _focus: {
        borderColor: 'border.input',
        boxShadow: '0 0 0 3px {colors.focus}',
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
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
    channelText: {
      ...govukFont(16),
      color: 'fg.muted',
      textTransform: 'capitalize',
    },
    channelSliderLabel: {
      ...govukFont(16),
      color: 'fg',
    },
    channelSliderValueText: {
      ...govukFont(16),
      color: 'fg.muted',
      minW: pxToRem(32),
      textAlign: 'right',
    },
    swatchGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: pxToRem(8),
    },
    swatchTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0',
      borderColor: 'primary',
      _focusVisible: {
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'focus',
        outlineOffset: pxToRem(2),
      },
    },
    swatch: {
      ...colorSwatchRecipe.base,
      width: '100%',
      height: '100%',
      borderRadius: '0',
      borderWidth: '0',
      borderColor: 'transparent',
    },
    swatchIndicator: {
      color: 'fg.inverted',
    },
    transparencyGrid: {
      borderRadius: '0',
    },
    positioner: {
      zIndex: 'popover',
    },
    valueText: {
      ...govukFont(16),
      color: 'fg',
    },
    view: {
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(8),
    },
  },
  variants: {
    size: {
      '2xs': {
        root: {
          '--color-picker-input-height': pxToRem(28),
          '--color-picker-trigger-width': pxToRem(28),
          '--color-picker-swatch-width': pxToRem(24),
          '--color-picker-swatch-height': pxToRem(18),
        },
        content: {
          '--color-picker-panel-width': pxToRem(180),
          '--color-picker-swatch-width': pxToRem(24),
          '--color-picker-swatch-height': pxToRem(18),
          '--color-picker-slider-height': pxToRem(12),
          '--color-picker-thumb-size': pxToRem(12),
        },
        channelInput: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
      },
      xs: {
        root: {
          '--color-picker-input-height': pxToRem(32),
          '--color-picker-trigger-width': pxToRem(32),
          '--color-picker-swatch-width': pxToRem(28),
          '--color-picker-swatch-height': pxToRem(20),
        },
        content: {
          '--color-picker-panel-width': pxToRem(192),
          '--color-picker-swatch-width': pxToRem(28),
          '--color-picker-swatch-height': pxToRem(20),
          '--color-picker-slider-height': pxToRem(14),
          '--color-picker-thumb-size': pxToRem(14),
        },
        channelInput: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
      },
      sm: {
        root: {
          '--color-picker-input-height': pxToRem(36),
          '--color-picker-trigger-width': pxToRem(36),
          '--color-picker-swatch-width': pxToRem(30),
          '--color-picker-swatch-height': pxToRem(22),
        },
        content: {
          '--color-picker-panel-width': pxToRem(204),
          '--color-picker-swatch-width': pxToRem(30),
          '--color-picker-swatch-height': pxToRem(22),
          '--color-picker-slider-height': pxToRem(14),
          '--color-picker-thumb-size': pxToRem(14),
        },
        channelInput: {
          fontSize: govukFontSizes[16],
          lineHeight: govukTypeScale[16].small.lineHeight,
        },
      },
      md: {
        root: {
          '--color-picker-input-height': pxToRem(40),
          '--color-picker-trigger-width': pxToRem(40),
          '--color-picker-swatch-width': pxToRem(32),
          '--color-picker-swatch-height': pxToRem(24),
        },
        content: {
          '--color-picker-panel-width': pxToRem(216),
          '--color-picker-swatch-width': pxToRem(32),
          '--color-picker-swatch-height': pxToRem(24),
          '--color-picker-slider-height': pxToRem(16),
          '--color-picker-thumb-size': pxToRem(16),
        },
        channelInput: {
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[19] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[19].large.lineHeight,
          },
        },
      },
      lg: {
        root: {
          '--color-picker-input-height': pxToRem(44),
          '--color-picker-trigger-width': pxToRem(44),
          '--color-picker-swatch-width': pxToRem(36),
          '--color-picker-swatch-height': pxToRem(26),
        },
        content: {
          '--color-picker-panel-width': pxToRem(232),
          '--color-picker-swatch-width': pxToRem(36),
          '--color-picker-swatch-height': pxToRem(26),
          '--color-picker-slider-height': pxToRem(16),
          '--color-picker-thumb-size': pxToRem(16),
        },
        channelInput: {
          fontSize: { base: govukFontSizes[16], md: govukFontSizes[24] },
          lineHeight: {
            base: govukTypeScale[16].small.lineHeight,
            md: govukTypeScale[24].large.lineHeight,
          },
        },
      },
      xl: {
        root: {
          '--color-picker-input-height': pxToRem(48),
          '--color-picker-trigger-width': pxToRem(48),
          '--color-picker-swatch-width': pxToRem(38),
          '--color-picker-swatch-height': pxToRem(28),
        },
        content: {
          '--color-picker-panel-width': pxToRem(248),
          '--color-picker-swatch-width': pxToRem(38),
          '--color-picker-swatch-height': pxToRem(28),
          '--color-picker-slider-height': pxToRem(18),
          '--color-picker-thumb-size': pxToRem(18),
        },
        channelInput: {
          fontSize: { base: govukFontSizes[19], md: govukFontSizes[27] },
          lineHeight: {
            base: govukTypeScale[19].small.lineHeight,
            md: govukTypeScale[27].large.lineHeight,
          },
        },
      },
      '2xl': {
        root: {
          '--color-picker-input-height': pxToRem(56),
          '--color-picker-trigger-width': pxToRem(72),
          '--color-picker-swatch-width': pxToRem(46),
          '--color-picker-swatch-height': pxToRem(34),
        },
        content: {
          '--color-picker-panel-width': pxToRem(280),
          '--color-picker-swatch-width': pxToRem(46),
          '--color-picker-swatch-height': pxToRem(34),
          '--color-picker-slider-height': pxToRem(18),
          '--color-picker-thumb-size': pxToRem(18),
        },
        channelInput: {
          fontSize: { base: govukFontSizes[24], md: govukFontSizes[36] },
          lineHeight: {
            base: govukTypeScale[24].small.lineHeight,
            md: govukTypeScale[36].large.lineHeight,
          },
        },
      },
    },
    variant: {
      outline: {
        channelInput: {
          bg: 'transparent',
        },
        trigger: {
          bg: 'transparent',
        },
      },
      subtle: {
        channelInput: {
          bg: 'bg.muted',
        },
        trigger: {
          bg: 'bg.muted',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

export default colorPickerRecipe
