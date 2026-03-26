import { useEffect, useState, type FC, type PropsWithChildren } from 'react'
import type { Preview, ReactRenderer } from '@storybook/react-vite'

import { ChakraProvider } from '@chakra-ui/react'
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import { withThemeByClassName } from '@storybook/addon-themes'
import { create } from 'storybook/theming'

import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { colors } from '@/theme/colors'
import { govUkTheme } from '@/theme/govUkTheme'

const docsLightTheme = create({
  base: 'light',
  appBg: colors.common.white.value,
  appContentBg: colors.common.white.value,
  barBg: colors.common.white.value,
  bodyBg: colors.common.white.value,
  inputBg: colors.grey[50].value,
  inputBorder: colors.grey[100].value,
  textColor: colors.grey[950].value,
  barTextColor: colors.grey[950].value,
})

const docsDarkTheme = create({
  base: 'dark',
  appBg: colors.grey[950].value,
  appContentBg: colors.grey[900].value,
  barBg: colors.grey[950].value,
  bodyBg: colors.grey[950].value,
  inputBg: colors.grey[900].value,
  inputBorder: colors.grey[700].value,
  textColor: colors.common.white.value,
  barTextColor: colors.common.white.value,
})

const getDocsTheme = () =>
  document.documentElement.classList.contains('dark') ? docsDarkTheme : docsLightTheme

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
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: colors.grey[900].value },
    ],
  },
  viewport: {
    options: INITIAL_VIEWPORTS,
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
