import { useChart } from '@chakra-ui/charts'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chart } from '@/components/Chart'
import { RadarChart } from './RadarChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Radar Chart',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { windows: 110, month: 'January' },
        { windows: 130, month: 'February' },
        { windows: 110, month: 'March' },
        { windows: 90, month: 'May' },
        { windows: 75, month: 'June' },
      ],
      series: [{ name: 'windows', color: 'teal.solid' }],
    })

    return (
      <RadarChart.Root chart={chart} chartRootProps={{ maxW: 'sm', mx: 'auto' }} responsive>
        <PolarGrid stroke={chart.color('border')} />
        <PolarAngleAxis dataKey={chart.key('month')} />
        <PolarRadiusAxis />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart.Root>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { windows: 30, mac: 100, month: 'January' },
        { windows: 120, mac: 20, month: 'February' },
        { windows: 45, mac: 130, month: 'March' },
        { windows: 140, mac: 40, month: 'May' },
        { windows: 60, mac: 50, month: 'June' },
        { windows: 20, mac: 160, month: 'July' },
      ],
      series: [
        { name: 'windows', color: 'teal.solid' },
        { name: 'mac', color: 'orange.solid' },
      ],
    })

    return (
      <RadarChart.Root chart={chart} chartRootProps={{ maxW: 'sm', mx: 'auto' }} responsive>
        <PolarGrid stroke={chart.color('border')} />
        <Chart.Legend />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart.Root>
    )
  },
}

export const WithTooltip: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { windows: 110, month: 'January' },
        { windows: 130, month: 'February' },
        { windows: 110, month: 'March' },
        { windows: 90, month: 'May' },
        { windows: 75, month: 'June' },
      ],
      series: [{ name: 'windows', color: 'teal.solid' }],
    })

    return (
      <RadarChart.Root chart={chart} chartRootProps={{ maxW: 'sm', mx: 'auto' }} responsive>
        <PolarGrid stroke={chart.color('border')} />
        <PolarAngleAxis dataKey={chart.key('month')} />
        <Chart.Tooltip />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart.Root>
    )
  },
}
