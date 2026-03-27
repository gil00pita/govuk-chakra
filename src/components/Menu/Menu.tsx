import { Menu as ChakraMenu } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type MenuProps = ComponentPropsWithoutRef<typeof ChakraMenu.Root>

export const MenuRoot = ChakraMenu.Root

export const Menu = Object.assign(ChakraMenu.Root, {
  ...ChakraMenu,
})
