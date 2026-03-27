import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type IconButtonProps = ComponentPropsWithoutRef<typeof ChakraIconButton>

export const IconButtonRoot = ChakraIconButton

export const IconButton = Object.assign(ChakraIconButton, {
  Root: ChakraIconButton,
})
