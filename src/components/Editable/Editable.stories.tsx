import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Editable } from './Editable'

type EditableStoryArgs = {
  defaultValue?: string
}

const meta: Meta<EditableStoryArgs> = {
  title: 'Chakra Components/Forms/Editable',
  component: Editable.Root as unknown as ComponentType<EditableStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultValue: 'Click to edit',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Editable.Root {...args}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  ),
}
