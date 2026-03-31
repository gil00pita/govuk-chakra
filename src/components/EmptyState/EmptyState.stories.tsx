import type { ComponentType } from 'react'
import { Button, ButtonGroup, List, VStack } from '@/govuk-chakra'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HiColorSwatch } from 'react-icons/hi'
import { LuShoppingCart } from 'react-icons/lu'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { EmptyState } from './EmptyState'

type EmptyStateStoryArgs = {
  colorPalette?: (typeof chakraColorPaletteOptions)[number]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'subtle' | 'solid' | 'outline' | 'plain'
}

const meta: Meta<EmptyStateStoryArgs> = {
  title: 'Chakra Components/Feedback/Empty State',
  component: EmptyState.Root as unknown as ComponentType<EmptyStateStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'blue',
    size: 'md',
    variant: 'subtle',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
    variant: selectArgType(
      ['subtle', 'solid', 'outline', 'plain'],
      'The variant of the component.'
    ),
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
  render: (args) => (
    <EmptyState.Root {...args}>
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
          <Button variant="secondary">Import</Button>
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
}

export const WithList: Story = {
  render: (args) => (
    <EmptyState.Root {...args}>
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
