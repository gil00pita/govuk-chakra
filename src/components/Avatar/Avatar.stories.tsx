import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Avatar } from './Avatar'

type AvatarStoryArgs = {
  showImage?: boolean
  src?: string
  colorPalette?: (typeof chakraColorPaletteOptions)[number]
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  variant?: 'subtle' | 'solid' | 'outline'
  shape?: 'square' | 'rounded' | 'full'
}

const meta: Meta<AvatarStoryArgs> = {
  title: 'Chakra Components/Data Display/Avatar',
  component: Avatar.Root as unknown as ComponentType<AvatarStoryArgs>,
  tags: ['autodocs'],
  args: {
    showImage: false,
    src: 'https://avatars.githubusercontent.com/u/798418?v=4',
    colorPalette: 'gray',
    size: 'md',
    variant: 'subtle',
    shape: 'full',
  },
  argTypes: {
    showImage: {
      control: 'boolean',
      description:
        'Whether to render the avatar image. When enabled, the image will cover most palette-based background styles.',
    },
    src: {
      control: 'text',
      description: 'The image source URL.',
      if: { arg: 'showImage', truthy: true },
    },
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the avatar.'),
    size: selectArgType(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
    variant: selectArgType(['subtle', 'solid', 'outline']),
    shape: selectArgType(['square', 'rounded', 'full']),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ showImage, src, ...args }) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback name="Segun Adebayo" />
      {showImage ? <Avatar.Image src={src} /> : null}
    </Avatar.Root>
  ),
}
