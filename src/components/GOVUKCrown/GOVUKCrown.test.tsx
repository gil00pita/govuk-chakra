import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKCrown } from './GOVUKCrown'

describe('GOVUKCrown', () => {
  it('renders an accessible SVG image when a title is present', () => {
    renderWithProvider(<GOVUKCrown title="Government crown" />)

    expect(screen.getByRole('img', { name: /government crown/i })).toBeVisible()
  })

  it('renders as decorative when no title is provided', () => {
    const { container } = renderWithProvider(<GOVUKCrown title="" />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
