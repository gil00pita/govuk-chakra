import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import toggleTipRecipe from './ToggleTip.recipe'
import { ToggleTip } from './ToggleTip'

describe('ToggleTip', () => {
  it('uses the expected recipe defaults', () => {
    expect(toggleTipRecipe.base?.trigger).toMatchObject({
      borderRadius: '0',
      color: 'fg.muted',
    })
    expect(toggleTipRecipe.base?.content).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
  })

  it('opens the tip content when the info trigger is pressed', async () => {
    const user = userEvent.setup()

    renderWithProvider(<ToggleTip.Root content="Helpful toggle tip" />)

    await user.click(screen.getByRole('button', { name: /more information/i }))

    expect(await screen.findByText('Helpful toggle tip')).toBeVisible()
  })
})
