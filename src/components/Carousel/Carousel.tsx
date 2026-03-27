import { Carousel as ChakraCarousel } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CarouselProps = ComponentPropsWithoutRef<typeof ChakraCarousel.Root>
type CarouselComponent = typeof ChakraCarousel.Root & typeof ChakraCarousel

export const CarouselRoot = ChakraCarousel.Root

export const Carousel: CarouselComponent = Object.assign(ChakraCarousel.Root, {
  ...ChakraCarousel,
})
