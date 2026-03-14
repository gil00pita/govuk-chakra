import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta = {
  title: 'GOV.UK/Components/Select',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the Select component to allow users to choose one option from a dropdown list.\n\n' +
          'The Select component is useful for forms or content that require users to make a single choice from a list of options.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System select documentation: https://design-system.service.gov.uk/components/select/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select label="Sort by" width="10" defaultValue="">
      <option value="" disabled>
        Select an option
      </option>
      <option value="updated">Last updated</option>
      <option value="name">Name</option>
      <option value="status">Status</option>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Select
      label="Nationality"
      hint="If you have dual nationality, select the nationality shown on your passport."
      width="20"
      defaultValue=""
    >
      <option value="" disabled>
        Select nationality
      </option>
      <option value="british">British</option>
      <option value="irish">Irish</option>
      <option value="french">French</option>
      <option value="spanish">Spanish</option>
      <option value="other">Other</option>
    </Select>
  ),
}

export const Countries: Story = {
  render: () => (
    <Select label="Country" width="20" defaultValue="united-kingdom">
      <optgroup label="Europe">
        <option value="united-kingdom">United Kingdom</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
        <option value="spain">Spain</option>
        <option value="italy">Italy</option>
      </optgroup>
      <optgroup label="North America">
        <option value="united-states">United States</option>
        <option value="canada">Canada</option>
      </optgroup>
    </Select>
  ),
}

export const Error: Story = {
  render: () => (
    <Select
      label="Country"
      error="Select the country you live in"
      width="20"
      defaultValue=""
      required
    >
      <option value="" disabled hidden>
        Select a country
      </option>
      <option value="uk">United Kingdom</option>
      <option value="us">United States</option>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select label="Country" width="20" defaultValue="uk" disabled>
      <option value="uk">United Kingdom</option>
      <option value="us">United States</option>
    </Select>
  ),
}
