import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import '@/test/mockResizeObserver'
import { SegmentedControl } from './SegmentedControl'

describe('SegmentedControl', () => {
  it('updates the selected value when another segment is chosen', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    renderWithProvider(
      <SegmentedControl.Root
        defaultValue="React"
        items={['React', 'Vue', 'Solid']}
        onValueChange={handleValueChange}
      />
    )

    await user.click(screen.getByText('Vue'))

    expect(handleValueChange).toHaveBeenCalled()
    expect(screen.getByRole('radio', { name: 'Vue', hidden: true })).toBeChecked()
  })
})
