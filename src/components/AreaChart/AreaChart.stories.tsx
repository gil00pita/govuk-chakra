import { useChart } from '@chakra-ui/charts'
import { Area, CartesianGrid, XAxis } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chart } from '@/components/Chart'
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
        { month: 'Jan', users: 120, subscribers: 80 },
        { month: 'Feb', users: 180, subscribers: 120 },
        { month: 'Mar', users: 160, subscribers: 100 },
      ],
      series: [
        { name: 'users', color: 'teal.solid' },
        { name: 'subscribers', color: 'blue.solid' },
      ],
    })

    return (
      <AreaChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} width={420} height={240}>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis dataKey={chart.key('month')} />
        <Chart.Tooltip />
        <Area
          dataKey={chart.key('users')}
          fill={chart.color('teal.solid')}
          stroke={chart.color('teal.solid')}
          fillOpacity={0.2}
        />
        <Area
          dataKey={chart.key('subscribers')}
          fill={chart.color('blue.solid')}
          stroke={chart.color('blue.solid')}
          fillOpacity={0.2}
        />
      </AreaChart.Root>
    )
  },
}
