import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders a horizontal separator by default', () => {
    renderWithProvider(<Separator />)

    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('supports vertical orientation', () => {
    renderWithProvider(<Separator orientation="vertical" />)

    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('preserves separator semantics when invisible', () => {
    renderWithProvider(<Separator visible={false} />)

    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
