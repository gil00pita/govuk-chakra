import { Heading, Text, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '../components/Link'

const meta: Meta = {
  title: 'GOV.UK/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <VStack gap={4} align="start" width="600px">
      <Heading size="xl">Extra Large Heading (H1)</Heading>
      <Heading size="lg">Large Heading (H2)</Heading>
      <Heading size="md">Medium Heading (H3)</Heading>
      <Heading size="sm">Small Heading (H4)</Heading>
      <Heading size="xs">Extra Small Heading (H5)</Heading>
    </VStack>
  ),
}

export const TextVariants: Story = {
  render: () => (
    <VStack gap={4} align="start" width="600px">
      <Text fontSize="lg">
        This is lead text. Use this for important information that you need users to notice.
      </Text>
      <Text fontSize="md">
        This is body text. The default text size is 19px and it should be used for all body content.
      </Text>
      <Text fontSize="sm">
        This is small text. Use this sparingly for less important information.
      </Text>
      <Text fontSize="xs">
        This is caption text. Use this for image captions or additional context.
      </Text>
    </VStack>
  ),
}

export const Links: Story = {
  render: () => (
    <VStack gap={4} align="start" width="600px">
      <Text>
        This is a paragraph with a{' '}
        <Link href="#" color="text.muted">
          default link
        </Link>{' '}
        in the middle of the text.
      </Text>
      <Text bg="gray.900" color="white" p={4}>
        This is text on a dark background with an{' '}
        <Link href="#" color="text.muted">
          inverse link
        </Link>
        .
      </Text>
      <Text>
        This paragraph contains a{' '}
        <Link href="#" color="text.muted">
          muted link
        </Link>{' '}
        that's less prominent.
      </Text>
    </VStack>
  ),
}

export const TypographyHierarchy: Story = {
  render: () => (
    <VStack gap={6} align="start" width="700px">
      <Heading size="xl">Apply for a provisional driving licence</Heading>

      <Text textStyle="5xl">
        You can apply for a provisional driving licence online if you're a resident of Great Britain
        and meet the minimum age requirement.
      </Text>

      <Heading size="lg">What you need to know</Heading>

      <Text textStyle="md">
        You must be at least 15 years and 9 months old to apply for a provisional driving licence.
        You can start driving a car when you're 17.
      </Text>

      <Heading size="md">Documents you'll need</Heading>

      <Text fontSize="md">
        You'll need to provide documents that prove your identity. You can use your passport or
        other <Link href="#">accepted forms of ID</Link>.
      </Text>

      <Text textStyle="sm">Last updated: 15 March 2024</Text>
    </VStack>
  ),
}
