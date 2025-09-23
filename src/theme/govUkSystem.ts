import { createSystem, defaultConfig } from '@chakra-ui/react'

export const govUkSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        'brand.blue': { value: '#1d70b8' },
        'brand.blueDark': { value: '#003078' },
        'brand.yellow': { value: '#ffdd00' },
        'brand.green': { value: '#00703c' },
        'brand.red': { value: '#d4351c' },
        'brand.lightGrey': { value: '#f3f2f1' },
        'brand.midGrey': { value: '#b1b4b6' },
        'brand.darkGrey': { value: '#505a5f' },
        'brand.black': { value: '#0b0c0c' },
      },
      fonts: {
        heading: { value: `Arial, "Helvetica Neue", Helvetica, sans-serif` },
        body: { value: `Arial, "Helvetica Neue", Helvetica, sans-serif` },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0' },
        md: { value: '0' },
        lg: { value: '0' },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: '{colors.brand.blue}' },
        danger: { value: '{colors.brand.red}' },
        subtleBg: { value: '{colors.brand.lightGrey}' },
      },
    },
    globalCss: {
      body: {
        fontFamily: '{fonts.body}',
        color: '{colors.brand.black}',
        bg: 'white',
      },
      a: {
        color: '{colors.brand.blue}',
        textDecoration: 'underline',
        _hover: { color: '{colors.brand.blueDark}' },
      },
    },
    recipes: {
      button: {
        base: { fontWeight: 'bold', borderRadius: '0' },
        variants: {
          variant: {
            solid: {
              bg: 'brand.blue',
              color: 'white',
              _hover: { bg: 'brand.blueDark' },
            },
            secondary: {
              bg: 'white',
              borderWidth: '2px',
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
              bg: 'transparent',
              color: 'brand.blue',
              textDecoration: 'underline',
              px: 0,
              _hover: { color: 'brand.blueDark', textDecoration: 'underline' },
            },
          },
        },
        defaultVariants: { variant: 'solid' },
      },
    },
  },
})
