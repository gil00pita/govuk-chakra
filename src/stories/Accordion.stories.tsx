import * as React from 'react'

// Accordion.stories.tsx
import { Accordion, Box, Button, Separator, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const sections = [
  {
    heading: 'Writing well for the web',
    content:
      'People read differently on the web. When you are writing an article or content page, use short sentences and plain English. Front-load key information and use descriptive headings.',
  },
  {
    heading: 'Writing well for specialists',
    content:
      'Specialist audiences may understand acronyms and jargon, but always define them the first time you use them. Provide clear summaries so non-specialists can still understand the context.',
  },
  {
    heading: 'Know your audience',
    content:
      'Understand user needs through research. Avoid assumptions. Iterate based on feedback and analytics to ensure the content remains relevant and accessible.',
  },
  {
    heading: 'How people read',
    content:
      'Users often scan before committing to read. Use meaningful headings, bullet lists, and concise paragraphs to support scanning and comprehension.',
  },
]

const meta: Meta<typeof Accordion.Root> = {
  title: 'GOV.UK/Accordion',
  component: Accordion.Root,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const GovUkAccordion = () => {
  // v3 controlled value: array of string values matching <Accordion.Item value>
  const [value, setValue] = React.useState<string[]>([])
  const allOpen = value.length === sections.length

  const openAll = React.useCallback(() => setValue(sections.map((s) => s.heading)), [])
  const closeAll = React.useCallback(() => setValue([]), [])
  const toggleAll = () => (allOpen ? closeAll() : openAll())

  return (
    <Box
      w="760px"
      maxW="100%"
      fontSize="16px"
      sx={{
        // GOV.UK-like section headings
        h2: { fontSize: '19px', fontWeight: 700, lineHeight: '1.3', m: 0 },
      }}
    >
      {/* Open all / Hide all control (right aligned) */}
      <Stack direction="row" justify="flex-end" mb={2}>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAll}
          textDecoration="underline"
          _hover={{ bg: 'transparent' }}
          px={2}
        >
          {allOpen ? 'Hide all sections' : 'Open all sections'}
        </Button>
      </Stack>

      <Accordion.Root
        multiple
        collapsible
        value={value}
        onValueChange={(e) => setValue(e.value)}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
      >
        {sections.map((s, i) => (
          <Accordion.Item
            key={s.heading}
            value={s.heading}
            border="0"
            borderTop={i === 0 ? '0' : '1px solid'}
            borderColor="gray.300"
            _last={{ borderBottom: '0' }}
          >
            <h2>
              <Accordion.ItemTrigger
                px={4}
                py={3}
                _hover={{ bg: 'gray.50' }}
                _expanded={{ bg: 'gray.50' }}
                textAlign="left"
              >
                <Box as="span" flex="1" fontWeight="bold">
                  {s.heading}
                </Box>
                {/* Chevron / indicator on the right like GOV.UK */}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </h2>

            <Accordion.ItemContent px={4} pt={3} pb={6} lineHeight="1.5">
              <Accordion.ItemBody>
                <Box mb={4}>{s.content}</Box>
                {i < sections.length - 1 && <Separator />}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  )
}

export const Default: Story = {
  render: () => <GovUkAccordion />,
}
