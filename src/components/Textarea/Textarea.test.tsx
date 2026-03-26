import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders a labelled textarea with hint and error content', () => {
    renderWithProvider(
      <Textarea.Root invalid>
        <Textarea.Label>Describe the problem</Textarea.Label>
        <Textarea.Hint>Include what happened and when.</Textarea.Hint>
        <Textarea.Error>Enter a description of the problem</Textarea.Error>
        <Textarea.Input />
      </Textarea.Root>
    )

    const textarea = screen.getByLabelText(/describe the problem/i)

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/include what happened and when\./i)).toBeVisible()
    expect(screen.getByText(/error: enter a description of the problem/i)).toBeVisible()
  })

  it('updates its value when the user types', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Textarea.Root>
        <Textarea.Label>Additional details</Textarea.Label>
        <Textarea.Input />
      </Textarea.Root>
    )

    const textarea = screen.getByLabelText(/additional details/i)
    await user.type(textarea, 'The payment reference is missing.')

    expect(textarea).toHaveValue('The payment reference is missing.')
  })

  it('supports disabled textareas', () => {
    renderWithProvider(
      <Textarea.Root disabled>
        <Textarea.Label>Additional details</Textarea.Label>
        <Textarea.Input defaultValue="Read only notes" />
      </Textarea.Root>
    )

    expect(screen.getByLabelText(/additional details/i)).toBeDisabled()
  })
})
