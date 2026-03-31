import type { ComponentType } from 'react'
import { HStack, Icon } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  LuArrowRight,
  LuCircleOff,
  LuClock,
  LuDollarSign,
  LuLock,
  LuTrendingUp,
} from 'react-icons/lu'

import { selectArgType } from '@/utils/storybookControls'
import { RadioCard } from './RadioCard'

type RadioCardStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'surface' | 'subtle' | 'outline' | 'solid'
  orientation?: 'horizontal' | 'vertical'
}

const frameworkItems = [
  { value: 'next', title: 'Next.js', description: 'Best for apps' },
  { value: 'vite', title: 'Vite', description: 'Best for SPAs' },
  { value: 'astro', title: 'Astro', description: 'Best for static sites' },
]

const meta: Meta<RadioCardStoryArgs> = {
  title: 'Chakra Components/Forms/Radio Card',
  component: RadioCard.Root as unknown as ComponentType<RadioCardStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'outline',
    orientation: 'horizontal',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
    variant: selectArgType(
      ['surface', 'subtle', 'outline', 'solid'],
      'The variant of the component.'
    ),
    orientation: selectArgType(
      ['horizontal', 'vertical'],
      'The orientation of the radio card group.'
    ),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioCard.Root {...args} defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack align="stretch">
        {frameworkItems.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack align="stretch">
        {frameworkItems.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  ),
}

export const Centered: Story = {
  render: () => {
    const items = [
      { icon: <LuDollarSign />, value: 'fixed', title: 'Fixed Rate' },
      { icon: <LuTrendingUp />, value: 'milestone', title: 'Milestone' },
      { icon: <LuClock />, value: 'hourly', title: 'Hourly' },
    ]

    return (
      <RadioCard.Root orientation="vertical" align="center" defaultValue="fixed">
        <RadioCard.Label>Select contract type</RadioCard.Label>
        <HStack align="stretch">
          {items.map((item) => (
            <RadioCard.Item key={item.value} value={item.value}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <Icon fontSize="2xl" color="fg.muted" mb="2">
                  {item.icon}
                </Icon>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>
    )
  },
}

export const WithIcon: Story = {
  render: () => {
    const items = [
      {
        icon: <LuArrowRight />,
        value: 'allow',
        title: 'Allow',
        description: 'This user can access the system',
      },
      {
        icon: <LuCircleOff />,
        value: 'deny',
        title: 'Deny',
        description: 'This user will be denied access to the system',
      },
      {
        icon: <LuLock />,
        value: 'lock',
        title: 'Lock',
        description: 'This user will be locked out of the system',
      },
    ]

    return (
      <RadioCard.Root defaultValue="allow">
        <RadioCard.Label>Select permission</RadioCard.Label>
        <HStack align="stretch">
          {items.map((item) => (
            <RadioCard.Item key={item.value} value={item.value}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemContent>
                  <Icon size="xl" color="fg.muted" mb="2">
                    {item.icon}
                  </Icon>
                  <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                  <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
                </RadioCard.ItemContent>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>
    )
  },
}
