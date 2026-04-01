import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import ratingRecipe from './Rating.recipe'
import { Rating } from './Rating'

describe('Rating', () => {
  it('uses the expected recipe defaults', () => {
    expect(ratingRecipe.defaultVariants?.size).toBe('sm')
    expect(ratingRecipe.defaultVariants?.colorPalette).toBe('orange')
    expect(ratingRecipe.base?.label).toMatchObject({
      fontFamily: 'body',
      fontWeight: '700',
    })
  })

  it('updates the selected rating value', async () => {
    const user = userEvent.setup()

    renderWithProvider(<Rating.Root defaultValue={2} count={5} label="Rating" />)

    const radios = screen.getAllByRole('radio', { hidden: true })
    await user.click(radios[3])

    expect(radios[3]).toBeChecked()
  })
})
