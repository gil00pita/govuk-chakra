import type { ComponentType } from 'react'
import { useChart } from '@chakra-ui/charts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BarSegment } from './BarSegment'

type BarSegmentStoryArgs = Record<string, never>

const meta: Meta<BarSegmentStoryArgs> = {
  title: 'Chakra Components/Charts/Bar Segment',
  component: BarSegment.Root as unknown as ComponentType<BarSegmentStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { name: 'Desktop', value: 55, color: 'teal.solid' },
  { name: 'Mobile', value: 30, color: 'blue.solid' },
  { name: 'Tablet', value: 15, color: 'orange.solid' },
]

export const Default: Story = {
  render: () => {
    const chart = useChart({ data })

    return (
      <BarSegment.Root chart={chart} maxW="420px">
        <BarSegment.Content>
          <BarSegment.Value />
          <BarSegment.Bar />
          <BarSegment.Label />
        </BarSegment.Content>
      </BarSegment.Root>
    )
  },
}
