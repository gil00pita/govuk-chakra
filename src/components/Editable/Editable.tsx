import { Editable as ChakraEditable } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type EditableProps = ComponentPropsWithoutRef<typeof ChakraEditable.Root>

export const EditableRoot = ChakraEditable.Root

export const Editable = Object.assign(ChakraEditable.Root, {
  ...ChakraEditable,
})
