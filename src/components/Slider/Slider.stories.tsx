import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Slider } from './Slider'

type SliderStoryArgs = {
  defaultValue?: number[]
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
  size?: 'sm' | 'md' | 'lg'
}

const meta: Meta<SliderStoryArgs> = {
  title: 'Chakra Components/Forms/Slider',
  component: Slider.Root as unknown as ComponentType<SliderStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultValue: [40],
    colorPalette: 'teal',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Slider.Root maxW="320px" min={0} max={100} {...args}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  ),
}
