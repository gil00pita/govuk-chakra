import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Kbd } from './Kbd'

describe('Kbd', () => {
  it('renders keyboard shortcut text', () => {
    renderWithProvider(<Kbd.Root>Ctrl</Kbd.Root>)

    expect(screen.getByText('Ctrl')).toBeVisible()
  })
})
