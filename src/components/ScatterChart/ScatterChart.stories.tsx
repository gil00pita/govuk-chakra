import { Chart, useChart } from '@chakra-ui/charts'
import { Legend, Scatter, Tooltip, XAxis, YAxis } from 'recharts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScatterChart } from './ScatterChart'

const meta: Meta = {
  title: 'Chakra Components/Charts/Scatter Chart',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { temperature: 14.2, sales: 215 },
        { temperature: 16.4, sales: 325 },
        { temperature: 11.9, sales: 185 },
        { temperature: 15.2, sales: 332 },
        { temperature: 18.5, sales: 406 },
        { temperature: 22.1, sales: 522 },
        { temperature: 19.4, sales: 412 },
        { temperature: 25.1, sales: 614 },
      ],
      series: [{ name: 'sales', color: 'teal.solid' }],
    })

    return (
      <ScatterChart.Root chart={chart} chartRootProps={{ maxH: 'sm' }} responsive>
        <XAxis
          type="number"
          dataKey={chart.key('temperature')}
          stroke={chart.color('border')}
          tickFormatter={(value) => `${value}°C`}
          domain={[10, 'dataMax + 3']}
        />
        <YAxis type="number" dataKey={chart.key('sales')} stroke={chart.color('border')} />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.name?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart.Root>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { x: 100, y: 200, id: 'group1' },
        { x: 120, y: 100, id: 'group1' },
        { x: 170, y: 300, id: 'group1' },
        { x: 140, y: 250, id: 'group1' },
        { x: 200, y: 260, id: 'group2' },
        { x: 240, y: 290, id: 'group2' },
        { x: 190, y: 290, id: 'group2' },
        { x: 198, y: 250, id: 'group2' },
      ],
      series: [
        { label: 'Group 1', color: 'blue.solid' },
        { label: 'Group 2', color: 'green.solid' },
      ],
    })

    const groupedData = chart.groupBy('id')

    return (
      <ScatterChart.Root
        chart={chart}
        chartRootProps={{ maxH: 'sm' }}
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis
          type="number"
          dataKey={chart.key('x')}
          stroke={chart.color('border')}
          domain={['dataMin - 10', 'dataMax + 10']}
        />
        <YAxis type="number" dataKey={chart.key('y')} stroke={chart.color('border')} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<Chart.Tooltip hideLabel />} />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.label?.toString()}
            key={index}
            data={groupedData[index]}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart.Root>
    )
  },
}

export const WithLegend: Story = {
  render: () => {
    const chart = useChart({
      data: [
        { x: 100, y: 200 },
        { x: 120, y: 100 },
        { x: 170, y: 300 },
        { x: 140, y: 250 },
        { x: 150, y: 400 },
        { x: 110, y: 280 },
      ],
      series: [{ label: 'Group 1', color: 'blue.solid' }],
    })

    return (
      <ScatterChart.Root
        chart={chart}
        chartRootProps={{ maxH: 'sm' }}
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis type="number" dataKey={chart.key('x')} stroke={chart.color('border')} />
        <Legend content={<Chart.Legend />} />
        <YAxis type="number" dataKey={chart.key('y')} stroke={chart.color('border')} />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.label?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart.Root>
    )
  },
}
