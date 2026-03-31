import { createTreeCollection } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import { TreeView } from './TreeView'

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

describe('TreeView', () => {
  it('expands a branch and reveals child content', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <TreeView.Root collection={collection} maxW="sm">
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
    )

    await user.click(screen.getByText('src'))

    expect(await screen.findByText('app.tsx')).toBeVisible()
  })
})
