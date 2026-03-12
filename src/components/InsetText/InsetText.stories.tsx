import type { Meta, StoryObj } from '@storybook/react'

import { InsetText } from './InsetText'

const meta: Meta = {
  title: 'GOV.UK/Components/Inset text',
  parameters: {
    layout: 'centered',
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
