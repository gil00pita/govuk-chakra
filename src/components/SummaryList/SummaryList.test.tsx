import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { SummaryList } from './SummaryList'

describe('SummaryList', () => {
  it('renders summary rows with keys, values, and action links', () => {
    renderWithProvider(
      <SummaryList.Root>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Firstname Lastname</SummaryList.Value>
          <SummaryList.Actions>
            <SummaryList.ActionLink href="/change-name" visuallyHiddenText="name">
              Change
            </SummaryList.ActionLink>
          </SummaryList.Actions>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>7 January 1980</SummaryList.Value>
          <SummaryList.Actions>
            <SummaryList.ActionLink href="/change-dob" visuallyHiddenText="date of birth">
              Change
            </SummaryList.ActionLink>
          </SummaryList.Actions>
        </SummaryList.Row>
      </SummaryList.Root>
    )

    const list = screen.getByText('Name').closest('dl')

    expect(within(list ?? document.body).getByText('Firstname Lastname')).toBeVisible()
    expect(within(list ?? document.body).getByRole('link', { name: /change name/i })).toHaveAttribute(
      'href',
      '/change-name'
    )
    expect(within(list ?? document.body).getByRole('link', { name: /change date of birth/i })).toHaveAttribute(
      'href',
      '/change-dob'
    )
  })

  it('renders the summary card layout with header actions', () => {
    renderWithProvider(
      <SummaryList.Card>
        <SummaryList.CardHeader>
          <SummaryList.CardTitle>University of Gloucestershire</SummaryList.CardTitle>
          <SummaryList.CardActions>
            <SummaryList.ActionLink href="/change-university" visuallyHiddenText="University of Gloucestershire">
              Change
            </SummaryList.ActionLink>
          </SummaryList.CardActions>
        </SummaryList.CardHeader>
        <SummaryList.CardContent>
          <SummaryList.Root>
            <SummaryList.Row>
              <SummaryList.Key>Course</SummaryList.Key>
              <SummaryList.Value>English (3D00)</SummaryList.Value>
              <SummaryList.Actions>
                <SummaryList.ActionLink href="/change-course" visuallyHiddenText="course">
                  Change
                </SummaryList.ActionLink>
              </SummaryList.Actions>
            </SummaryList.Row>
          </SummaryList.Root>
        </SummaryList.CardContent>
      </SummaryList.Card>
    )

    expect(
      screen.getByRole('heading', { level: 2, name: /university of gloucestershire/i })
    ).toBeVisible()
    expect(
      screen.getByRole('link', { name: /change university of gloucestershire/i })
    ).toHaveAttribute('href', '/change-university')
    expect(screen.getByText(/english \(3d00\)/i)).toBeVisible()
  })
})
