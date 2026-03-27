import { Combobox as ChakraCombobox } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ComboboxProps = ComponentPropsWithoutRef<typeof ChakraCombobox.Root>

export const ComboboxRoot = ChakraCombobox.Root

export const Combobox = Object.assign(ChakraCombobox.Root, {
  ...ChakraCombobox,
})
