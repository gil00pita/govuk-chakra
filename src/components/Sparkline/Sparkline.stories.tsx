import { useChart } from '@chakra-ui/charts'
import { Area, Bar, Line, Rectangle, ReferenceLine } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AreaChart } from '../AreaChart'
import { BarChart } from '../BarChart'
import { Sparkline } from './Sparkline'

const meta: Meta = {
  title: 'Chakra Components/Charts/Spark Line',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { value: 10 },
        { value: 16 },
        { value: 19 },
        { value: 15 },
        { value: 12 },
        { value: 18 },
      ],
      series: [{ name: 'value', color: 'teal.solid' }],
    })

    return (
      <AreaChart.Root chart={chart} chartRootProps={{ width: '28', height: '12' }} responsive>
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart.Root>
    )
  },
}

export const LineVariant: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { value: 10 },
        { value: 16 },
        { value: 19 },
        { value: 15 },
        { value: 12 },
        { value: 18 },
      ],
      series: [{ name: 'value', color: 'teal.solid' }],
    })

    return (
      <Sparkline.Root chart={chart} chartRootProps={{ width: '28', height: '12' }} responsive>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </Sparkline.Root>
    )
  },
}

export const BarVariant: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { value: 10, fill: 'teal.solid' },
        { value: 16, fill: 'green.solid' },
        { value: 19, fill: 'teal.solid' },
        { value: 15, fill: 'green.solid' },
        { value: 12, fill: 'teal.solid' },
        { value: 18, fill: 'teal.solid' },
      ],
    })

    return (
      <BarChart.Root
        chart={chart}
        chartRootProps={{ width: '28', height: '12' }}
        barSize={8}
        responsive
      >
        <Bar
          isAnimationActive={false}
          dataKey={chart.key('value')}
          fill={chart.color('teal.solid')}
          stroke=""
          shape={(props) => <Rectangle {...props} fill={chart.color(props.payload!.fill)} />}
        />
      </BarChart.Root>
    )
  },
}

export const WithReference: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { value: 10 },
        { value: 16 },
        { value: 19 },
        { value: 15 },
        { value: 12 },
        { value: 18 },
      ],
      series: [{ name: 'value', color: 'teal.solid' }],
    })

    return (
      <Sparkline.Root chart={chart} chartRootProps={{ maxW: '200px' }} responsive>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            dot={false}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
        <ReferenceLine
          y={chart.getMin('value')}
          stroke={chart.color('border.emphasized')}
          strokeDasharray="4 4"
          label={{
            value: chart.getMin('value'),
            position: 'left',
            fill: chart.color('fg.muted'),
          }}
        />
        <ReferenceLine
          y={chart.getMax('value')}
          stroke={chart.color('border.emphasized')}
          strokeDasharray="4 4"
          label={{
            value: chart.getMax('value'),
            position: 'right',
            fill: chart.color('fg.muted'),
          }}
        />
      </Sparkline.Root>
    )
  },
}
