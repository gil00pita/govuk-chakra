import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { SkipLink } from './SkipLink'

describe('SkipLink', () => {
  it('renders the default skip link target and accessible name', () => {
    renderWithProvider(<SkipLink />)

    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
      'href',
      '#content'
    )
  })

  it('supports a custom target and label', () => {
    renderWithProvider(<SkipLink href="#main">Skip to service content</SkipLink>)

    expect(screen.getByRole('link', { name: /skip to service content/i })).toHaveAttribute(
      'href',
      '#main'
    )
  })
})
