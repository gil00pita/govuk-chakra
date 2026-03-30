import { BarSegment as ChakraBarSegment } from '@chakra-ui/charts'
import type { ComponentPropsWithoutRef } from 'react'

export type BarSegmentProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Root>

const BarSegmentRoot = ({ fontFamily = 'body', ...props }: BarSegmentProps) => {
  return <ChakraBarSegment.Root fontFamily={fontFamily} {...props} />
}

export { BarSegmentRoot }

export const BarSegment = Object.assign(BarSegmentRoot, {
  ...ChakraBarSegment,
  Root: BarSegmentRoot,
})
