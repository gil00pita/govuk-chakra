import type { Meta, StoryObj } from '@storybook/react'

import { Details } from './Details'

const meta: Meta = {
  title: 'GOV.UK/Components/Details',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the details component to allow users to reveal additional information.\n\n' +
          'The details component is useful for forms or content that require optional or supplementary information.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System details documentation: https://design-system.service.gov.uk/components/details/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Details.Root width="720px">
      <Details.Summary>Help with nationality</Details.Summary>
      <Details.Content>
        <Details.Text>
          We need to know your nationality so we can work out which elections you’re entitled to
          vote in.
        </Details.Text>
      </Details.Content>
    </Details.Root>
  ),
}

export const WithMultipleParagraphs: Story = {
  render: () => (
    <Details.Root width="720px">
      <Details.Summary>Where to find your National Insurance number</Details.Summary>
      <Details.Content>
        <Details.Text mb={3}>
          You can find your National Insurance number on your National Insurance card, payslip or
          P60.
        </Details.Text>
        <Details.Text>
          If you cannot find it, you can use the HMRC service to request a reminder.
        </Details.Text>
      </Details.Content>
    </Details.Root>
  ),
}
