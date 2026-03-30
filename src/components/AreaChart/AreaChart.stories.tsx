import { Chart, useChart } from '@chakra-ui/charts'
import { Area, CartesianGrid, Tooltip, XAxis } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AreaChart } from './AreaChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Area Chart',
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
  },
}
