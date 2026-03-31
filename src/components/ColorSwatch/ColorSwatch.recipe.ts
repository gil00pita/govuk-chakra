import { defineRecipe } from '@chakra-ui/react'

const colorSwatchRecipe = defineRecipe({
  className: 'govuk-color-swatch',
  base: {
    boxSize: 'var(--swatch-size)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    borderWidth: '1px',
    borderColor: 'border.input',
    boxShadow: 'inset 0 0 0 1px {colors.white/20}',
    '--checker-size': '8px',
    '--checker-bg': 'colors.bg',
    '--checker-fg': { base: 'colors.grey.200', _dark: 'colors.grey.700' },
    background:
      'linear-gradient(var(--color), var(--color)), repeating-conic-gradient(var(--checker-fg) 0%, var(--checker-fg) 25%, var(--checker-bg) 0%, var(--checker-bg) 50%) 0% 50% / var(--checker-size) var(--checker-size) !important',
  },
  variants: {
    size: {
      '2xs': { '--swatch-size': 'sizes.3.5' },
      xs: { '--swatch-size': 'sizes.4' },
      sm: { '--swatch-size': 'sizes.4.5' },
      md: { '--swatch-size': 'sizes.5' },
      lg: { '--swatch-size': 'sizes.6' },
      xl: { '--swatch-size': 'sizes.7' },
      '2xl': { '--swatch-size': 'sizes.8' },
      inherit: { '--swatch-size': 'inherit' },
      full: { '--swatch-size': '100%' },
    },
    shape: {
      square: { borderRadius: 'none' },
      circle: { borderRadius: 'full' },
      rounded: { borderRadius: 'l1' },
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'rounded',
  },
})

export default colorSwatchRecipe
