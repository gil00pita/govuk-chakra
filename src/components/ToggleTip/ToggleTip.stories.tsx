import { Button } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToggleTip } from './ToggleTip'

type ToggleTipStoryArgs = Record<string, never>

const meta: Meta<ToggleTipStoryArgs> = {
  title: 'Chakra Components/Overlays/Toggle Tip',
  component: ToggleTip.Root as unknown as ComponentType<ToggleTipStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleTip.Root content="This is some additional information.">
      <Button size="xs" variant="ghost">
        Info
      </Button>
    </ToggleTip.Root>
  ),
}
