import { Timeline as ChakraTimeline } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TimelineProps = ComponentPropsWithoutRef<typeof ChakraTimeline.Root>

export const TimelineRoot = ChakraTimeline.Root

export const Timeline = Object.assign(ChakraTimeline.Root, {
  ...ChakraTimeline,
})
