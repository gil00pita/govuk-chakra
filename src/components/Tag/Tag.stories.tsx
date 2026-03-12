import { HStack, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'GOV.UK/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Completed',
    variant: 'grey',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['grey', 'green', 'turquoise', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow'],
    },
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
      <Tag variant="turquoise">Received</Tag>
      <Tag variant="blue">New</Tag>
      <Tag variant="purple">Pending</Tag>
      <Tag variant="pink">Waiting on</Tag>
      <Tag variant="red">Urgent</Tag>
      <Tag variant="orange">Delayed</Tag>
      <Tag variant="yellow">Attention</Tag>
    </Stack>
  ),
}
