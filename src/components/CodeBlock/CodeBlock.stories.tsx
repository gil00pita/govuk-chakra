import { Badge, Container, HStack, Icon, NativeSelect, Stack } from '@chakra-ui/react'
import type { ComponentType, ElementType } from 'react'
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io5'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useMemo, useState } from 'react'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { FaHtml5 } from 'react-icons/fa'
import { Tabs } from '@/components/Tabs'

const htmlFile = {
  code: `<div class="container">
  <h1>Welcome to GOV.UK!</h1>
</div>`,
  language: 'html',
  title: 'index.html',
  icon: {
    color: 'orange.500',
    lib: FaHtml5,
  },
} as const

const tsFile = {
  code: `const greeting = "Hello, World!"

function sayHello() {
  console.log(greeting)
}

sayHello()`,
  language: 'typescript',
  title: 'index.ts',
} as const

const diffFile = {
  code: `const greeting = "Hello, World!"

function sayHello() {
  console.log("Hello, World!")
  console.log(greeting)
}

sayHello()`,
  language: 'typescript',
  title: 'diff.ts',
} as const

const longFile = {
  code: `{
  "name": "govuk-chakra",
  "version": "0.1.1",
  "description": "A GOV.UK-flavoured component skin for Chakra UI with React.",
  "scripts": {
    "start": "vite",
    "dev": "vite --clearScreen false",
    "build": "yarn clean:dist && vite build && yarn build:types",
    "storybook": "storybook dev -p 6006",
    "lint": "eslint . --no-color --cache",
    "format": "prettier --write ."
  },
  "peerDependencies": {
    "@chakra-ui/react": "^3.34.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  }
}`,
  language: 'json',
  title: 'package.json',
} as const

const overflowFile = {
  code: `const veryLongConfigurationObject = { primaryColor: "#3182ce", secondaryColor: "#805ad5", tertiaryColor: "#38b2ac", backgroundColor: "#ffffff", textColor: "#1a202c", fontSize: "16px", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }

const extremelyLongVariableName = "This is an example of a very long string that will wrap to the next line when wordWrap is enabled on the code block meta configuration."

console.log(veryLongConfigurationObject, extremelyLongVariableName)`,
  language: 'typescript',
  title: 'wrap-overflow.ts',
} as const

const apiFiles = [
  {
    value: 'python',
    label: 'Python',
    language: 'python',
    title: 'search.py',
    icon: IoLogoPython,
    iconColor: 'yellow.400',
    code: `from github import Github

g = Github("YOUR_ACCESS_TOKEN")
repo = g.get_repo("octocat/Hello-World")
print(repo.name)`,
  },
  {
    value: 'typescript',
    label: 'TypeScript',
    language: 'typescript',
    title: 'search.ts',
    icon: IoLogoJavascript,
    iconColor: 'blue.400',
    code: `import { Octokit } from "@octokit/rest"

const octokit = new Octokit({ auth: "YOUR_ACCESS_TOKEN" })
const { data: repo } = await octokit.rest.repos.get({
  owner: "octocat",
  repo: "Hello-World",
})

console.log(repo.name)`,
  },
] as const

const installFiles = [
  { title: 'npm', language: 'bash', code: 'npm install govuk-chakra' },
  { title: 'yarn', language: 'bash', code: 'yarn add govuk-chakra' },
  { title: 'bun', language: 'bash', code: 'bun add govuk-chakra' },
] as const

type CodeBlockStoryArgs = {
  as?: ElementType
  asChild?: boolean
  colorPalette?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'subtle' | 'outline' | 'surface' | 'plain'
}

const meta: Meta<CodeBlockStoryArgs> = {
  title: 'Chakra Components/Typography/Code Block',
  component: CodeBlock.Root as unknown as ComponentType<CodeBlockStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'gray',
    variant: 'subtle',
    size: 'sm',
  },
  argTypes: {
    colorPalette: {
      control: 'select',
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
      description: 'The color palette of the component.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'surface', 'plain'],
      description: 'The variant of the component.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the component.',
    },
    as: {
      control: false,
      description: 'The underlying element to render.',
    },
    asChild: {
      control: 'boolean',
      description:
        'Use the provided child element as the default rendered element, combining their props and behavior.',
    },
  },
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

type RootArgs = Pick<CodeBlockStoryArgs, 'as' | 'asChild'>

function StoryFrame(props: { children: React.ReactNode }) {
  return (
    <Container bg="bg" p={14} maxW="960px">
      {props.children}
    </Container>
  )
}

