import { HoverCard as ChakraHoverCard } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type HoverCardProps = ComponentPropsWithoutRef<typeof ChakraHoverCard.Root>

export const HoverCardRoot = ChakraHoverCard.Root

export const HoverCard = Object.assign(ChakraHoverCard.Root, {
  ...ChakraHoverCard,
})
