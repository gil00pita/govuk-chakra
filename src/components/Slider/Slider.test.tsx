import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import '@/test/mockResizeObserver'
import sliderRecipe from './Slider.recipe'
import { Slider } from './Slider'

describe('Slider', () => {
  it('uses the expected recipe defaults', () => {
    expect(sliderRecipe.defaultVariants?.size).toBe('md')
    expect(sliderRecipe.base?.track).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
  })

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
