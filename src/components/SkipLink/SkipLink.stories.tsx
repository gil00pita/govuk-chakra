import { Box, Heading, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkipLink } from './SkipLink'

const meta: Meta<typeof SkipLink> = {
  title: 'GOV.UK/Components/Skip link',
  component: SkipLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the SkipLink component to provide a way for users to quickly navigate to the main content of a page.\n\n' +
          'The SkipLink component is useful for improving accessibility, allowing users to bypass repetitive navigation links.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System skip link documentation: https://design-system.service.gov.uk/components/skip-link/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    href: '#content',
    children: 'Skip to main content',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Box minH="320px" position="relative" bg="bg">
      <SkipLink {...args} />
      <Box as="header" bg="grey.950" color="white" px={6} py={4}>
        Service name
      </Box>
      <Box as="main" id="content" px={6} py={8}>
        <Heading as="h1" size="lg" mb={4}>
          Main content
        </Heading>
        <Text maxW="48rem">
          Use the Tab key from the top of the page to reveal the skip link, then press Enter to jump
          to this main content area.
        </Text>
      </Box>
    </Box>
  ),
}
