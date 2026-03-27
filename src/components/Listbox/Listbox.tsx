import { Listbox as ChakraListbox } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ListboxProps = ComponentPropsWithoutRef<typeof ChakraListbox.Root>
type ListboxComponent = typeof ChakraListbox.Root & typeof ChakraListbox

export const ListboxRoot = ChakraListbox.Root

export const Listbox: ListboxComponent = Object.assign(ChakraListbox.Root, {
  ...ChakraListbox,
})
