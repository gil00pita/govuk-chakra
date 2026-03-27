import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from './Image'

type ImageStoryArgs = {
  rounded?: string
}

const meta: Meta<ImageStoryArgs> = {
  title: 'Chakra Components/Data Display/Image',
  component: Image.Root as unknown as ComponentType<ImageStoryArgs>,
  tags: ['autodocs'],
  args: {
    rounded: 'md',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Image.Root
      {...args}
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop"
      alt="Mountain landscape"
      maxW="320px"
      aspectRatio="3 / 2"
      objectFit="cover"
    />
  ),
}
