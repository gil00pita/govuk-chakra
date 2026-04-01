import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

import { renderWithProvider } from '@/test/renderWithProvider'
import richTextEditorRecipe from './RichTextEditor.recipe'
import { Control, RichTextEditor } from './RichTextEditor'

function RichTextEditorHarness() {
  const [html, setHtml] = useState('')
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Edit this text</p>',
    immediatelyRender: false,
    onCreate: ({ editor: currentEditor }) => {
      currentEditor.commands.selectAll()
      setHtml(currentEditor.getHTML())
    },
    onUpdate: ({ editor: currentEditor }) => {
      setHtml(currentEditor.getHTML())
    },
  })

  if (!editor) return <div />

  return (
    <>
      <RichTextEditor.Root editor={editor} maxW="640px">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            <Control.Bold />
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content />
      </RichTextEditor.Root>
      <output data-testid="editor-html">{html}</output>
    </>
  )
}

describe('RichTextEditor', () => {
  it('uses the expected recipe base styles', () => {
    expect(richTextEditorRecipe.base?.root).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
    expect(richTextEditorRecipe.base?.toolbar).toMatchObject({
      borderBottomColor: 'border.muted',
    })
  })

  it('applies toolbar actions to the editor content', async () => {
    const user = userEvent.setup()

    renderWithProvider(<RichTextEditorHarness />)

    await user.click(await screen.findByRole('button', { name: /bold/i }))

    await waitFor(() => {
      expect(screen.getByTestId('editor-html')).toHaveTextContent(
        '<p><strong>Edit this text</strong></p>'
      )
    })
  })
})
