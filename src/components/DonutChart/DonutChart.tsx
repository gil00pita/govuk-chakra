import { PieChart as ChakraDonutChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type DonutChartProps = ComponentPropsWithoutRef<typeof ChakraDonutChart>

export const DonutChartRoot = ChakraDonutChart

export const DonutChart = Object.assign(ChakraDonutChart, {
  Root: ChakraDonutChart,
})
