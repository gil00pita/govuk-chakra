import { HoverCard as ChakraHoverCard } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type HoverCardProps = ComponentPropsWithoutRef<typeof ChakraHoverCard.Root>
type HoverCardComponent = typeof ChakraHoverCard.Root & typeof ChakraHoverCard

export const HoverCardRoot = ChakraHoverCard.Root

export const HoverCard: HoverCardComponent = Object.assign(ChakraHoverCard.Root, {
  ...ChakraHoverCard,
})
