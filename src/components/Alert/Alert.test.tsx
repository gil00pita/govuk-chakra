import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders the GOV.UK-style informational banner content', () => {
    renderWithProvider(
      <Alert.Root status="info" variant="subtle">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Application incomplete</Alert.Title>
          <Alert.Description>You have 7 days left to send your application.</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )

    const banner = screen.getByRole('region', { name: 'Important' })

    expect(within(banner).getByRole('heading', { level: 2, name: 'Important' })).toBeVisible()
    expect(
      within(banner).getByRole('heading', { level: 3, name: 'Application incomplete' })
    ).toBeVisible()
    expect(within(banner).getByText('You have 7 days left to send your application.')).toBeVisible()
  })

  it('uses alert semantics and a success label for successful messages', () => {
    renderWithProvider(
      <Alert.Root status="success">
        <Alert.Content>
          <Alert.Title>Training outcome recorded and trainee withdrawn</Alert.Title>
          <Alert.Description>
            Contact example@department.gov.uk if you think there&apos;s a problem.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )

    const banner = screen.getByRole('alert')

    expect(banner).toHaveAccessibleName('Success')
    expect(
      within(banner).getByRole('heading', {
        level: 3,
        name: 'Training outcome recorded and trainee withdrawn',
      })
    ).toBeVisible()
  })
})
