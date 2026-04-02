import { HStack, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tag } from './Tag'

const tagVariantOptions = [
  'grey',
  'green',
  'teal',
  'blue',
  'purple',
  'magenta',
  'red',
  'orange',
  'yellow',
  'pink',
] as const

const meta: Meta<typeof Tag> = {
  title: 'GOV.UK/Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <Tag/> component to help users identify the status or category of an item.\n\n' +
          'The <Tag/> component has nine variants: `grey`, `green`, `teal`, `blue`, `purple`, `magenta`, `red`, `orange`, and `yellow`. Use the appropriate variant to convey the meaning or importance of the tag.\n\n' +
          'Choose the variant based on the context so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System tag documentation: https://design-system.service.gov.uk/components/tag/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Completed',
    variant: 'grey',
    uppercase: false,
    bold: false,
    variantStyles: {
      pink: {
        bg: 'pink.100',
        color: 'pink.900',
        _dark: { bg: 'pink.900', color: 'pink.100' },
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    bold: { control: 'boolean' },
    variant: {
      control: 'select',
      options: tagVariantOptions,
    },
    uppercase: { control: 'boolean' },
    variantStyles: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoStatuses: Story = {
  render: () => (
    <HStack gap={4}>
      <Tag variant="green">Active</Tag>
      <Tag variant="grey">Inactive</Tag>
    </HStack>
  ),
}

export const AllColours: Story = {
  render: () => (
    <Stack gap={3} align="start">
      <Tag variant="grey">Draft</Tag>
      <Tag variant="green">Active</Tag>
      <Tag variant="teal">Received</Tag>
      <Tag variant="blue">New</Tag>
      <Tag variant="purple">Pending</Tag>
      <Tag variant="magenta">Waiting on</Tag>
      <Tag variant="red">Urgent</Tag>
      <Tag variant="orange">Delayed</Tag>
      <Tag variant="yellow">Attention</Tag>
    </Stack>
  ),
}
