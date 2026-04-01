import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import statusRecipe from './Status.recipe'
import { Status } from './Status'

describe('Status', () => {
  it('renders the status indicator with label text', () => {
    renderWithProvider(
      <Status.Root colorPalette="green">
        <Status.Indicator />
        Approved
      </Status.Root>
    )

    expect(screen.getByText('Approved')).toBeVisible()
  })

  it('uses the GOV.UK status recipe defaults', () => {
    expect(statusRecipe.defaultVariants?.size).toBe('md')
    expect(statusRecipe.defaultVariants?.colorPalette).toBe('blue')
    expect(statusRecipe.base?.root?.fontFamily).toBe('body')
    expect(statusRecipe.base?.indicator?.bg).toBe('colorPalette.solid')
  })
})
