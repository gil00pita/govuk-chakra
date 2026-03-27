import { Menu as ChakraMenu } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type MenuProps = ComponentPropsWithoutRef<typeof ChakraMenu.Root>
type MenuComponent = typeof ChakraMenu.Root & typeof ChakraMenu

export const MenuRoot = ChakraMenu.Root

export const Menu: MenuComponent = Object.assign(ChakraMenu.Root, {
  ...ChakraMenu,
})
