import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { InsetText } from './InsetText'

describe('InsetText', () => {
  it('renders inset text content', () => {
    renderWithProvider(
      <InsetText>
        It can take up to 8 weeks to register a lasting power of attorney if there are no
        mistakes in the application.
      </InsetText>
    )

    expect(screen.getByText(/it can take up to 8 weeks to register/i)).toBeVisible()
  })

  it('renders nested links inside the inset text content', () => {
    renderWithProvider(
      <InsetText>
        If you’ve already applied, you can{' '}
        <a href="https://www.gov.uk" target="_blank" rel="noreferrer">
          track your application online
        </a>
        .
      </InsetText>
    )

    const container = screen.getByText(/if you’ve already applied/i).closest('div')

    expect(within(container ?? document.body).getByRole('link', { name: /track your application online/i })).toHaveAttribute(
      'href',
      'https://www.gov.uk'
    )
  })
})
