import { Marquee as ChakraMarquee } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type MarqueeProps = ComponentPropsWithoutRef<typeof ChakraMarquee.Root>
type MarqueeComponent = typeof ChakraMarquee.Root & typeof ChakraMarquee

export const MarqueeRoot = ChakraMarquee.Root

export const Marquee: MarqueeComponent = Object.assign(ChakraMarquee.Root, {
  ...ChakraMarquee,
})
