import { ColorPicker as ChakraColorPicker } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ColorPickerProps = ComponentPropsWithoutRef<typeof ChakraColorPicker.Root>

export const ColorPickerRoot = ChakraColorPicker.Root

export const ColorPicker = Object.assign(ChakraColorPicker.Root, {
  ...ChakraColorPicker,
})
