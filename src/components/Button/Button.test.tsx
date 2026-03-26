import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Button } from './Button'

describe('Button', () => {
  it('renders an accessible button and handles clicks', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    renderWithProvider(<Button onClick={onClick}>Save and continue</Button>)

    const button = screen.getByRole('button', { name: /save and continue/i })
    expect(button).toBeEnabled()

    await user.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders the start button icon when startButton is enabled', () => {
    const { container } = renderWithProvider(<Button startButton>Start now</Button>)

    expect(screen.getByRole('button', { name: /start now/i })).toBeInTheDocument()
    expect(container.querySelector('.govuk-button__start-icon')).toBeInTheDocument()
  })

  it('respects the disabled state', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    renderWithProvider(
      <Button disabled onClick={onClick}>
        Disabled action
      </Button>
    )

    const button = screen.getByRole('button', { name: /disabled action/i })
    expect(button).toBeDisabled()

    await user.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })
})
