import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/Checkbox'
import { Radio } from '@/components/Radio'
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
    <Fieldset.Root>
      <Fieldset.Legend mb={1}>What is your address?</Fieldset.Legend>
      <Fieldset.Hint>Select all that apply.</Fieldset.Hint>
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
    </Fieldset.Root>
  ),
}

export const AsPageHeading: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend legendAsHeading mb={1}>
        Do you know your National Insurance number?
      </Fieldset.Legend>
      <Fieldset.Hint>
        It's on your National Insurance card, benefit letter, payslip or P60.
      </Fieldset.Hint>
      <Fieldset.Content gap={3}>
        <Radio.Root name="ni-number" defaultValue="yes">
          <Radio.Item value="yes">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Yes</Radio.ItemText>
          </Radio.Item>
          <Radio.Item value="no">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>No</Radio.ItemText>
          </Radio.Item>
        </Radio.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  ),
}

export const Error: Story = {
  render: () => (
    <Fieldset.Root invalid>
      <Fieldset.Legend legendAsHeading mb={1}>
        How would you prefer to be contacted?
      </Fieldset.Legend>
      <Fieldset.Error>Select how you would prefer to be contacted</Fieldset.Error>
      <Fieldset.Content gap={3}>
        <Radio.Root name="contact-method">
          <Radio.Item value="email">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Email</Radio.ItemText>
          </Radio.Item>
          <Radio.Item value="phone">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Phone</Radio.ItemText>
          </Radio.Item>
        </Radio.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  ),
}
