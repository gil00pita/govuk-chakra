import { useChart } from '@chakra-ui/charts'
import { Label, Pie, Sector } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chart } from '@/components/Chart'
import { DonutChart } from './DonutChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Donut Chart',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const donutData = [
  { name: 'windows', value: 400, color: 'blue.solid' },
  { name: 'mac', value: 300, color: 'orange.solid' },
  { name: 'linux', value: 300, color: 'pink.solid' },
  { name: 'other', value: 200, color: 'green.solid' },
]

export const Default: Story = {
  render: () => {
    const chart = useChart({ data: donutData })

    return (
      <DonutChart.Root chart={chart} chartRootProps={{ boxSize: '200px', mx: 'auto' }} responsive>
        <Chart.Tooltip cursor={false} animationDuration={100} hideLabel />
        <Pie
          innerRadius={80}
          outerRadius={100}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          nameKey="name"
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </DonutChart.Root>
    )
  },
}

export const WithCenteredText: Story = {
  render: () => {
    const chart = useChart({ data: donutData })

    return (
      <DonutChart.Root chart={chart} chartRootProps={{ boxSize: '200px', mx: 'auto' }} responsive>
        <Chart.Tooltip cursor={false} animationDuration={100} hideLabel />
        <Pie
          innerRadius={80}
          outerRadius={100}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          nameKey="name"
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        >
          <Label
            content={({ viewBox }) => (
              <Chart.RadialText
                viewBox={viewBox}
                title={chart.getTotal('value').toLocaleString()}
                description="users"
              />
            )}
          />
        </Pie>
      </DonutChart.Root>
    )
  },
}

export const WithAnglePadding: Story = {
  render: () => {
    const chart = useChart({ data: donutData.slice(0, 3) })

    return (
      <DonutChart.Root chart={chart} chartRootProps={{ boxSize: '200px', mx: 'auto' }} responsive>
        <Chart.Tooltip cursor={false} animationDuration={100} hideLabel />
        <Pie
          innerRadius={80}
          outerRadius={100}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('value')}
          paddingAngle={8}
          cornerRadius={4}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </DonutChart.Root>
    )
  },
}
