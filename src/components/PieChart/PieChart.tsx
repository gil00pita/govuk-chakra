import { PieChart as ChakraPieChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type PieChartProps = ComponentPropsWithoutRef<typeof ChakraPieChart>

export const PieChartRoot = ChakraPieChart

export const PieChart = Object.assign(ChakraPieChart, {
  Root: ChakraPieChart,
})
