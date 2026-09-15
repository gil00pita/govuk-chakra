import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Stack } from '@chakra-ui/react'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { StepByStep } from './StepByStep'

const meta = {
  title: 'GOV.UK/Components/Step by Step',
  component: StepByStep,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box maxW="720px" width="full">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Numbered, expandable guidance for a content journey. Each step accepts rich content and links. Use value and onValueChange to control expanded steps, or defaultValue to initially open selected steps.',
      },
    },
  },
  args: {
    items: [
      {
        id: 'check',
        title: 'Check whether you can get support',
        content: (
          <Stack gap={3}>
            <Text>Find out whether this service is suitable for you.</Text>
            <Link href="/?path=/story/gov-uk-patterns-help-users-to--check-a-service-is-suitable">
              Check whether the service is suitable
            </Link>
          </Stack>
        ),
      },
      {
        id: 'prepare',
        title: 'Prepare your application',
        content: <Text>Check what information you need and how long an application takes.</Text>,
      },
      {
        id: 'apply',
        title: 'Apply for support',
        content: (
          <Text>
            Complete the application tasks and check your answers before sending your application.
          </Text>
        ),
      },
    ],
  },
} satisfies Meta<typeof StepByStep>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const FirstStepExpanded: Story = { args: { defaultValue: ['check'] } }
export const AllExpanded: Story = { args: { defaultValue: ['check', 'prepare', 'apply'] } }
export const Narrow: Story = {
  decorators: [
    (Story) => (
      <Box maxW="320px">
        <Story />
      </Box>
    ),
  ],
}
export const Controlled: Story = {
  render: function ControlledExample(args) {
    const [value, setValue] = useState(['check'])
    return (
      <StepByStep {...args} value={value} onValueChange={(details) => setValue(details.value)} />
    )
  },
}
