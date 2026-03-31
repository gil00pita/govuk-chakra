import { TreeView as ChakraTreeView, Icon } from '@chakra-ui/react'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import { FaFile, FaFolder } from 'react-icons/fa'

export type TreeViewProps = ComponentPropsWithoutRef<typeof ChakraTreeView.Root>
export type TreeViewIconProps = ComponentPropsWithoutRef<typeof Icon>

export const TreeViewRoot = ChakraTreeView.Root

export const TreeViewFolderIcon = forwardRef<SVGSVGElement, TreeViewIconProps>(
  function TreeViewFolderIcon(props, ref) {
    return (
      <Icon {...props} ref={ref} boxSize="1em" aria-hidden="true">
        <FaFolder />
      </Icon>
    )
  }
)

export const TreeViewFileIcon = forwardRef<SVGSVGElement, TreeViewIconProps>(
  function TreeViewFileIcon(props, ref) {
    return (
      <Icon {...props} ref={ref} boxSize="1em" aria-hidden="true">
        <FaFile />
      </Icon>
    )
  }
)

export const TreeView = Object.assign(ChakraTreeView.Root, {
  ...ChakraTreeView,
  FileIcon: TreeViewFileIcon,
  FolderIcon: TreeViewFolderIcon,
})
