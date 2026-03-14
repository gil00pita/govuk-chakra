import type { Meta, StoryObj } from '@storybook/react'

import { NotificationBanner } from './NotificationBanner'

const meta: Meta = {
  title: 'GOV.UK/Components/Notification banner',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the notification banner component to display important messages to users.\n\n' +
          'The notification banner component is useful for drawing attention to critical information or updates.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System notification banner documentation: https://design-system.service.gov.uk/components/notification-banner/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NotificationBanner width="720px">
      <NotificationBanner.Heading>Important</NotificationBanner.Heading>
      <NotificationBanner.Body>
        You have 7 days left to send your application.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}

export const WithHeadingAndBody: Story = {
  render: () => (
    <NotificationBanner width="720px" heading="Important">
      <NotificationBanner.Heading>New passport rules</NotificationBanner.Heading>
      <NotificationBanner.Body>
        If your passport was issued before 1 January 2019, you may need to renew it before you
        travel.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}

export const Success: Story = {
  render: () => (
    <NotificationBanner width="720px" heading="Success" variant="success">
      <NotificationBanner.Heading>Application complete</NotificationBanner.Heading>
      <NotificationBanner.Body>
        Your reference number is <strong>HDJ2123F</strong>.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}
