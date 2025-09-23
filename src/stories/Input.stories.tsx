import { Field, Input, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Input> = {
  title: 'GOV.UK/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
    placeholder: 'Enter your name',
    variant: 'outline',
    size: 'md',
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <Field.Root required invalid>
      <Field.Label>
        Email address <Field.RequiredIndicator />
      </Field.Label>
      <Input {...args} placeholder="Enter your full name" />
    </Field.Root>
  ),
}

export const Error: Story = {
  render: () => (
    <Field.Root required invalid>
      <Field.Label>
        Email address <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Enter your email" />
      <Field.HelperText>We'll never share your email.</Field.HelperText>
    </Field.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <VStack gap={4} align="stretch" width="300px">
      <div>
        <Field.Root required invalid>
          <Field.Label>Small</Field.Label>
          <Input size="sm" placeholder="Small input" />
        </Field.Root>
      </div>
      <div>
        <Field.Root required invalid>
          <Field.Label>Medium</Field.Label>
          <Input size="md" placeholder="Medium input" />
        </Field.Root>
      </div>
      <div>
        <Field.Root required invalid>
          <Field.Label>Large</Field.Label>
          <Input size="lg" placeholder="Large input" />
        </Field.Root>
      </div>
    </VStack>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
}
