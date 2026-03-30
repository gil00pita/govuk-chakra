import type { UseChartReturn } from '@chakra-ui/charts'
import { AreaChart as ChakraAreaChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface AreaChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraAreaChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function AreaChartRoot<T>({ chart, chartRootProps, style, ...props }: AreaChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraAreaChart
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { AreaChartRoot }

export const AreaChart = Object.assign(AreaChartRoot, {
  Root: AreaChartRoot,
})
