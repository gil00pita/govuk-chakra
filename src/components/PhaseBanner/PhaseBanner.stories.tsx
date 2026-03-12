import type { Meta, StoryObj } from '@storybook/react'

import { PhaseBanner } from './PhaseBanner'

const meta: Meta = {
  title: 'GOV.UK/Components/PhaseBanner',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Beta: Story = {
  render: () => (
    <PhaseBanner width="720px">
      <PhaseBanner.Text>
        This is a new service. Help us improve it and{' '}
        <PhaseBanner.Link href="#">give your feedback by email</PhaseBanner.Link>.
      </PhaseBanner.Text>
    </PhaseBanner>
  ),
}

export const Alpha: Story = {
  render: () => (
    <PhaseBanner width="720px" phase="Alpha" phaseVariant="grey">
      <PhaseBanner.Text>
        This service is in alpha. Your feedback will help us improve it before wider testing.
      </PhaseBanner.Text>
    </PhaseBanner>
  ),
}
