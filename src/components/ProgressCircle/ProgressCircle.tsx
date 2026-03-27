import { ProgressCircle as ChakraProgressCircle } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ProgressCircleProps = ComponentPropsWithoutRef<typeof ChakraProgressCircle.Root>
type ProgressCircleComponent = typeof ChakraProgressCircle.Root & typeof ChakraProgressCircle

export const ProgressCircleRoot = ChakraProgressCircle.Root

export const ProgressCircle: ProgressCircleComponent = Object.assign(ChakraProgressCircle.Root, {
  ...ChakraProgressCircle,
})
