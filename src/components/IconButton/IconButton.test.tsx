import { screen } from '@testing-library/react'
import { LuSettings } from 'react-icons/lu'

import { renderWithProvider } from '@/test/renderWithProvider'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('renders an accessible icon button', () => {
    renderWithProvider(
      <IconButton.Root aria-label="Open settings">
        <LuSettings />
      </IconButton.Root>
    )

    expect(screen.getByRole('button', { name: /open settings/i })).toBeVisible()
  })
})
