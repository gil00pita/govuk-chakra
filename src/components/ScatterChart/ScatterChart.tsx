import { ScatterChart as ChakraScatterChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type ScatterChartProps = ComponentPropsWithoutRef<typeof ChakraScatterChart>

export const ScatterChartRoot = ChakraScatterChart

export const ScatterChart = Object.assign(ChakraScatterChart, {
  Root: ChakraScatterChart,
})
