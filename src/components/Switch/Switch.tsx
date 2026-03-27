import { Switch as ChakraSwitch } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SwitchProps = ComponentPropsWithoutRef<typeof ChakraSwitch.Root>
type SwitchComponent = typeof ChakraSwitch.Root & typeof ChakraSwitch

export const SwitchRoot = ChakraSwitch.Root

export const Switch: SwitchComponent = Object.assign(ChakraSwitch.Root, {
  ...ChakraSwitch,
})
