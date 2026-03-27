import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Status } from './Status'

describe('Status', () => {
  it('renders the status indicator with label text', () => {
    renderWithProvider(
      <Status.Root colorPalette="green">
        <Status.Indicator />
        Approved
      </Status.Root>
    )

    expect(screen.getByText('Approved')).toBeVisible()
  })
})
