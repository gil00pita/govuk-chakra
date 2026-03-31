import { ColorPicker as ChakraColorPicker } from '@chakra-ui/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

export type ColorPickerProps = ComponentPropsWithoutRef<typeof ChakraColorPicker.Root>
type ColorPickerComponent = typeof ChakraColorPicker.Root & typeof ChakraColorPicker

export const ColorPickerRoot = forwardRef<HTMLDivElement, ColorPickerProps>(
  function ColorPickerRoot({ size = 'md', variant = 'outline', ...props }, ref) {
    return <ChakraColorPicker.Root ref={ref} size={size} variant={variant} {...props} />
  }
)

export const ColorPicker: ColorPickerComponent = Object.assign(ChakraColorPicker.Root, {
  ...ChakraColorPicker,
  Root: ColorPickerRoot,
})
