import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Kbd } from './Kbd'

type KbdStoryArgs = Record<string, never>

const meta: Meta<KbdStoryArgs> = {
  title: 'Chakra Components/Typography/Kbd',
  component: Kbd.Root as unknown as ComponentType<KbdStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd.Root>Ctrl</Kbd.Root>,
}
