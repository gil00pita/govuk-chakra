import { Button } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import floatingPanelRecipe from './FloatingPanel.recipe'
import { FloatingPanel } from './FloatingPanel'

describe('FloatingPanel', () => {
  it('uses the expected recipe defaults', () => {
    expect(floatingPanelRecipe.base?.content).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
    expect(floatingPanelRecipe.base?.header).toMatchObject({
      bg: 'bg.subtle',
      borderBottomColor: 'border.input',
    })
  })

  it('opens and shows the panel content', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <FloatingPanel.Root defaultSize={{ width: 320, height: 240 }}>
        <FloatingPanel.Trigger asChild>
          <Button variant="outline">Open panel</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <FloatingPanel.DragTrigger>
                <FloatingPanel.Title>Panel title</FloatingPanel.Title>
              </FloatingPanel.DragTrigger>
              <FloatingPanel.Control>
                <FloatingPanel.CloseTrigger>Close</FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body>Floating panel content</FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    )

    await user.click(screen.getByRole('button', { name: /open panel/i }))

    expect(await screen.findByText('Floating panel content')).toBeTruthy()
  })
})
