import { Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Text } from './Text'

const govukTextScaleOptions = [16, 19, 24, 27, 36, 48, 80] as const

const meta: Meta<typeof Text> = {
  title: 'Chakra Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the Text component for body copy while keeping typography aligned with the GOV.UK type scale. ' +
          'You can pass GOV.UK scale values like `16`, `19`, `24`, `27`, `36`, `48`, and `80` to `fontSize`.',
      },
    },
  },
  args: {
    children:
      'Use this component for paragraphs, supporting copy, and inline content that should follow the GOV.UK typography scale.',
    fontSize: 19,
    fontWeight: 400,
  },
  argTypes: {
    children: { control: 'text' },
    fontSize: {
      control: 'select',
      options: govukTextScaleOptions,
      description: 'The GOV.UK type scale point for the text.',
    },
    fontWeight: {
      control: 'select',
      options: [400, 700],
      description: 'The font weight of the text.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Scale: Story = {
  render: () => (
    <Stack maxW="720px" gap={4}>
      {govukTextScaleOptions.map((size) => (
        <Text key={size} fontSize={size}>
          Text {size}: The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </Stack>
  ),
}

export const Weights: Story = {
  render: () => (
    <Stack maxW="720px" gap={4}>
      <Text fontSize={19} fontWeight={400}>
        Regular body text for supporting content and general interface copy.
      </Text>
      <Text fontSize={19} fontWeight={700}>
        Bold body text for emphasis within GOV.UK-style layouts.
      </Text>
    </Stack>
  ),
}

export const LongForm: Story = {
  render: () => (
    <Stack maxW="720px" gap={4}>
      <Text fontSize={19}>
        This is a standard paragraph set in the GOV.UK body text size. It is intended for most
        long-form content, descriptions, and page copy.
      </Text>
      <Text fontSize={16}>
        Smaller text can be useful for captions, metadata, and secondary information that should
        remain readable without competing with the main content.
      </Text>
    </Stack>
  ),
}
