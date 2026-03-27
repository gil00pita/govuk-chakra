import { Steps as ChakraSteps } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StepsProps = ComponentPropsWithoutRef<typeof ChakraSteps.Root>
type StepsComponent = typeof ChakraSteps.Root & typeof ChakraSteps

export const StepsRoot = ChakraSteps.Root

export const Steps: StepsComponent = Object.assign(ChakraSteps.Root, {
  ...ChakraSteps,
})
