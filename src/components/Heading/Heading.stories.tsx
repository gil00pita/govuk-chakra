import { Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from './Heading'

const govukHeadingScaleOptions = [16, 19, 24, 27, 36, 48, 80] as const

const meta: Meta<typeof Heading> = {
  title: 'Chakra Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the Heading component for page titles and section headings while keeping sizes aligned with the GOV.UK type scale. ' +
          'You can pass GOV.UK scale values like `16`, `19`, `24`, `27`, `36`, `48`, and `80` to `size`.',
      },
    },
  },
  args: {
    children: 'Page heading',
    as: 'h1',
    size: 48,
  },
  argTypes: {
    children: { control: 'text' },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The semantic heading element to render.',
    },
    size: {
      control: 'select',
      options: govukHeadingScaleOptions,
      description: 'The GOV.UK type scale point for the heading.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Scale: Story = {
  render: () => (
    <Stack maxW="720px" gap={5}>
      {govukHeadingScaleOptions.map((size) => (
        <Heading key={size} as="h2" size={size}>
          Heading {size}
        </Heading>
      ))}
    </Stack>
  ),
}

export const Hierarchy: Story = {
  render: () => (
    <Stack maxW="720px" gap={4}>
      <Heading as="h1" size={48}>
        Service title
      </Heading>
      <Heading as="h2" size={36}>
        Section heading
      </Heading>
      <Heading as="h3" size={27}>
        Subsection heading
      </Heading>
      <Heading as="h4" size={24}>
        Supporting heading
      </Heading>
    </Stack>
  ),
}

export const WithBodyCopy: Story = {
  render: () => (
    <Stack maxW="720px" gap={4}>
      <Heading as="h2" size={36}>
        Help users understand what happens next
      </Heading>
      <Heading as="h3" size={24}>
        Before you start
      </Heading>
    </Stack>
  ),
}
