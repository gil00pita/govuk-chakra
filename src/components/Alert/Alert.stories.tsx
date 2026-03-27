import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from './Alert'

type AlertStoryArgs = {
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
    title: 'Application incomplete',
    description: 'You have 7 days left to send your application.',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['subtle', 'surface', 'outline', 'solid'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{args.title}</Alert.Title>
        <Alert.Description>{args.description}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
}
