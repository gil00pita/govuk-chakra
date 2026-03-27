import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { BarChart } from './BarChart'

function BarChartHarness() {
  const chart = useChart({
    data: [
      { month: 'Jan', users: 120 },
      { month: 'Feb', users: 180 },
      { month: 'Mar', users: 160 },
    ],
    series: [{ name: 'users', color: 'teal.solid' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart.Root data={chart.data} width={420} height={240}>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis dataKey={chart.key('month')} />
        <YAxis />
        <Tooltip content={<Chart.Tooltip />} />
        <Bar dataKey={chart.key('users')} fill={chart.color('teal.solid')} radius={4} />
      </BarChart.Root>
    </Chart.Root>
  )
}

describe('BarChart', () => {
  it('renders a bar chart without runtime errors', () => {
    const { container } = renderWithProvider(<BarChartHarness />)

    expect(container.querySelector('svg')).not.toBeNull()
  })
})
