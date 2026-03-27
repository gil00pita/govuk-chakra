import { Editable as ChakraEditable } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type EditableProps = ComponentPropsWithoutRef<typeof ChakraEditable.Root>
type EditableComponent = typeof ChakraEditable.Root & typeof ChakraEditable

export const EditableRoot = ChakraEditable.Root

export const Editable: EditableComponent = Object.assign(ChakraEditable.Root, {
  ...ChakraEditable,
})
