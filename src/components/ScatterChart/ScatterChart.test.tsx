import { useChart } from '@chakra-ui/charts'
import { Scatter, XAxis, YAxis } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { ScatterChart } from './ScatterChart'

function ScatterChartHarness() {
  const chart = useChart({
    data: [
      { temperature: 14.2, sales: 215 },
      { temperature: 16.4, sales: 325 },
      { temperature: 11.9, sales: 185 },
    ],
    series: [{ name: 'sales', color: 'teal.solid' }],
  })

  return (
    <ScatterChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} width={400} height={240}>
      <XAxis type="number" dataKey={chart.key('temperature')} />
      <YAxis type="number" dataKey={chart.key('sales')} />
      <Scatter data={chart.data} fill={chart.color('teal.solid')} isAnimationActive={false} />
    </ScatterChart.Root>
  )
}

describe('ScatterChart', () => {
  it('renders a scatter chart without runtime errors', () => {
    const { container } = renderWithProvider(<ScatterChartHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
