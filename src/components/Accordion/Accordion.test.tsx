import { render, screen, within } from '@testing-library/react'

import { Accordion } from './Accordion'
import { Box } from '@chakra-ui/react'
import { GOVUKProvider } from '@/provider'
import userEvent from '@testing-library/user-event'

const sections = [
  {
    heading: 'Writing well for the web',
    content: 'Use short sentences and plain English.',
  },
  {
    heading: 'Writing well for specialists',
    content: 'Define acronyms the first time you use them.',
  },
  {
    heading: 'Know your audience',
    content: 'Iterate based on research and feedback.',
  },
] as const

function renderAccordion(props: Partial<React.ComponentProps<typeof Accordion.Root>> = {}) {
  return render(
    <GOVUKProvider>
      <Accordion.Root w="760px" maxW="100%" {...props}>
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
    </GOVUKProvider>
  )
}

describe('Accordion', () => {
  it('opens and closes an item when its trigger is clicked', async () => {
    const user = userEvent.setup()

    renderAccordion()

    expect(screen.queryByText(sections[0].content)).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: /writing well for the web/i,
      })
    )

    expect(screen.getByText(sections[0].content)).toBeVisible()

    await user.click(
      screen.getByRole('button', {
        name: /writing well for the web/i,
      })
    )

    expect(screen.queryByText(sections[0].content)).not.toBeInTheDocument()
  })

  it('opens and closes all sections from the toggle all action', async () => {
    const user = userEvent.setup()

    renderAccordion()

    const toggleAll = screen.getByRole('link', { name: /show all sections/i })
    await user.click(toggleAll)

    sections.forEach((section) => {
      expect(screen.getByText(section.content)).toBeVisible()
    })

    await user.click(screen.getByRole('link', { name: /hide all sections/i }))

    sections.forEach((section) => {
      expect(screen.queryByText(section.content)).not.toBeInTheDocument()
    })
  })

  it('honors a controlled value and reports updated values', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()

    renderAccordion({
      onValueChange,
      value: [sections[0].heading],
    })

    expect(screen.getByText(sections[0].content)).toBeVisible()
    expect(screen.queryByText(sections[1].content)).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: /writing well for specialists/i,
      })
    )

    expect(onValueChange).toHaveBeenCalledWith({
      value: [sections[0].heading, sections[1].heading],
    })
  })

  it('renders the toggle-all action labels based on current state', async () => {
    const user = userEvent.setup()

    renderAccordion({ defaultValue: sections.map((section) => section.heading) })

    const toggleAll = screen.getByRole('link', { name: /hide all sections/i })
    expect(toggleAll).toBeVisible()

    const label = within(toggleAll).getByText(/hide all sections/i)
    expect(label).toBeVisible()

    await user.click(toggleAll)

    expect(screen.getByRole('link', { name: /show all sections/i })).toBeVisible()
  })
})
