import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from './Panel'

const meta: Meta = {
  title: 'GOV.UK/Components/Panel',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Confirmation: Story = {
  render: () => (
    <Panel width="720px" heading="Application complete">
      <>
        Your reference number
        <strong>HDJ2123F</strong>
      </>
    </Panel>
  ),
}

export const Simple: Story = {
  render: () => (
    <Panel width="720px">
      <Panel.Title>Payment successful</Panel.Title>
      <Panel.Body>
        We have sent a confirmation email to
        <strong>name@example.com</strong>
      </Panel.Body>
    </Panel>
  ),
}
