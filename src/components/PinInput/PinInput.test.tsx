import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { PinInput } from './PinInput'

describe('PinInput', () => {
  it('advances through the fields and completes the code entry', async () => {
    const user = userEvent.setup()
    const handleValueComplete = vi.fn()

    renderWithProvider(
      <PinInput.Root otp onValueComplete={handleValueComplete}>
        <PinInput.HiddenInput />
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
    )

    const inputs = screen.getAllByRole('textbox')
    await user.type(inputs[0], '1234')

    expect(inputs.map((input) => (input as HTMLInputElement).value)).toEqual(['1', '2', '3', '4'])
    expect(handleValueComplete).toHaveBeenCalled()
  })
})
