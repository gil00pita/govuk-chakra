import { parseDate } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('lets the user select a date from the inline calendar', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    renderWithProvider(
      <Calendar.Root
        inline
        defaultFocusedValue={parseDate('2026-09-15')}
        width="fit-content"
        onValueChange={handleValueChange}
      >
        <Calendar.Content unstyled>
          <Calendar.View view="day">
            <Calendar.Header />
            <Calendar.DayTable />
          </Calendar.View>
          <Calendar.View view="month">
            <Calendar.Header />
            <Calendar.MonthTable />
          </Calendar.View>
          <Calendar.View view="year">
            <Calendar.Header />
            <Calendar.YearTable />
          </Calendar.View>
        </Calendar.Content>
      </Calendar.Root>
    )

    const dayButton = screen.getByRole('button', { name: /September 16, 2026/i })

    await user.click(dayButton)

    expect(handleValueChange).toHaveBeenCalledWith(
      expect.objectContaining({
        value: [expect.objectContaining({ year: 2026, month: 9, day: 16 })],
      })
    )
  })
})
