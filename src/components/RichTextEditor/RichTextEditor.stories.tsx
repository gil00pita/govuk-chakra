import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Control, RichTextEditor } from './RichTextEditor'

const meta: Meta = {
  title: 'Chakra Components/Forms/Rich Text Editor',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const editor = useEditor({
      extensions: [StarterKit],
      content: '<p>Edit this text...</p>',
      immediatelyRender: false,
    })

    if (!editor) return <div />

    return (
      <RichTextEditor.Root editor={editor} maxW="640px">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            <Control.Bold />
            <Control.Italic />
            <Control.H1 />
            <Control.H2 />
            <Control.BulletList />
            <Control.Undo />
            <Control.Redo />
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content />
      </RichTextEditor.Root>
    )
  },
}
