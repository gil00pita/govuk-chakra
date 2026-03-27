import { Button } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Steps } from './Steps'

type StepsStoryArgs = {
  defaultStep?: number
  count?: number
}

const meta: Meta<StepsStoryArgs> = {
  title: 'Chakra Components/Disclosure/Steps',
  component: Steps.Root as unknown as ComponentType<StepsStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultStep: 0,
    count: 3,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Steps.Root {...args}>
      <Steps.List>
        <Steps.Item index={0} title="Account">
          <Steps.Trigger>
            <Steps.Indicator>
              <Steps.Number />
            </Steps.Indicator>
            <Steps.Title>Account</Steps.Title>
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1} title="Profile">
          <Steps.Trigger>
            <Steps.Indicator>
              <Steps.Number />
            </Steps.Indicator>
            <Steps.Title>Profile</Steps.Title>
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={2} title="Confirm">
          <Steps.Trigger>
            <Steps.Indicator>
              <Steps.Number />
            </Steps.Indicator>
            <Steps.Title>Confirm</Steps.Title>
          </Steps.Trigger>
        </Steps.Item>
      </Steps.List>
      <Steps.Content index={0}>Create account</Steps.Content>
      <Steps.Content index={1}>Complete profile</Steps.Content>
      <Steps.Content index={2}>Confirm details</Steps.Content>
      <Steps.CompletedContent>All steps completed</Steps.CompletedContent>
      <Steps.PrevTrigger asChild>
        <Button variant="outline" size="sm">
          Previous
        </Button>
      </Steps.PrevTrigger>
      <Steps.NextTrigger asChild>
        <Button size="sm">Next</Button>
      </Steps.NextTrigger>
    </Steps.Root>
  ),
}
