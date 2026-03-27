import { createListCollection } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/stories/storybookControls'
import { Listbox } from './Listbox'

type ListboxStoryArgs = {
  size?: 'xs' | 'sm' | 'md'
}

const meta: Meta<ListboxStoryArgs> = {
  title: 'Chakra Components/Collections/Listbox',
  component: Listbox.Root as unknown as ComponentType<ListboxStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['xs', 'sm', 'md'], 'The size of the listbox.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Solid', value: 'solid' },
  ],
})

export const Default: Story = {
  render: (args) => (
    <Listbox.Root collection={frameworks} width="320px" {...args}>
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
  ),
}
