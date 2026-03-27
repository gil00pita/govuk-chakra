import { Button } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Collapsible } from './Collapsible'

describe('Collapsible', () => {
  it('reveals the content when the trigger is pressed', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Collapsible.Root>
        <Collapsible.Trigger asChild>
          <Button variant="outline">Toggle details</Button>
        </Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible.Root>
    )

    expect(screen.queryByText('Hidden content')).not.toBeVisible()

    await user.click(screen.getByRole('button', { name: /toggle details/i }))

    expect(screen.getByText('Hidden content')).toBeVisible()
  })
})
