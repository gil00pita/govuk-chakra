import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  htmlElementOptions,
  selectArgType,
  chakraColorPaletteOptions,
} from '@/utils/storybookControls'
import { Spinner } from './Spinner'

type SpinnerStoryArgs = {
  as?: (typeof htmlElementOptions)[number]
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
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const meta: Meta<SpinnerStoryArgs> = {
  title: 'Chakra Components/Feedback/Spinner',
  component: Spinner.Root as unknown as ComponentType<SpinnerStoryArgs>,
  tags: ['autodocs'],
  args: {
    as: 'div',
    colorPalette: 'blue',
    size: 'md',
  },
  argTypes: {
    as: selectArgType(htmlElementOptions, 'The underlying element to render.'),
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['inherit', 'xs', 'sm', 'md', 'lg', 'xl'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Spinner.Root {...args} />,
}
