import type { Meta, StoryObj } from '@storybook/react'

import { ErrorSummary } from './ErrorSummary'
import { pxToRem } from '@/utils'

const meta: Meta = {
  title: 'GOV.UK/Components/Error summary',
  component: ErrorSummary.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the error summary component to show a page-level summary of validation errors and link each message to the relevant field.\n\n' +
          'The error summary component is useful for forms or content that require users to correct errors before proceeding.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System error summary documentation: https://design-system.service.gov.uk/components/error-summary/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ErrorSummary.Root maxW={pxToRem(960)}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Description>Fix the following errors before continuing:</ErrorSummary.Description>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#full-name">Enter your full name</ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#national-insurance-number">
            Enter your National Insurance number
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary.Root>
  ),
}

export const WithoutDescription: Story = {
  render: () => (
    <ErrorSummary.Root maxW={pxToRem(960)}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#passport-issued">
            Select when your passport was issued
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#passport-expiry">
            Enter your passport expiry date
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary.Root>
  ),
}
