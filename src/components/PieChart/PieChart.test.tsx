import { useChart } from '@chakra-ui/charts'
import { Pie } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { PieChart } from './PieChart'

function PieChartHarness() {
  const chart = useChart({
    data: [
      { name: 'windows', value: 400, color: 'blue.solid' },
      { name: 'mac', value: 300, color: 'orange.solid' },
      { name: 'linux', value: 300, color: 'pink.solid' },
    ],
  })

  return (
    <PieChart.Root chart={chart} chartRootProps={{ boxSize: '200px' }} width={200} height={200}>
      <Pie
        isAnimationActive={false}
        data={chart.data}
        dataKey={chart.key('value')}
        fill={chart.color('blue.solid')}
      />
    </PieChart.Root>
  )
}

describe('PieChart', () => {
  it('renders a pie chart without runtime errors', () => {
    const { container } = renderWithProvider(<PieChartHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
