import { Container, Icon } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { FaHtml5 } from 'react-icons/fa'

const file = {
  code: `<div class="container">
  <h1>Welcome to GOV.UK!</h1>
</div> `,
  language: 'html',
  title: 'index.html',
  icon: {
    color: 'orange.500',
    lib: FaHtml5,
  },
}

const meta: Meta<typeof CodeBlock> = {
  title: 'Unofficial Components/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the code block component to present code or terminal output in a readable, copyable format.\n\n' +
          'This wrapper follows the same compound-component pattern as the accordion implementation while using Chakra UI code-block primitives underneath.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Container bg="bg" p={14}>
      <CodeBlock.Root code={file.code} language={file.language} maxW="760px">
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CopyButton />
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Container>
  ),
}

export const WithLineNumbers: Story = {
  render: () => (
    <Container bg="bg" p={14}>
      <CodeBlock.Root
        code={file.code}
        language={file.language}
        maxW="760px"
        meta={{ showLineNumbers: true }}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>
            <Icon as={file.icon.lib} color={file.icon.color} />
            {file.title}
          </CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CopyButton />
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Container>
  ),
}
