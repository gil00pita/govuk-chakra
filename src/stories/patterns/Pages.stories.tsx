import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within, waitFor } from 'storybook/test'
import {
  ConfirmationExample,
  CookiesExample,
  InterruptionExample,
  PageNotFoundExample,
  QuestionExample,
  ServiceUnavailableExample,
  StepByStepExample,
  ProblemWithServiceExample,
} from './Pages'

const meta = {
  title: 'GOV.UK/Patterns/Pages',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'User-centred page patterns composed exclusively from this repository’s components. All service details, references and dates are illustrative; no application is submitted. Interactive examples keep state in memory for the current story only.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
const docs = (slug: string, text: string) => ({
  docs: {
    description: {
      story: `${text}\n\n[Pattern guidance](https://design-system.service.gov.uk/patterns/${slug}/). Local reference: design/govuk/patterns/${slug}.md.`,
    },
  },
})

export const ConfirmationPages: Story = {
  render: () => <ConfirmationExample />,
  parameters: docs(
    'confirmation-pages',
    'Confirms completion in one H1 panel, gives a selectable reference, next steps, timescale and feedback. The feedback form records a demonstration response only. In production, show this page only after durable acceptance, send the promised confirmation, and prevent duplicate submissions on refresh with server-side idempotency.'
  ),
}
export const CookiesPage: Story = {
  render: () => <CookiesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const yes = canvas.getByRole('radio', { name: 'Yes' })
    const no = canvas.getByRole('radio', { name: 'No' })
    await expect(no).toBeChecked()
    await userEvent.click(yes)
    await userEvent.click(canvas.getByRole('button', { name: 'Save cookie preferences' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('accepted')
    await expect(yes).toBeChecked()
    await userEvent.click(no)
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Save cookie preferences' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('rejected')
    await expect(no).toBeChecked()
  },
  parameters: docs(
    'cookies-page',
    'Describes essential and optional categories with captioned, scoped tables and equal yes/no controls. Saving confirms the choice and preserves it in React memory while this story remains mounted; refreshing resets it. These are illustrative cookie names: the example sets no cookies and loads no analytics. Production must inventory actual cookies and third parties, block optional storage until consent, persist and honour changes, and support a server form submission without JavaScript.'
  ),
}
export const InterruptionPages: Story = {
  render: () => <InterruptionExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('textbox', { name: 'What is your monthly income?' })).toHaveValue(
      '25000'
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(
      canvas.getByRole('heading', { name: 'Check your monthly income', level: 1 })
    ).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Change my monthly income' }))
    const amount = canvas.getByRole('textbox', { name: 'What is your monthly income?' })
    await expect(amount).toHaveValue('25000')
    await userEvent.clear(amount)
    await userEvent.type(amount, '2500')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('heading', { name: 'Income confirmed', level: 1 })).toBeVisible()
    await expect(canvas.getByRole('status')).toHaveTextContent('£2,500')
    await expect(
      canvas.queryByRole('heading', { name: 'Check your monthly income' })
    ).not.toBeInTheDocument()
  },
  parameters: docs(
    'interruption-pages',
    'An unusually high monthly income triggers a deliberate check with explicit confirm and correction actions; answers survive back and correction. The threshold is illustrative. This repository has no official interruption Panel variant: the existing Panel is composed with primary.500 and inverse Buttons as a prototype fallback, not a claim of official variant parity. Production needs service-specific thresholds, durable answer preservation, browser-back support and a server-rendered continuation.'
  ),
}
export const PageNotFoundPages: Story = {
  render: () => <PageNotFoundExample />,
  parameters: docs(
    'page-not-found-pages',
    'A neutral missing-page response with address checks, a real sibling-story recovery route and support. No breadcrumbs or validation styling. Production must return HTTP 404, use the matching service document title and serve semantic HTML even if the application bundle fails; fix or redirect known broken URLs.'
  ),
}
export const QuestionPages: Story = {
  render: () => <QuestionExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    const summary = canvas.getByRole('alert', { name: 'There is a problem' })
    await waitFor(() => expect(summary).toHaveFocus())
    await expect(within(summary).getByRole('link')).toBeVisible()
    const name = canvas.getByRole('textbox', { name: 'What is your full name?' })
    await userEvent.type(name, 'Sam Taylor')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('heading', { name: 'Check your answer', level: 1 })).toBeVisible()
    await expect(canvas.getByText('Your full name is Sam Taylor.')).toBeVisible()
    await userEvent.click(canvas.getByRole('link', { name: 'Back' }))
    await expect(canvas.getByRole('textbox', { name: 'What is your full name?' })).toHaveValue(
      'Sam Taylor'
    )
    await expect(canvas.queryByRole('alert')).not.toBeInTheDocument()
  },
  parameters: docs(
    'question-pages',
    'Asks one question with the H1 inside the associated input label, a hint and Continue. Empty submission exposes the error summary and field error; the review screen allows correction without losing the answer. In production, add server validation, durable session state, meaningful page titles and progressive enhancement.'
  ),
}
export const ServiceUnavailablePages: Story = {
  render: () => <ServiceUnavailableExample />,
  parameters: docs(
    'service-unavailable-pages',
    'A deliberate temporary closure with an unambiguous reopening time, saved-answer policy and contact route. The date and retention period are sample service facts, not operational promises. Production must use verified reopening and retention information, provide a lightweight page without JavaScript, return an appropriate response such as 503 with Retry-After for temporary closure, and remove the closure page when the service returns.'
  ),
}
export const StepByStepNavigation: Story = {
  render: () => <StepByStepExample />,
  parameters: docs(
    'step-by-step-navigation',
    'A content-journey prototype with numbered native Details disclosures and a related-page navigation example. Keyboard-operable native disclosures keep links reachable without client enhancement. Links lead to the working sibling examples. This is not a transaction progress stepper or an official GOV.UK step-by-step component; live GOV.UK journeys must be developed with GDS and departmental content teams. Use the task-list pattern within a transaction.'
  ),
}
export const ProblemWithTheServicePages: Story = {
  render: () => <ProblemWithServiceExample />,
  parameters: docs(
    'problem-with-the-service-pages',
    'An unexpected failure, separate from validation, a missing URL or planned closure. It gives a manual recovery route and support without exception details or automatic refresh. The retention statement is illustrative: production must match actual recoverable storage, log the incident privately and serve this lightweight page independently of the failed application, with an appropriate error response and matching document title.'
  ),
}
