import { createSystem, defaultConfig } from '@chakra-ui/react'

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          blue: { value: '#1d70b8' },
          blueDark: { value: '#003078' },
          yellow: { value: '#ffdd00' },
          green: { value: '#00703c' },
          red: { value: '#d4351c' },
          lightGrey: { value: '#f3f2f1' },
          midGrey: { value: '#b1b4b6' },
          darkGrey: { value: '#505a5f' },
          black: { value: '#0b0c0c' },
        },
        focus: {
          outline: { value: '#ffdd00' },
        },
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
      // Direct CSS targeting Chakra button classes
      '[data-group="button"]': {
        fontWeight: 'bold !important',
        borderRadius: '0 !important',
      },
      '[data-group="button"][data-variant="solid"]': {
        backgroundColor: 'var(--colors-brand-blue) !important',
        color: 'white !important',
      },
      '[data-group="button"][data-variant="solid"]:hover': {
        backgroundColor: 'var(--colors-brand-blue-dark) !important',
      },
      // Direct link styling (covers both <a> and Chakra <Link>)
      'a, [data-group="link"], .chakra-link': {
        color: 'var(--colors-brand-blue) !important',
        textDecoration: 'underline !important',
        fontWeight: 'normal !important',
      },
      'a:hover, [data-group="link"]:hover, .chakra-link:hover': {
        color: 'var(--colors-brand-blue-dark) !important',
      },
      'a:focus, [data-group="link"]:focus, .chakra-link:focus': {
        outline: '3px solid var(--colors-brand-yellow) !important',
        outlineOffset: '0 !important',
        backgroundColor: 'var(--colors-brand-yellow) !important',
      },
    },
    // Remove recipes.link since it doesn't work for built-in Link
    // recipes: {
    //   link: { ... } // Remove this
    //   button: {
    //     base: {
    //       root: {
    //         fontWeight: 'bold',
    //         borderRadius: '0',
    //       },
    //     },
    //     variants: {
    //       variant: {
    //         solid: {
    //           root: {
    //             bg: 'brand.blue',
    //             color: 'white',
    //             _hover: { bg: 'brand.blueDark' },
    //           },
    //         },
    //         secondary: {
    //           root: {
    //             bg: 'white',
    //             borderWidth: '2px',
    //             borderColor: 'brand.blue',
    //             color: 'brand.blue',
    //             _hover: { bg: 'brand.lightGrey' },
    //           },
    //         },
    //       },
    //     },
    //     defaultVariants: {
    //       variant: 'solid',
    //     },
    //   },
    // },
    // components: {} // removed: not used with system recipes
  },
})
