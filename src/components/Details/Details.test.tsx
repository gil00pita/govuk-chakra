import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Details } from './Details'

describe('Details', () => {
  it('renders a details element with summary text and hidden content by default', () => {
    renderWithProvider(
      <Details.Root>
        <Details.Summary>Help with nationality</Details.Summary>
        <Details.Content>
          <Details.Text>We use this information to work out which elections you can vote in.</Details.Text>
        </Details.Content>
      </Details.Root>
    )

    const summary = screen.getByText(/help with nationality/i)
    const details = summary.closest('details')

    expect(details).not.toHaveAttribute('open')
    expect(summary.closest('summary')).toBeVisible()
    expect(
      screen.getByText(/we use this information to work out which elections you can vote in/i)
    ).not.toBeVisible()
  })

  it('reveals the content when the user opens the summary', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Details.Root>
        <Details.Summary>Where to find your National Insurance number</Details.Summary>
        <Details.Content>
          <Details.Text>You can find it on your payslip or P60.</Details.Text>
        </Details.Content>
      </Details.Root>
    )

    const summary = screen.getByText(/where to find your national insurance number/i)
    const details = summary.closest('details')

    await user.click(summary)

    expect(details).toHaveAttribute('open')
    expect(screen.getByText(/you can find it on your payslip or p60/i)).toBeVisible()
  })
})
