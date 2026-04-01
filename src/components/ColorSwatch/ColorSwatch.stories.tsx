import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorSwatch } from './ColorSwatch'

type ColorSwatchStoryArgs = {
  value: string
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inherit' | 'full'
  shape?: 'square' | 'circle' | 'rounded'
}

const meta: Meta<ColorSwatchStoryArgs> = {
  title: 'Chakra Components/Forms/Color Swatch',
  component: ColorSwatch.Root as unknown as ComponentType<ColorSwatchStoryArgs>,
  tags: ['autodocs'],
  args: {
    value: '#0F766E',
    size: 'xl',
    shape: 'square',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inherit', 'full'],
      description: 'The size of the color swatch.',
    },
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'circle'],
      description: 'The shape of the color swatch.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ColorSwatch.Root {...args} />,
}

export const Mixed: Story = {
  render: () => <ColorSwatch.Mix items={['#0F766E', '#2563EB', '#F59E0B']} boxSize="10" />,
}
