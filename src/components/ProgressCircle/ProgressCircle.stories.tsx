import type { ComponentType } from 'react'
import { Center } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, rangeArgType, selectArgType } from '@/utils/storybookControls'
import { ProgressCircle } from './ProgressCircle'

type ProgressCircleStoryArgs = {
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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const meta: Meta<ProgressCircleStoryArgs> = {
  title: 'Chakra Components/Feedback/Progress Circle',
  component: ProgressCircle.Root as unknown as ComponentType<ProgressCircleStoryArgs>,
  tags: ['autodocs'],
  args: {
    value: 72,
    colorPalette: 'teal',
    size: 'xl',
  },
  argTypes: {
    value: rangeArgType({
      min: 0,
      max: 100,
      step: 1,
      description: 'The current value of the progress circle.',
    }),
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['xs', 'sm', 'md', 'lg', 'xl'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ProgressCircle.Root {...args}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
      <Center inset="0" position="absolute">
        <ProgressCircle.ValueText />
      </Center>
    </ProgressCircle.Root>
  ),
}
