import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type AvatarProps = ComponentPropsWithoutRef<typeof ChakraAvatar.Root>

export const AvatarRoot = ChakraAvatar.Root

export const Avatar = Object.assign(ChakraAvatar.Root, {
  ...ChakraAvatar,
})
