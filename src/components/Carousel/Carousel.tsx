import { Carousel as ChakraCarousel } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CarouselProps = ComponentPropsWithoutRef<typeof ChakraCarousel.Root>

export const CarouselRoot = ChakraCarousel.Root

export const Carousel = Object.assign(ChakraCarousel.Root, {
  ...ChakraCarousel,
})
