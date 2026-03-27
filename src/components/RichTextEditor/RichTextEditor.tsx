import { Box, ButtonGroup, HStack, IconButton, StackSeparator } from '@chakra-ui/react'
import type { BoxProps, StackProps } from '@chakra-ui/react'
import type { Editor } from '@tiptap/react'
import { EditorContent } from '@tiptap/react'
import {
  createContext,
  forwardRef,
  type ComponentPropsWithoutRef,
  type JSX,
  type ReactNode,
  useContext,
  useMemo,
} from 'react'
import { LuBold, LuHeading1, LuHeading2, LuItalic, LuList, LuRedo, LuUndo } from 'react-icons/lu'

interface RichTextEditorContextValue {
  editor: Editor | null
}

const RichTextEditorContext = createContext<RichTextEditorContextValue | null>(null)

function useRichTextEditorContext(componentName: string) {
  const context = useContext(RichTextEditorContext)
  if (!context) {
    throw new Error(componentName + ' must be used within RichTextEditor.Root')
  }
  return context
}

export interface RichTextEditorProps extends BoxProps {
  editor: Editor | null
  disabled?: boolean
}

export const RichTextEditorRoot = forwardRef<HTMLDivElement, RichTextEditorProps>(
  function RichTextEditorRoot({ children, css, disabled, editor, ...props }, ref) {
    const value = useMemo(() => ({ editor }), [editor])

    return (
      <RichTextEditorContext.Provider value={value}>
        <Box
          ref={ref}
          data-disabled={disabled || undefined}
          borderWidth="1px"
          rounded="sm"
          overflow="hidden"
          css={[
            {
              '& .ProseMirror': {
                minHeight: '220px',
                outline: 'none',
                p: '4',
              },
              '&[data-disabled] .ProseMirror': {
                opacity: 0.6,
                pointerEvents: 'none',
              },
            },
            css,
          ]}
          {...props}
        >
          {children}
        </Box>
      </RichTextEditorContext.Provider>
    )
  }
)

export type RichTextEditorToolbarProps = StackProps

export const RichTextEditorToolbar = forwardRef<HTMLDivElement, RichTextEditorToolbarProps>(
  function RichTextEditorToolbar(props, ref) {
    return (
      <HStack
        ref={ref}
        p="2"
        borderBottomWidth="1px"
        separator={<StackSeparator h="5" />}
        wrap="wrap"
        {...props}
      />
    )
  }
)

export const RichTextEditorFooter = forwardRef<HTMLDivElement, StackProps>(
  function RichTextEditorFooter(props, ref) {
    return <HStack ref={ref} p="2" borderTopWidth="1px" {...props} />
  }
)

export const RichTextEditorControlGroup = forwardRef<HTMLDivElement, StackProps>(
  function RichTextEditorControlGroup(props, ref) {
    return <ButtonGroup ref={ref} size="sm" variant="outline" gap="1" {...props} />
  }
)

export type RichTextEditorContentProps = Omit<
  ComponentPropsWithoutRef<typeof EditorContent>,
  'editor' | 'innerRef'
>

export const RichTextEditorContent = forwardRef<HTMLDivElement, RichTextEditorContentProps>(
  function RichTextEditorContent(props, ref) {
    const { editor } = useRichTextEditorContext('RichTextEditor.Content')
    if (!editor) return null
    return <EditorContent editor={editor} innerRef={ref} {...props} />
  }
)

function createControl(
  label: string,
  icon: ReactNode,
  action: (editor: Editor) => void,
  isActive?: (editor: Editor) => boolean
): () => JSX.Element {
  return function ControlButton(): JSX.Element {
    const { editor } = useRichTextEditorContext('RichTextEditor.Control')
    const active = editor && isActive ? isActive(editor) : false

    return (
      <IconButton
        aria-label={label}
        variant={active ? 'subtle' : 'ghost'}
        size="sm"
        onClick={() => {
          if (!editor) return
          action(editor)
        }}
      >
        {icon}
      </IconButton>
    )
  }
}

export const Control = {
  Bold: createControl(
    'Bold',
    <LuBold />,
    (editor) => editor.chain().focus().toggleBold().run(),
    (editor) => editor.isActive('bold')
  ),
  Italic: createControl(
    'Italic',
    <LuItalic />,
    (editor) => editor.chain().focus().toggleItalic().run(),
    (editor) => editor.isActive('italic')
  ),
  H1: createControl(
    'Heading 1',
    <LuHeading1 />,
    (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    (editor) => editor.isActive('heading', { level: 1 })
  ),
  H2: createControl(
    'Heading 2',
    <LuHeading2 />,
    (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    (editor) => editor.isActive('heading', { level: 2 })
  ),
  BulletList: createControl(
    'Bullet list',
    <LuList />,
    (editor) => editor.chain().focus().toggleBulletList().run(),
    (editor) => editor.isActive('bulletList')
  ),
  Undo: createControl('Undo', <LuUndo />, (editor) => editor.chain().focus().undo().run()),
  Redo: createControl('Redo', <LuRedo />, (editor) => editor.chain().focus().redo().run()),
}

export const RichTextEditor = Object.assign(RichTextEditorRoot, {
  Root: RichTextEditorRoot,
  Toolbar: RichTextEditorToolbar,
  Content: RichTextEditorContent,
  ControlGroup: RichTextEditorControlGroup,
  Footer: RichTextEditorFooter,
  Control,
})
