import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SpinnerProps = ComponentPropsWithoutRef<typeof ChakraSpinner>

export const SpinnerRoot = ChakraSpinner

export const Spinner = Object.assign(ChakraSpinner, {
  Root: ChakraSpinner,
})
