import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './Textarea'

const meta: Meta<typeof TextArea> = {
  title: 'GOV.UK/Components/Textarea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information, like your National Insurance number or credit card details.',
    placeholder: 'Enter as much or as little information as you like',
    rows: 5,
  },
}

export const WithLabel: Story = {
  render: () => (
    <TextArea
      label="Describe the issue"
      hint="Include what happened and when it happened."
      placeholder="Enter details"
      rows={6}
    />
  ),
}

export const Error: Story = {
  render: () => (
    <TextArea
      label="Describe the problem"
      error="Enter a description of the problem"
      placeholder="Describe what went wrong"
      rows={5}
    />
  ),
}

export const CharacterCount: Story = {
  render: () => (
    <TextArea
      label="Why do you need this service?"
      hint="You can enter up to 200 characters."
      placeholder="Enter your answer"
      rows={4}
      maxLength={200}
    />
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Additional details',
    disabled: true,
    value: 'This textarea is disabled and cannot be edited',
    rows: 3,
  },
}
