import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/stories/storybookControls'
import { Switch } from './Switch'

type SwitchStoryArgs = {
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

const meta: Meta<SwitchStoryArgs> = {
  title: 'Chakra Components/Forms/Switch',
  component: Switch.Root as unknown as ComponentType<SwitchStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'teal',
    size: 'md',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['xs', 'sm', 'md', 'lg'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Enable notifications</Switch.Label>
    </Switch.Root>
  ),
}
