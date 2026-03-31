import { Button, Text } from '@/components'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Collapsible } from './Collapsible'

type CollapsibleStoryArgs = {
  defaultOpen?: boolean
}

const meta: Meta<CollapsibleStoryArgs> = {
  title: 'Chakra Components/Disclosure/Collapsible',
  component: Collapsible.Root as unknown as ComponentType<CollapsibleStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultOpen: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible.Root maxW="320px" {...args}>
      <Collapsible.Trigger asChild>
        <Button variant="secondary">Toggle details</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Text>Hidden content</Text>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
}
