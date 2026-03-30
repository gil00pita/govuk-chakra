import type { UseChartReturn } from '@chakra-ui/charts'
import { RadarChart as ChakraRadarChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface RadarChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraRadarChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function RadarChartRoot<T>({ chart, chartRootProps, style, ...props }: RadarChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraRadarChart
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { RadarChartRoot }

export const RadarChart = Object.assign(RadarChartRoot, {
  Root: RadarChartRoot,
})
