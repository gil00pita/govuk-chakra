import * as React from 'react'

import { Box, Button, Separator, Stack, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// Accordion.stories.tsx
import { Accordion } from '@/components/Accordion'
import { Link } from '@/components'
import { pxToRem } from '@/utils/px-to-rem'

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

const meta: Meta<typeof Accordion> = {
  title: 'GOV.UK/Accordion',
  component: Accordion,
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
  const toggleAll = (e: React.MouseEvent) => (e.preventDefault(), allOpen ? closeAll() : openAll())

  return (
    <Box
      w="760px"
      maxW="100%"
      fontSize="16px"
      css={{
        // GOV.UK-like section headings
        h2: { fontSize: '19px', fontWeight: 700, lineHeight: '1.3', m: 0 },
      }}
    >
      {/* Open all / Hide all control (right aligned) */}
      <Stack
        direction="row"
        justify="flex-start"
        pb={pxToRem(14)}
        borderBottom={'1px solid'}
        borderColor="border.emphasized"
      >
        <Link
          href="#"
          variant="ghost"
          py={pxToRem(5)}
          size="sm"
          onClick={toggleAll}
          textDecoration="underline"
          _hover={{
            bgColor: 'bg.muted',
            '& .chevron': {
              color: 'fg.inverted',
              bgColor: 'fg',
              borderColor: 'fg.inverted',
              textDecoration: 'underline',
              textDecorationThickness: 'max(3px, 0.1875rem)',
            },
            '& .chevron:after': {
              color: 'fg.inverted',
              borderColor: 'fg.inverted',
            },
            '& .chevron-text': {
              color: 'fg',
              textDecoration: 'underline',
              textDecorationThickness: 'max(3px, 0.1875rem)',
            },
          }}
          _focus={{
            outline: 0,
            '& .chevron': {
              color: 'fg.inverted',
              bgColor: 'fg',
              borderColor: 'fg',
              textDecoration: 'underline',
              textDecorationThickness: 'max(3px, 0.1875rem)',
            },
            '& .chevron:after': {
              color: 'fg.inverted',
              borderColor: 'fg.inverted',
            },
            '& .chevron-text': {
              color: 'black',
              bgColor: 'yellow.500',
              textDecoration: 'underline',
              textDecorationColor: 'fg.inverted',
              textDecorationThickness: 'max(3px, 0.1875rem)',
            },
          }}
        >
          <Box
            as="span"
            className="chevron"
            transform={allOpen ? 'rotate(0deg)' : 'rotate(180deg)'}
            boxSizing="border-box"
            display="inline-block"
            position="relative"
            width={pxToRem(20)}
            height={pxToRem(20)}
            border="1px solid"
            borderColor={'brand.500'}
            borderRadius="50%"
            verticalAlign="middle"
            transition="transform 0.2s ease-in-out"
            _after={{
              content: '""',
              color: 'brand.500',
              boxSizing: 'border-box',
              display: 'block',
              position: 'absolute',
              bottom: pxToRem(5),
              left: pxToRem(6),
              width: pxToRem(6),
              height: pxToRem(6),
              transform: 'rotate(-45deg)',
              borderTop: `${pxToRem(2)} solid`,
              borderRight: `${pxToRem(2)} solid`,
            }}
          />
          <Text className="chevron-text" fontSize={pxToRem(19)} lineHeight={'1.3157894737'}>
            {allOpen ? 'Hide all sections' : 'Show all sections'}
          </Text>
        </Link>
      </Stack>

      <Accordion.Root value={value} onValueChange={(details) => setValue(details.value)}>
        {sections.map((s, i) => (
          <Accordion.Item key={s.heading} value={s.heading}>
            <Accordion.Trigger>
              <h2>{s.heading}</h2>
            </Accordion.Trigger>

            <Accordion.Content>
              <Box mb={4}>{s.content}</Box>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  )
}

export const Default: Story = {
  render: () => <GovUkAccordion />,
}
