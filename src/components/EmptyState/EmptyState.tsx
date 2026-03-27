import { EmptyState as ChakraEmptyState } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type EmptyStateProps = ComponentPropsWithoutRef<typeof ChakraEmptyState.Root>
type EmptyStateComponent = typeof ChakraEmptyState.Root & typeof ChakraEmptyState

export const EmptyStateRoot = ChakraEmptyState.Root

export const EmptyState: EmptyStateComponent = Object.assign(ChakraEmptyState.Root, {
  ...ChakraEmptyState,
})
