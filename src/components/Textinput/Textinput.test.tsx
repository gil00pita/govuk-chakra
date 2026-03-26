import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Textinput } from './Textinput'

describe('Textinput', () => {
  it('associates the label, hint, and error text with the input', () => {
    renderWithProvider(
      <Textinput
        label="National Insurance number"
        hint="It is on your payslip."
        error="Enter your National Insurance number"
      />
    )

    const input = screen.getByLabelText(/national insurance number/i)

    expect(input).toHaveAccessibleDescription(
      'It is on your payslip. Error: Enter your National Insurance number'
    )
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('updates its value when the user types', async () => {
    const user = userEvent.setup()

    renderWithProvider(<Textinput label="Reference number" />)

    const input = screen.getByLabelText(/reference number/i)
    await user.type(input, 'ABC123')

    expect(input).toHaveValue('ABC123')
  })

  it('supports disabled inputs', () => {
    renderWithProvider(<Textinput label="Reference number" disabled defaultValue="ABC123" />)

    expect(screen.getByLabelText(/reference number/i)).toBeDisabled()
  })
})
