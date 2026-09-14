import { useId, useState, type ReactNode } from 'react'
import { Box, Button, DateInput, Link, Stack, Text } from '@/govuk-chakra'
import { Completed, ContactLink, Errors, FieldsForm, PatternPage, type FieldSpec } from './shared'

function AnswerJourney({
  title,
  fields,
  children,
  sensitive = false,
}: {
  title: string
  fields: FieldSpec[]
  children?: ReactNode
  sensitive?: boolean
}) {
  const [answer, setAnswer] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  if (done)
    return (
      <Completed onBack={() => setDone(false)}>
        {sensitive
          ? 'The details passed the example checks. No transaction has been made.'
          : 'Your answer has been recorded for this example.'}
      </Completed>
    )
  return (
    <PatternPage title={title}>
      {children}
      <FieldsForm
        fields={fields}
        initial={answer}
        onComplete={(values) => {
          setAnswer(sensitive ? {} : values)
          setDone(true)
        }}
      />
    </PatternPage>
  )
}
const digits = (value: string) => value.replace(/[\s-]/g, '')

export function AddressesExample() {
  return (
    <AnswerJourney
      title="What is your postal address?"
      fields={[
        { key: 'line1', label: 'Address line 1', autoComplete: 'address-line1' },
        {
          key: 'line2',
          label: 'Address line 2 (optional)',
          autoComplete: 'address-line2',
          optional: true,
        },
        { key: 'town', label: 'Town or city', autoComplete: 'address-level2' },
        {
          key: 'postcode',
          label: 'Postcode or ZIP code (optional)',
          autoComplete: 'postal-code',
          optional: true,
          width: '10',
        },
        { key: 'country', label: 'Country', autoComplete: 'country-name' },
      ]}
    >
      <Text>
        We will send your decision letter to this address. You can enter an address outside the UK.
      </Text>
    </AnswerJourney>
  )
}

