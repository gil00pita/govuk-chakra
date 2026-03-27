import { Button, CloseButton, Portal } from '@chakra-ui/react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Dialog } from './Dialog'

describe('Dialog', () => {
  it('opens and closes the dialog content', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open dialog</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
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
    )

    await user.click(screen.getByRole('button', { name: /open dialog/i }))

    expect(await screen.findByText('Dialog content')).toBeVisible()

    await user.click(screen.getByRole('button', { name: /close/i }))

    await waitFor(() => {
      expect(screen.queryByText('Dialog content')).not.toBeInTheDocument()
    })
  })
})
