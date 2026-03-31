import { Portal, useFilter, useListCollection } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { Combobox } from './Combobox'

type ComboboxStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'subtle'
}

const meta: Meta<ComboboxStoryArgs> = {
  title: 'Chakra Components/Collections/Combobox',
  component: Combobox.Root as unknown as ComponentType<ComboboxStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'outline',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the combobox.'),
    variant: selectArgType(['outline', 'subtle'], 'The visual variant of the combobox.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Solid', value: 'solid' },
]

export const Default: Story = {
  render: (args) => {
    const { contains } = useFilter({ sensitivity: 'base' })
    const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })

    return (
      <Combobox.Root
        collection={collection}
        width="320px"
        onInputValueChange={(e) => filter(e.inputValue)}
        {...args}
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
  },
}
