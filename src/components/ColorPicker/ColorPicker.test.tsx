import { Button, HStack } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { parseColor } from '@chakra-ui/react'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { ColorPicker } from './ColorPicker'

describe('ColorPicker', () => {
  it('opens the picker content and lets the user pick a swatch', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    renderWithProvider(
      <ColorPicker.Root defaultValue={parseColor('#eb5e41')} onValueChange={handleValueChange}>
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <ColorPicker.Trigger asChild>
            <Button>Pick color</Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.Sliders />
            </HStack>
            <ColorPicker.SwatchGroup>
              <ColorPicker.SwatchTrigger value="#ff0000" />
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </ColorPicker.Root>
    )

    await user.click(screen.getByText('Pick color'))
    await user.click(screen.getByRole('button', { name: /select #ff0000 as the color/i }))

    expect(handleValueChange).toHaveBeenCalled()
  })
})
