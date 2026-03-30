import type { UseChartReturn } from '@chakra-ui/charts'
import { LineChart as ChakraSparkline } from 'recharts'
import type { ComponentPropsWithoutRef } from 'react'

import { Chart, type ChartRootProps } from '@/components/Chart'

export interface SparklineProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraSparkline>,
  'data'
> {
  chart: UseChartReturn<T>
  chartRootProps?: Omit<ChartRootProps<T>, 'chart' | 'children'>
}

function SparklineRoot<T>({ chart, chartRootProps, style, ...props }: SparklineProps<T>) {
  return (
    <Chart.Root chart={chart} {...chartRootProps}>
      <ChakraSparkline
        data={chart.data}
        style={{ fontFamily: 'var(--chakra-fonts-body)', ...style }}
        {...props}
      />
    </Chart.Root>
  )
}

export { SparklineRoot }

export const Sparkline = Object.assign(SparklineRoot, {
  Root: SparklineRoot,
})
