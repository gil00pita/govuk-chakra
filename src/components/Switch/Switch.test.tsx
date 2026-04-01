import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import switchRecipe from './Switch.recipe'
import { Switch } from './Switch'

describe('Switch', () => {
  it('uses the expected recipe defaults', () => {
    expect(switchRecipe.defaultVariants?.size).toBe('md')
    expect(switchRecipe.defaultVariants?.variant).toBe('solid')
    expect(switchRecipe.base?.control).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '999px',
    })
  })

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
