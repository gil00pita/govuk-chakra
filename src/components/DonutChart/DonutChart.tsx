import type { UseChartReturn } from '@chakra-ui/charts'
import { PieChart as ChakraDonutChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface DonutChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraDonutChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function DonutChartRoot<T>({ chart, chartRootProps, ...props }: DonutChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraDonutChart data={chart.data} {...props} />
    </Chart.Root>
  )
}

export { DonutChartRoot }

export const DonutChart = Object.assign(DonutChartRoot, {
  Root: DonutChartRoot,
})
