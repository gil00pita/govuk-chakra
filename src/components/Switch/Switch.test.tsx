import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import switchRecipe from './Switch.recipe'
import { Switch } from './Switch'

describe('Switch', () => {
  it('uses the expected recipe defaults', () => {
    expect(
      (switchRecipe as { defaultVariants?: { size?: string; variant?: string } }).defaultVariants
    ).toMatchObject({
      size: 'md',
      variant: 'solid',
    })

    expect(
      (switchRecipe as { base?: { control?: unknown; thumb?: unknown } }).base?.control
    ).toMatchObject({
      borderColor: 'border.input',
      boxShadow: '0 0 0 2px {colors.border.input}',
    })

    expect(
      (switchRecipe as { base?: { control?: unknown; thumb?: unknown } }).base?.thumb
    ).toMatchObject({
      borderRadius: '0',
      width: 'calc(var(--switch-height) - 4px)',
      height: 'calc(var(--switch-height) - 4px)',
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
