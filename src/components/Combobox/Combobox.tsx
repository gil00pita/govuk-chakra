import { Combobox as ChakraCombobox } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ComboboxProps = ComponentPropsWithoutRef<typeof ChakraCombobox.Root>
type ComboboxComponent = typeof ChakraCombobox.Root & typeof ChakraCombobox

export const ComboboxRoot = ChakraCombobox.Root

export const Combobox: ComboboxComponent = Object.assign(ChakraCombobox.Root, {
  ...ChakraCombobox,
})
