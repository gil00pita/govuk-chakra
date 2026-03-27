import { ColorPicker as ChakraColorPicker } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ColorPickerProps = ComponentPropsWithoutRef<typeof ChakraColorPicker.Root>
type ColorPickerComponent = typeof ChakraColorPicker.Root & typeof ChakraColorPicker

export const ColorPickerRoot = ChakraColorPicker.Root

export const ColorPicker: ColorPickerComponent = Object.assign(ChakraColorPicker.Root, {
  ...ChakraColorPicker,
})
