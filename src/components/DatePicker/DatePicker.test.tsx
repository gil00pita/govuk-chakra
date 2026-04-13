import { Portal } from '@chakra-ui/react'
import type { ComponentProps } from 'react'
import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { DatePicker } from './DatePicker'

function renderDatePicker(props: Partial<ComponentProps<typeof DatePicker.Root>> = {}) {
  return renderWithProvider(
    <DatePicker.Root {...props}>
      <DatePicker.Label>Date of birth</DatePicker.Label>
      <DatePicker.Hint>For example, 27 3 2007</DatePicker.Hint>
      <DatePicker.Control>
        <DatePicker.Trigger>
          <DatePicker.ValueText placeholder="Select a date" />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}

describe('DatePicker', () => {
  it('renders a labelled trigger with placeholder content', () => {
    renderDatePicker()

    const trigger = screen.getByRole('button', { name: /open calendar/i })

    expect(screen.getByText('Date of birth')).toBeInTheDocument()
    expect(trigger).toHaveTextContent(/select a date/i)
  })

  it('exposes hint and error text through the accessible description', () => {
    renderWithProvider(
      <DatePicker.Root invalid>
        <DatePicker.Label>Date of birth</DatePicker.Label>
        <DatePicker.Hint>For example, 27 3 2007</DatePicker.Hint>
        <DatePicker.Error>Enter the date of birth</DatePicker.Error>
        <DatePicker.Control>
          <DatePicker.Trigger>
            <DatePicker.ValueText placeholder="Select a date" />
          </DatePicker.Trigger>
        </DatePicker.Control>
      </DatePicker.Root>
    )

    expect(screen.getByRole('button', { name: /open calendar/i })).toHaveAccessibleDescription(
      'For example, 27 3 2007 Error: Enter the date of birth'
    )
  })

  it('supports disabled date pickers', () => {
    renderDatePicker({ disabled: true })

    expect(screen.getByRole('button', { name: /open calendar/i })).toBeDisabled()
  })

  it('supports the same width scale values as Textinput', () => {
    const { container } = renderDatePicker({ width: '2' })
    const datePickerRoot = container.querySelector('[data-scope="date-picker"][data-part="root"]')

    expect(datePickerRoot).toBeInTheDocument()
  })
})
