import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

export type SpinnerProps = ComponentPropsWithoutRef<typeof ChakraSpinner>

const SpinnerRoot = forwardRef<HTMLSpanElement, SpinnerProps>(function SpinnerRoot(
  { ...props },
  ref
) {
  return <ChakraSpinner ref={ref} {...props} />
})

export { SpinnerRoot }

export const Spinner = Object.assign(SpinnerRoot, {
  Root: SpinnerRoot,
})
