import type { ComponentType } from 'react'
import { useChart } from '@chakra-ui/charts'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BarList } from './BarList'

type BarListStoryArgs = Record<string, never>

const meta: Meta<BarListStoryArgs> = {
  title: 'Chakra Components/Charts/Bar List',
  component: BarList.Root as unknown as ComponentType<BarListStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const data: Array<{ name: string; value: number; href?: string }> = [
  { name: 'React', value: 82 },
  { name: 'Vue', value: 56 },
  { name: 'Solid', value: 32 },
]

function BarListStoryPreview() {
  const chart = useChart({
    data,
    series: [{ name: 'name', color: '#1d70b8' }],
    sort: { by: 'value', direction: 'desc' },
  })

  return (
    <BarList.Root chart={chart} maxW="420px">
      <BarList.Content>
        <BarList.Label title="Framework" flex="1">
          <BarList.Bar />
        </BarList.Label>
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}

export const Default: Story = {
  render: () => <BarListStoryPreview />,
}
