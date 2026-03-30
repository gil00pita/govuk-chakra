import { Chart, useChart } from '@chakra-ui/charts'
import { LabelList, Legend, Pie, Sector, Tooltip } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PieChart } from './PieChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Pie Chart',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const pieData = [
  { name: 'windows', value: 400, color: 'blue.solid' },
  { name: 'mac', value: 300, color: 'orange.solid' },
  { name: 'linux', value: 300, color: 'pink.solid' },
  { name: 'other', value: 200, color: 'green.solid' },
]

export const Default: Story = {
  render: () => {
    const chart = useChart({ data: pieData })

    return (
      <PieChart.Root chart={chart} chartRootProps={{ boxSize: '200px', mx: 'auto' }} responsive>
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart.Root>
    )
  },
}

export const WithLegend: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { name: 'windows', value: 400, color: 'teal.solid' },
        { name: 'mac', value: 300, color: 'orange.solid' },
        { name: 'linux', value: 300, color: 'blue.solid' },
      ],
    })

    return (
      <PieChart.Root chart={chart} chartRootProps={{ boxSize: '200px', mx: 'auto' }} responsive>
        <Legend content={<Chart.Legend />} />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          nameKey="name"
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart.Root>
    )
  },
}

export const WithLabelInside: Story = {
  render: () => {
    const chart = useChart({ data: pieData })

    return (
      <PieChart.Root chart={chart} chartRootProps={{ boxSize: '320px', mx: 'auto' }} responsive>
        <Tooltip cursor={false} animationDuration={100} content={<Chart.Tooltip hideLabel />} />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        >
          <LabelList position="inside" fill="white" stroke="none" />
        </Pie>
      </PieChart.Root>
    )
  },
}
