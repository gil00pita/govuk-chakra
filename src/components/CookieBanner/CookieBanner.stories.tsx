import type { Meta, StoryObj } from '@storybook/react'

import { CookieBanner } from './CookieBanner'

const meta: Meta<typeof CookieBanner> = {
  title: 'GOV.UK/Components/Cookie banner',
  component: CookieBanner,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    serviceName: 'name of service',
    viewCookiesHref: '#',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AcceptedState: Story = {
  args: {
    defaultDecision: 'accepted',
  },
}

export const RejectedState: Story = {
  args: {
    defaultDecision: 'rejected',
  },
}
