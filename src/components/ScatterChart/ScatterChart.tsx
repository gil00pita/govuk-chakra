import type { UseChartReturn } from '@chakra-ui/charts'
import { ScatterChart as ChakraScatterChart } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface ScatterChartProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraScatterChart>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function ScatterChartRoot<T>({ chart, chartRootProps, style, ...props }: ScatterChartProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraScatterChart
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { ScatterChartRoot }

export const ScatterChart = Object.assign(ScatterChartRoot, {
  Root: ScatterChartRoot,
})
