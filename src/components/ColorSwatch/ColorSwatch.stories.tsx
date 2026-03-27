import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorSwatch } from './ColorSwatch'

type ColorSwatchStoryArgs = {
  value: string
}

const meta: Meta<ColorSwatchStoryArgs> = {
  title: 'Chakra Components/Forms/Color Swatch',
  component: ColorSwatch.Root as unknown as ComponentType<ColorSwatchStoryArgs>,
  tags: ['autodocs'],
  args: {
    value: '#0F766E',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ColorSwatch.Root {...args} boxSize="10" />,
}

export const Mixed: Story = {
  render: () => <ColorSwatch.Mix items={['#0F766E', '#2563EB', '#F59E0B']} boxSize="10" />,
}
