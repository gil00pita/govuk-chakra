import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { LineChart } from './LineChart'

function LineChartHarness() {
  const chart = useChart({
    data: [
      { sale: 10, month: 'January' },
      { sale: 95, month: 'February' },
      { sale: 87, month: 'March' },
    ],
    series: [{ name: 'sale', color: 'teal.solid' }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart.Root data={chart.data} width={400} height={240}>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis dataKey={chart.key('month')} />
        <YAxis />
        <Tooltip content={<Chart.Tooltip />} />
        <Line dataKey={chart.key('sale')} stroke={chart.color('teal.solid')} />
      </LineChart.Root>
    </Chart.Root>
  )
}

describe('LineChart', () => {
  it('renders a line chart without runtime errors', () => {
    const { container } = renderWithProvider(<LineChartHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
