import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { DateInput } from './DateInput'

function renderDateInput(props: Partial<React.ComponentProps<typeof DateInput.Root>> = {}) {
  return renderWithProvider(
    <DateInput.Root showHint invalid {...props}>
      <DateInput.Legend>What is your date of birth?</DateInput.Legend>
      <DateInput.Hint>For example, 27 3 2007</DateInput.Hint>
      <DateInput.Error>Enter a real date</DateInput.Error>
      <DateInput.Container>
        <DateInput.Field>
          <DateInput.Label>Day</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Month</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Year</DateInput.Label>
          <DateInput.Input inputWidth="4" />
        </DateInput.Field>
      </DateInput.Container>
    </DateInput.Root>
  )
}

describe('DateInput', () => {
  it('associates labels and shared descriptions with each field', () => {
    renderDateInput()

    const day = screen.getByLabelText(/day/i)
    const month = screen.getByLabelText(/month/i)
    const year = screen.getByLabelText(/year/i)

    ;[day, month, year].forEach((input) => {
      expect(input).toHaveAccessibleDescription('For example, 27 3 2007 Enter a real date')
    })
  })

  it('allows the user to enter values into the day, month, and year fields', async () => {
    const user = userEvent.setup()

    renderDateInput({ invalid: false })

    const day = screen.getByLabelText(/day/i)
    const month = screen.getByLabelText(/month/i)
    const year = screen.getByLabelText(/year/i)

    await user.type(day, '27')
    await user.type(month, '03')
    await user.type(year, '2007')

    expect(day).toHaveValue('27')
    expect(month).toHaveValue('03')
    expect(year).toHaveValue('2007')
  })

  it('renders the legend as a page heading when requested', () => {
    renderDateInput({ asPageHeading: true })

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /what is your date of birth\?/i,
      })
    ).toBeVisible()
  })
})
