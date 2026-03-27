import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Progress } from './Progress'

describe('Progress', () => {
  it('renders a progressbar with the current value', () => {
    renderWithProvider(
      <Progress.Root value={65} maxW="320px">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    )

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65')
  })
})
