import { createListCollection } from '@chakra-ui/react'
import type { ComponentProps } from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Select, type SelectItemData } from './Select'

const countries = createListCollection<SelectItemData>({
  items: [
    { label: 'United Kingdom', value: 'uk' },
    { label: 'United States', value: 'us' },
  ],
})

function renderSelect(props: Partial<ComponentProps<typeof Select.Root>> = {}) {
  return renderWithProvider(
    <Select.Root collection={countries} {...props}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Hint>Choose the country shown on your passport.</Select.Hint>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {countries.items.map((item) => (
            <Select.Item key={item.value} item={item} />
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

describe('Select', () => {
  it('renders a labelled select trigger with placeholder content', () => {
    renderSelect()

    expect(screen.getByRole('combobox', { name: /country/i })).toHaveTextContent(
      /select a country/i
    )
  })

  it('updates the selected option when the user makes a choice', async () => {
    const user = userEvent.setup()

    renderSelect()

    await user.click(screen.getByRole('combobox', { name: /country/i }))
    await user.click(screen.getByRole('option', { name: /united states/i }))

    await waitFor(() => {
      expect(screen.getByRole('combobox', { name: /country/i })).toHaveTextContent(/united states/i)
    })
  })

  it('exposes hint and error text through the accessible description', () => {
    renderWithProvider(
      <Select.Root collection={countries} invalid>
        <Select.Label>Country</Select.Label>
        <Select.HiddenSelect />
        <Select.Hint>Choose the country shown on your passport.</Select.Hint>
        <Select.Error>Select the country you live in</Select.Error>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a country" />
          </Select.Trigger>
        </Select.Control>
      </Select.Root>
    )

    expect(screen.getByRole('combobox', { name: /country/i })).toHaveAccessibleDescription(
      'Choose the country shown on your passport. Error: Select the country you live in'
    )
  })

  it('supports disabled selects', () => {
    renderSelect({ disabled: true, defaultValue: ['uk'] })

    expect(screen.getByRole('combobox', { name: /country/i })).toBeDisabled()
  })

  it('supports the same width scale values as Textinput', () => {
    const { container } = renderSelect({ width: '2' })
    const selectRoot = container.querySelector('[data-scope="select"][data-part="root"]')

    expect(selectRoot).toBeInTheDocument()
  })

  it('renders a native select when native is true', () => {
    renderSelect({ native: true })

    expect(screen.getByRole('combobox', { name: /country/i })).toHaveDisplayValue('Select a country')
    expect(screen.queryByRole('button', { name: /country/i })).not.toBeInTheDocument()
  })
})
