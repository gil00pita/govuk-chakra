import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type AvatarProps = ComponentPropsWithoutRef<typeof ChakraAvatar.Root>
type AvatarComponent = typeof ChakraAvatar.Root & typeof ChakraAvatar

export const AvatarRoot = ChakraAvatar.Root

export const Avatar: AvatarComponent = Object.assign(ChakraAvatar.Root, {
  ...ChakraAvatar,
})
