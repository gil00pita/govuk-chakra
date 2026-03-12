import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Text } from '@chakra-ui/react'

import { CookieBanner } from './CookieBanner'

const meta: Meta<typeof CookieBanner> = {
  title: 'GOV.UK/CookieBanner',
  component: CookieBanner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    children: 'View guidance',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
