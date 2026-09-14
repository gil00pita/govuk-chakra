import { useState } from 'react'
import { Box, Button, Details, Heading, Link, Panel, Stack, Table, Text } from '@/govuk-chakra'
import { Choice, ContactLink, FieldsForm, Notice, PatternPage, storyHref } from './shared'

export function ConfirmationExample() {
  const [feedback, setFeedback] = useState(false)
  return (
    <PatternPage title="Application complete" heading={false}>
      <Panel heading="Application complete">
        Your reference number<Box as="strong">HDJ2123F</Box>
      </Panel>
      <Text>We have sent a confirmation email to the address you provided.</Text>
      <Heading as="h2" size={24}>
        What happens next
      </Heading>
      <Text>
        We will review your application and email you a decision within 10 working days. You do not
        need to do anything else now.
      </Text>
      <Text>
        Keep your reference number. You will need it if you contact us about your application.
      </Text>
      <ContactLink />
      {feedback ? (
        <Notice>Thank you for your feedback.</Notice>
      ) : (
        <Details.Root>
          <Details.Summary>Give feedback on this service</Details.Summary>
          <Details.Content>
            <FieldsForm
              fields={[
                {
                  key: 'feedback',
                  label: 'How could we improve this service?',
                  hint: 'Do not include personal or financial information.',
                },
              ]}
              onComplete={() => setFeedback(true)}
              submitLabel="Send feedback"
            />
          </Details.Content>
        </Details.Root>
      )}
    </PatternPage>
  )
}

export function CookiesExample() {
  const [analytics, setAnalytics] = useState('No')
  const [saved, setSaved] = useState<string | null>(null)
  return (
    <PatternPage title="Cookies">
      {saved !== null && (
        <Notice>
          Your cookie preferences have been saved for this example. Analytics cookies:{' '}
          {saved === 'Yes' ? 'accepted' : 'rejected'}.
        </Notice>
      )}
      <Text>
        Cookies are small files saved on your phone, tablet or computer when you visit a website.
      </Text>
      <Text>
        This example describes an illustrative service. It does not set cookies or run analytics.
      </Text>
      <Heading as="h2" size={24}>
        Essential cookies
      </Heading>
      <Text>
        These cookies keep the service secure and remember your cookie preferences. They are needed
        for the service to work.
      </Text>
      <CookieTable
        caption="Example essential cookies"
        rows={[
          [
            'service_session',
            'Keeps your answers together while you use the service',
            'When you close your browser',
          ],
          ['cookie_preferences', 'Remembers your cookie choices', '1 year'],
        ]}
      />
      <Heading as="h2" size={24}>
        Analytics cookies (optional)
      </Heading>
      <Text>
        With your permission, we would use analytics cookies to understand how people use the
        service. We would not use these cookies to identify you.
      </Text>
      <CookieTable
        caption="Example analytics cookies"
        rows={[['service_analytics', 'Counts visits to help improve the service', '1 year']]}
      />
      <Box asChild>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSaved(analytics)
          }}
        >
          <Stack gap={6} align="start">
            <Choice
              legend="Do you want to accept analytics cookies?"
              options={['Yes', 'No']}
              value={analytics}
              onChange={(value) => {
                setAnalytics(value)
                setSaved(null)
              }}
            />
            <Button type="submit">Save cookie preferences</Button>
          </Stack>
        </form>
      </Box>
    </PatternPage>
  )
}

