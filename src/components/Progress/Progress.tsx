import { Progress as ChakraProgress } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ProgressProps = ComponentPropsWithoutRef<typeof ChakraProgress.Root>
type ProgressComponent = typeof ChakraProgress.Root & typeof ChakraProgress

export const ProgressRoot = ChakraProgress.Root

export const Progress: ProgressComponent = Object.assign(ChakraProgress.Root, {
  ...ChakraProgress,
})
