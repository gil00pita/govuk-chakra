import { renderWithProvider } from '@/test/renderWithProvider'
import {
  screen,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CookieBanner } from './CookieBanner'

describe('CookieBanner', () => {
  it('renders the default banner content and actions', () => {
    renderWithProvider(<CookieBanner serviceName="Example service" viewCookiesHref="/cookies" />)

    const banner = screen.getByRole('region', { name: /cookies on example service/i })

    expect(
      within(banner).getByText(/we use some essential cookies to make this service work/i)
    ).toBeVisible()
    expect(within(banner).getByText(/we'd also like to use analytics cookies/i)).toBeVisible()
    expect(within(banner).getByRole('button', { name: /accept analytics cookies/i })).toBeVisible()
    expect(within(banner).getByRole('button', { name: /reject analytics cookies/i })).toBeVisible()
    expect(within(banner).getByRole('link', { name: /view cookies/i })).toHaveAttribute(
      'href',
      '/cookies'
    )
  })

  it('shows confirmation content after accepting analytics cookies', async () => {
    const user = userEvent.setup()
    const onDecisionChange = vi.fn()

    renderWithProvider(<CookieBanner onDecisionChange={onDecisionChange} />)

    await user.click(screen.getByRole('button', { name: /accept analytics cookies/i }))

    expect(onDecisionChange).toHaveBeenCalledWith('accepted')

    const confirmation = screen.getByRole('alert')
    expect(confirmation).toHaveTextContent(/you've accepted analytics cookies/i)
    expect(within(confirmation).getByRole('button', { name: /hide cookie message/i })).toBeVisible()
  })

  it('hides the banner when the hide button is pressed', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    renderWithProvider(<CookieBanner defaultDecision="accepted" onHide={onHide} />)

    await user.click(screen.getByRole('button', { name: /hide cookie message/i }))

    expect(onHide).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('region', { name: /cookies on/i })).not.toBeInTheDocument()
  })
})
