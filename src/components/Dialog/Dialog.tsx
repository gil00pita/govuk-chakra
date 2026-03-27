import { Dialog as ChakraDialog } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type DialogProps = ComponentPropsWithoutRef<typeof ChakraDialog.Root>
type DialogComponent = typeof ChakraDialog.Root & typeof ChakraDialog

export const DialogRoot = ChakraDialog.Root

export const Dialog: DialogComponent = Object.assign(ChakraDialog.Root, {
  ...ChakraDialog,
})