export function BankDetailsExample() {
  return (
    <AnswerJourney
      title="What are your bank details?"
      sensitive
      fields={[
        { key: 'name', label: 'Name on the account', autoComplete: 'name' },
        {
          key: 'sort',
          label: 'Sort code',
          hint: 'For example, 12-34-56',
          inputMode: 'numeric',
          width: '10',
          validate: (value) =>
            /^\d{6}$/.test(digits(value)) ? undefined : 'Enter a sort code with 6 digits',
        },
        {
          key: 'account',
          label: 'Account number',
          hint: 'This must be 8 digits long.',
          inputMode: 'numeric',
          width: '10',
          validate: (value) =>
            /^\d{8}$/.test(digits(value)) ? undefined : 'Enter an account number with 8 digits',
        },
        {
          key: 'roll',
          label: 'Building society roll number (optional)',
          hint: 'You can find this on your building society statement.',
          optional: true,
        },
      ]}
    >
      <Text>
        We need these details to pay your refund into a UK bank or building society account.
      </Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function DatesExample({
  optional = false,
  onComplete,
  onBack,
  initialValue,
  onDateChange,
}: {
  optional?: boolean
  onComplete?: () => void
  onBack?: () => void
  initialValue?: { day: string; month: string; year: string }
  onDateChange?: (value: { day: string; month: string; year: string }) => void
} = {}) {
  const prefix = useId()
  const [value, setValue] = useState(initialValue ?? { day: '', month: '', year: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  if (done) return <Completed onBack={() => setDone(false)} />
  return (
    <PatternPage title="What is your date of birth?" heading={false} back={onBack}>
      <Box asChild>
        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            if (optional && Object.values(value).every((part) => !part.trim())) {
              onComplete?.()
              return
            }
            const next: Record<string, string> = {}
            for (const part of ['day', 'month', 'year'] as const) {
              if (!value[part].trim()) next[part] = `Enter the ${part} of your date of birth`
              else if (!/^\d+$/.test(value[part])) next[part] = `Enter the ${part} using numbers`
            }
            const day = Number(value.day),
              month = Number(value.month),
              year = Number(value.year)
            if (!Object.keys(next).length) {
              if (month < 1 || month > 12) next.month = 'Enter a month between 1 and 12'
              if (year < 1000 || year > 9999) next.year = 'Enter a year with 4 digits'
              const date = new Date(0)
              date.setFullYear(year, month - 1, day)
              date.setHours(0, 0, 0, 0)
              if (day < 1 || day > 31 || (!next.month && date.getMonth() !== month - 1))
                next.day = 'Enter a real day for this month and year'
              if (!Object.keys(next).length && date > new Date())
                next.year = 'Your date of birth must be in the past'
            }
            setErrors(next)
            if (!Object.keys(next).length) {
              if (onComplete) onComplete()
              else setDone(true)
            }
          }}
        >
          <Stack gap={6}>
            <Errors errors={errors} prefix={prefix} />
            <DateInput.Root asPageHeading showHint invalid={Object.keys(errors).length > 0}>
              <DateInput.Legend>What is your date of birth?</DateInput.Legend>
              <DateInput.Hint>
                For example, 31 3 1980
                {optional
                  ? '. This question is optional. You can leave all three fields blank.'
                  : ''}
              </DateInput.Hint>
              <DateInput.Error>{Object.values(errors).join('. ')}</DateInput.Error>
              <DateInput.Container>
                {(['day', 'month', 'year'] as const).map((part) => (
                  <DateInput.Field key={part}>
                    <DateInput.Label htmlFor={`${prefix}-${part}`}>
                      {part[0].toUpperCase() + part.slice(1)}
                    </DateInput.Label>
                    <DateInput.Input
                      id={`${prefix}-${part}`}
                      name={part}
                      autoComplete={`bday-${part}`}
                      inputWidth={part === 'year' ? '4' : '2'}
                      value={value[part]}
                      aria-invalid={Boolean(errors[part])}
                      onChange={(event) => {
                        const next = { ...value, [part]: event.target.value }
                        setValue(next)
                        onDateChange?.(next)
                      }}
                    />
                  </DateInput.Field>
                ))}
              </DateInput.Container>
            </DateInput.Root>
            <Button alignSelf="start" type="submit">
              Continue
            </Button>
          </Stack>
        </form>
      </Box>
    </PatternPage>
  )
}

export function EmailAddressesExample() {
  return (
    <AnswerJourney
      title="What is your email address?"
      fields={[
        {
          key: 'email',
          label: 'Email address',
          type: 'email',
          autoComplete: 'email',
          inputMode: 'email',
          validate: (value) =>
            /^[^\s@]+@[^\s@]+$/.test(value.trim())
              ? undefined
              : 'Enter an email address in the correct format, like name@example.com',
        },
      ]}
    >
      <Text>We will use this to send updates about your application.</Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function EqualityInformationExample() {
  const [step, setStep] = useState<'intro' | 'question' | 'done'>('intro')
  const [skipped, setSkipped] = useState(false)
  const [date, setDate] = useState({ day: '', month: '', year: '' })
  if (step === 'done')
    return (
      <Completed onBack={() => setStep('intro')}>
        {skipped
          ? 'You have skipped the optional equality questions. You can still use the service.'
          : 'You have completed the optional equality section. You can still use the service if you left the answer blank.'}
      </Completed>
    )
  return (
    <>
      {step === 'question' && (
        <Box>
          <DatesExample
            initialValue={date}
            onDateChange={setDate}
            optional
            onBack={() => setStep('intro')}
            onComplete={() => {
              setSkipped(false)
              setStep('done')
            }}
          />
        </Box>
      )}
      {step === 'intro' && (
        <PatternPage title="Help us improve this service">
          <Text>
            You have checked your application answers. You can now choose to answer an equality
            monitoring question. This helps us understand whether people of different ages can use
            the service.
          </Text>
          <Text>
            This question is optional. Your answer is used for equality monitoring separately from
            decisions about your application. Choosing not to answer will not affect your
            application.
          </Text>
          <Button alignSelf="start" onClick={() => setStep('question')}>
            Answer the optional question
          </Button>
          <Link
            href="#"
            onClick={(event) => {
              event.preventDefault()
              setSkipped(true)
              setStep('done')
            }}
          >
            Skip this question and continue
          </Link>
        </PatternPage>
      )}
    </>
  )
}

export function NamesExample() {
  return (
    <AnswerJourney
      title="What is your full name?"
      fields={[{ key: 'name', label: 'Full name', autoComplete: 'name' }]}
    >
      <Text>Enter the name you want us to use when we contact you.</Text>
    </AnswerJourney>
  )
}

export function NationalInsuranceNumbersExample() {
  return (
    <AnswerJourney
      title="What is your National Insurance number?"
      sensitive
      fields={[
        {
          key: 'ni',
          label: 'National Insurance number',
          hint: 'It is on your payslip, P60 or benefit letters. For example, QQ 12 34 56 C.',
          width: '20',
          validate: (value) =>
            /^[a-z]{2}\d{6}[a-d]$/i.test(value.replace(/\s/g, ''))
              ? undefined
              : 'Enter a National Insurance number in the correct format',
        },
      ]}
    >
      <Text>We use this to match your application to your contribution record.</Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function PasswordsExample() {
  return (
    <AnswerJourney
      title="Create a password"
      sensitive
      fields={[
        {
          key: 'password',
          label: 'Password',
          type: 'password',
          autoComplete: 'new-password',
          hint: 'Use at least 8 characters. You can use spaces. Do not use a common password.',
          validate: (value) =>
            value.length < 8
              ? 'Your password must be at least 8 characters'
              : ['password', 'password123', '12345678', 'qwerty123'].includes(value.toLowerCase())
                ? 'Choose a less common password'
                : undefined,
        },
      ]}
    >
      <Text>You can paste a password or use a password manager.</Text>
    </AnswerJourney>
  )
}

export function PaymentCardDetailsExample() {
  return (
    <AnswerJourney
      title="Enter your card details"
      sensitive
      fields={[
        {
          key: 'card',
          label: 'Card number',
          autoComplete: 'cc-number',
          inputMode: 'numeric',
          validate: (value) =>
            /^\d{13,19}$/.test(digits(value))
              ? undefined
              : 'Enter a card number with between 13 and 19 digits',
        },
        {
          key: 'expiry',
          label: 'Expiry date',
          hint: 'For example, 03/30',
          autoComplete: 'cc-exp',
          width: '10',
          validate: (value) => {
            const match = /^(\d{1,2})\s*\/\s*(\d{2}|\d{4})$/.exec(value.trim())
            if (!match || Number(match[1]) < 1 || Number(match[1]) > 12)
              return 'Enter an expiry date in the format MM/YY'
            const year = match[2].length === 2 ? 2000 + Number(match[2]) : Number(match[2])
            return new Date(year, Number(match[1]), 1) <= new Date()
              ? 'Enter a card expiry date that has not passed'
              : undefined
          },
        },
        { key: 'holder', label: 'Name on card', autoComplete: 'cc-name' },
        {
          key: 'security',
          label: 'Card security code',
          hint: 'The last 3 digits on the back of your card, or 4 digits on the front of an American Express card.',
          autoComplete: 'cc-csc',
          inputMode: 'numeric',
          width: '5',
          validate: (value) =>
            /^\d{3,4}$/.test(value.trim()) ? undefined : 'Enter a security code with 3 or 4 digits',
        },
      ]}
    >
      <Text>We accept Visa, Mastercard and American Express.</Text>
    </AnswerJourney>
  )
}

export function PhoneNumbersExample() {
  return (
    <AnswerJourney
      title="What is your phone number?"
      fields={[
        {
          key: 'phone',
          label: 'Phone number (optional)',
          type: 'tel',
          autoComplete: 'tel',
          optional: true,
          hint: 'Include the country code for numbers outside the UK.',
        },
      ]}
    >
      <Text>
        We will only call if we need to ask about your application. You can continue without a phone
        number and contact the service another way.
      </Text>
      <ContactLink />
    </AnswerJourney>
  )
}
