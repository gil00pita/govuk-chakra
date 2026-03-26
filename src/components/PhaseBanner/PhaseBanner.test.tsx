import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { PhaseBanner } from './PhaseBanner'

describe('PhaseBanner', () => {
  it('renders the default beta phase and feedback message', () => {
    renderWithProvider(
      <PhaseBanner>
        <PhaseBanner.Text>This is a new service. Help us improve it and</PhaseBanner.Text>
        <PhaseBanner.Link href="/feedback">give your feedback by email</PhaseBanner.Link>
      </PhaseBanner>
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
      <PhaseBanner phase="Alpha" phaseVariant="grey">
        <PhaseBanner.Text>
          This service is in alpha. Your feedback will help us improve it before wider testing.
        </PhaseBanner.Text>
      </PhaseBanner>
    )

    const banner = screen.getByText('Alpha').closest('div')

    expect(screen.getByText('Alpha')).toBeVisible()
    expect(within(banner ?? document.body).getByText(/this service is in alpha/i)).toBeVisible()
  })
})
