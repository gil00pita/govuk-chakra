import type { ComponentType } from 'react'
import { Button, ButtonGroup, List, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HiColorSwatch } from 'react-icons/hi'
import { LuShoppingCart } from 'react-icons/lu'

import { selectArgType } from '@/stories/storybookControls'
import { EmptyState } from './EmptyState'

type EmptyStateStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
}

const meta: Meta<EmptyStateStoryArgs> = {
  title: 'Chakra Components/Feedback/EmptyState',
  component: EmptyState.Root as unknown as ComponentType<EmptyStateStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <EmptyState.Root {...args}>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <LuShoppingCart />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Your cart is empty</EmptyState.Title>
          <EmptyState.Description>
            Explore our products and add items to your cart
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
}

export const WithAction: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiColorSwatch />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Start adding tokens</EmptyState.Title>
          <EmptyState.Description>Add a new design token to get started</EmptyState.Description>
        </VStack>
        <ButtonGroup>
          <Button>Create token</Button>
          <Button variant="outline">Import</Button>
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
}

export const WithList: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiColorSwatch />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No results found</EmptyState.Title>
          <EmptyState.Description>Try adjusting your search</EmptyState.Description>
        </VStack>
        <List.Root variant="marker">
          <List.Item>Try removing filters</List.Item>
          <List.Item>Try different keywords</List.Item>
        </List.Root>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
}
