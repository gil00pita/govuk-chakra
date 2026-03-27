import type { ComponentType } from 'react'
import { Circle, HStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  IoLogoFigma,
  IoLogoGitlab,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVimeo,
} from 'react-icons/io5'

import { htmlElementOptions, rangeArgType, selectArgType } from '@/stories/storybookControls'
import { Marquee } from './Marquee'

type MarqueeStoryArgs = {
  as?: (typeof htmlElementOptions)[number]
  autoFill?: boolean
  reverse?: boolean
  speed?: number
}

const iconItems = [
  { icon: IoLogoFigma, label: 'Figma', color: '#F24E1E' },
  { icon: IoLogoTwitter, label: 'Twitter', color: '#1da1f2' },
  { icon: IoLogoLinkedin, label: 'LinkedIn', color: '#0077b5' },
  { icon: IoLogoGitlab, label: 'GitLab', color: '#fc6d26' },
  { icon: IoLogoVimeo, label: 'Vimeo', color: '#1ab7ea' },
  { icon: IoLogoJavascript, label: 'JavaScript', color: '#f7df1e' },
]

const diagonalItems = Array.from({ length: 10 }, (_, index) => `Chakra Conf 2026 ${index + 1}`)

const meta: Meta<MarqueeStoryArgs> = {
  title: 'Chakra Components/Data Display/Marquee',
  component: Marquee.Root as unknown as ComponentType<MarqueeStoryArgs>,
  tags: ['autodocs'],
  args: {
    as: 'div',
    autoFill: true,
    reverse: false,
    speed: 50,
  },
  argTypes: {
    as: selectArgType(htmlElementOptions, 'The underlying element to render.'),
    speed: rangeArgType({
      min: 10,
      max: 120,
      step: 5,
      description: 'The speed of the marquee animation in pixels per second.',
    }),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Marquee.Root {...args} spacing="2rem">
      <Marquee.Viewport>
        <Marquee.Content>
          {iconItems.map((item) => (
            <Marquee.Item key={item.label} px="2rem">
              <item.icon size="3rem" aria-label={item.label} color={item.color} />
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  ),
}

export const EdgeGradient: Story = {
  render: () => (
    <Marquee.Root>
      <Marquee.Edge side="start" />
      <Marquee.Viewport>
        <Marquee.Content>
          {iconItems.map((item) => (
            <Marquee.Item key={item.label} px="2rem">
              <item.icon size="3rem" aria-label={item.label} color={item.color} />
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
      <Marquee.Edge side="end" />
    </Marquee.Root>
  ),
}

export const Diagonal: Story = {
  render: () => (
    <Marquee.Root
      position="relative"
      top="25%"
      overflow="hidden"
      transform="rotate(-2deg)"
      bg="bg.emphasized"
      py="4"
    >
      <Marquee.Viewport>
        <Marquee.Content>
          {diagonalItems.map((item) => (
            <Marquee.Item key={item} pr="4">
              <HStack gap="8" textStyle="3xl" fontWeight="medium">
                {item}
                <Circle size="1.5" bg="colorPalette.solid" />
              </HStack>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  ),
}
