import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress } from './Progress'

type ProgressStoryArgs = {
  value?: number
  colorPalette?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const meta: Meta<ProgressStoryArgs> = {
  title: 'Chakra Components/Feedback/Progress',
  component: Progress.Root as unknown as ComponentType<ProgressStoryArgs>,
  tags: ['autodocs'],
  args: {
    value: 65,
    colorPalette: 'teal',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Progress.Root maxW="320px" {...args}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  ),
}
