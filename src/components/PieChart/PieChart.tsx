import type { UseChartReturn } from '@chakra-ui/charts'
import { PieChart as ChakraPieChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface PieChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraPieChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function PieChartRoot<T>({ chart, chartRootProps, style, ...props }: PieChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraPieChart
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { PieChartRoot }

export const PieChart = Object.assign(PieChartRoot, {
  Root: PieChartRoot,
})
