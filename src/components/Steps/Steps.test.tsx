import { Button } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Steps } from './Steps'

describe('Steps', () => {
  it('moves to the next step when the next trigger is pressed', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Steps.Root defaultStep={0} count={3}>
        <Steps.List>
          <Steps.Item index={0} title="Account">
            <Steps.Trigger>
              <Steps.Indicator>
                <Steps.Number />
              </Steps.Indicator>
              <Steps.Title>Account</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
          <Steps.Item index={1} title="Profile">
            <Steps.Trigger>
              <Steps.Indicator>
                <Steps.Number />
              </Steps.Indicator>
              <Steps.Title>Profile</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
          <Steps.Item index={2} title="Confirm">
            <Steps.Trigger>
              <Steps.Indicator>
                <Steps.Number />
              </Steps.Indicator>
              <Steps.Title>Confirm</Steps.Title>
            </Steps.Trigger>
          </Steps.Item>
        </Steps.List>
        <Steps.Content index={0}>Create account</Steps.Content>
        <Steps.Content index={1}>Complete profile</Steps.Content>
        <Steps.Content index={2}>Confirm details</Steps.Content>
        <Steps.CompletedContent>All steps completed</Steps.CompletedContent>
        <Steps.PrevTrigger asChild>
          <Button variant="outline" size="sm">
            Previous
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm">Next</Button>
        </Steps.NextTrigger>
      </Steps.Root>
    )

    expect(screen.getByText('Create account')).toBeVisible()

    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByText('Complete profile')).toBeVisible()
  })
})
