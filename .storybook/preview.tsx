import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import type { Preview, ReactRenderer } from '@storybook/react'

import { govUkTheme } from './../src/theme/index'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
    (Story) => (
      <ChakraProvider value={govUkTheme}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
