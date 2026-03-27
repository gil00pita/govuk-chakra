import { Button, Portal } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('shows the tooltip content on hover', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Tooltip.Root openDelay={0} closeDelay={0}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Helpful tooltip text
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    )

    await user.hover(screen.getByRole('button', { name: /hover me/i }))

    expect(await screen.findByText('Helpful tooltip text')).toBeVisible()
  })
})
