import type { Meta, StoryObj } from '@storybook/react'

import { ErrorSummary } from './ErrorSummary'
import { pxToRem } from '@/utils'

const meta: Meta<typeof ErrorSummary> = {
  title: 'GOV.UK/ErrorSummary',
  component: ErrorSummary,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ErrorSummary>

export const Default: Story = {
  args: {
    description: 'Fix the following errors before continuing:',
    errorList: [
      { href: '#full-name', children: 'Enter your full name' },
      { href: '#national-insurance-number', children: 'Enter your National Insurance number' },
    ],
    maxW: pxToRem(960),
  },
}

export const WithoutDescription: Story = {
  args: {
    errorList: [
      { href: '#passport-issued', children: 'Select when your passport was issued' },
      { href: '#passport-expiry', children: 'Enter your passport expiry date' },
    ],
    maxW: pxToRem(960),
  },
}
