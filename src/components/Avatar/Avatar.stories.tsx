import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { Avatar } from './Avatar'

type AvatarStoryArgs = {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const meta: Meta<AvatarStoryArgs> = {
  title: 'Chakra Components/Data Display/Avatar',
  component: Avatar.Root as unknown as ComponentType<AvatarStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  ),
}
