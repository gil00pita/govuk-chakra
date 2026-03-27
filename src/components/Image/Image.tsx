import { Image as ChakraImage } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ImageProps = ComponentPropsWithoutRef<typeof ChakraImage>

export const ImageRoot = ChakraImage

export const Image = Object.assign(ChakraImage, {
  Root: ChakraImage,
})
