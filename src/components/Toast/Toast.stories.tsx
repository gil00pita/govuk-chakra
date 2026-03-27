import { Button } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toast, Toaster, createToaster } from './Toast'

const toaster = createToaster({ placement: 'top-end' })

type ToastStoryArgs = Record<string, never>

const meta: Meta<ToastStoryArgs> = {
  title: 'Chakra Components/Feedback/Toast',
  component: Toast.Root as unknown as ComponentType<ToastStoryArgs>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toaster.create({
            title: 'Changes saved',
            description: 'Your settings were updated.',
          })
        }
      >
        Show toast
      </Button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger />
          </Toast.Root>
        )}
      </Toaster>
    </>
  ),
}
