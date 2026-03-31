import { Highlight as ChakraHighlight, useChakraContext, useRecipe } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

type HighlightVariantOptions = readonly ['subtle', 'solid', 'outline', 'plain']
type HighlightColorPaletteOptions = readonly [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
]

type HighlightVariant = HighlightVariantOptions[number]
type HighlightColorPalette = HighlightColorPaletteOptions[number]

export interface HighlightProps extends ComponentPropsWithoutRef<typeof ChakraHighlight> {
  variant?: HighlightVariant
  colorPalette?: HighlightColorPalette
}

export function HighlightRoot({ colorPalette, styles, variant, ...props }: HighlightProps) {
  const recipe = useRecipe({ key: 'highlight' })
  const sys = useChakraContext()
  const recipeStyles = recipe({ variant, colorPalette })
  const resolvedStyles = styles ? sys.css(recipeStyles, styles) : recipeStyles

  return <ChakraHighlight {...props} styles={resolvedStyles} />
}

export const Highlight = Object.assign(HighlightRoot, {
  Root: HighlightRoot,
})
