import { Status as ChakraStatus } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StatusProps = ComponentPropsWithoutRef<typeof ChakraStatus.Root>

export const StatusRoot = ChakraStatus.Root

export const Status = Object.assign(ChakraStatus.Root, {
  ...ChakraStatus,
})
