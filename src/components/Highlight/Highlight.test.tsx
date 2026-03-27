import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Highlight } from './Highlight'

describe('Highlight', () => {
  it('renders highlighted query matches', () => {
    const { container } = renderWithProvider(
      <Highlight.Root query="Chakra">Build with Chakra UI components</Highlight.Root>
    )

    expect(screen.getByText(/build with/i)).toBeVisible()
    expect(container.querySelector('mark')).not.toBeNull()
  })
})
