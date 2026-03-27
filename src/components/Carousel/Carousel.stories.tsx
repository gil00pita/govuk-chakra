import type { ComponentType } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from 'react-icons/lu'

import { Carousel } from './Carousel'

type CarouselStoryArgs = {
  slideCount?: number
  slidesPerPage?: number
  gap?: string | number
}

const items = Array.from({ length: 5 })

const meta: Meta<CarouselStoryArgs> = {
  title: 'Chakra Components/Disclosure/Carousel',
  component: Carousel.Root as unknown as ComponentType<CarouselStoryArgs>,
  tags: ['autodocs'],
  args: {
    slideCount: items.length,
    slidesPerPage: 1,
    gap: '4',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Carousel.Root
      slideCount={args.slideCount ?? items.length}
      slidesPerPage={args.slidesPerPage}
      gap={args.gap}
      maxW="md"
      mx="auto"
    >
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box
              w="100%"
              h="300px"
              rounded="lg"
              bg="teal.subtle"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Previous slide">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Next slide">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  ),
}

export const WithIndicators: Story = {
  render: () => (
    <Carousel.Root slideCount={items.length} maxW="md" mx="auto" gap="4">
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box
              w="100%"
              h="300px"
              rounded="lg"
              bg="orange.subtle"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel.Root>
  ),
}

export const WithAutoplay: Story = {
  render: () => (
    <Carousel.Root autoplay={{ delay: 2000 }} slideCount={items.length} maxW="xl" mx="auto">
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box
              w="100%"
              h="300px"
              rounded="lg"
              bg="blue.subtle"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Previous slide">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
            <Carousel.AutoplayIndicator paused={<LuPause />} play={<LuPlay />} />
          </IconButton>
        </Carousel.AutoplayTrigger>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Next slide">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  ),
}
