import { Popover as ChakraPopover } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type PopoverProps = ComponentPropsWithoutRef<typeof ChakraPopover.Root>
type PopoverComponent = typeof ChakraPopover.Root & typeof ChakraPopover

export const PopoverRoot = ChakraPopover.Root

export const Popover: PopoverComponent = Object.assign(ChakraPopover.Root, {
  ...ChakraPopover,
})
