import { Button, Portal, Text } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import hoverCardRecipe from './HoverCard.recipe'
import { HoverCard } from './HoverCard'

describe('HoverCard', () => {
  it('uses the expected recipe defaults', () => {
    expect(hoverCardRecipe.defaultVariants?.size).toBe('md')
    expect(hoverCardRecipe.base?.content).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
  })

  it('shows content on hover', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <Text>Additional details shown on hover.</Text>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    )

    await user.hover(screen.getByRole('button', { name: /hover me/i }))

    expect(await screen.findByText(/additional details shown on hover/i)).toBeVisible()
  })
})
