// Alert.stories.tsx
import { Alert, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { GoAlert, GoCheckCircle } from 'react-icons/go'
import { FiInfo } from 'react-icons/fi'
import { TbAlertHexagon } from 'react-icons/tb'

type Status = 'info' | 'warning' | 'success' | 'error'

const ICON: Record<Status, JSX.Element> = {
  info: <FiInfo />,
  warning: <TbAlertHexagon />,
  success: <GoCheckCircle />,
  error: <GoAlert />,
}

const meta = {
  title: 'GOV.UK/Alert',
  component: Alert.Root,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    status: { control: 'select', options: ['info', 'warning', 'success', 'error'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    status: 'info',
    title: '',
    description: 'This is important information that users should be aware of.',
  },
  render: ({ status, title, description }) => (
    <Alert.Root status={status}>
      <Alert.Indicator>{ICON[status as Status]}</Alert.Indicator>
      {title && <Alert.Title>{title}</Alert.Title>}
      <Alert.Description>{description}</Alert.Description>
    </Alert.Root>
  ),
} satisfies Meta<typeof Alert.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    status: 'info',
    title: '',
    description: 'This is important information that users should be aware of.',
  },
}
export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'Warning!',
    description: 'You may be breaking the law if you do not register by the deadline.',
  },
}
export const Success: Story = {
  args: {
    status: 'success',
    title: 'Application complete',
    description:
      'Your reference number is HDJ2123F. You will receive a confirmation email shortly.',
  },
}
export const Error: Story = {
  args: {
    status: 'error',
    title: 'There is a problem',
    description: 'Enter your full name as it appears on your passport.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} align="stretch" width="500px">
      {(['info', 'warning', 'success', 'error'] as Status[]).map((s) => (
        <Alert.Root key={s} status={s}>
          <Alert.Indicator>{ICON[s]}</Alert.Indicator>
          {s !== 'info' && <Alert.Title>{s[0].toUpperCase() + s.slice(1)}</Alert.Title>}
          <Alert.Description>This is a {s} message.</Alert.Description>
        </Alert.Root>
      ))}
    </VStack>
  ),
}
