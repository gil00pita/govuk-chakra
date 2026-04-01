import { Button, Portal } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import menuRecipe from './Menu.recipe'
import { Menu } from './Menu'

describe('Menu', () => {
  it('uses the expected recipe defaults', () => {
    expect(menuRecipe.defaultVariants?.size).toBe('md')
    expect(menuRecipe.defaultVariants?.variant).toBe('subtle')
    expect(menuRecipe.base?.content).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
  })

  it('opens and shows menu items', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Open menu</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new">New file</Menu.Item>
              <Menu.Item value="save">Save</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    )

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    expect(await screen.findByText('New file')).toBeVisible()
    expect(screen.getByText('Save')).toBeVisible()
  })
})
