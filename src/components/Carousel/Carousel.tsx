import { Carousel as ChakraCarousel } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react'

type CarouselColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink'

type CarouselSize = 'sm' | 'md' | 'lg'
type CarouselVariant = 'subtle' | 'solid' | 'outline' | 'plain'

export interface CarouselProps extends ComponentPropsWithoutRef<typeof ChakraCarousel.Root> {
  colorPalette?: CarouselColorPalette
  size?: CarouselSize
  variant?: CarouselVariant
}

type CarouselRootComponent = ForwardRefExoticComponent<
  CarouselProps & RefAttributes<HTMLDivElement>
>
type CarouselComponent = typeof ChakraCarousel & { Root: CarouselRootComponent }

export const CarouselRoot = ChakraCarousel.Root as unknown as CarouselRootComponent

export const Carousel = Object.assign(CarouselRoot, {
  ...ChakraCarousel,
  Root: CarouselRoot,
}) as CarouselComponent
