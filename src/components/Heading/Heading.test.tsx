import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders the requested semantic heading level', () => {
    renderWithProvider(<Heading as="h2">Section title</Heading>)

    expect(screen.getByRole('heading', { level: 2, name: /section title/i })).toBeVisible()
  })

  it('supports GOV.UK numeric type scale sizes without affecting heading semantics', () => {
    renderWithProvider(
      <Heading as="h3" size={36}>
        Application complete
      </Heading>
    )

    expect(screen.getByRole('heading', { level: 3, name: /application complete/i })).toBeVisible()
  })
})
