import { TreeView as ChakraTreeView } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TreeViewProps = ComponentPropsWithoutRef<typeof ChakraTreeView.Root>

export const TreeViewRoot = ChakraTreeView.Root

export const TreeView = Object.assign(ChakraTreeView.Root, {
  ...ChakraTreeView,
})
