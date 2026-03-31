import { Kbd as ChakraKbd } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type KbdProps = ComponentPropsWithoutRef<typeof ChakraKbd>

export function KbdRoot({ ...props }: KbdProps) {
  return <ChakraKbd {...props} />
}

export const Kbd = Object.assign(KbdRoot, {
  Root: KbdRoot,
})
