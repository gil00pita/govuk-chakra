import { Progress as ChakraProgress } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ProgressProps = ComponentPropsWithoutRef<typeof ChakraProgress.Root>

export const ProgressRoot = ChakraProgress.Root

export const Progress = Object.assign(ChakraProgress.Root, {
  ...ChakraProgress,
})
