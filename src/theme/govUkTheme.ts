import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'

const govUkThemeConfig = defineConfig({
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
            base: '{colors.brand.blue}',
            _dark: '{colors.brand.blueDark}',
          },
        },
        danger: { value: '{colors.brand.red}' },
        info: { value: '{colors.brand.blue}' },
        success: { value: '{colors.brand.green}' },
        subtleBg: { value: '{colors.brand.lightGrey}' },
      },
    },
  },
})

export const govUkTheme = createSystem(defaultConfig, govUkThemeConfig)
