import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

import { LineChart } from './LineChart'

const meta = {
  title: 'Chakra Components/Charts/Line Chart',
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { sale: 10, month: 'January' },
        { sale: 95, month: 'February' },
        { sale: 87, month: 'March' },
        { sale: 88, month: 'May' },
        { sale: 65, month: 'June' },
        { sale: 90, month: 'August' },
      ],
      series: [{ name: 'sale', color: 'teal.solid' }],
    })

    return (
      <LineChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color('border')}
        />
        <YAxis axisLine={false} tickLine={false} tickMargin={10} stroke={chart.color('border')} />
        <Tooltip animationDuration={100} cursor={false} content={<Chart.Tooltip />} />
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
      </LineChart.Root>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { mac: 10, linux: 120, month: 'January' },
        { mac: 95, linux: 110, month: 'February' },
        { mac: 87, linux: 125, month: 'March' },
        { mac: 88, linux: 30, month: 'May' },
        { mac: 98, linux: 122, month: 'June' },
        { mac: 90, linux: 15, month: 'August' },
      ],
      series: [
        { name: 'mac', color: 'purple.solid' },
        { name: 'linux', color: 'blue.solid' },
      ],
    })

    return (
      <LineChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color('border')}
        />
        <YAxis axisLine={false} tickLine={false} tickMargin={10} stroke={chart.color('border')} />
        <Tooltip animationDuration={100} cursor={false} content={<Chart.Tooltip />} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart.Root>
    )
  },
}

export const WithAxesLabel: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { Customers: 10, month: 'January' },
        { Customers: 95, month: 'February' },
        { Customers: 87, month: 'March' },
        { Customers: 88, month: 'May' },
        { Customers: 65, month: 'June' },
        { Customers: 90, month: 'August' },
      ],
      series: [{ name: 'Customers', color: 'teal.solid' }],
    })

    return (
      <LineChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color('border')}
          label={{ value: 'Month', position: 'bottom' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color('border')}
          label={{ value: 'Customers', position: 'left', angle: -90 }}
        />
        <Tooltip animationDuration={100} cursor={false} content={<Chart.Tooltip />} />
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
      </LineChart.Root>
    )
  },
}
