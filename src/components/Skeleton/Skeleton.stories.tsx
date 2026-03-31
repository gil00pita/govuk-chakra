import type { ComponentType } from 'react'
import { HStack, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Skeleton } from './Skeleton'
import type { SkeletonProps } from './Skeleton'

type SkeletonStoryArgs = Pick<SkeletonProps, 'loading' | 'variant' | 'colorPalette'>

const meta: Meta<SkeletonStoryArgs> = {
  title: 'Chakra Components/Feedback/Skeleton',
  component: Skeleton.Root as unknown as ComponentType<SkeletonStoryArgs>,
  tags: ['autodocs'],
  args: {
    loading: true,
    variant: 'pulse',
    colorPalette: 'gray',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    variant: selectArgType(['pulse', 'shine'], 'The animation variant of the skeleton.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HStack gap="5" maxW="320px">
      <Skeleton.Root {...args} boxSize="12" rounded="full" flexShrink={0} />
      <Stack flex="1">
        <Skeleton.Root {...args} height="5" />
        <Skeleton.Root {...args} height="5" width="80%" />
      </Stack>
    </HStack>
  ),
}

export const Feed: Story = {
  render: (args) => (
    <Stack gap="6" maxW="xs">
      <HStack width="full">
        <Skeleton.Root {...args} boxSize="10" rounded="full" flexShrink={0} />
        <Stack flex="1">
          <Skeleton.Root {...args} height="4" />
          <Skeleton.Root {...args} height="4" width="70%" />
        </Stack>
      </HStack>
      <Skeleton.Root {...args} height="200px" />
    </Stack>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <Stack gap="5">
      <HStack gap="5">
        <Skeleton.Root flex="1" height="5" variant="pulse" />
      </HStack>
      <HStack gap="5">
        <Skeleton.Root flex="1" height="5" variant="shine" />
      </HStack>
    </Stack>
  ),
}
