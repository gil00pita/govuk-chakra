import type { ComponentType } from 'react'
import { Badge, FormatNumber, HStack, Icon, Progress } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuDollarSign } from 'react-icons/lu'

import { Stat } from './Stat'

type StatStoryArgs = {
  colorPalette?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
  size?: 'sm' | 'md' | 'lg'
}

const meta: Meta<StatStoryArgs> = {
  title: 'Chakra Components/Feedback/Stat',
  component: Stat.Root as unknown as ComponentType<StatStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'blue',
    size: 'md',
  },
  argTypes: {
    colorPalette: {
      control: 'select',
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stat.Root>
      <Stat.Label>Unique visitors</Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
    </Stat.Root>
  ),
}

export const WithTrend: Story = {
  render: () => (
    <Stat.Root>
      <Stat.Label>Unique</Stat.Label>
      <HStack>
        <Stat.ValueText>
          <FormatNumber value={8456.4} style="currency" currency="USD" />
        </Stat.ValueText>
        <Badge colorPalette="green" gap="0">
          <Stat.UpIndicator />
          12%
        </Badge>
      </HStack>
      <Stat.HelpText>since last month</Stat.HelpText>
    </Stat.Root>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Stat.Root maxW="240px" borderWidth="1px" p="4" rounded="md">
      <HStack justify="space-between">
        <Stat.Label>Sales</Stat.Label>
        <Icon color="fg.muted">
          <LuDollarSign />
        </Icon>
      </HStack>
      <Stat.ValueText>$4.24k</Stat.ValueText>
    </Stat.Root>
  ),
}

export const WithProgressBar: Story = {
  render: () => (
    <Stat.Root maxW="240px">
      <Stat.Label>This week</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={1340} style="currency" currency="USD" maximumFractionDigits={0} />
      </Stat.ValueText>
      <Stat.HelpText mb="2">+12% from last week</Stat.HelpText>
      <Progress.Root defaultValue={65}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Stat.Root>
  ),
}

export const AnimatedValue: Story = {
  render: () => (
    <Stat.Root>
      <Stat.Label>Total applications</Stat.Label>
      <Stat.ValueText
        value={28451}
        formatOptions={{ maximumFractionDigits: 0 }}
        animationDuration={1800}
      />
      <Stat.HelpText>updated this week</Stat.HelpText>
    </Stat.Root>
  ),
}
