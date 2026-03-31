import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { Alert } from './Alert'

type AlertStoryArgs = {
  showIndicator?: boolean
  status?: 'info' | 'warning' | 'success' | 'error' | 'neutral'
  variant?: 'subtle' | 'surface' | 'outline' | 'solid'
  title?: string
  description?: string
}

const meta: Meta<AlertStoryArgs> = {
  title: 'Chakra Components/Feedback/Alert',
  component: Alert.Root as unknown as ComponentType<AlertStoryArgs>,
  tags: ['autodocs'],
  args: {
    status: 'info',
    variant: 'subtle',
    showIndicator: true,
    title: 'Application incomplete',
    description: 'You have 7 days left to send your application.',
  },
  argTypes: {
    status: {
      ...selectArgType(['info', 'warning', 'success', 'error', 'neutral']),
    },
    variant: {
      ...selectArgType(['subtle', 'surface', 'outline', 'solid']),
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    showIndicator: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Indicator />
      <Alert.Title>{args.title}</Alert.Title>
      <Alert.Description>{args.description}</Alert.Description>
    </Alert.Root>
  ),
}
