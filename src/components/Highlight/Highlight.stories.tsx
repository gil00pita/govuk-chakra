import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Highlight } from './Highlight'

type HighlightStoryArgs = {
  query: string[]
}

const meta: Meta<HighlightStoryArgs> = {
  title: 'Chakra Components/Typography/Highlight',
  component: Highlight.Root as unknown as ComponentType<HighlightStoryArgs>,
  tags: ['autodocs'],
  args: {
    query: ['chakra'],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Highlight.Root {...args} styles={{ px: '1', bg: 'yellow.200' }}>
      Building accessible components with chakra ui is fast.
    </Highlight.Root>
  ),
}
