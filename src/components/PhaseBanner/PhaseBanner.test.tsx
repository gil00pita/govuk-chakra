import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { PhaseBanner } from './PhaseBanner'

describe('PhaseBanner', () => {
  it('renders the default beta phase and feedback message', () => {
    renderWithProvider(
      <PhaseBanner.Root>
        <PhaseBanner.Text>This is a new service. Help us improve it and</PhaseBanner.Text>
        <PhaseBanner.Link href="/feedback">give your feedback by email</PhaseBanner.Link>
      </PhaseBanner.Root>
    )

    expect(screen.getByText('Beta')).toBeVisible()
    expect(screen.getByText(/this is a new service\. help us improve it and/i)).toBeVisible()
    expect(screen.getByRole('link', { name: /give your feedback by email/i })).toHaveAttribute(
      'href',
      '/feedback'
    )
  })

  it('supports a custom phase label and content', () => {
    renderWithProvider(
      <PhaseBanner.Root phase="alpha">
        <PhaseBanner.Text>
          This service is in alpha. Your feedback will help us improve it before wider testing.
        </PhaseBanner.Text>
      </PhaseBanner.Root>
    )

    const banner = screen.getByText('alpha').closest('div')

    expect(screen.getByText('alpha')).toBeVisible()
    expect(within(banner ?? document.body).getByText(/this service is in alpha/i)).toBeVisible()
  })
})
