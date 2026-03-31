import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, rangeArgType, selectArgType } from '@/utils/storybookControls'
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
    colorPalette: 'blue',
    size: 'md',
  },
  argTypes: {
    value: rangeArgType({
      min: 0,
      max: 100,
      step: 1,
      description: 'The current value of the progress bar.',
    }),
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['xs', 'sm', 'md', 'lg'], 'The size of the component.'),
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
