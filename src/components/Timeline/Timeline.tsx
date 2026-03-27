import { Timeline as ChakraTimeline } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TimelineProps = ComponentPropsWithoutRef<typeof ChakraTimeline.Root>
type TimelineComponent = typeof ChakraTimeline.Root & typeof ChakraTimeline

export const TimelineRoot = ChakraTimeline.Root

export const Timeline: TimelineComponent = Object.assign(ChakraTimeline.Root, {
  ...ChakraTimeline,
})
