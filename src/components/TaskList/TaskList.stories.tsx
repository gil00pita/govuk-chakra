import type { Meta, StoryObj } from '@storybook/react'

import { TaskList } from './TaskList'

const meta: Meta<typeof TaskList> = {
  title: 'GOV.UK/TaskList',
  component: TaskList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleItems = [
  { title: 'Company directors', href: '#', status: 'completed' as const },
  { title: 'Registered company details', href: '#', status: 'incomplete' as const },
  {
    title: 'Financial history',
    href: '#',
    hint: "Include 5 years of the company's relevant financial information",
    status: 'incomplete' as const,
  },
  { title: 'Business plan', href: '#', status: 'notStarted' as const },
  { title: 'References', href: '#', status: 'cannotStartYet' as const },
]

export const Default: Story = {
  args: {
    heading: 'Application tasks',
    items: sampleItems,
    width: 'min(100%, 960px)',
  },
}

export const WithCustomRows: Story = {
  render: () => (
    <TaskList heading="Business details" width="min(100%, 960px)">
      <TaskList.Item title="Trading name" href="#" status="completed" />
      <TaskList.Item
        title="Business address"
        href="#"
        hint="The address where your business is registered"
        status="incomplete"
      />
      <TaskList.Item title="Tax details" href="#" status="cannotStartYet" />
    </TaskList>
  ),
}
