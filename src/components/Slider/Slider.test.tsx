import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import '@/test/mockResizeObserver'
import { Slider } from './Slider'

describe('Slider', () => {
  it('updates the slider value with keyboard interaction', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Slider.Root defaultValue={[40]} min={0} max={100}>
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
        </Slider.Control>
      </Slider.Root>
    )

    const slider = screen.getByRole('slider', { hidden: true })

    expect(slider).toHaveAttribute('aria-valuenow', '40')

    await user.click(slider)
    await user.keyboard('{ArrowRight}')

    expect(Number(slider.getAttribute('aria-valuenow'))).toBeGreaterThan(40)
  })
})
