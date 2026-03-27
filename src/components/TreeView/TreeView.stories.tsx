import { createTreeCollection } from '@chakra-ui/react'
import type { ComponentType } from 'react'
import { LuFile, LuFolder } from 'react-icons/lu'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TreeView } from './TreeView'

type TreeViewStoryArgs = {
  size?: 'xs' | 'sm' | 'md'
}

const meta: Meta<TreeViewStoryArgs> = {
  title: 'Chakra Components/Collections/Tree View',
  component: TreeView.Root as unknown as ComponentType<TreeViewStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'sm',
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
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  ),
}
