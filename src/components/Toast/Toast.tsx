import {
  Toast as ChakraToast,
  Toaster as ChakraToaster,
  Icon,
  createToaster as chakraCreateToaster,
} from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { FaXmark } from 'react-icons/fa6'

export type ToastProps = ComponentPropsWithoutRef<typeof ChakraToast.Root>

export const ToastRoot = ChakraToast.Root
export const ToastCloseTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof ChakraToast.CloseTrigger>
>(function ToastCloseTrigger(props, ref) {
  return (
    <ChakraToast.CloseTrigger ref={ref} {...props}>
      {props.children ?? (
        <Icon>
          <FaXmark />
        </Icon>
      )}
    </ChakraToast.CloseTrigger>
  )
})
export const Toaster = ChakraToaster
export const createToaster = chakraCreateToaster

export const Toast = Object.assign(ChakraToast.Root, {
  Toaster: ChakraToaster,
  createToaster: chakraCreateToaster,
  ...ChakraToast,
  CloseTrigger: ToastCloseTrigger,
})
