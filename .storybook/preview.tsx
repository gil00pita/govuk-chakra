import { useEffect, useState, type FC, type PropsWithChildren } from 'react'
import type { Preview, ReactRenderer } from '@storybook/react-vite'

import { ChakraProvider } from '@chakra-ui/react'
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import { withThemeByClassName } from '@storybook/addon-themes'
import { create } from 'storybook/theming'

import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { colors } from '@/theme/colors'
import { fonts } from '@/theme/fonts'
import { govUkTheme } from '@/theme/govUkTheme'

const docsLightTheme = create({
  base: 'light',
  appBg: colors.common.white.value,
  appContentBg: colors.common.white.value,
  barBg: colors.common.white.value,
  bodyBg: colors.common.white.value,
  fontSize: 16,
  fontBase: fonts.body.value,
  fontCode: fonts.mono.value,
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
  fontSize: 16,
  fontBase: fonts.body.value,
  fontCode: fonts.mono.value,
  inputBg: colors.grey[900].value,
  inputBorder: colors.grey[700].value,
  textColor: colors.common.white.value,
  barTextColor: colors.common.white.value,
})

const getDocsTheme = () =>
  document.documentElement.classList.contains('dark') ? docsDarkTheme : docsLightTheme

const getColorMode = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

const StorybookProviders: FC<PropsWithChildren> = ({ children }) => {
  const [forcedTheme, setForcedTheme] = useState<'light' | 'dark'>(getColorMode)

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setForcedTheme(getColorMode())
    })

    observer.observe(root, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ChakraProvider value={govUkTheme}>
      <ColorModeProvider forcedTheme={forcedTheme}>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}

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
    <StorybookProviders>
      <DocsContainer context={context} theme={docsTheme}>
        {children}
      </DocsContainer>
    </StorybookProviders>
  )
}

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['GOV.UK', 'About', ['Styles', 'Patterns', 'Components'], 'Chakra Components', '*'],
      locales: '',
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
  // Stories opt out with parameters.a11y.disable only for intentional, documented exceptions.
  a11y: {
    test: 'error',
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
    <StorybookProviders>
      <Story />
    </StorybookProviders>
  ),
]

const preview: Preview = {
  parameters,
  decorators,
}

export default preview
