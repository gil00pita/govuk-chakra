import { Button, Portal } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Popover } from './Popover'

describe('Popover', () => {
  it('shows the popover body when the trigger is clicked', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="outline">Open popover</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Body>Popover content</Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    )

    await user.click(screen.getByRole('button', { name: /open popover/i }))

    expect(await screen.findByText('Popover content')).toBeVisible()
  })
})
