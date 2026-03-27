import { LineChart as ChakraSparkline } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type SparklineProps = ComponentPropsWithoutRef<typeof ChakraSparkline>

export const SparklineRoot = ChakraSparkline

export const Sparkline = Object.assign(ChakraSparkline, {
  Root: ChakraSparkline,
})
