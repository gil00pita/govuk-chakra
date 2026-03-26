import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKCrest } from './GOVUKCrest'

describe('GOVUKCrest', () => {
  it('renders an accessible SVG image when a title is present', () => {
    renderWithProvider(<GOVUKCrest title="Government crest" />)

    expect(screen.getByRole('img', { name: /government crest/i })).toBeVisible()
  })

  it('renders as decorative when no title is provided', () => {
    const { container } = renderWithProvider(<GOVUKCrest title="" />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
