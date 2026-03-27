import { BarChart as ChakraBarChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type BarChartProps = ComponentPropsWithoutRef<typeof ChakraBarChart>

export const BarChartRoot = ChakraBarChart

export const BarChart = Object.assign(ChakraBarChart, {
  Root: ChakraBarChart,
})
