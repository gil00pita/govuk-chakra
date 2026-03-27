import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SegmentedControl } from './SegmentedControl'

type SegmentedControlStoryArgs = {
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
  orientation?: 'horizontal' | 'vertical'
}

const meta: Meta<SegmentedControlStoryArgs> = {
  title: 'Chakra Components/Forms/Segmented Control',
  component: SegmentedControl.Root as unknown as ComponentType<SegmentedControlStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'teal',
    size: 'md',
    orientation: 'horizontal',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <SegmentedControl.Root defaultValue="React" items={['React', 'Vue', 'Solid']} {...args} />
  ),
}
