import type { ComponentType } from 'react'
import { LuSettings } from 'react-icons/lu'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconButton } from './IconButton'

type IconButtonStoryArgs = {
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
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain'
}

const meta: Meta<IconButtonStoryArgs> = {
  title: 'Chakra Components/Buttons/Icon Button',
  component: IconButton.Root as unknown as ComponentType<IconButtonStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'gray',
    size: 'md',
    variant: 'outline',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <IconButton.Root aria-label="Open settings" {...args}>
      <LuSettings />
    </IconButton.Root>
  ),
}