function CookieTable({ caption, rows }: { caption: string; rows: string[][] }) {
  return (
    <Box
      overflowX="auto"
      tabIndex={0}
      role="region"
      aria-label={caption}
      _focusVisible={{ outline: '3px solid', outlineColor: 'focus', outlineOffset: '3px' }}
    >
      <Table.Root>
        <Table.Caption>{caption}</Table.Caption>
        <Table.Header>
          <Table.Row>
            {['Name', 'Purpose', 'Expiry'].map((label) => (
              <Table.ColumnHeader key={label} scope="col">
                {label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map(([name, purpose, expiry]) => (
            <Table.Row key={name}>
              <Table.RowHeader scope="row">{name}</Table.RowHeader>
              <Table.Cell>{purpose}</Table.Cell>
              <Table.Cell>{expiry}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export function InterruptionExample() {
  const [stage, setStage] = useState<'question' | 'interrupt' | 'continued'>('question')
  const [values, setValues] = useState<Record<string, string>>({ amount: '25000' })
  if (stage === 'continued')
    return (
      <PatternPage title="Income confirmed" back={() => setStage('interrupt')}>
        <Notice>
          Your monthly income of £{Number(values.amount).toLocaleString('en-GB')} has been recorded
          for this example.
        </Notice>
        <Text>You can now continue your application.</Text>
        <Link href={storyHref('help-users-to', 'check-answers')} target="_top">
          Continue to check your answers
        </Link>
      </PatternPage>
    )
  if (stage === 'interrupt')
    return (
      <PatternPage
        title="Check your monthly income"
        heading={false}
        back={() => setStage('question')}
      >
        <Panel bg="primary.500" heading="Check your monthly income">
          <Stack gap={6} align="center">
            <Text color="common.white" fontSize={24}>
              You entered £{Number(values.amount).toLocaleString('en-GB')} per month.
            </Text>
            <Text color="common.white">
              This is higher than most monthly incomes. We use this amount to decide how much
              support you can get. Check that you have not entered your yearly income.
            </Text>
            <Button variant="inverse" onClick={() => setStage('continued')}>
              Confirm this is my monthly income
            </Button>
            <Button variant="inverse" onClick={() => setStage('question')}>
              Change my monthly income
            </Button>
          </Stack>
        </Panel>
      </PatternPage>
    )
  return (
    <PatternPage title="What is your monthly income?" heading={false}>
      <FieldsForm
        pageLabel
        initial={values}
        fields={[
          {
            key: 'amount',
            label: 'What is your monthly income?',
            hint: 'Enter the amount in pounds before tax. For this example, amounts over £20,000 prompt a check.',
            inputMode: 'numeric',
            width: '10',
            validate: (value) =>
              /^\d+(\.\d{1,2})?$/.test(value.trim())
                ? undefined
                : 'Enter an amount in pounds, like 2500 or 2500.50',
          },
        ]}
        onComplete={(answers) => {
          setValues(answers)
          setStage(Number(answers.amount) > 20000 ? 'interrupt' : 'continued')
        }}
      />
    </PatternPage>
  )
}

export function PageNotFoundExample() {
  return (
    <PatternPage title="Page not found">
      <Text>If you typed the web address, check it is correct.</Text>
      <Text>If you pasted the web address, check you copied the entire address.</Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Go to the service start page
      </Link>
      <ContactLink />
    </PatternPage>
  )
}

export function QuestionExample() {
  const [answer, setAnswer] = useState<Record<string, string>>({})
  const [complete, setComplete] = useState(false)
  return complete ? (
    <PatternPage title="Check your answer" back={() => setComplete(false)}>
      <Text>Your full name is {answer.name}.</Text>
      <Button alignSelf="start" variant="secondary" onClick={() => setComplete(false)}>
        Change your name
      </Button>
      <Link href={storyHref('help-users-to', 'check-answers')} target="_top">
        Continue to check all answers
      </Link>
    </PatternPage>
  ) : (
    <PatternPage title="What is your full name?" heading={false}>
      <FieldsForm
        pageLabel
        initial={answer}
        fields={[
          {
            key: 'name',
            label: 'What is your full name?',
            autoComplete: 'name',
            hint: 'Include any middle names.',
          },
        ]}
        onComplete={(values) => {
          setAnswer(values)
          setComplete(true)
        }}
      />
    </PatternPage>
  )
}

export function ServiceUnavailableExample() {
  return (
    <PatternPage title="Sorry, the service is unavailable">
      <Text>
        You will be able to use the service from 9am on 15 September 2026 (British Summer Time).
      </Text>
      <Text>We have temporarily closed the service to update the application rules.</Text>
      <Text>
        If you saved an application, your answers will be available when the service reopens. You
        will have 30 days from the date you saved them to finish.
      </Text>
      <Text>
        If you need to apply before the service reopens, contact the service team for help.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ProblemWithServiceExample() {
  return (
    <PatternPage title="Sorry, there is a problem with the service">
      <Text>Try again later.</Text>
      <Text>
        Your saved answers are available for 30 days from the date you last saved them. Any answers
        you entered since then may not have been saved.
      </Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Return to the service start page
      </Link>
      <ContactLink />
    </PatternPage>
  )
}

const steps = [
  {
    title: 'Check if you can get support',
    text: 'Find out whether this service is suitable before you apply.',
    link: 'Check if this service is suitable',
    slug: 'check-a-service-is-suitable',
  },
  {
    title: 'Prepare your application',
    text: 'Check what information you need and how long an application takes.',
    link: 'Read about applying for support',
    slug: 'start-using-a-service',
  },
  {
    title: 'Apply for support',
    text: 'Complete the application tasks and check your answers before sending your application.',
    link: 'Start your application tasks',
    slug: 'complete-multiple-tasks',
  },
]

export function StepByStepExample() {
  return (
    <PatternPage title="Apply for support: step by step">
      <Text>
        Check whether you can get support, prepare the information you need and make an application.
      </Text>
      <Box as="ol" pl={6}>
        {steps.map((step) => (
          <Box as="li" key={step.slug} pl={2}>
            <Details.Root>
              <Details.Summary>{step.title}</Details.Summary>
              <Details.Content>
                <Stack gap={3}>
                  <Text>{step.text}</Text>
                  <Link href={storyHref('help-users-to', step.slug)} target="_top">
                    {step.link}
                  </Link>
                </Stack>
              </Details.Content>
            </Details.Root>
          </Box>
        ))}
      </Box>
      <Box
        as="aside"
        borderTop="2px solid"
        borderColor="primary.500"
        pt={4}
        aria-label="Related page navigation example"
      >
        <Heading as="h2" size={24}>
          Part of Apply for support: step by step
        </Heading>
        <Text mt={3}>Related-page navigation example</Text>
        <Box as="ol" pl={6} mt={3}>
          {steps.map((step) => (
            <Box as="li" key={step.slug} mb={3}>
              <Link href={storyHref('help-users-to', step.slug)} target="_top">
                {step.title}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </PatternPage>
  )
}
