import { Button } from '@/govuk-chakra'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { Toast, Toaster, createToaster } from './Toast'

const toaster = createToaster({ placement: 'top-end' })

type ToastStoryArgs = {
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  description?: string
}

const meta: Meta<ToastStoryArgs> = {
  title: 'Chakra Components/Feedback/Toast',
  component: Toast.Root as unknown as ComponentType<ToastStoryArgs>,
  tags: ['autodocs'],
  args: {
    type: 'info',
    title: 'Changes saved',
    description: 'Your settings were updated.',
  },
  argTypes: {
    type: selectArgType(['info', 'warning', 'success', 'error'], 'The semantic type of the toast.'),
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Button
        onClick={() =>
          toaster.create({
            type: args.type,
            title: args.title,
            description: args.description,
            duration: 100000,
          })
        }
      >
        Show toast
      </Button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id} tabIndex={-1}>
            {/* tabIndex={-1} allows the toast to be skipped by keyboard navigation for accessibility */}
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger />
          </Toast.Root>
        )}
      </Toaster>
    </>
  ),
}
