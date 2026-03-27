import { Portal, useFilter, useListCollection } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Combobox } from './Combobox'

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Solid', value: 'solid' },
]

function ComboboxHarness() {
  const { contains } = useFilter({ sensitivity: 'base' })
  const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Combobox.Root
      collection={collection}
      width="320px"
      onInputValueChange={(event) => filter(event.inputValue)}
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

describe('Combobox', () => {
  it('filters and selects an option', async () => {
    const user = userEvent.setup()

    renderWithProvider(<ComboboxHarness />)

    const input = screen.getByRole('combobox', { name: /select framework/i })
    await user.click(input)
    await user.type(input, 'rea')
    await user.click(await screen.findByText('React'))

    expect(input).toHaveValue('React')
  })
})
