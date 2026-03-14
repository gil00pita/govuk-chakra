import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '@chakra-ui/react'
import { ServiceNavigation } from './ServiceNavigation'

const meta: Meta = {
  title: 'GOV.UK/Components/Service navigation',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the ServiceNavigation component to provide a consistent navigation experience within a service.\n\n' +
          'The ServiceNavigation component is useful for guiding users through different sections of a service.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System service navigation documentation: https://design-system.service.gov.uk/components/service-navigation/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <Box
        display={{ base: 'block', md: 'flex' }}
        alignItems={{ md: 'center' }}
        justifyContent="space-between"
      >
        <ServiceNavigation.ServiceName href="#">Apply for a passport</ServiceNavigation.ServiceName>
        <ServiceNavigation.Toggle />
      </Box>
      <ServiceNavigation.Nav>
        <ServiceNavigation.List>
          <ServiceNavigation.Item current>
            <ServiceNavigation.Link href="#" current>
              Overview
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href="#">Before you start</ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href="#">Documents</ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href="#">Pay</ServiceNavigation.Link>
          </ServiceNavigation.Item>
        </ServiceNavigation.List>
      </ServiceNavigation.Nav>
    </ServiceNavigation.Root>
  ),
}

export const ServiceNameOnly: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.ServiceName href="#">Register to vote</ServiceNavigation.ServiceName>
    </ServiceNavigation.Root>
  ),
}
