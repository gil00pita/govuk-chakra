import { PinInput as ChakraPinInput } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type PinInputProps = ComponentPropsWithoutRef<typeof ChakraPinInput.Root>
type PinInputComponent = typeof ChakraPinInput.Root & typeof ChakraPinInput

export const PinInputRoot = ChakraPinInput.Root

export const PinInput: PinInputComponent = Object.assign(ChakraPinInput.Root, {
  ...ChakraPinInput,
})
