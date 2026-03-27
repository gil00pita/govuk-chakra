import { VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Text } from '@/components'
import { Link } from '@/components/Link/Link'
import type { HeadingProps } from '@/components/Heading/Heading'

interface TypographyStoryArgs extends HeadingProps {
  componentType: 'Heading' | 'Text'
  error?: boolean
  errorMsg?: string
}

const meta: Meta = {
  title: 'GOV.UK/Styles/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const govukSizeOptions = [16, 19, 24, 27, 36, 48, 80]
const headingOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']
// const textOptions = ['span', 'p']
const componentTypeOptions = ['Heading', 'Text']

export const HeadingStory: StoryObj<TypographyStoryArgs> = {
  name: 'Heading',
  args: {
    componentType: 'Heading',
    size: 'xl',
    as: 'h1',
    children: 'Extra Large Heading (H1)',
    error: false,
    errorMsg: 'This is an error message',
  },
  argTypes: {
    componentType: {
      control: 'select',
      options: [...componentTypeOptions],
      description: 'React component being using Text or Heading to render',
    },
    size: {
      control: 'select',
      options: [...govukSizeOptions],
      description: 'GOV.UK type scale number (16, 19, 24, 27, 36, 48, 80)',
    },
    as: {
      control: 'select',
      options: headingOptions,
      description: 'HTML heading element to render',
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'text',
    },
  },
  render: ({ componentType, ...rest }) =>
    componentType === 'Heading' ? (
      <Heading color={rest.error ? 'fg.error' : rest.color} {...rest} />
    ) : (
      <Text fontSize={rest.size} color={rest.error ? 'fg.error' : rest.color} {...rest} />
    ),
}

export const TextStory: StoryObj<typeof Text> = {
  name: 'Text',
  args: {
    fontSize: 'md',
    children:
      'This is body text. The default text size is 19px and it should be used for all body content.',
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: [...govukSizeOptions],
      description: 'GOV.UK type scale number (16, 19, 24, 27, 36, 48, 80)',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
  render: (args) => <Text {...args} />,
}

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
      <Text bg="grey.900" color="white" p={4}>
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
        that&apos;s less prominent.
      </Text>
    </VStack>
  ),
}

export const TypographyHierarchy: Story = {
  render: () => (
    <VStack gap={6} align="start" width="700px">
      <Heading size="xl">Apply for a provisional driving licence</Heading>

      <Text textStyle="5xl">
        You can apply for a provisional driving licence online if you&apos;re a resident of Great
        Britain and meet the minimum age requirement.
      </Text>

      <Heading size="lg">What you need to know</Heading>

      <Text textStyle="md">
        You must be at least 15 years and 9 months old to apply for a provisional driving licence.
        You can start driving a car when you&apos;re 17.
      </Text>

      <Heading size="md">Documents you&apos;ll need</Heading>

      <Text fontSize="md">
        You&apos;ll need to provide documents that prove your identity. You can use your passport or
        other <Link href="#">accepted forms of ID</Link>.
      </Text>

      <Text textStyle="sm">Last updated: 15 March 2024</Text>
    </VStack>
  ),
}
