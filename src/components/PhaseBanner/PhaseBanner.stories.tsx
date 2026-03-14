import type { Meta, StoryObj } from '@storybook/react-vite'

import { PhaseBanner } from './PhaseBanner'

const meta: Meta = {
  title: 'GOV.UK/Components/Phase banner',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the phase banner component to indicate the current phase of a service.\n\n' +
          'The phase banner component is useful for informing users about the development stage of a service.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System phase banner documentation: https://design-system.service.gov.uk/components/phase-banner/.',
      },
    },
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
