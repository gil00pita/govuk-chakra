import { Slider as ChakraSlider } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SliderProps = ComponentPropsWithoutRef<typeof ChakraSlider.Root>

export const SliderRoot = ChakraSlider.Root

export const Slider = Object.assign(ChakraSlider.Root, {
  ...ChakraSlider,
})
