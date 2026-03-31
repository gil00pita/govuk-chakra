import { Button } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import toastRecipe from './Toast.recipe'
import { Toast, Toaster, createToaster } from './Toast'

describe('Toast', () => {
  it('uses the expected text styles in the recipe', () => {
    expect(toastRecipe.base?.title).toMatchObject({
      textStyle: 'md',
      fontWeight: 'medium',
    })
    expect(toastRecipe.base?.description).toMatchObject({
      textStyle: 'sm',
    })
    expect(toastRecipe.base?.actionTrigger).toMatchObject({
      textStyle: 'sm',
    })
  })

  it('renders a toast when the toaster is triggered', async () => {
    const user = userEvent.setup()
    const toaster = createToaster({ placement: 'top-end' })

    renderWithProvider(
      <>
        <Button
          onClick={() =>
            toaster.create({
              title: 'Changes saved',
              description: 'Your settings were updated.',
            })
          }
        >
          Show toast
        </Button>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root key={toast.id}>
              <Toast.Title>{toast.title}</Toast.Title>
              <Toast.Description>{toast.description}</Toast.Description>
              <Toast.CloseTrigger />
            </Toast.Root>
          )}
        </Toaster>
      </>
    )

    await user.click(screen.getByRole('button', { name: /show toast/i }))

    expect(await screen.findByText('Changes saved')).toBeVisible()
    expect(screen.getByText('Your settings were updated.')).toBeVisible()
  })
})
