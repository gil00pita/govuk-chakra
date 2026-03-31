import { Button, Portal } from '@/govuk-chakra'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip } from './Tooltip'

type TooltipStoryArgs = {
  openDelay?: number
  closeDelay?: number
}

const meta: Meta<TooltipStoryArgs> = {
  title: 'Chakra Components/Overlays/Tooltip',
  component: Tooltip.Root as unknown as ComponentType<TooltipStoryArgs>,
  tags: ['autodocs'],
  args: {
    openDelay: 200,
    closeDelay: 100,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger asChild>
        <Button variant="secondary">Hover me</Button>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Helpful tooltip text
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  ),
}
