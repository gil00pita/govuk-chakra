import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { TagsInput } from './TagsInput'

type TagsInputStoryArgs = {
  size?: 'sm' | 'md' | 'lg'
}

const meta: Meta<TagsInputStoryArgs> = {
  title: 'Chakra Components/Forms/Tags Input',
  component: TagsInput.Root as unknown as ComponentType<TagsInputStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <TagsInput.Root defaultValue={['React', 'Chakra']} maxW="320px" {...args}>
      <TagsInput.HiddenInput />
      <TagsInput.Label>Frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Add tag" />
      </TagsInput.Control>
    </TagsInput.Root>
  ),
}
