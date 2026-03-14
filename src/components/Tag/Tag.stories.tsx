import { HStack, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'

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
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['grey', 'green', 'teal', 'blue', 'purple', 'magenta', 'red', 'orange', 'yellow'],
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
