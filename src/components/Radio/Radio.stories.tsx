import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from './Radio'

const meta: Meta = {
  title: 'GOV.UK/Components/Radio',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Radio.Group legend="Where do you live?" hint="Select one option">
      <Radio.Root defaultValue="england" name="where-do-you-live">
        <Radio.Item value="england">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>England</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="scotland">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Scotland</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="wales">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Wales</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="northern-ireland">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Northern Ireland</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const WithHints: Story = {
  render: () => (
    <Radio.Group
      legend="How do you want to sign in?"
      hint="Choose the option you normally use to access your account."
    >
      <Radio.Root defaultValue="government-gateway" name="sign-in-method">
        <Radio.Item
          value="government-gateway"
          hint="Use the email address you used to create your Government Gateway account."
        >
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Government Gateway</Radio.ItemText>
        </Radio.Item>

        <Radio.Item
          value="govuk-one-login"
          hint="Use the sign in details connected to your GOV.UK One Login account."
        >
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>GOV.UK One Login</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const Error: Story = {
  render: () => (
    <Radio.Group legend="Do you have a UK passport?" error="Select whether you have a UK passport">
      <Radio.Root name="passport-question">
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
    </Radio.Group>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Radio.Group legend="Contact preference">
      <Radio.Root defaultValue="email" name="contact-preference" disabled>
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
    </Radio.Group>
  ),
}
