import { GoAlert, GoCheckCircle } from 'react-icons/go'
// Alert.stories.tsx
import { HStack, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '@/components/Alert'
import { FiInfo } from 'react-icons/fi'
import { JSX } from 'react'
import { TbAlertHexagon } from 'react-icons/tb'

type Status = 'info' | 'warning' | 'success' | 'error'

const ICON: Record<Status, JSX.Element> = {
  info: <FiInfo />,
  warning: <TbAlertHexagon />,
  success: <GoCheckCircle />,
  error: <GoAlert />,
}

type NotificationBannerStoryControls = {
  status: Status
  title: string
  description: string
}

const meta: Meta<NotificationBannerStoryControls> = {
  title: 'GOV.UK/Notification Banner',
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
    title: 'Important information',
    description: 'This is important information that users should be aware of.',
  },
  render: ({ status, title, description }) => (
    <Alert.Root
      status={status}
      bgColor={'bg'}
      display={'flex'}
      flexDirection={'column'}
      px="0"
      py="0"
      border={'5px solid'}
      borderColor={
        status === 'info'
          ? 'blue.500'
          : status === 'warning'
            ? 'orange.500'
            : status === 'success'
              ? 'green.500'
              : 'red.500'
      }
      borderRadius="0"
      boxShadow="md"
    >
      <HStack
        align="start"
        gap={2}
        mb={2}
        bgColor={
          status === 'info'
            ? 'blue.500'
            : status === 'warning'
              ? 'orange.500'
              : status === 'success'
                ? 'green.500'
                : 'red.500'
        }
      >
        <Alert.Indicator>{ICON[status as Status]}</Alert.Indicator>
        {title && <Alert.Title>{title}</Alert.Title>}
      </HStack>
      <Alert.Description>{description}</Alert.Description>
    </Alert.Root>
  ),
}

export default meta
type Story = StoryObj<NotificationBannerStoryControls>

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
