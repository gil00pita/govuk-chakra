import { Button, Portal } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { Popover } from './Popover'

type PopoverStoryArgs = {
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const meta: Meta<PopoverStoryArgs> = {
  title: 'Chakra Components/Overlays/Popover',
  component: Popover.Root as unknown as ComponentType<PopoverStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['xs', 'sm', 'md', 'lg'], 'The size of the popover.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover.Root {...args}>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>Popover content</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  ),
}
