import { Box, HStack, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'GOV.UK/Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A GOV.UK-style section break built on Chakra UI Separator. It uses GOV.UK border colour and spacing tokens for consistent page rhythm.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    spacing: 'm',
    visible: true,
    width: '720px',
  },
}

export const SpacingVariants: Story = {
  render: () => (
    <VStack align="stretch" width="720px">
      <Box>Medium spacing</Box>
      <Separator spacing="m" />
      <Box>Large spacing</Box>
      <Separator spacing="l" />
      <Box>Extra large spacing</Box>
      <Separator spacing="xl" />
    </VStack>
  ),
}

export const Vertical: Story = {
  render: () => (
    <HStack align="stretch" height="120px">
      <Box>Left content</Box>
      <Separator orientation="vertical" spacing="m" />
      <Box>Right content</Box>
    </HStack>
  ),
}

export const Invisible: Story = {
  render: () => (
    <VStack align="stretch" width="720px">
      <Box>Content above</Box>
      <Separator visible={false} spacing="l" />
      <Box>Content below with spacing preserved</Box>
    </VStack>
  ),
}
