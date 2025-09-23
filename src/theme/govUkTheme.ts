import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    blue: '#1d70b8',
    blueDark: '#003078',
    yellow: '#ffdd00',
    green: '#00703c',
    red: '#d4351c',
    lightGrey: '#f3f2f1',
    midGrey: '#b1b4b6',
    darkGrey: '#505a5f',
    black: '#0b0c0c',
  },
}

const semanticTokens = {
  colors: {
    primary: {
      default: 'brand.blue',
      _dark: 'brand.blueDark',
    },
    danger: 'brand.red',
    info: 'brand.blue',
    success: 'brand.green',
    subtleBg: 'brand.lightGrey',
  },
}

const fonts = {
  heading: `Arial, "Helvetica Neue", Helvetica, sans-serif`,
  body: `Arial, "Helvetica Neue", Helvetica, sans-serif`,
}

const components = {
  Button: {
    baseStyle: {
      borderRadius: 0,
      fontWeight: 'bold',
    },
    variants: {
      solid: {
        bg: 'brand.blue',
        color: 'white',
        _hover: { bg: 'brand.blueDark' },
        _active: { bg: 'brand.blueDark' },
      },
      secondary: {
        bg: 'white',
        border: '2px solid',
        borderColor: 'brand.blue',
        color: 'brand.blue',
        _hover: { bg: 'brand.lightGrey' },
      },
      danger: {
        bg: 'brand.red',
        color: 'white',
        _hover: { bg: '#aa2a14' },
      },
      link: {
        color: 'brand.blue',
        textDecoration: 'underline',
        _hover: { color: 'brand.blueDark', textDecoration: 'underline' },
      },
    },
    defaultProps: {
      variant: 'solid',
    },
  },
  Link: {
    baseStyle: {
      color: 'brand.blue',
      textDecoration: 'underline',
      _hover: { color: 'brand.blueDark', textDecoration: 'underline' },
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'brand.yellow',
        outlineOffset: '0',
      },
    },
  },
  Accordion: {
    baseStyle: {
      container: {
        border: '1px solid',
        borderColor: 'brand.midGrey',
        _first: { borderTopRadius: 'md' },
        _last: { borderBottomRadius: 'md' },
      },
      button: {
        fontWeight: 'bold',
        textAlign: 'left',
        _hover: { bg: 'brand.lightGrey' },
        _expanded: { bg: 'brand.lightGrey' },
      },
      panel: {
        bg: 'white',
        pt: 3,
        pb: 5,
        lineHeight: '1.5',
      },
      icon: {
        color: 'brand.blue',
      },
    },
  },
  Textarea: {
    baseStyle: {
      borderRadius: 0,
    },
    variants: {
      outline: {
        borderColor: 'brand.midGrey',
        _hover: { borderColor: 'brand.darkGrey' },
        _focusVisible: {
          outline: '3px solid',
          outlineColor: 'brand.yellow',
          borderColor: 'brand.black',
        },
      },
    },
    defaultProps: { variant: 'outline' },
  },
  Checkbox: {
    baseStyle: {
      control: {
        borderRadius: 0,
        borderColor: 'brand.darkGrey',
        _checked: {
          bg: 'brand.blue',
          borderColor: 'brand.blue',
          _hover: { bg: 'brand.blueDark', borderColor: 'brand.blueDark' },
        },
        _focusVisible: {
          outline: '3px solid',
          outlineColor: 'brand.yellow',
          outlineOffset: '2px',
        },
      },
      label: {
        fontWeight: 'normal',
      },
    },
  },
}

export const govUkTheme = extendTheme({
  config,
  colors,
  semanticTokens,
  fonts,
  radii: { none: '0', sm: '0', md: '0', lg: '0' },
  components,
})
