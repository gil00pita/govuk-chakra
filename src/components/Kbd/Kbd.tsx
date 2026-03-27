import { Kbd as ChakraKbd } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type KbdProps = ComponentPropsWithoutRef<typeof ChakraKbd>

export const KbdRoot = ChakraKbd

export const Kbd = Object.assign(ChakraKbd, {
  Root: ChakraKbd,
})
