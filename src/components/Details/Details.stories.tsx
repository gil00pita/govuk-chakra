import type { Meta, StoryObj } from '@storybook/react'

import { Details } from './Details'

const meta: Meta = {
  title: 'GOV.UK/Components/Details',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Details width="720px" summary="Help with nationality">
      <Details.Text>
        We need to know your nationality so we can work out which elections you’re entitled to vote
        in.
      </Details.Text>
    </Details>
  ),
}

export const WithMultipleParagraphs: Story = {
  render: () => (
    <Details width="720px" summary="Where to find your National Insurance number">
      <>
        <Details.Text mb={3}>
          You can find your National Insurance number on your National Insurance card, payslip or
          P60.
        </Details.Text>
        <Details.Text>
          If you cannot find it, you can use the HMRC service to request a reminder.
        </Details.Text>
      </>
    </Details>
  ),
}
