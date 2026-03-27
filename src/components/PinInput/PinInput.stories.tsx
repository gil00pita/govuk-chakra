import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PinInput } from './PinInput'

type PinInputStoryArgs = {
  otp?: boolean
  mask?: boolean
}

const meta: Meta<PinInputStoryArgs> = {
  title: 'Chakra Components/Forms/Pin Input',
  component: PinInput.Root as unknown as ComponentType<PinInputStoryArgs>,
  tags: ['autodocs'],
  args: {
    otp: true,
    mask: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <PinInput.Root {...args}>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  ),
}
