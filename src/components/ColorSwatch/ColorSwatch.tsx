import {
  ColorSwatch as ChakraColorSwatch,
  ColorSwatchMix as ChakraColorSwatchMix,
} from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ColorSwatchProps = ComponentPropsWithoutRef<typeof ChakraColorSwatch>
export type ColorSwatchMixProps = ComponentPropsWithoutRef<typeof ChakraColorSwatchMix>

export const ColorSwatchRoot = ChakraColorSwatch
export const ColorSwatchMix = ChakraColorSwatchMix

export const ColorSwatch = Object.assign(ChakraColorSwatch, {
  Root: ChakraColorSwatch,
  Mix: ChakraColorSwatchMix,
})
