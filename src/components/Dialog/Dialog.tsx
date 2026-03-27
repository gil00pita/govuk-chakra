import { Dialog as ChakraDialog } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type DialogProps = ComponentPropsWithoutRef<typeof ChakraDialog.Root>

export const DialogRoot = ChakraDialog.Root

export const Dialog = Object.assign(ChakraDialog.Root, {
  ...ChakraDialog,
})
