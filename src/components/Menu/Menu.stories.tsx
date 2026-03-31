import { Button, Portal } from '@/govuk-chakra'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Menu } from './Menu'

type MenuStoryArgs = Record<string, never>

const meta: Meta<MenuStoryArgs> = {
  title: 'Chakra Components/Overlays/Menu',
  component: Menu.Root as unknown as ComponentType<MenuStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="secondary">Open menu</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New file</Menu.Item>
            <Menu.Item value="save">Save</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  ),
}
