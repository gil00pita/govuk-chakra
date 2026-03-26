import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKHeader } from './GOVUKHeader'

describe('GOVUKHeader', () => {
  it('renders a header landmark with the default GOV.UK homepage logo link', () => {
    renderWithProvider(
      <GOVUKHeader>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="/" />
        </GOVUKHeader.Container>
      </GOVUKHeader>
    )

    const header = screen.getByRole('banner')

    expect(within(header).getByRole('link', { name: /gov\.uk homepage/i })).toHaveAttribute(
      'href',
      '/'
    )
  })

  it('supports a custom logo label', () => {
    renderWithProvider(
      <GOVUKHeader>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="/service" label="Tax service home" />
        </GOVUKHeader.Container>
      </GOVUKHeader>
    )

    expect(screen.getByRole('link', { name: /tax service home/i })).toHaveAttribute(
      'href',
      '/service'
    )
  })
})
