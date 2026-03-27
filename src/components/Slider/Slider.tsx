import { Slider as ChakraSlider } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SliderProps = ComponentPropsWithoutRef<typeof ChakraSlider.Root>
type SliderComponent = typeof ChakraSlider.Root & typeof ChakraSlider

export const SliderRoot = ChakraSlider.Root

export const Slider: SliderComponent = Object.assign(ChakraSlider.Root, {
  ...ChakraSlider,
})
