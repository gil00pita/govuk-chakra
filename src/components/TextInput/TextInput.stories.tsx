import { VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'GOV.UK/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: ['full', '30', '20', '10', '5', '4', '3', '2'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'National Insurance number',
    hint: "It's on your National Insurance card, benefit letter, payslip or P60.",
    placeholder: 'QQ 12 34 56 C',
    width: '20',
  },
}

export const WithLabel: Story = {
  render: (args) => <TextInput {...args} label="Full name" placeholder="Enter your full name" />,
}

export const Error: Story = {
  render: () => (
    <TextInput
      label="Postcode"
      hint="Enter a UK postcode"
      error="Enter a postcode, like SW1A 1AA"
      width="10"
      placeholder="SW1A 1AA"
    />
  ),
}

export const Sizes: Story = {
  render: () => (
    <VStack gap={4} align="stretch" width="300px">
      <TextInput label="2 character width" width="2" defaultValue="AB" />
      <TextInput label="4 character width" width="4" defaultValue="2026" />
      <TextInput label="10 character width" width="10" defaultValue="SW1A 1AA" />
      <TextInput label="20 character width" width="20" defaultValue="QQ 12 34 56 C" />
    </VStack>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'National Insurance number',
    width: '20',
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
}
