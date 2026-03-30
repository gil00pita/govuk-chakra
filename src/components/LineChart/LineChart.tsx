import type { UseChartReturn } from '@chakra-ui/charts'
import { LineChart as ChakraLineChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface LineChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraLineChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function LineChartRoot<T>({ chart, chartRootProps, style, ...props }: LineChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraLineChart
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { LineChartRoot }

export const LineChart = Object.assign(LineChartRoot, {
  Root: LineChartRoot,
})
