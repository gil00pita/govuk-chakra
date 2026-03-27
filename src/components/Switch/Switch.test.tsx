import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Switch } from './Switch'

describe('Switch', () => {
  it('toggles the checked state when pressed', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Switch.Root>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Enable notifications</Switch.Label>
      </Switch.Root>
    )

    const toggle = screen.getByRole('checkbox', { name: /enable notifications/i })

    expect(toggle).not.toBeChecked()

    await user.click(toggle)

    expect(toggle).toBeChecked()
  })
})
