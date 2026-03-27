import { Switch as ChakraSwitch } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SwitchProps = ComponentPropsWithoutRef<typeof ChakraSwitch.Root>

export const SwitchRoot = ChakraSwitch.Root

export const Switch = Object.assign(ChakraSwitch.Root, {
  ...ChakraSwitch,
})
