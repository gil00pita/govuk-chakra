import { Box, Button, CloseButton, Portal } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'

import { selectArgType } from '@/utils/storybookControls'
import { Dialog } from './Dialog'

type DialogStoryArgs = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full'
}

const meta: Meta<DialogStoryArgs> = {
  title: 'Chakra Components/Overlays/Dialog',
  component: Dialog.Root as unknown as ComponentType<DialogStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['xs', 'sm', 'md', 'lg', 'xl', 'cover', 'full'], 'The size of the dialog.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Box position="relative" minH="320px" p="8" overflow="hidden">
      <Dialog.Root {...args}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open dialog</Button>
        </Dialog.Trigger>
        <Portal disabled>
          <Dialog.Backdrop pos="absolute" inset="0" />
          <Dialog.Positioner pos="absolute" inset="0" p="4">
            <Dialog.Content>
              <Dialog.CloseTrigger asChild>
                <CloseButton />
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title>Dialog title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>Dialog content</Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', { name: /open dialog/i }))

    await expect(canvas.getByRole('dialog', { hidden: true })).toBeInTheDocument()
    await expect(canvas.getByText('Dialog title')).toBeInTheDocument()
  },
}
