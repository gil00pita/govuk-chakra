import { For, HStack, Stack, Text } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { ScrollArea } from './ScrollArea'

type ScrollAreaStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'hover' | 'always'
}

const meta: Meta<ScrollAreaStoryArgs> = {
  title: 'Chakra Components/Disclosure/Scroll Area',
  component: ScrollArea.Root as unknown as ComponentType<ScrollAreaStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'always',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg'], 'The scrollbar size.'),
    variant: selectArgType(['hover', 'always'], 'When the scrollbar should be visible.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sections = [
  'Application received',
  'Identity checked',
  'Residency evidence reviewed',
  'Financial evidence reviewed',
  'Sponsor contacted',
  'Case escalated',
  'Decision drafted',
  'Quality assurance completed',
  'Decision issued',
]

function ExampleContent({ wide = false }: { wide?: boolean }) {
  return (
    <Stack gap={3} minW={wide ? '560px' : undefined} p={4}>
      <For each={sections}>
        {(section, index) => (
          <Stack key={section} gap={1}>
            <Text fontWeight="700">{section}</Text>
            <Text color="fg.muted">
              {index + 1}. Review the service record and update the case history with the latest
              evidence.
            </Text>
          </Stack>
        )}
      </For>
    </Stack>
  )
}

function BasicScrollArea(
  props: ComponentPropsWithoutRef<typeof ScrollArea.Root> & {
    children?: ReactNode
    wide?: boolean
  }
) {
  const { children, wide, ...rest } = props

  return (
    <ScrollArea.Root height="260px" width="360px" {...rest}>
      <ScrollArea.Viewport>
        <ScrollArea.Content>{children ?? <ExampleContent wide={wide} />}</ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
      <ScrollArea.Scrollbar orientation="horizontal" />
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}

export const Default: Story = {
  render: (args) => <BasicScrollArea {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <HStack gap="6" align="flex-start">
      <For each={['sm', 'md', 'lg'] as const}>
        {(size) => <BasicScrollArea key={size} size={size} height="220px" width="280px" />}
      </For>
    </HStack>
  ),
}

export const Hover: Story = {
  render: () => <BasicScrollArea variant="hover" />,
}

export const BothDirections: Story = {
  render: () => <BasicScrollArea wide />,
}
