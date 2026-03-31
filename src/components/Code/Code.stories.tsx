import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Code } from './Code'

type CodeStoryArgs = {
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
  variant?: 'solid' | 'subtle' | 'outline' | 'surface' | 'plain'
}

const meta: Meta<CodeStoryArgs> = {
  title: 'Chakra Components/Typography/Code',
  component: Code.Root as unknown as ComponentType<CodeStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'gray',
    size: 'sm',
    variant: 'subtle',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['xs', 'sm', 'md', 'lg'], 'The size of the component.'),
    variant: selectArgType(
      ['solid', 'subtle', 'outline', 'surface', 'plain'],
      'The variant of the component.'
    ),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Code.Root {...args}>const message = &apos;Hello world&apos;</Code.Root>,
}
