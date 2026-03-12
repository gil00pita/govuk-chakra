import { Field, Portal, Select, createListCollection } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { groupBy } from 'es-toolkit'

const meta: Meta = {
  title: 'GOV.UK/Select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = createListCollection({
  items: ['option1', 'option2', 'option3'],
  itemToString: (item) => item,
  itemToValue: (item) => item,
})

const countries = createListCollection({
  items: [
    { value: 'US', label: 'United States', flag: '🇺🇸', continent: 'America' },
    { value: 'CA', label: 'Canada', flag: '🇨🇦', continent: 'America' },
    { value: 'MX', label: 'Mexico', flag: '🇲🇽', continent: 'America' },
    { value: 'BR', label: 'Brazil', flag: '🇧🇷', continent: 'America' },
    { value: 'ZA', label: 'South Africa', flag: '🇿🇦', continent: 'Africa' },
    { value: 'NG', label: 'Nigeria', flag: '🇳🇬', continent: 'Africa' },
    { value: 'MA', label: 'Morocco', flag: '🇲🇦', continent: 'Africa' },
    { value: 'EG', label: 'Egypt', flag: '🇪🇬', continent: 'Africa' },
    { value: 'CN', label: 'China', flag: '🇨🇳', continent: 'Asia' },
    { value: 'JP', label: 'Japan', flag: '🇯🇵', continent: 'Asia' },
    { value: 'IN', label: 'India', flag: '🇮🇳', continent: 'Asia' },
    { value: 'KR', label: 'South Korea', flag: '🇰🇷', continent: 'Asia' },
    { value: 'GB', label: 'United Kingdom', flag: '🇬🇧', continent: 'Europe' },
    { value: 'FR', label: 'France', flag: '🇫🇷', continent: 'Europe' },
    { value: 'DE', label: 'Germany', flag: '🇩🇪', continent: 'Europe' },
    { value: 'IT', label: 'Italy', flag: '🇮🇹', continent: 'Europe' },
    { value: 'ES', label: 'Spain', flag: '🇪🇸', continent: 'Europe' },
    { value: 'AU', label: 'Australia', flag: '🇦🇺', continent: 'Oceania' },
    { value: 'NZ', label: 'New Zealand', flag: '🇳🇿', continent: 'Oceania' },
    { value: 'FJ', label: 'Fiji', flag: '🇫🇯', continent: 'Oceania' },
  ],
  itemToString: (item) => `${item.flag} ${item.label}`,
  itemToValue: (item) => item.value,
})

type CountryItem = (typeof countries.items)[number]

const groupedByContinent: Record<string, CountryItem[]> = groupBy(
  countries.items,
  (item: CountryItem) => item.continent
)

const continents = Object.entries(groupedByContinent)

export const Default: Story = {
  render: () => (
    <Field.Root>
      <Select.Root collection={basicOptions}>
        <Select.Trigger>
          <Select.ValueText placeholder="Choose an option" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Content>
          <Select.Item item="option1">
            Option 1 <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="option2">
            Option 2 <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="option3">
            Option 3 <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Root>
    </Field.Root>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Select.Root collection={countries} size="sm" width="320px" defaultValue={['GB']}>
      <Select.HiddenSelect />
      <Select.Label>Select country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="-" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {continents.map(([continent, items]) => (
              <Select.ItemGroup key={continent}>
                <Select.ItemGroupLabel>{continent}</Select.ItemGroupLabel>
                {items.map((item: (typeof countries.items)[number]) => (
                  <Select.Item item={item} key={item.value}>
                    {countries.stringifyItem(item)}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const Countries: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Country</Field.Label>
      <Select.Root collection={countries} size="sm" width="320px" defaultValue={['GB']}>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Content>
          <Select.Item item="GB">
            United Kingdom <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="US">
            United States <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="FR">
            France <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="DE">
            Germany <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="ES">
            Spain <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="IT">
            Italy <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Root>
    </Field.Root>
  ),
}

export const Error: Story = {
  render: () => (
    <Field.Root invalid>
      <Select.Root collection={basicOptions}>
        <Field.Label>Country</Field.Label>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item item="GB">
            United Kingdom <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="US">
            United States <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
        <Field.ErrorText>Please select a country</Field.ErrorText>
      </Select.Root>
    </Field.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select.Root collection={countries} size="sm" width="320px" defaultValue={['GB']} disabled>
      <Select.HiddenSelect />
      <Select.Label>Select country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="-" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {continents.map(([continent, items]) => (
              <Select.ItemGroup key={continent}>
                <Select.ItemGroupLabel>{continent}</Select.ItemGroupLabel>
                {items.map((item: (typeof countries.items)[number]) => (
                  <Select.Item item={item} key={item.value}>
                    {countries.stringifyItem(item)}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}
