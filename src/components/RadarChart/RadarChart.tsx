import { RadarChart as ChakraRadarChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

export type RadarChartProps = ComponentPropsWithoutRef<typeof ChakraRadarChart>

export const RadarChartRoot = ChakraRadarChart

export const RadarChart = Object.assign(ChakraRadarChart, {
  Root: ChakraRadarChart,
})
