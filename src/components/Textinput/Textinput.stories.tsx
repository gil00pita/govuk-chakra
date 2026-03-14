import type { Meta, StoryObj } from '@storybook/react'

import { Textinput, type TextinputProps } from './Textinput'
import { VStack } from '@chakra-ui/react'

const meta: Meta<typeof Textinput> = {
  title: 'GOV.UK/Components/Text input',
  component: Textinput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <Textinput/> component to allow users to enter single-line text input.\n\n' +
          'The <Textinput/> component is useful for collecting short pieces of information from users, such as names, email addresses, or other identifiers.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System text input documentation: https://design-system.service.gov.uk/components/text-input/.',
      },
    },
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
  render: (args: TextinputProps) => (
    <Textinput {...args} label="Full name" placeholder="Enter your full name" />
  ),
}

export const Error: Story = {
  render: () => (
    <Textinput
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
      <Textinput label="2 character width" width="2" defaultValue="AB" />
      <Textinput label="4 character width" width="4" defaultValue="2026" />
      <Textinput label="10 character width" width="10" defaultValue="SW1A 1AA" />
      <Textinput label="20 character width" width="20" defaultValue="QQ 12 34 56 C" />
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
