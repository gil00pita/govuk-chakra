import { Highlight as ChakraHighlight } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type HighlightProps = ComponentPropsWithoutRef<typeof ChakraHighlight>

export const HighlightRoot = ChakraHighlight

export const Highlight = Object.assign(ChakraHighlight, {
  Root: ChakraHighlight,
})
