import { Button, Portal, Text } from '@/govuk-chakra'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HoverCard } from './HoverCard'

type HoverCardStoryArgs = Record<string, never>

const meta: Meta<HoverCardStoryArgs> = {
  title: 'Chakra Components/Overlays/Hover Card',
  component: HoverCard.Root as unknown as ComponentType<HoverCardStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Button variant="secondary">Hover me</Button>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Text>Additional details shown on hover.</Text>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  ),
}
