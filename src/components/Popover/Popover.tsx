import { Popover as ChakraPopover } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type PopoverProps = ComponentPropsWithoutRef<typeof ChakraPopover.Root>

export const PopoverRoot = ChakraPopover.Root

export const Popover = Object.assign(ChakraPopover.Root, {
  ...ChakraPopover,
})
