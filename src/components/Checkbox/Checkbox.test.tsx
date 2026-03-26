import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VStack } from '@chakra-ui/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Checkbox } from './Checkbox'

function renderCheckboxGroup() {
  return renderWithProvider(
    <Checkbox.Group
      legend="Which types of waste do you transport?"
      hint="Select all that apply."
      error="Select the types of waste you transport"
    >
      <Checkbox.Root value="waste-animal">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <VStack align="start" gap={0}>
          <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
          <Checkbox.Hint>Including abattoir waste and dead animals</Checkbox.Hint>
        </VStack>
      </Checkbox.Root>

      <Checkbox.Root value="waste-farm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>
  )
}

describe('Checkbox', () => {
  it('checks and unchecks a checkbox when the user clicks it', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Checkbox.Root>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
      </Checkbox.Root>
    )

    const checkbox = screen.getByRole('checkbox', {
      name: /i agree to the terms and conditions/i,
    })

    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('supports disabled checkboxes', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Checkbox.Root disabled>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Disabled checkbox</Checkbox.Label>
      </Checkbox.Root>
    )

    const checkbox = screen.getByRole('checkbox', { name: /disabled checkbox/i })
    expect(checkbox).toBeDisabled()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders group legend, hint, error, and item hints', () => {
    renderCheckboxGroup()

    const group = screen.getByRole('group', {
      name: /which types of waste do you transport\?/i,
    })

    expect(within(group).getByText(/select all that apply\./i)).toBeVisible()
    expect(within(group).getByText(/select the types of waste you transport/i)).toBeVisible()
    expect(
      screen.getByRole('checkbox', {
        name: /waste from animal carcasses/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/including abattoir waste and dead animals/i)).toBeVisible()
  })
})
