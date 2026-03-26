import type { ComponentProps } from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Select } from './Select'

function renderSelect(props: Partial<ComponentProps<typeof Select>> = {}) {
  return renderWithProvider(
    <Select label="Country" placeholder="Select a country" {...props}>
      <option value="uk">United Kingdom</option>
      <option value="us">United States</option>
    </Select>
  )
}

describe('Select', () => {
  it('renders a labelled select with placeholder content', () => {
    renderSelect()

    const select = screen.getByRole('combobox', { name: /country/i })

    expect(select).toHaveValue('')
    expect(screen.getByRole('option', { name: /select a country/i })).toHaveValue('')
  })

  it('updates the selected option when the user makes a choice', async () => {
    const user = userEvent.setup()

    renderSelect()

    const select = screen.getByRole('combobox', { name: /country/i })
    await user.selectOptions(select, 'us')

    expect(select).toHaveValue('us')
    expect(screen.getByRole('option', { name: /united states/i }).selected).toBe(true)
  })

  it('exposes error text through the accessible description', () => {
    renderSelect({
      hint: 'Choose the country shown on your passport.',
      error: 'Select the country you live in',
    })

    const select = screen.getByRole('combobox', { name: /country/i })

    expect(select).toHaveAccessibleDescription(
      'Choose the country shown on your passport. Error: Select the country you live in'
    )
    expect(select).toHaveAttribute('aria-invalid', 'true')
  })

  it('supports disabled selects', () => {
    renderSelect({ disabled: true, defaultValue: 'uk' })

    expect(screen.getByRole('combobox', { name: /country/i })).toBeDisabled()
  })
})
