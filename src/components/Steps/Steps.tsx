import { Steps as ChakraSteps } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StepsProps = ComponentPropsWithoutRef<typeof ChakraSteps.Root>

export const StepsRoot = ChakraSteps.Root

export const Steps = Object.assign(ChakraSteps.Root, {
  ...ChakraSteps,
})
