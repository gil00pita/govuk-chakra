import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Rating } from './Rating'

type RatingStoryArgs = {
  defaultValue?: number
  count?: number
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

const meta: Meta<RatingStoryArgs> = {
  title: 'Chakra Components/Forms/Rating',
  component: Rating.Root as unknown as ComponentType<RatingStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultValue: 3,
    count: 5,
    colorPalette: 'orange',
    size: 'sm',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Rating.Root {...args} label="Rating" />,
}
