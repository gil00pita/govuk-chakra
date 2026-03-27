import { Collapsible as ChakraCollapsible } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CollapsibleProps = ComponentPropsWithoutRef<typeof ChakraCollapsible.Root>

export const CollapsibleRoot = ChakraCollapsible.Root

export const Collapsible = Object.assign(ChakraCollapsible.Root, {
  ...ChakraCollapsible,
})
