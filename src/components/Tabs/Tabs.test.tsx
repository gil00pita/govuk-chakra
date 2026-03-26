import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Tabs } from './Tabs'

function getControlledPanel(tab: HTMLElement) {
  const panelId = tab.getAttribute('aria-controls')

  if (!panelId) {
    throw new Error('Expected tab to control a panel')
  }

  const panel = document.getElementById(panelId)

  if (!panel) {
    throw new Error(`Expected panel "${panelId}" to exist`)
  }

  return panel
}

describe('Tabs', () => {
  it('renders the first item as the default selected tab when using the items API', () => {
    renderWithProvider(
      <Tabs
        items={[
          {
            value: 'past-day',
            label: 'Past day',
            content: <p>Past day content</p>,
          },
          {
            value: 'past-week',
            label: 'Past week',
            content: <p>Past week content</p>,
          },
        ]}
      />
    )

    const selectedTab = screen.getByRole('tab', { name: /past day/i })

    expect(selectedTab).toHaveAttribute('aria-selected', 'true')
    expect(getControlledPanel(selectedTab)).toHaveTextContent('Past day content')
  })

  it('switches panels when the user selects another tab', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Tabs
        items={[
          {
            value: 'overview',
            label: 'Overview',
            content: <p>Overview content</p>,
          },
          {
            value: 'activity',
            label: 'Activity',
            content: <p>Activity content</p>,
          },
        ]}
      />
    )

    const activityTab = screen.getByRole('tab', { name: /activity/i })

    await user.click(activityTab)

    expect(activityTab).toHaveAttribute('aria-selected', 'true')
    expect(getControlledPanel(activityTab)).toHaveTextContent('Activity content')
  })

  it('supports the compound API with an explicit default value', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Tabs defaultValue="team">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="team">Team</Tabs.Trigger>
          <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview">Overview panel</Tabs.Content>
        <Tabs.Content value="team">Team panel</Tabs.Content>
        <Tabs.Content value="activity">Activity panel</Tabs.Content>
      </Tabs>
    )

    const teamTab = screen.getByRole('tab', { name: /team/i })

    expect(teamTab).toHaveAttribute('aria-selected', 'true')
    expect(getControlledPanel(teamTab)).toHaveTextContent('Team panel')

    const overviewTab = screen.getByRole('tab', { name: /overview/i })

    await user.click(overviewTab)

    expect(getControlledPanel(overviewTab)).toHaveTextContent('Overview panel')
  })
})
