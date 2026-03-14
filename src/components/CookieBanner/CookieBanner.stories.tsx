import type { Meta, StoryObj } from '@storybook/react-vite'

import { CookieBanner } from './CookieBanner'

const meta: Meta<typeof CookieBanner> = {
  title: 'GOV.UK/Components/Cookie banner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Use the cookie banner component to inform users about the use of cookies on your website.\n\n' +
          'The cookie banner component is useful for complying with privacy regulations and providing transparency to users.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System cookie banner documentation: https://design-system.service.gov.uk/components/cookie-banners/.',
      },
    },
  },
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
