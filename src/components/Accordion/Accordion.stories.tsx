import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/components/Accordion/Accordion'
import { Box } from '@chakra-ui/react'

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
  title: 'GOV.UK/Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the accordion component to help users navigate and access content in a structured manner.\n\n' +
          'The accordion component allows users to expand and collapse sections of content, making it easier to manage large amounts of information.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System accordion documentation: https://design-system.service.gov.uk/components/accordion/.',
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion.Root w="760px" maxW="100%">
      <Accordion.Actions>
        <Accordion.ToggleAll />
      </Accordion.Actions>
      <Accordion.Items>
        {sections.map((section) => (
          <Accordion.Item key={section.heading} value={section.heading}>
            <Accordion.Trigger>
              <h2>{section.heading}</h2>
            </Accordion.Trigger>
            <Accordion.Content>
              <Box mb={4}>{section.content}</Box>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Items>
    </Accordion.Root>
  ),
}
