import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { ServiceNavigation } from './ServiceNavigation'

describe('ServiceNavigation', () => {
  it('renders the service name and current navigation item', () => {
    renderWithProvider(
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="/service">Apply for a passport</ServiceNavigation.ServiceName>
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="/overview" current>
                Overview
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="/documents">Documents</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
    )

    expect(screen.getByRole('link', { name: /apply for a passport/i })).toHaveAttribute(
      'href',
      '/service'
    )
    expect(screen.getByText('Overview').closest('a')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText('Documents').closest('a')).toHaveAttribute('href', '/documents')
  })

  it('toggles the mobile menu state from the menu button', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="/service">Register to vote</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="/overview">Overview</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
    )

    const toggle = screen.getByRole('button', { name: 'Menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
