import { Status as ChakraStatus } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StatusProps = ComponentPropsWithoutRef<typeof ChakraStatus.Root>
type StatusComponent = typeof ChakraStatus.Root & typeof ChakraStatus

export const StatusRoot = ChakraStatus.Root

export const Status: StatusComponent = Object.assign(ChakraStatus.Root, {
  ...ChakraStatus,
})
