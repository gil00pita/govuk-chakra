import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { BackLink } from './BackLink'

describe('BackLink', () => {
  it('renders a link with the default text and href', () => {
    renderWithProvider(<BackLink />)

    expect(screen.getByRole('link', { name: 'Back' })).toHaveAttribute('href', '#')
  })

  it('supports custom link text and href', () => {
    renderWithProvider(<BackLink href="/previous-step">Return to previous step</BackLink>)

    expect(screen.getByRole('link', { name: /return to previous step/i })).toHaveAttribute(
      'href',
      '/previous-step'
    )
  })

  it('preserves additional anchor semantics', () => {
    renderWithProvider(
      <BackLink href="/previous-step" aria-current="page">
        Back to previous step
      </BackLink>
    )

    expect(screen.getByRole('link', { name: /back to previous step/i })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })
})
