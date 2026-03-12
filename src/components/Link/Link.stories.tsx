import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Text } from '@chakra-ui/react'

import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'GOV.UK/Components/Link',
  component: Link,
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

export const External: Story = {
  args: {
    href: 'https://www.gov.uk',
    children: 'Visit GOV.UK',
  },
}

export const InlineText: Story = {
  render: (args) => (
    <Text maxW="460px">
      You can{' '}
      <Link {...args} href="https://www.gov.uk/service-manual">
        read the Service Manual
      </Link>{' '}
      to learn more about designing and delivering great public services.
    </Text>
  ),
}

export const States: Story = {
  render: () => (
    <Stack align="start" gap={3}>
      <Link href="#">Default GOV.UK link</Link>
      <Link href="#">External GOV.UK link</Link>
    </Stack>
  ),
}
