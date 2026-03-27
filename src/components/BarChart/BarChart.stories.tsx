import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BarChart } from './BarChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Bar Chart',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
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
  },
}
