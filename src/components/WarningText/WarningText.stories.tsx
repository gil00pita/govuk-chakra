import type { Meta, StoryObj } from '@storybook/react'

import { WarningText } from './WarningText'

const meta: Meta<typeof WarningText> = {
  title: 'GOV.UK/Components/WarningText',
  component: WarningText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'You can be fined up to \u00a35,000 if you do not register.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomAssistiveText: Story = {
  args: {
    assistiveText: 'Important',
    children: 'Applications close at midnight on Friday.',
  },
}

export const CustomIcon: Story = {
  args: {
    iconText: 'i',
    children: 'Check your answers before you continue.',
  },
}
