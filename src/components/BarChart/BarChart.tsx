import type { UseChartReturn } from '@chakra-ui/charts'
import { BarChart as ChakraBarChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface BarChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraBarChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function BarChartRoot<T>({ chart, chartRootProps, ...props }: BarChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraBarChart data={chart.data} {...props} />
    </Chart.Root>
  )
}

export { BarChartRoot }

export const BarChart = Object.assign(BarChartRoot, {
  Root: BarChartRoot,
})
