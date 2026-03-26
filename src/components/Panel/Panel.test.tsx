import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Panel } from './Panel'

describe('Panel', () => {
  it('renders the heading and body when using the root API', () => {
    renderWithProvider(
      <Panel heading="Application complete">
        <>
          Your reference number
          <strong>HDJ2123F</strong>
        </>
      </Panel>
    )

    expect(screen.getByRole('heading', { level: 1, name: /application complete/i })).toBeVisible()
    const body = screen.getByText(/your reference number/i).closest('div')
    expect(within(body ?? document.body).getByText('HDJ2123F')).toBeVisible()
  })

  it('supports the compound title and body API', () => {
    renderWithProvider(
      <Panel>
        <Panel.Title>Payment successful</Panel.Title>
        <Panel.Body>
          We have sent a confirmation email to
          <strong>name@example.com</strong>
        </Panel.Body>
      </Panel>
    )

    expect(screen.getByRole('heading', { level: 1, name: /payment successful/i })).toBeVisible()
    expect(screen.getByText(/we have sent a confirmation email to/i)).toBeVisible()
    expect(screen.getByText(/name@example\.com/i)).toBeVisible()
  })
})
