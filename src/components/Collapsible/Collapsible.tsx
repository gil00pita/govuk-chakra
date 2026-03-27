import { Collapsible as ChakraCollapsible } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CollapsibleProps = ComponentPropsWithoutRef<typeof ChakraCollapsible.Root>
type CollapsibleComponent = typeof ChakraCollapsible.Root & typeof ChakraCollapsible

export const CollapsibleRoot = ChakraCollapsible.Root

export const Collapsible: CollapsibleComponent = Object.assign(ChakraCollapsible.Root, {
  ...ChakraCollapsible,
})
