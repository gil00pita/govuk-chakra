import type { Meta, StoryObj } from '@storybook/react'

import { DateInput } from './DateInput'

const meta: Meta = {
  title: 'GOV.UK/Components/Date input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DateInput width="720px" legend="What is your date of birth?" hint="For example, 27 3 2007" />
  ),
}

export const WithError: Story = {
  render: () => (
    <DateInput
      width="720px"
      legend="What is your passport issue date?"
      error="Enter a real date"
      dayInputProps={{ defaultValue: '31' }}
      monthInputProps={{ defaultValue: '2' }}
      yearInputProps={{ defaultValue: '2024' }}
    />
  ),
}

export const AsPageHeading: Story = {
  render: () => (
    <DateInput
      width="720px"
      legend="When did you arrive in the UK?"
      legendAsPageHeading
      hint="For example, 5 9 2023"
    />
  ),
}
