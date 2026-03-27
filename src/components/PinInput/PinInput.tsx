import { PinInput as ChakraPinInput } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type PinInputProps = ComponentPropsWithoutRef<typeof ChakraPinInput.Root>

export const PinInputRoot = ChakraPinInput.Root

export const PinInput = Object.assign(ChakraPinInput.Root, {
  ...ChakraPinInput,
})
