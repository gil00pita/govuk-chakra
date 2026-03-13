import { useEffect, useState, type FC, type PropsWithChildren } from 'react'
import type { Preview, ReactRenderer } from '@storybook/react'

import { ChakraProvider } from '@chakra-ui/react'
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import { withThemeByClassName } from '@storybook/addon-themes'
import { themes } from 'storybook/theming'

import { govUkTheme } from '@/theme/govUkTheme'

const getDocsTheme = () =>
  document.documentElement.classList.contains('dark') ? themes.dark : themes.light

const ThemedDocsContainer: FC<PropsWithChildren<DocsContainerProps<ReactRenderer>>> = ({
  children,
  context,
}) => {
  const [docsTheme, setDocsTheme] = useState(getDocsTheme)

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setDocsTheme(getDocsTheme())
    })

    observer.observe(root, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <DocsContainer context={context} theme={docsTheme}>
      {children}
    </DocsContainer>
  )
}

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  docs: {
    container: ThemedDocsContainer,
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
  (Story: FC) => (
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
