import { Portal, createListCollection } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select, type SelectItemData } from './Select'

type SelectStoryArgs = {
  disabled?: boolean
  invalid?: boolean
  width?: 'full' | '20' | '10' | '5'
}

const meta: Meta<SelectStoryArgs> = {
  title: 'GOV.UK/Components/Select',
  component: Select.Root as unknown as ComponentType<SelectStoryArgs>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the Select component to allow users to choose one option from a dropdown list.\n\n' +
          'The Select component is useful for forms or content that require users to make a single choice from a list of options.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System select documentation: https://design-system.service.gov.uk/components/select/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    width: '20',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sortOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'Last updated', value: 'updated' },
    { label: 'Name', value: 'name' },
    { label: 'Status', value: 'status' },
  ],
})

const nationalityOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'British', value: 'british' },
    { label: 'Irish', value: 'irish' },
    { label: 'French', value: 'french' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Other', value: 'other' },
  ],
})

const countryOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'United Kingdom', value: 'united-kingdom' },
    { label: 'France', value: 'france' },
    { label: 'Germany', value: 'germany' },
    { label: 'Spain', value: 'spain' },
    { label: 'Italy', value: 'italy' },
    { label: 'United States', value: 'united-states' },
    { label: 'Canada', value: 'canada' },
  ],
})

function renderItems(collection: typeof sortOptions) {
  return collection.items.map((item) => <Select.Item key={item.value} item={item} />)
}

export const Default: Story = {
  render: (args) => (
    <Select.Root collection={sortOptions} defaultValue={['updated']} {...args}>
      <Select.Label>Sort by</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select an option" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(sortOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <Select.Root collection={nationalityOptions} {...args}>
      <Select.Label>Nationality</Select.Label>
      <Select.Hint>
        If you have dual nationality, select the nationality shown on your passport.
      </Select.Hint>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select nationality" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(nationalityOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const Countries: Story = {
  render: (args) => (
    <Select.Root collection={countryOptions} defaultValue={['united-kingdom']} {...args}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(countryOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const Error: Story = {
  render: (args) => (
    <Select.Root collection={countryOptions} invalid {...args}>
      <Select.Label>Country</Select.Label>
      <Select.Error>Select the country you live in</Select.Error>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(countryOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Select.Root collection={countryOptions} defaultValue={['united-kingdom']} disabled {...args}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(countryOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}
