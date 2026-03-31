import type { ComponentType } from 'react'
import { Center } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
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
}

const meta: Meta<ProgressCircleStoryArgs> = {
  title: 'Chakra Components/Feedback/Progress Circle',
  component: ProgressCircle.Root as unknown as ComponentType<ProgressCircleStoryArgs>,
  tags: ['autodocs'],
  args: {
    value: 72,
    colorPalette: 'teal',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ProgressCircle.Root {...args} size="xl">
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
