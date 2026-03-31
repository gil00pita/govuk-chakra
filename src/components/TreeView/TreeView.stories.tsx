import { createTreeCollection } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType } from '@/utils/storybookControls'
import { TreeView } from './TreeView'

type TreeViewStoryArgs = {
  size?: 'xs' | 'md'
  variant?: 'subtle' | 'solid'
  animateContent?: boolean
}

const meta: Meta<TreeViewStoryArgs> = {
  title: 'Chakra Components/Collections/Tree View',
  component: TreeView.Root as unknown as ComponentType<TreeViewStoryArgs>,
  tags: ['autodocs'],
  args: {
    variant: 'subtle',
    animateContent: true,
  },
  argTypes: {
    variant: selectArgType(['subtle', 'solid'], 'The visual variant of the tree view.'),
    animateContent: {
      control: 'boolean',
      description: 'Whether branch content animations are enabled.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const collection = createTreeCollection({
  nodeToValue: (node: { id: string }) => node.id,
  nodeToString: (node: { name: string }) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      { id: 'src', name: 'src', children: [{ id: 'app.tsx', name: 'app.tsx' }] },
      { id: 'package.json', name: 'package.json' },
    ],
  },
})

export const Default: Story = {
  render: (args) => (
    <TreeView.Root collection={collection} maxW="sm" {...args}>
      <TreeView.Label>Project files</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <TreeView.FolderIcon />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <TreeView.FileIcon />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  ),
}
