import { screen, waitFor } from '@testing-library/react'

import { CodeBlock } from './CodeBlock'
import { renderWithProvider } from '@/test/renderWithProvider'
import userEvent from '@testing-library/user-event'

const exampleCode = `const greeting = "Hello, World!"\nconsole.log(greeting)`

function mockClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })
  return writeText
}

describe('CodeBlock', () => {
  it('renders the title and code content', async () => {
    renderWithProvider(
      <CodeBlock.Root code={exampleCode} language="typescript" maxW="640px">
        <CodeBlock.Header>
          <CodeBlock.Title>index.ts</CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    )

    expect(screen.getByText('index.ts')).toBeVisible()
    expect(await screen.findByText(/const greeting/i)).toBeVisible()
  })

  it('copies code when the copy button is pressed', async () => {
    const user = userEvent.setup()
    const writeText = mockClipboard()

    renderWithProvider(
      <CodeBlock.Root code={exampleCode} language="typescript" maxW="640px">
        <CodeBlock.Header>
          <CodeBlock.Title>index.ts</CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CopyButton copyLabel="Copy code" copiedLabel="Copied" />
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    )

    const copyButton = screen.getByRole('button', { name: /copy to clipboard/i })
    await user.click(copyButton)

    await waitFor(() => {
      expect(writeText).toHaveBeenCalled()
    })
  })

  it('renders the collapse indicator when max lines are set', async () => {
    renderWithProvider(
      <CodeBlock.Root code={exampleCode} language="typescript" maxW="640px" maxLines={1}>
        <CodeBlock.Header>
          <CodeBlock.Title>index.ts</CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CollapseTrigger>
              <CodeBlock.CollapseIndicator collapsedLabel="Show more" expandedLabel="Show less" />
            </CodeBlock.CollapseTrigger>
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
          <CodeBlock.Overlay>
            <CodeBlock.CollapseTrigger>
              <CodeBlock.CollapseText />
            </CodeBlock.CollapseTrigger>
          </CodeBlock.Overlay>
        </CodeBlock.Content>
      </CodeBlock.Root>
    )

    expect(await screen.findByRole('button', { name: /show more/i })).toBeVisible()
  })
})
