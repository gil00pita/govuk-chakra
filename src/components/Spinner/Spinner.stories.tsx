import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from './Spinner'

type SpinnerStoryArgs = {
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

const meta: Meta<SpinnerStoryArgs> = {
  title: 'Chakra Components/Feedback/Spinner',
  component: Spinner.Root as unknown as ComponentType<SpinnerStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'teal',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Spinner.Root {...args} />,
}
