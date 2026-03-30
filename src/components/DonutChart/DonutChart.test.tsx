import { useChart } from '@chakra-ui/charts'
import { Pie } from 'recharts'

import { Chart } from '@/components/Chart'
import { renderWithProvider } from '@/test/renderWithProvider'
import { DonutChart } from './DonutChart'

function DonutChartHarness() {
  const chart = useChart({
    data: [
      { name: 'windows', value: 400, color: 'blue.solid' },
      { name: 'mac', value: 300, color: 'orange.solid' },
      { name: 'linux', value: 300, color: 'pink.solid' },
    ],
  })

  return (
    <DonutChart.Root chart={chart} chartRootProps={{ boxSize: '200px' }} width={200} height={200}>
      <Chart.Tooltip cursor={false} animationDuration={100} hideLabel />
      <Pie
        innerRadius={80}
        outerRadius={100}
        isAnimationActive={false}
        data={chart.data}
        dataKey={chart.key('value')}
        fill={chart.color('blue.solid')}
      />
    </DonutChart.Root>
  )
}

describe('DonutChart', () => {
  it('renders a donut chart without runtime errors', () => {
    const { container } = renderWithProvider(<DonutChartHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
