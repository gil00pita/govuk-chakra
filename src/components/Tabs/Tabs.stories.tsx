import { Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '@/components/Heading/Heading'
import { Text } from '@/components/Text/Text'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'GOV.UK/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 'min(100%, 960px)',
    items: [
      {
        value: 'past-day',
        label: 'Past day',
        content: (
          <Stack gap={3} align="start">
            <Heading as="h2" size={24}>
              Past day
            </Heading>
            <Text fontSize={19}>David Francis closed 3 cases and opened 0 new cases.</Text>
          </Stack>
        ),
      },
      {
        value: 'past-week',
        label: 'Past week',
        content: (
          <Stack gap={3} align="start">
            <Heading as="h2" size={24}>
              Past week
            </Heading>
            <Text fontSize={19}>David Francis closed 24 cases and opened 18 new cases.</Text>
          </Stack>
        ),
      },
      {
        value: 'past-month',
        label: 'Past month',
        content: (
          <Stack gap={3} align="start">
            <Heading as="h2" size={24}>
              Past month
            </Heading>
            <Text fontSize={19}>Rita Patel closed 126 cases and opened 142 new cases.</Text>
          </Stack>
        ),
      },
      {
        value: 'past-year',
        label: 'Past year',
        content: (
          <Stack gap={3} align="start">
            <Heading as="h2" size={24}>
              Past year
            </Heading>
            <Text fontSize={19}>Paul Farmer closed 1,129 cases and opened 1,083 new cases.</Text>
          </Stack>
        ),
      },
    ],
  },
}

export const CompoundApi: Story = {
  render: () => (
    <Tabs defaultValue="overview" width="min(100%, 960px)">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="team">Team</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="overview">
        <Heading as="h2" size={24} mb={3}>
          Overview
        </Heading>
        <Text fontSize={19}>Summary of current performance and service delivery metrics.</Text>
      </Tabs.Content>

      <Tabs.Content value="team">
        <Heading as="h2" size={24} mb={3}>
          Team
        </Heading>
        <Text fontSize={19}>Current staffing levels, roles and responsibilities.</Text>
      </Tabs.Content>

      <Tabs.Content value="activity">
        <Heading as="h2" size={24} mb={3}>
          Activity
        </Heading>
        <Text fontSize={19}>Recent task and case activity across the service.</Text>
      </Tabs.Content>
    </Tabs>
  ),
}
