import { renderWithProvider } from '@/test/renderWithProvider'
import { screen, within } from '@testing-library/react'

import { NotificationBanner } from './NotificationBanner'

describe('NotificationBanner', () => {
  it('renders an informational banner as a labelled region', () => {
    renderWithProvider(
      <NotificationBanner heading="Important">
        <NotificationBanner.Heading>Application incomplete</NotificationBanner.Heading>
        <NotificationBanner.Body>
          You have 7 days left to send your application.
        </NotificationBanner.Body>
      </NotificationBanner>
    )

    const banner = screen.getByRole('region', { name: 'Important' })

    expect(within(banner).getByRole('heading', { level: 2, name: 'Important' })).toBeVisible()
    expect(
      within(banner).getByRole('heading', { level: 3, name: 'Application incomplete' })
    ).toBeVisible()
    expect(within(banner).getByText(/you have 7 days left to send your application/i)).toBeVisible()
  })

  it('uses alert semantics for the success variant', () => {
    renderWithProvider(
      <NotificationBanner heading="Success" variant="success">
        <NotificationBanner.Body>Your reference number is HDJ2123F.</NotificationBanner.Body>
      </NotificationBanner>
    )

    const banner = screen.getByRole('alert')

    expect(banner).toHaveAccessibleName('Success')
    expect(within(banner).getByText(/your reference number is hdj2123f/i)).toBeVisible()
  })
})
