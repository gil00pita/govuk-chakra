import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { ToggleTip } from './ToggleTip'

describe('ToggleTip', () => {
  it('opens the tip content when the info trigger is pressed', async () => {
    const user = userEvent.setup()

    renderWithProvider(<ToggleTip.Root content="Helpful toggle tip" />)

    await user.click(screen.getByRole('button', { name: /more information/i }))

    expect(await screen.findByText('Helpful toggle tip')).toBeVisible()
  })
})
