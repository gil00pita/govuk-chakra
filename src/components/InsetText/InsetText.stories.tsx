import type { Meta, StoryObj } from '@storybook/react-vite'

import { InsetText } from './InsetText'

const meta: Meta = {
  title: 'GOV.UK/Components/Inset text',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the inset text component to highlight important information or provide additional context within a page.\n\n' +
          'The inset text component is useful for drawing attention to specific content without disrupting the overall flow of the page.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System inset text documentation: https://design-system.service.gov.uk/components/inset-text/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InsetText width="720px">
      It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in
      the application.
    </InsetText>
  ),
}

export const WithLink: Story = {
  render: () => (
    <InsetText width="720px">
      If you’ve already applied, you can{' '}
      <a href="https://www.gov.uk" target="_blank" rel="noreferrer">
        track your application online
      </a>
      .
    </InsetText>
  ),
}
