import { AreaChart as ChakraAreaChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type AreaChartProps = ComponentPropsWithoutRef<typeof ChakraAreaChart>

export const AreaChartRoot = ChakraAreaChart

export const AreaChart = Object.assign(ChakraAreaChart, {
  Root: ChakraAreaChart,
})
