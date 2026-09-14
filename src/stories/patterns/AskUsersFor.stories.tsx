import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import * as Examples from './AskUsersFor'

const meta = {
  title: 'GOV.UK/Patterns/Ask users for',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Interactive user-centred patterns built from this repository’s components. These are local prototypes: use fictional data only. No details are sent, logged or stored persistently. Sensitive fields are cleared after successful submission. Production services need server validation, appropriate security and a working alternative contact route.',
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
const docs = (slug: string, text: string) => ({
  docs: {
    description: {
      story: `${text}\n\n[Authoritative GOV.UK guidance](https://design-system.service.gov.uk/patterns/${slug}/)`,
    },
  },
})

export const Addresses: Story = {
  render: () => <Examples.AddressesExample />,
  parameters: docs(
    'addresses',
    'Manual entry supports UK and international addresses, optional second line and postal code, and address autocomplete. This example needs structured address parts and deliberately omits county. Production must confirm supported countries and delivery requirements; any lookup must retain a manual fallback.'
  ),
}
export const BankDetails: Story = {
  render: () => <Examples.BankDetailsExample />,
  parameters: docs(
    'bank-details',
    'Separate fields accept spaces and hyphens without losing leading zeros. Roll number is optional. Use fictional data. Production requires secure payment handling and appropriate account validation; format checks do not prove ownership. Sensitive values are cleared on completion, including when going back.'
  ),
}
export const Dates: Story = {
  render: () => <Examples.DatesExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByLabelText('Day'), '31')
    await userEvent.type(canvas.getByLabelText('Month'), '2')
    await userEvent.type(canvas.getByLabelText('Year'), '2024')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(
      canvas.getByRole('link', { name: 'Enter a real day for this month and year' })
    ).toBeVisible()
    await expect(canvas.getByLabelText('Day')).toHaveValue('31')
    await userEvent.clear(canvas.getByLabelText('Day'))
    await userEvent.type(canvas.getByLabelText('Day'), '29')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('heading', { name: 'Answer recorded', level: 1 })).toBeVisible()
    await userEvent.click(canvas.getByRole('link', { name: 'Back' }))
    await expect(canvas.getByLabelText('Day')).toHaveValue('29')
    await expect(canvas.getByLabelText('Month')).toHaveValue('2')
    await expect(canvas.getByLabelText('Year')).toHaveValue('2024')
  },
  parameters: docs(
    'dates',
    'A memorable date uses the repository DateInput with a legend, shared hint, autocomplete and separate retained values. Errors identify missing or invalid parts and impossible or future dates. Production must collect only the precision it needs and apply service-specific date rules.'
  ),
}
export const EmailAddresses: Story = {
  render: () => <Examples.EmailAddressesExample />,
  parameters: docs(
    'email-addresses',
    'One email field explains its purpose, permits pasting and uses deliberately broad format checks. Users can access an alternative contact route. No unnecessary confirmation loop. Production must support valid internationalised addresses and deliverability without over-restrictive regular expressions.'
  ),
}
export const EqualityInformation: Story = {
  render: () => <Examples.EqualityInformationExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('link', { name: 'Skip this question and continue' }))
    await expect(
      canvas.getByText(
        'You have skipped the optional equality questions. You can still use the service.'
      )
    ).toBeVisible()
    await userEvent.click(canvas.getByRole('link', { name: 'Back' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Answer the optional question' }))
    await expect(canvas.getByLabelText('Day')).toHaveValue('')
    await expect(canvas.getByLabelText('Month')).toHaveValue('')
    await expect(canvas.getByLabelText('Year')).toHaveValue('')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('heading', { name: 'Answer recorded', level: 1 })).toBeVisible()
    await expect(
      canvas.queryByRole('heading', { name: 'There is a problem' })
    ).not.toBeInTheDocument()
    await expect(
      canvas.getByText(
        'You have completed the optional equality section. You can still use the service if you left the answer blank.'
      )
    ).toBeVisible()
  },
  parameters: docs(
    'equality-information',
    'Optional explanation, answer and skip routes, intended after check answers and before confirmation. The optional date of birth question can be left entirely blank; partially entered dates receive specific errors. No other harmonised categories are invented. Use fictional data only. Production must justify age precision, use current harmonised wording and response options, separate monitoring data from operational decisions, and provide an approved privacy explanation with defined retention and restricted access.'
  ),
}
export const Names: Story = {
  render: () => <Examples.NamesExample />,
  parameters: docs(
    'names',
    'One full-name field with name autocomplete. Accepts a single name, diacritics, punctuation and any other non-empty name without rewriting it. Production must justify collecting extra name parts and must not treat a name as proof of identity.'
  ),
}
export const NationalInsuranceNumbers: Story = {
  render: () => <Examples.NationalInsuranceNumbersExample />,
  parameters: docs(
    'national-insurance-numbers',
    'Explains where to find the number and accepts mixed case and spaces. Use fictional data. Only the broad structure is checked; production must implement authoritative allocation checks where needed and protect sensitive values. A National Insurance number is never proof of identity. Sensitive data is cleared on completion.'
  ),
}
export const Passwords: Story = {
  render: () => <Examples.PasswordsExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const password = canvas.getByLabelText('Password', { exact: true })
    await user.click(password)
    await user.paste('password123')
    await expect(password).toHaveValue('password123')
    await user.click(canvas.getByRole('button', { name: 'Show password' }))
    await expect(password).toHaveAttribute('type', 'text')
    await expect(password).toHaveValue('password123')
    await user.click(canvas.getByRole('button', { name: 'Hide password' }))
    await expect(password).toHaveAttribute('type', 'password')
    await expect(password).toHaveValue('password123')
    await user.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('link', { name: 'Choose a less common password' })).toBeVisible()
    await expect(password).toHaveValue('password123')
    await user.clear(password)
    await user.paste('fictional river orchard lantern 7284')
    await user.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(canvas.getByRole('heading', { name: 'Answer recorded', level: 1 })).toBeVisible()
    await user.click(canvas.getByRole('link', { name: 'Back' }))
    await expect(canvas.getByLabelText('Password', { exact: true })).toHaveValue('')
  },
  parameters: docs(
    'passwords',
    'Repository text input with a show/hide button, new-password autocomplete, paste support, an 8-character minimum and no maximum or complexity rules. The tiny demonstration blocklist is not sufficient for production. Production needs a maintained compromised/common password check, secure hashing, rate limits and single-use, expiring reset tokens. No account is created; the password is discarded on completion.'
  ),
}
export const PaymentCardDetails: Story = {
  render: () => <Examples.PaymentCardDetailsExample />,
  parameters: docs(
    'payment-card-details',
    'Use GOV.UK Pay or an approved payment provider first. This local UI demonstration makes no payment: use fictional data only. Familiar field order, separators, expiry and security-code hints demonstrate component composition. Format checks do not verify cards. Production requires provider-hosted/tokenised collection, payment-security and fraud controls and appropriate card-specific validation. Never put card values or security codes in logs, URLs, analytics or persistent storage. All values are discarded on completion.'
  ),
}
export const PhoneNumbers: Story = {
  render: () => <Examples.PhoneNumbersExample />,
  parameters: docs(
    'phone-numbers',
    'Optional telephone input supports international prefixes, spaces, brackets and separators without rewriting the value. Users may continue without a phone number. Production should validate against supported numbering plans only when necessary and provide a real alternative contact channel.'
  ),
}
