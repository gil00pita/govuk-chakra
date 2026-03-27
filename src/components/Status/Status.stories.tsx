import type { ComponentType } from 'react'
import { HStack, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Status } from './Status'

type StatusStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
  colorPalette?: 'red' | 'blue' | 'orange' | 'green'
}

const meta: Meta<StatusStoryArgs> = {
  title: 'Chakra Components/Feedback/Status',
  component: Status.Root as unknown as ComponentType<StatusStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    colorPalette: 'blue',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Status.Root {...args}>
      <Status.Indicator />
      Info
    </Status.Root>
  ),
}

export const Basic: Story = {
  render: () => (
    <HStack gap="6">
      <Status.Root colorPalette="red">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="orange">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="green">
        <Status.Indicator />
      </Status.Root>
    </HStack>
  ),
}

export const WithSizes: Story = {
  render: () => (
    <Stack gap="2" align="flex-start">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <HStack key={size} gap="10" px="4">
          <Status.Root size={size} width="100px" colorPalette="orange">
            <Status.Indicator />
            In Review
          </Status.Root>
          <Status.Root size={size} width="100px" colorPalette="red">
            <Status.Indicator />
            Error
          </Status.Root>
          <Status.Root size={size} width="100px" colorPalette="green">
            <Status.Indicator />
            Approved
          </Status.Root>
        </HStack>
      ))}
    </Stack>
  ),
}
