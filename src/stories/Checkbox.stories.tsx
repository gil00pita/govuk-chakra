import { Checkbox, CheckboxGroup, Fieldset, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox.Root> = {
  title: 'GOV.UK/Checkbox',
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'I agree to the terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    children: 'Pre-selected option',
  },
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    children: 'Disabled checkbox',
  },
}

export const CheckboxGroupExample: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Which types of waste do you transport?</Fieldset.Legend>
      <VStack align="start" gap={3}>
        <Checkbox.Root value="waste-animal">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-mines">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-farm">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-clinical">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Clinical waste</Checkbox.Label>
        </Checkbox.Root>
      </VStack>
    </Fieldset.Root>
  ),
}
