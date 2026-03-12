import type { Preview, ReactRenderer } from '@storybook/react'

import { ChakraProvider } from '@chakra-ui/react'
import { govUkTheme } from './../src/theme/index'
import { withThemeByClassName } from '@storybook/addon-themes'

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
}

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    defaultTheme: 'light',
    themes: {
      light: 'light',
      dark: 'dark',
    },
  }),
  (Story: React.FC) => (
    <ChakraProvider value={govUkTheme}>
      <Story />
    </ChakraProvider>
  ),
]

const preview: Preview = {
  parameters,
  decorators,
}

export default preview
