import { createListCollection } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Listbox } from './Listbox'

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Solid', value: 'solid' },
  ],
})

describe('Listbox', () => {
  it('lets the user select an item', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    renderWithProvider(
      <Listbox.Root collection={frameworks} width="320px" onValueChange={handleValueChange}>
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((item) => (
            <Listbox.Item item={item} key={item.value}>
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    )

    await user.click(screen.getByText('React'))

    expect(handleValueChange).toHaveBeenCalled()
  })
})
