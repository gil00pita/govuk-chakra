import { Link, Stack, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'GOV.UK/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    isExternal: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    isExternal: false,
    children: 'View guidance',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const External: Story = {
  args: {
    href: 'https://www.gov.uk',
    isExternal: true,
    children: 'Visit GOV.UK',
  },
}

export const InlineText: Story = {
  render: (args) => (
    <Text maxW="460px">
      You can{' '}
      <Link {...args} href="https://www.gov.uk/service-manual" isExternal>
        read the Service Manual
      </Link>{' '}
      to learn more about designing and delivering great public services.
    </Text>
  ),
}

export const States: Story = {
  render: () => (
    <Stack align="start" spacing={3}>
      <Link
        href="#"
        color="brand.blue"
        textDecoration="underline"
        _hover={{ color: 'brand.blueDark' }}
      >
        Default link (manual GOV.UK style)
      </Link>
      <Link
        href="#"
        color="brand.blue"
        textDecoration="underline"
        _hover={{ color: 'brand.blueDark' }}
      >
        Hover link
      </Link>
      <Link
        href="#visited"
        color="brand.darkGrey"
        textDecoration="underline"
        _hover={{ color: 'brand.blueDark' }}
      >
        Visited style example
      </Link>
      <Link
        href="#"
        isExternal
        color="brand.blue"
        textDecoration="underline"
        _hover={{ color: 'brand.blueDark' }}
      >
        External link (opens in new tab)
      </Link>
    </Stack>
  ),
}
