import { ProgressCircle as ChakraProgressCircle } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ProgressCircleProps = ComponentPropsWithoutRef<typeof ChakraProgressCircle.Root>

export const ProgressCircleRoot = ChakraProgressCircle.Root

export const ProgressCircle = Object.assign(ChakraProgressCircle.Root, {
  ...ChakraProgressCircle,
})
