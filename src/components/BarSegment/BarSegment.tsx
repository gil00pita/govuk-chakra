import { BarSegment as ChakraBarSegment } from '@chakra-ui/charts'
import type { ComponentPropsWithoutRef } from 'react'

export type BarSegmentProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Root>

export const BarSegmentRoot = ChakraBarSegment.Root

export const BarSegment = Object.assign(ChakraBarSegment.Root, {
  ...ChakraBarSegment,
})
