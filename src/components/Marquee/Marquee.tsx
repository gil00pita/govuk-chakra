import { Marquee as ChakraMarquee } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type MarqueeProps = ComponentPropsWithoutRef<typeof ChakraMarquee.Root>

export const MarqueeRoot = ChakraMarquee.Root

export const Marquee = Object.assign(ChakraMarquee.Root, {
  ...ChakraMarquee,
})
