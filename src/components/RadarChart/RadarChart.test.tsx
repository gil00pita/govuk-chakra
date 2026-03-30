import { useChart } from '@chakra-ui/charts'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar } from 'recharts'

import { renderWithProvider } from '@/test/renderWithProvider'
import { RadarChart } from './RadarChart'

function RadarChartHarness() {
  const chart = useChart({
    data: [
      { windows: 110, month: 'January' },
      { windows: 130, month: 'February' },
      { windows: 110, month: 'March' },
    ],
    series: [{ name: 'windows', color: 'teal.solid' }],
  })

  return (
    <RadarChart.Root chart={chart} chartRootProps={{ maxW: 'sm' }} width={320} height={240}>
      <PolarGrid stroke={chart.color('border')} />
      <PolarAngleAxis dataKey={chart.key('month')} />
      <PolarRadiusAxis />
      <Radar
        isAnimationActive={false}
        name="windows"
        dataKey={chart.key('windows')}
        stroke={chart.color('teal.solid')}
        fill={chart.color('teal.solid')}
        fillOpacity={0.2}
      />
    </RadarChart.Root>
  )
}

describe('RadarChart', () => {
  it('renders a radar chart without runtime errors', () => {
    const { container } = renderWithProvider(<RadarChartHarness />)

    expect(container.querySelector('.recharts-wrapper')).not.toBeNull()
  })
})
