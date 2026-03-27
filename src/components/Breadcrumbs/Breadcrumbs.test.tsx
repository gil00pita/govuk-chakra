import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders a breadcrumb navigation landmark with linked ancestors and a current page item', () => {
    renderWithProvider(
      <Breadcrumbs landmarkLabel="Site path">
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/guidance">Guidance</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item current>
            <Breadcrumbs.Current>Current page</Breadcrumbs.Current>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    )

    const nav = screen.getByRole('navigation', { name: /site path/i })

    expect(within(nav).getByRole('list')).toBeVisible()
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(within(nav).getByRole('link', { name: 'Guidance' })).toHaveAttribute('href', '/guidance')
    expect(within(nav).getByText('Current page').closest('li')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('supports the inverse variant without changing breadcrumb semantics', () => {
    renderWithProvider(
      <Breadcrumbs inverse>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/home">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item current>
            <Breadcrumbs.Current>Passport application</Breadcrumbs.Current>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    )

    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/home')
    expect(screen.getByText('Passport application').closest('li')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })
})