function LanguageSwitcherExample(props: RootArgs) {
  const [selected, setSelected] = useState<string>(apiFiles[0].value)
  const currentFile = useMemo(
    () => apiFiles.find((file) => file.value === selected) ?? apiFiles[0],
    [selected]
  )

  return (
    <CodeBlock.Root code={currentFile.code} language={currentFile.language} maxW="760px" {...props}>
      <CodeBlock.Header>
        <HStack flex="1" gap={3}>
          <Badge colorPalette="teal" fontWeight="bold">
            POST
          </Badge>
          <CodeBlock.Title>
            <Icon as={currentFile.icon} color={currentFile.iconColor} />
            {currentFile.title}
          </CodeBlock.Title>
        </HStack>
        <CodeBlock.Control>
          <NativeSelect.Root size="sm" width="140px">
            <NativeSelect.Field
              value={selected}
              onChange={(event) => setSelected(event.currentTarget.value)}
            >
              {apiFiles.map((file) => (
                <option key={file.value} value={file.value}>
                  {file.label}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
          <CodeBlock.CopyButton />
        </CodeBlock.Control>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code>
          <CodeBlock.CodeText />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

function TabsExample(props: RootArgs) {
  const [tab, setTab] = useState<string>(apiFiles[0].language)
  const activeFile = apiFiles.find((file) => file.language === tab) ?? apiFiles[0]

  return (
    <Tabs.Root
      value={tab}
      onValueChange={(details) => setTab(details.value)}
      variant="line"
      size="sm"
    >
      <CodeBlock.Root code={activeFile.code} language={activeFile.language} maxW="760px" {...props}>
        <CodeBlock.Header borderBottomWidth="1px" bg={'transparent'} pb="0">
          <Tabs.List w="full" border="0">
            {apiFiles.map((file) => (
              <Tabs.Trigger key={file.language} value={file.language}>
                {file.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <CodeBlock.CopyButton />
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Tabs.Root>
  )
}

function TabsSyncGroup(props: RootArgs) {
  return (
    <Stack gap={8}>
      <TabsSyncExample storageKey="code-tabs-sync" {...props} />
      <TabsSyncExample storageKey="code-tabs-sync" {...props} />
    </Stack>
  )
}

function TabsSyncExample({ storageKey, ...props }: RootArgs & { storageKey: string }) {
  const [tab, setTab] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return installFiles[0].title
    }

    return window.localStorage.getItem(storageKey) ?? installFiles[0].title
  })
  const activeFile = installFiles.find((file) => file.title === tab) ?? installFiles[0]

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey && event.newValue) {
        setTab(event.newValue)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [storageKey])

  return (
    <Tabs.Root
      value={tab}
      onValueChange={(details) => {
        setTab(details.value)
        window.localStorage.setItem(storageKey, details.value)
        window.dispatchEvent(
          new StorageEvent('storage', {
            key: storageKey,
            newValue: details.value,
          })
        )
      }}
      variant="line"
      size="sm"
    >
      <CodeBlock.Root code={activeFile.code} language={activeFile.language} maxW="760px" {...props}>
        <CodeBlock.Header borderBottomWidth="1px" bg={'transparent'} pb="0">
          <Tabs.List w="full" border="0">
            {installFiles.map((file) => (
              <Tabs.Trigger key={file.title} value={file.title}>
                {file.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <CodeBlock.CopyButton size={'sm'} />
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Tabs.Root>
  )
}

export const Title: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={htmlFile.code}
        language={htmlFile.language}
        maxW="760px"
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>
            <Icon as={htmlFile.icon.lib} color={htmlFile.icon.color} />
            {htmlFile.title}
          </CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </StoryFrame>
  ),
}

export const CopyButton: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={htmlFile.code}
        language={htmlFile.language}
        maxW="760px"
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>
            <Icon as={htmlFile.icon.lib} color={htmlFile.icon.color} />
            {htmlFile.title}
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
    </StoryFrame>
  ),
}

export const LineNumbers: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={htmlFile.code}
        language={htmlFile.language}
        maxW="760px"
        meta={{ showLineNumbers: true }}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>
            <Icon as={htmlFile.icon.lib} color={htmlFile.icon.color} />
            {htmlFile.title}
          </CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </StoryFrame>
  ),
}

export const LineHighlighting: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={htmlFile.code}
        language={htmlFile.language}
        maxW="760px"
        meta={{ highlightLines: [1, 2] }}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>
            <Icon as={htmlFile.icon.lib} color={htmlFile.icon.color} />
            {htmlFile.title}
          </CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </StoryFrame>
  ),
}

export const LineFocus: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={tsFile.code}
        language={tsFile.language}
        maxW="760px"
        meta={{ focusedLineNumbers: [3, 7] }}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{tsFile.title}</CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </StoryFrame>
  ),
}

export const Diff: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={diffFile.code}
        language={diffFile.language}
        maxW="760px"
        meta={{ showLineNumbers: true, addedLineNumbers: [4], removedLineNumbers: [3] }}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{diffFile.title}</CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </StoryFrame>
  ),
}

export const MaxLinesExpand: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={longFile.code}
        language={longFile.language}
        title={longFile.title}
        maxW="760px"
        maxLines={8}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{longFile.title}</CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CollapseTrigger>
              <CodeBlock.CollapseIndicator />
            </CodeBlock.CollapseTrigger>
            <CodeBlock.CopyButton />
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
    </StoryFrame>
  ),
}

export const LanguageSwitcher: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <LanguageSwitcherExample as={as} asChild={asChild} />
    </StoryFrame>
  ),
}

export const TabsExampleStory: Story = {
  name: 'Tabs',
  render: ({ as, asChild }) => (
    <StoryFrame>
      <TabsExample as={as} asChild={asChild} />
    </StoryFrame>
  ),
}

export const TabsSync: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <TabsSyncGroup as={as} asChild={asChild} />
    </StoryFrame>
  ),
}

export const WrapOverflow: Story = {
  render: ({ as, asChild }) => (
    <StoryFrame>
      <CodeBlock.Root
        code={overflowFile.code}
        language={overflowFile.language}
        maxW="760px"
        meta={{ wordWrap: true }}
        as={as}
        asChild={asChild}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{overflowFile.title}</CodeBlock.Title>
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
    </StoryFrame>
  ),
}
