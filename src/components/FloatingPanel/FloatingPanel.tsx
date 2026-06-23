import { FloatingPanel as ChakraFloatingPanel } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type FloatingPanelProps = ComponentPropsWithoutRef<typeof ChakraFloatingPanel.Root>
type FloatingPanelComponent = typeof ChakraFloatingPanel.Root & typeof ChakraFloatingPanel

export const FloatingPanelRoot = ChakraFloatingPanel.Root

export const FloatingPanel: FloatingPanelComponent = Object.assign(ChakraFloatingPanel.Root, {
  ...ChakraFloatingPanel,
})
