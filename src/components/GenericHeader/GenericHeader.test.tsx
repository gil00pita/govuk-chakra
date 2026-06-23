import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GenericHeader } from './GenericHeader'

describe('GenericHeader', () => {
  it('renders a header landmark with a homepage link', () => {
    renderWithProvider(
      <GenericHeader.Root>
        <GenericHeader.Container>
          <GenericHeader.LogoWrapper>
            <GenericHeader.Logo href="/start" logoText="Service name" />
          </GenericHeader.LogoWrapper>
        </GenericHeader.Container>
      </GenericHeader.Root>
    )

    const header = screen.getByRole('banner')

    expect(within(header).getByRole('link', { name: 'Service name' })).toHaveAttribute(
      'href',
      '/start'
    )
  })

  it('supports an accessible label for image-only logos', () => {
    renderWithProvider(
      <GenericHeader.Root>
        <GenericHeader.Container>
          <GenericHeader.LogoWrapper>
            <GenericHeader.Logo href="/" label="Service homepage">
              <GenericHeader.Logomark />
            </GenericHeader.Logo>
          </GenericHeader.LogoWrapper>
        </GenericHeader.Container>
      </GenericHeader.Root>
    )

    expect(screen.getByRole('link', { name: 'Service homepage' })).toHaveAttribute('href', '/')
  })

  it('keeps the example logomark decorative', () => {
    renderWithProvider(
      <GenericHeader.Root>
        <GenericHeader.Container>
          <GenericHeader.LogoWrapper>
            <GenericHeader.Logo href="/" logoText="Service name">
              <GenericHeader.Logomark data-testid="generic-header-logomark" />
              Service name
            </GenericHeader.Logo>
          </GenericHeader.LogoWrapper>
        </GenericHeader.Container>
      </GenericHeader.Root>
    )

    expect(screen.getByTestId('generic-header-logomark')).toHaveAttribute('aria-hidden', 'true')
  })
})
