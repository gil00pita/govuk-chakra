import type { Meta, StoryObj } from '@storybook/react-vite'

import { Panel } from './Panel'

const meta: Meta = {
  title: 'GOV.UK/Components/Panel',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the panel component to highlight important information or provide additional context within a page.\n\n' +
          'The panel component is useful for drawing attention to specific content without disrupting the overall flow of the page.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System panel documentation: https://design-system.service.gov.uk/components/panel/.',
      },
    },
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
