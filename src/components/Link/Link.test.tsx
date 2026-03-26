import { Link } from './Link'
import { renderWithProvider } from '@/test/renderWithProvider'
import { screen } from '@testing-library/react'

describe('Link', () => {
  it('renders an anchor with the provided href', () => {
    renderWithProvider(<Link href="/guidance">Read the guidance</Link>)

    expect(screen.getByRole('link', { name: /read the guidance/i })).toHaveAttribute(
      'href',
      '/guidance'
    )
  })

  it('supports additional anchor attributes', () => {
    renderWithProvider(
      <Link href="https://www.gov.uk" target="_blank" rel="noreferrer" aria-current="page">
        GOV.UK
      </Link>
    )

    const link = screen.getByRole('link', { name: /gov\.uk/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('preserves link semantics when noStyle is enabled', () => {
    renderWithProvider(
      <p>
        See the{' '}
        <Link noStyle href="/service-manual">
          Service Manual
        </Link>{' '}
        for more information.
      </p>
    )

    expect(screen.getByRole('link', { name: /service manual/i })).toHaveAttribute(
      'href',
      '/service-manual'
    )
  })
})
