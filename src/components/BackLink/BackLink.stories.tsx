import type { Meta, StoryObj } from '@storybook/react-vite'

import { BackLink } from './BackLink'
import { Box } from '@chakra-ui/react'

const meta: Meta<typeof BackLink> = {
  title: 'GOV.UK/Components/Back link',
  component: BackLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the BackLink component to help users return to the previous page in a service flow.\n\n' +
          'Use the inverse variant when the back link sits on a dark background.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System back link documentation: https://design-system.service.gov.uk/components/back-link/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    href: '#',
    children: 'Back',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Inverse: Story = {
  render: (args) => (
    <Box bg="primary.500" px={6} py={4}>
      <BackLink {...args} inverse />
    </Box>
  ),
}
