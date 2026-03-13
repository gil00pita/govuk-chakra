import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './Textarea'
import type { TextareaRootProps } from './Textarea'

interface TextareaStoryArgs extends TextareaRootProps {
  showLabel: boolean
  showHint: boolean
  showError: boolean
}

const meta: Meta<TextareaStoryArgs> = {
  title: 'GOV.UK/Components/Textarea',
  component: Textarea.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showLabel: { control: 'boolean', description: 'Toggle Textarea.Label' },
    showHint: { control: 'boolean', description: 'Toggle Textarea.Hint' },
    showError: { control: 'boolean', description: 'Toggle Textarea.Error' },
    disabled: { control: 'boolean' },
  },
  args: {
    showLabel: true,
    showHint: true,
    showError: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<TextareaStoryArgs>

export const Default: Story = {
  render: (args) => (
    <Textarea.Root invalid={args.showError} disabled={args.disabled}>
      {args.showLabel && <Textarea.Label>Can you provide more detail?</Textarea.Label>}
      {args.showHint && (
        <Textarea.Hint>
          Do not include personal or financial information, like your National Insurance number or
          credit card details.
        </Textarea.Hint>
      )}
      {args.showError && <Textarea.Error>Enter a description of the problem</Textarea.Error>}
      <Textarea.Input placeholder="Enter as much or as little information as you like" rows={5} />
    </Textarea.Root>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Textarea.Root>
      <Textarea.Label>Describe the issue</Textarea.Label>
      <Textarea.Hint>Include what happened and when it happened.</Textarea.Hint>
      <Textarea.Input placeholder="Enter details" rows={6} />
    </Textarea.Root>
  ),
}

export const Error: Story = {
  render: () => (
    <Textarea.Root invalid>
      <Textarea.Label>Describe the problem</Textarea.Label>
      <Textarea.Error>Enter a description of the problem</Textarea.Error>
      <Textarea.Input placeholder="Describe what went wrong" rows={5} />
    </Textarea.Root>
  ),
}

export const CharacterCount: Story = {
  render: () => (
    <Textarea.Root>
      <Textarea.Label>Why do you need this service?</Textarea.Label>
      <Textarea.Hint>You can enter up to 200 characters.</Textarea.Hint>
      <Textarea.Input placeholder="Enter your answer" rows={4} maxLength={200} />
    </Textarea.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea.Root disabled>
      <Textarea.Label>Additional details</Textarea.Label>
      <Textarea.Input value="This textarea is disabled and cannot be edited" rows={3} />
    </Textarea.Root>
  ),
}
