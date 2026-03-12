import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/Checkbox'
import { VStack } from '@chakra-ui/react'

const meta: Meta<typeof Checkbox.Root> = {
  title: 'GOV.UK/Checkbox',
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    checked: false,
    hint: true,
    hintText: 'This is some hint text to help the user understand the checkbox option.',
    size: 'lg',
    state: 'enabled',
    value: 'agree',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['disabled', 'enabled', 'readonly', 'invalid'],
    },
    checked: {
      control: 'boolean',
    },
    hint: {
      control: 'boolean',
    },
    hintText: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    value: {
      control: 'text',
    },
    small: { table: { disable: true } },
  },
} satisfies Meta<typeof Checkbox.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Checkbox.Root
      size={args.size}
      invalid={args.state === 'invalid'}
      disabled={args.state === 'disabled'}
      readOnly={args.state === 'readonly'}
      checked={args.checked}
      value={args.value}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      {args.hint ? (
        <VStack align="start" gap={0}>
          <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
          <Checkbox.Hint>{args.hintText}</Checkbox.Hint>
        </VStack>
      ) : (
        <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
      )}
    </Checkbox.Root>
  ),
}

export const Checked: Story = {
  render: () => (
    <Checkbox.Root defaultChecked>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Pre-selected option</Checkbox.Label>
    </Checkbox.Root>
  ),
}

export const WithHint: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <VStack align="start" gap={0}>
        <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
        <Checkbox.Hint>Including abattoir waste and dead animals</Checkbox.Hint>
      </VStack>
    </Checkbox.Root>
  ),
}

export const SmallCheckbox: Story = {
  render: () => (
    <Checkbox.Root size="sm">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>HM Revenue and Customs</Checkbox.Label>
    </Checkbox.Root>
  ),
}

export const DisabledCheckbox: Story = {
  render: () => (
    <Checkbox.Root disabled>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Disabled checkbox</Checkbox.Label>
    </Checkbox.Root>
  ),
}

export const CheckboxGroupExample: Story = {
  render: () => (
    <Checkbox.Group
      legendAsHeading
      legend="Which types of waste do you transport?"
      hint="Select all that apply."
    >
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
    </Checkbox.Group>
  ),
}

export const WithHintsGroup: Story = {
  render: () => (
    <Checkbox.Group
      legendAsHeading
      legend="Which types of waste do you transport?"
      hint="Select all that apply."
    >
      <Checkbox.Root value="waste-animal">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <VStack align="start" gap={0}>
          <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
          <Checkbox.Hint>Including abattoir waste and dead animals</Checkbox.Hint>
        </VStack>
      </Checkbox.Root>
      <Checkbox.Root value="waste-mines">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <VStack align="start" gap={0}>
          <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
          <Checkbox.Hint>Ite waste and ite tailings</Checkbox.Hint>
        </VStack>
      </Checkbox.Root>
      <Checkbox.Root value="waste-farm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <VStack align="start" gap={0}>
          <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
          <Checkbox.Hint>For example, slurry</Checkbox.Hint>
        </VStack>
      </Checkbox.Root>
    </Checkbox.Group>
  ),
}

export const WithError: Story = {
  render: () => (
    <Checkbox.Group
      legend="Which types of waste do you transport?"
      hint="Select all that apply."
      error="Select the types of waste you transport"
      legendAsHeading
    >
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
    </Checkbox.Group>
  ),
}

export const SmallCheckboxGroup: Story = {
  render: () => (
    <Checkbox.Group legend="Organisation">
      <Checkbox.Root value="hmrc" size="sm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>HM Revenue and Customs</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root value="employment" size="sm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Employment Tribunal</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root value="mod" size="sm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Ministry of Defence</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>
  ),
}
