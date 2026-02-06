import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'
import { govukFontSizes } from '../utils'

const govUkThemeConfig = defineConfig({
  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
      fontSize: govukFontSizes[19],
    },
  },
  theme: {
    tokens: {
      colors,
      fonts,
      radii: {
        none: { value: '0' },
        sm: { value: '0' },
        md: { value: '0' },
        lg: { value: '0' },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            base: '{colors.govuk.blue}',
            _dark: '{colors.govuk.darkBlue}',
          },
        },
        bg: {
          value: {
            base: '{colors.govuk.white}',
            _dark: '{colors.grey.900}',
          },
        },
        'bg.muted': {
          value: {
            base: '{colors.govuk.lightGrey}',
            _dark: '{colors.grey.800}',
          },
        },
        'bg.subtle': {
          value: {
            base: '{colors.grey.50}',
            _dark: '{colors.grey.800}',
          },
        },
        fg: {
          value: {
            base: '{colors.govuk.text}',
            _dark: '{colors.grey.50}',
          },
        },
        'fg.muted': {
          value: {
            base: '{colors.govuk.secondaryText}',
            _dark: '{colors.grey.200}',
          },
        },
        'fg.inverted': {
          value: {
            base: '{colors.govuk.white}',
            _dark: '{colors.govuk.text}',
          },
        },
        border: {
          value: {
            base: '{colors.govuk.border}',
            _dark: '{colors.grey.700}',
          },
        },
        'border.emphasized': {
          value: {
            base: '{colors.grey.400}',
            _dark: '{colors.grey.600}',
          },
        },
        link: {
          value: {
            base: '{colors.govuk.link}',
            _dark: '{colors.brand.200}',
          },
        },
        'link.hover': {
          value: {
            base: '{colors.govuk.linkHover}',
            _dark: '{colors.brand.100}',
          },
        },
        'link.visited': {
          value: {
            base: '{colors.govuk.linkVisited}',
            _dark: '{colors.purple.200}',
          },
        },
        'link.active': {
          value: {
            base: '{colors.govuk.linkActive}',
            _dark: '{colors.grey.50}',
          },
        },
        focus: {
          value: {
            base: '{colors.govuk.focusYellow}',
            _dark: '{colors.yellow.400}',
          },
        },
        'focus.text': {
          value: {
            base: '{colors.govuk.focusText}',
            _dark: '{colors.govuk.text}',
          },
        },
        danger: {
          value: {
            base: '{colors.govuk.red}',
            _dark: '{colors.red.300}',
          },
        },
        info: {
          value: {
            base: '{colors.govuk.blue}',
            _dark: '{colors.brand.200}',
          },
        },
        success: {
          value: {
            base: '{colors.govuk.green}',
            _dark: '{colors.green.300}',
          },
        },
        subtleBg: {
          value: {
            base: '{colors.govuk.lightGrey}',
            _dark: '{colors.grey.800}',
          },
        },
      },
    },
  },
})

export const govUkTheme = createSystem(defaultConfig, govUkThemeConfig)
