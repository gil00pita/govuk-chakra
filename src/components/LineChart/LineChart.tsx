import { LineChart as ChakraLineChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type LineChartProps = ComponentPropsWithoutRef<typeof ChakraLineChart>

export const LineChartRoot = ChakraLineChart

export const LineChart = Object.assign(ChakraLineChart, {
  Root: ChakraLineChart,
})
