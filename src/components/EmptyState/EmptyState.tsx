import { EmptyState as ChakraEmptyState } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type EmptyStateProps = ComponentPropsWithoutRef<typeof ChakraEmptyState.Root>

export const EmptyStateRoot = ChakraEmptyState.Root

export const EmptyState = Object.assign(ChakraEmptyState.Root, {
  ...ChakraEmptyState,
})
