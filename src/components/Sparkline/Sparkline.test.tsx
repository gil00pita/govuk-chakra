import { Chart, useChart } from '@chakra-ui/charts'
import { Line } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Sparkline } from './Sparkline'

function SparklineHarness() {
  const chart = useChart({
    data: [{ value: 10 }, { value: 16 }, { value: 19 }, { value: 15 }],
    series: [{ name: 'value', color: 'teal.solid' }],
  })

  return (
    <Chart.Root width="28" height="12" chart={chart}>
      <Sparkline.Root data={chart.data} width={112} height={48}>
        <Line dataKey={chart.key('value')} stroke={chart.color('teal.solid')} dot={false} />
      </Sparkline.Root>
    </Chart.Root>
  )
}

describe('Sparkline', () => {
  it('renders a sparkline without runtime errors', () => {
    const { container } = renderWithProvider(<SparklineHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
