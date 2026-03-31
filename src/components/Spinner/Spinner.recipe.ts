import { defineRecipe } from '@chakra-ui/react'

const spinnerRecipe = defineRecipe({
  className: 'govuk-spinner',
  base: {
    display: 'inline-block',
    color: 'colorPalette.solid',
    borderColor: 'currentColor',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: 'full',
    width: 'var(--spinner-size)',
    height: 'var(--spinner-size)',
    animation: 'spin',
    animationDuration: 'slowest',
    '--spinner-track-color': { base: 'colors.grey.50', _dark: 'colors.grey.800' },
    borderBottomColor: 'var(--spinner-track-color)',
    borderInlineStartColor: 'var(--spinner-track-color)',
  },
  variants: {
    size: {
      inherit: { '--spinner-size': '1em' },
      xs: { '--spinner-size': 'sizes.3' },
      sm: { '--spinner-size': 'sizes.4' },
      md: { '--spinner-size': 'sizes.5' },
      lg: { '--spinner-size': 'sizes.8' },
      xl: { '--spinner-size': 'sizes.10' },
    },
  },
  compoundVariants: [
    {
      colorPalette: 'gray',
      css: {
        color: {
          _dark: 'grey.500',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    colorPalette: 'blue',
  },
})

export default spinnerRecipe
