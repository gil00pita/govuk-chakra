import {
  Toast as ChakraToast,
  Toaster as ChakraToaster,
  createToaster as chakraCreateToaster,
} from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ToastProps = ComponentPropsWithoutRef<typeof ChakraToast.Root>

export const ToastRoot = ChakraToast.Root
export const Toaster = ChakraToaster
export const createToaster = chakraCreateToaster

export const Toast = Object.assign(ChakraToast.Root, {
  Toaster: ChakraToaster,
  createToaster: chakraCreateToaster,
  ...ChakraToast,
})
