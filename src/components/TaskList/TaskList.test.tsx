import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { TaskList } from './TaskList'

describe('TaskList', () => {
  it('renders heading, task links, hints, and default status labels', () => {
    renderWithProvider(
      <TaskList>
        <TaskList.Heading>Business details</TaskList.Heading>
        <TaskList.Item title="Trading name" href="/trading-name" status="completed" />
        <TaskList.Item
          title="Business address"
          href="/business-address"
          hint="The address where your business is registered"
          status="incomplete"
        />
      </TaskList>
    )

    expect(screen.getByRole('heading', { level: 2, name: /business details/i })).toBeVisible()
    expect(screen.getByRole('link', { name: /trading name/i })).toHaveAttribute(
      'href',
      '/trading-name'
    )
    expect(screen.getByText(/the address where your business is registered/i)).toBeVisible()
    expect(screen.getByText(/completed/i)).toBeVisible()
    expect(screen.getByText(/incomplete/i)).toBeVisible()
  })

  it('renders items from the items API and custom status definitions', () => {
    renderWithProvider(
      <TaskList
        heading="Application tasks"
        statuses={{
          ready: { label: 'Ready', color: 'green' },
          review: { label: 'Needs review', color: 'orange' },
        }}
        items={[
          { title: 'Company directors', href: '/directors', status: 'ready' },
          {
            title: 'Financial history',
            href: '/financial-history',
            hint: "Include 5 years of the company's relevant financial information",
            status: 'review',
          },
        ]}
      />
    )

    const section = screen
      .getByRole('heading', { level: 2, name: /application tasks/i })
      .closest('section')

    expect(
      within(section ?? document.body).getByRole('link', { name: /company directors/i })
    ).toHaveAttribute('href', '/directors')
    expect(within(section ?? document.body).getByText(/ready/i)).toBeVisible()
    expect(within(section ?? document.body).getByText(/needs review/i)).toBeVisible()
    expect(
      within(section ?? document.body).getByText(
        /include 5 years of the company's relevant financial information/i
      )
    ).toBeVisible()
  })
})
