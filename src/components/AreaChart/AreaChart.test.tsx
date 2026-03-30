import { Chart, useChart } from '@chakra-ui/charts'
import { Area, CartesianGrid, Tooltip, XAxis } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { AreaChart } from './AreaChart'

function AreaChartHarness() {
  const chart = useChart({
    data: [
      { month: 'Jan', users: 120 },
      { month: 'Feb', users: 180 },
      { month: 'Mar', users: 160 },
    ],
    series: [{ name: 'users', color: 'teal.solid' }],
  })

  return (
    <AreaChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} width={420} height={240}>
      <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
      <XAxis dataKey={chart.key('month')} />
      <Tooltip content={<Chart.Tooltip />} />
      <Area
        dataKey={chart.key('users')}
        fill={chart.color('teal.solid')}
        stroke={chart.color('teal.solid')}
        fillOpacity={0.2}
      />
    </AreaChart.Root>
  )
}

describe('AreaChart', () => {
  it('renders an area chart without runtime errors', () => {
    const { container } = renderWithProvider(<AreaChartHarness />)

    expect(container.querySelector('svg')).not.toBeNull()
  })
})
