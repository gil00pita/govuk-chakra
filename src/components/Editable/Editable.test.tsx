import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Editable } from './Editable'

describe('Editable', () => {
  it('lets the user edit and submit a value', async () => {
    const user = userEvent.setup()
    const handleValueCommit = vi.fn()

    renderWithProvider(
      <Editable.Root defaultValue="Click to edit" onValueCommit={handleValueCommit}>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    )

    await user.click(screen.getByText('Click to edit'))

    const input = screen.getByRole('textbox')
    await user.clear(input)
    await user.type(input, 'Updated value')

    await waitFor(() => {
      expect(input).toHaveValue('Updated value')
    })

    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.getByText('Updated value')).toBeVisible()
    })
    expect(handleValueCommit).toHaveBeenCalled()
  })
})
