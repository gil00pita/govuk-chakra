import { Box, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Text } from '@/components'
import { Link } from '@/components/Link/Link'
import type { HeadingProps } from '@/components/Heading/Heading'

interface TypographyStoryArgs extends HeadingProps {
  componentType: 'Heading' | 'Text'
}

const meta: Meta = {
  title: 'GOV.UK/Styles/Typography',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const govukHeadingSizeOptions = [19, 24, 27, 36, 48, 80]
const govukTextSizeOptions = [16, 19, 24]
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
    color: '#000',
  },
  argTypes: {
    componentType: {
      control: 'select',
      options: [...componentTypeOptions],
      description: 'React component being using Text or Heading to render',
    },
    size: {
      control: 'select',
      options: govukHeadingSizeOptions,
      description: 'GOV.UK type scale number',
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
      description: 'Font weight for the heading',
    },
    color: {
      control: 'text',
      description: 'Text color (can use theme colors or custom hex values)',
    },
  },
  render: ({ componentType, ...rest }) =>
    componentType === 'Heading' ? (
      <Box p={8}>
        <Heading color={rest.color} {...rest} />
      </Box>
    ) : (
      <Box p={8}>
        <Text fontSize={rest.size} color={rest.color} {...rest} />
      </Box>
    ),
}

export const TextStory: StoryObj<typeof Text> = {
  name: 'Text',
  args: {
    fontSize: 19,
    children:
      'This is body text. The default text size is 19px and it should be used for all body content.',
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: govukTextSizeOptions,
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
    <VStack gap={4} align="start" w="full" p={8}>
      <Heading size={80}>H1 - 80 Only used in exceptional circumstances</Heading>
      <Heading size={48}>H1 - 48 Extra Large Heading</Heading>
      <Heading size={36}>H2 - 36 Large Heading</Heading>
      <Heading size={27}>H4 - 27 Medium Heading</Heading>
      <Heading size={24}>H5 - 24 Small Heading</Heading>
      <Heading size={19}>H6 - 19 Extra Small Heading</Heading>
    </VStack>
  ),
}

export const TextVariants: Story = {
  render: () => (
    <VStack gap={4} align="start" w="full" p={8}>
      <Text fontSize={24}>
        This is lead text size 24. Use this for important information that you need users to notice.
      </Text>
      <Text fontSize={19}>
        This is body text size 19. The default text size is 19px and it should be used for all body
        content.
      </Text>
      <Text fontSize={16}>
        This is caption text size 16. Use this for image captions or additional context.
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
