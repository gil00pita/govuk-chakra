import type { ComponentType } from 'react'
import { Avatar, Badge, Span, Stack, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuCheck, LuPackage, LuShip } from 'react-icons/lu'

import { selectArgType } from '@/stories/storybookControls'
import { Timeline } from './Timeline'

type TimelineStoryArgs = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'subtle' | 'solid' | 'outline' | 'plain'
}

const meta: Meta<TimelineStoryArgs> = {
  title: 'Chakra Components/Data Display/Timeline',
  component: Timeline.Root as unknown as ComponentType<TimelineStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'solid',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg', 'xl'], 'The size of the component.'),
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
    <Timeline.Root {...args} maxW="400px">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuShip />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Product Shipped</Timeline.Title>
          <Timeline.Description>13th May 2021</Timeline.Description>
          <Text textStyle="sm">
            We shipped your product via <strong>FedEx</strong> and it should arrive within 3-5
            business days.
          </Text>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">Order Confirmed</Timeline.Title>
          <Timeline.Description>18th May 2021</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuPackage />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">Order Delivered</Timeline.Title>
          <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
}

export const Alternating: Story = {
  render: () => (
    <Timeline.Root size="sm" variant="outline">
      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title>Placed Order</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" alignItems="flex-end">
          <Timeline.Title>Prepared Order</Timeline.Title>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1" />
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title>Order Delivered</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <Stack gap="16">
      {(['subtle', 'solid', 'outline', 'plain'] as const).map((variant) => (
        <Timeline.Root variant={variant} key={variant}>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar.Root size="full">
                  <Avatar.Image src="https://bit.ly/sage-adebayo" />
                  <Avatar.Fallback name="Sage" />
                </Avatar.Root>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <Span fontWeight="medium">sage</Span>
                created a new project
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuCheck />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <Span fontWeight="medium">sage</Span>
                changed status from <Badge>In progress</Badge> to{' '}
                <Badge colorPalette="teal">Completed</Badge>
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      ))}
    </Stack>
  ),
}
