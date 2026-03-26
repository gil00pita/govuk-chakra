import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKOGL } from './GOVUKOGL'

describe('GOVUKOGL', () => {
  it('renders an accessible SVG image when a title is present', () => {
    renderWithProvider(<GOVUKOGL title="Open Government Licence" />)

    expect(screen.getByRole('img', { name: /open government licence/i })).toBeVisible()
  })

  it('renders as decorative when no title is provided', () => {
    const { container } = renderWithProvider(<GOVUKOGL title="" />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
