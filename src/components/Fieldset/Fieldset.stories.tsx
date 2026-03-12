import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../Checkbox/Checkbox'
import { Fieldset } from './Fieldset'

const meta: Meta = {
  title: 'GOV.UK/Components/Fieldset',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Fieldset legend="What is your address?" hint="Select all that apply.">
      <Fieldset.Content>
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>England</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Scotland</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Wales</Checkbox.Label>
        </Checkbox.Root>
      </Fieldset.Content>
    </Fieldset>
  ),
}

export const AsPageHeading: Story = {
  render: () => (
    <Fieldset
      legend="Do you know your National Insurance number?"
      legendAsHeading
      hint="It's on your National Insurance card, benefit letter, payslip or P60."
    >
      <Fieldset.Content gap={3}>
        <label>
          <input type="radio" name="ni-number" value="yes" defaultChecked /> Yes
        </label>
        <label>
          <input type="radio" name="ni-number" value="no" /> No
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
}

export const Error: Story = {
  render: () => (
    <Fieldset
      legend="How would you prefer to be contacted?"
      error="Select how you would prefer to be contacted"
    >
      <Fieldset.Content gap={3}>
        <label>
          <input type="radio" name="contact-method" value="email" /> Email
        </label>
        <label>
          <input type="radio" name="contact-method" value="phone" /> Phone
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
}
