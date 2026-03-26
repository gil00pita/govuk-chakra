import { screen, waitFor, within } from '@testing-library/react'

import { ErrorSummary } from './ErrorSummary'
import { renderWithProvider } from '@/test/renderWithProvider'

describe('ErrorSummary', () => {
  it('renders the alert region with a labelled title and links', () => {
    renderWithProvider(
      <ErrorSummary.Root>
        <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
        <ErrorSummary.Description>
          Fix the following errors before continuing:
        </ErrorSummary.Description>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#full-name">Enter your full name</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#passport-expiry">
              Enter your passport expiry date
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Root>
    )

    const summary = screen.getByRole('alert', { name: /there is a problem/i })

    expect(within(summary).getByText(/fix the following errors before continuing:/i)).toBeVisible()
    expect(within(summary).getByRole('link', { name: /enter your full name/i })).toHaveAttribute(
      'href',
      '#full-name'
    )
    expect(
      within(summary).getByRole('link', {
        name: /enter your passport expiry date/i,
      })
    ).toHaveAttribute('href', '#passport-expiry')
  })

  it('focuses the summary region by default', async () => {
    renderWithProvider(
      <ErrorSummary.Root>
        <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      </ErrorSummary.Root>
    )

    const summary = screen.getByRole('alert', { name: /there is a problem/i })

    await waitFor(() => {
      expect(summary).toHaveFocus()
    })
  })

  it('can disable autofocus when requested', async () => {
    renderWithProvider(
      <ErrorSummary.Root disableAutoFocus>
        <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      </ErrorSummary.Root>
    )

    const summary = screen.getByRole('alert', { name: /there is a problem/i })

    await waitFor(() => {
      expect(summary).not.toHaveFocus()
    })
  })
})
