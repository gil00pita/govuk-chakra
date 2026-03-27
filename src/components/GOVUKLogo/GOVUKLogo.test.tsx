import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKLogo } from './GOVUKLogo'

describe('GOVUKLogo', () => {
  it('renders an accessible image when a title is provided', () => {
    renderWithProvider(<GOVUKLogo title="GOV.UK" />)

    expect(screen.getByRole('img', { name: /gov\.uk/i })).toBeVisible()
  })

  it('can render decoratively without image semantics', () => {
    renderWithProvider(<GOVUKLogo title="" />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
