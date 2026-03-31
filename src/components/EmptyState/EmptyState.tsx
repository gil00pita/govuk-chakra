import { EmptyState as ChakraEmptyState } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react'

type EmptyStateColorPalette =
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

type EmptyStateSize = 'sm' | 'md' | 'lg'
type EmptyStateVariant = 'subtle' | 'solid' | 'outline' | 'plain'

type ChakraEmptyStateRootProps = Omit<
  ComponentPropsWithoutRef<typeof ChakraEmptyState.Root>,
  'colorPalette' | 'size' | 'variant'
>

export interface EmptyStateProps extends ChakraEmptyStateRootProps {
  colorPalette?: EmptyStateColorPalette
  size?: EmptyStateSize
  variant?: EmptyStateVariant
}

type EmptyStateRootComponent = ForwardRefExoticComponent<
  EmptyStateProps & RefAttributes<HTMLDivElement>
>
type EmptyStateComponent = typeof ChakraEmptyState & { Root: EmptyStateRootComponent }

export const EmptyStateRoot = ChakraEmptyState.Root as unknown as EmptyStateRootComponent

export const EmptyState = Object.assign(EmptyStateRoot, {
  ...ChakraEmptyState,
  Root: EmptyStateRoot,
}) as EmptyStateComponent
