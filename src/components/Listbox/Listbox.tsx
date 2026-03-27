import { Listbox as ChakraListbox } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ListboxProps = ComponentPropsWithoutRef<typeof ChakraListbox.Root>

export const ListboxRoot = ChakraListbox.Root

export const Listbox = Object.assign(ChakraListbox.Root, {
  ...ChakraListbox,
})
