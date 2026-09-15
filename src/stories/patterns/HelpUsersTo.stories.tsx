import { expect, userEvent, within } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CheckAServiceIsSuitableExample,
  CheckAnswersExample,
  CompleteMultipleTasksExample,
  ConfirmContactExample,
  ContactADepartmentOrServiceTeamExample,
  CreateAUsernameExample,
  CreateAccountsExample,
  ExitAPageQuicklyExample,
  NavigateAServiceExample,
  ValidationExample,
  StartUsingAServiceExample,
} from './HelpUsersTo'

const meta = {
  title: 'GOV.UK/Patterns/Help users to',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Interactive user-centred journeys composed from the repository components. These fictional examples keep state in memory and do not send messages, create accounts or submit applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
const docs = (slug: string, safeguards: string) => ({
  docs: {
    description: {
      story: `[Pattern guidance](https://design-system.service.gov.uk/patterns/${slug}/). Source reference: design/govuk/patterns/${slug}.md. ${safeguards}`,
    },
  },
})

export const CheckAServiceIsSuitable: Story = {
  render: () => <CheckAServiceIsSuitableExample />,
  parameters: docs(
    'check-a-service-is-suitable',
    'An introduction, a single question and explicit outcomes retain the selected answer on Back. Rules, eligibility decisions and alternative routes require service policy and research before production.'
  ),
}
export const CheckAnswers: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('link', { name: 'Change full name' }))
    await userEvent.clear(canvas.getByRole('textbox', { name: 'Full name' }))
    await userEvent.type(canvas.getByRole('textbox', { name: 'Full name' }), 'Sam Taylor')
    await userEvent.click(canvas.getByRole('button', { name: 'Save and return' }))
    await expect(canvas.getByText('Sam Taylor')).toBeVisible()
    await expect(canvas.getByText('alex@example.com')).toBeVisible()
  },
  render: () => <CheckAnswersExample />,
  parameters: docs(
    'check-answers',
    'Each contextual change link edits one answer and returns to the summary while preserving the other answer. Submission is simulated; production needs authoritative validation, persistence, a declaration approved for the service and duplicate-submission protection.'
  ),
}
export const CompleteMultipleTasks: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.queryByRole('link', { name: 'Submit your application' })
    ).not.toBeInTheDocument()
    await userEvent.click(canvas.getByRole('link', { name: 'Personal details' }))
    await userEvent.type(canvas.getByRole('textbox', { name: 'Full name' }), 'Sam Taylor')
    await userEvent.click(canvas.getByRole('button', { name: 'Save and return to tasks' }))
    await expect(
      canvas.queryByRole('link', { name: 'Submit your application' })
    ).not.toBeInTheDocument()
    await userEvent.click(canvas.getByRole('link', { name: 'Contact details' }))
    await userEvent.type(canvas.getByRole('textbox', { name: 'Email address' }), 'sam@example.com')
    await userEvent.click(canvas.getByRole('button', { name: 'Save and return to tasks' }))
    await userEvent.click(canvas.getByRole('link', { name: 'Submit your application' }))
    await expect(canvas.getByText('Sam Taylor')).toBeVisible()
    await expect(canvas.getByText('sam@example.com')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Accept and send' }))
    await expect(canvas.getByText('Your example application has been submitted.')).toBeVisible()
  },
  render: () => <CompleteMultipleTasksExample />,
  parameters: docs(
    'complete-multiple-tasks',
    'Statuses derive from saved in-memory answers. Submission has no link until its prerequisites are complete. A review page precedes simulated submission. Production must persist task data across sessions and submit through an authoritative service.'
  ),
}
export const ConfirmAPhoneNumber: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Request a new code' }))
    const input = canvas.getByRole('textbox', { name: 'Security code' })
    await userEvent.type(input, '123456')
    await userEvent.click(canvas.getByRole('button', { name: 'Confirm phone number' }))
    await expect(
      canvas.getByRole('link', { name: 'Enter the 6-digit code from your message' })
    ).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Simulate code expiry' }))
    await userEvent.clear(input)
    await userEvent.type(input, '123457')
    await userEvent.click(canvas.getByRole('button', { name: 'Confirm phone number' }))
    await expect(
      canvas.getByRole('link', { name: 'This code has expired. Request a new code.' })
    ).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Request a new code' }))
    await userEvent.type(input, '123458')
    await userEvent.click(canvas.getByRole('button', { name: 'Confirm phone number' }))
    await expect(
      canvas.getByRole('heading', { name: 'Phone number confirmed', level: 1 })
    ).toBeVisible()
  },
  render: () => <ConfirmContactExample kind="phone" />,
  parameters: docs(
    'confirm-a-phone-number',
    'Simulated code verification demonstrates a single pasteable code input, 10-minute expiry, 3 attempts, 3 resends, superseded codes, correction and support alternatives. No SMS is sent. The code appears only to support this demonstration; production needs unpredictable single-use server tokens, rate limits, secure delivery and an alternative confirmation channel. Phone access is not identity proof.'
  ),
}
export const ConfirmAnEmailAddress: Story = {
  render: () => <ConfirmContactExample kind="email" />,
  parameters: docs(
    'confirm-an-email-address',
    'A blocking code loop supports switching devices, correcting the destination, resending and expiry without a raw activation URL. No email is sent. Production needs risk-based confirmation, single-use server tokens, abuse prevention, accessible email content and support for people without email. Confirmation proves access at that time only.'
  ),
}
export const ContactADepartmentOrServiceTeam: Story = {
  render: () => <ContactADepartmentOrServiceTeamExample />,
  parameters: docs(
    'contact-a-department-or-service-team',
    'Fictional contact details demonstrate ownership, hours, closures, response expectations, Welsh-language support, Relay UK and call charges. Replace these details with verified, staffed channels and an ongoing maintenance owner before production. Fictional telephone and email addresses are deliberately plain text.'
  ),
}
export const CreateAUsername: Story = {
  render: () => <CreateAUsernameExample />,
  parameters: docs(
    'create-a-username',
    'Custom usernames are justified by public attribution in a discussion service. Availability is simulated with a case-insensitive reserved name and an editable suggestion. Production needs atomic uniqueness checks, case-insensitive sign-in, retrieval, change and recovery routes; prefer email usernames for ordinary accounts.'
  ),
}
export const CreateAccounts: Story = {
  render: () => <CreateAccountsExample />,
  parameters: docs(
    'create-accounts',
    'Offers guest continuation, distinguishes create from sign-in and permits password managers and paste. This is a form demonstration, with no authentication or stored credentials. Production needs established authentication, journey persistence, accessible recovery, contact changes, account closure, retention and fraud controls.'
  ),
}
export const ExitAPageQuickly: Story = {
  render: () => <ExitAPageQuicklyExample />,
  parameters: docs(
    'exit-a-page-quickly',
    'The repository has no dedicated Exit this page component. This limited composition uses its Button with a real external anchor, a SkipLink secondary route and ordinary-link fallback, plus an interruption and external safety guidance. It navigates without JavaScript and makes no history-clearing claim. Production still needs the documented loading overlay, threat-modelled session clearing, dedicated wrapper behavior and research with affected users. It is not a complete substitute for the official safety component.'
  ),
}
export const NavigateAService: Story = {
  render: () => <NavigateAServiceExample />,
  parameters: docs(
    'navigate-a-service',
    'GOV.UK header and service navigation expose current-page state and distinct landmark names. Links remain visible at mobile widths. Sections switch in memory; production needs real routes and server-rendered navigation. GOV.UK identity requires eligibility and approval.'
  ),
}
export const Validation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByRole('textbox', { name: 'Full name' }), 'Sam Taylor')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('textbox', { name: 'Full name' })).toHaveValue('Sam Taylor')
    const errorLink = canvas.getByRole('link', { name: 'Enter email address' })
    await userEvent.click(errorLink)
    await expect(canvas.getByRole('textbox', { name: 'Email address' })).toHaveFocus()
    await userEvent.type(canvas.getByRole('textbox', { name: 'Email address' }), 'sam@example.com')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(
      canvas.getByRole('heading', { name: 'Contact details checked', level: 1 })
    ).toBeVisible()
  },
  name: 'Recover from validation errors',
  render: () => <ValidationExample />,
  parameters: docs(
    'validation',
    'Submit empty or malformed data to see a focused error summary with correction links and matching inline errors while preserving values. Native validation is disabled. Production must repeat validation on the server; use outcome pages for eligibility decisions and service failures.'
  ),
}
export const StartUsingAService: Story = {
  render: () => <StartUsingAServiceExample />,
  parameters: docs(
    'start-using-a-service',
    'A real start link accompanies eligibility, fee, time, prerequisites, resume and alternative access content. All service details are illustrative. Agree the production start page with the GOV.UK content team and publish it through GOV.UK publishing tools.'
  ),
}
