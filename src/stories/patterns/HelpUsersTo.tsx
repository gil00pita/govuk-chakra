import { useId, useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Stack,
  SummaryList,
  TaskList,
  Tag,
  Textinput,
  InsetText,
  SkipLink,
  ServiceNavigation,
  GOVUKHeader,
} from '@/govuk-chakra'
import { PatternPage, FieldsForm, Choice, Errors, Notice, ContactLink, storyHref } from './shared'

const email = (value: string) =>
  /^[^\s@]+@[^\s@]+$/.test(value.trim())
    ? undefined
    : 'Enter an email address in the correct format, like name@example.com'

export function CheckAServiceIsSuitableExample() {
  const [step, setStep] = useState(0)
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(false)
  const id = useId()
  return (
    <PatternPage
      title={
        step === 0
          ? 'Check if this service is right for you'
          : step === 1
            ? 'Where do you live?'
            : answer === 'England'
              ? 'You can use this example service'
              : 'Use a service where you live'
      }
      back={step ? () => setStep(step - 1) : undefined}
    >
      {step === 0 ? (
        <>
          <Text>
            This fictional service helps adults aged 18 or over apply for a community garden plot in
            England. There is no application fee. One question will help you find the right route.
          </Text>
          <Text>
            If your circumstances are different, the service team can help you understand the rules.
          </Text>
          <Button alignSelf="start" onClick={() => setStep(1)}>
            Check now
          </Button>
        </>
      ) : step === 1 ? (
        <Box asChild>
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              setError(!answer)
              if (answer) setStep(2)
            }}
          >
            <Stack gap={6}>
              <Errors prefix={id} errors={error ? { country: 'Select where you live' } : {}} />
              <Choice
                id={`${id}-country`}
                legend="Where do you live?"
                options={['England', 'Scotland', 'Wales', 'Northern Ireland', 'Somewhere else']}
                value={answer}
                onChange={setAnswer}
                error={error ? 'Select where you live' : undefined}
              />
              <Button alignSelf="start" type="submit">
                Continue
              </Button>
            </Stack>
          </form>
        </Box>
      ) : (
        <>
          <Text>
            {answer === 'England'
              ? 'You meet the location rule. You must also be 18 or over. The application will ask for your contact details.'
              : `This example service covers England. You selected ${answer}. Your local council can explain the options available to you.`}
          </Text>
          <Link
            href={
              answer === 'England'
                ? storyHref('ask-users-for', 'names')
                : 'https://www.gov.uk/find-local-council'
            }
            target="_top"
          >
            {answer === 'England' ? 'Start your application' : 'Find your local council'}
          </Link>
          <Text>
            If this result does not reflect your circumstances, ask the team to explain or review
            it.
          </Text>
        </>
      )}
      <ContactLink />
    </PatternPage>
  )
}

export function CheckAnswersExample() {
  const [values, setValues] = useState({ name: 'Alex Morgan', email: 'alex@example.com' })
  const [editing, setEditing] = useState<'name' | 'email' | null>(null)
  const [submitted, setSubmitted] = useState(false)
  if (submitted)
    return (
      <PatternPage title="Application submitted">
        <Notice>Your example application has been submitted.</Notice>
        <Text>No information has been sent to a service.</Text>
        <Button variant="secondary" alignSelf="start" onClick={() => setSubmitted(false)}>
          Return to answers
        </Button>
      </PatternPage>
    )
  if (editing)
    return (
      <PatternPage
        title={editing === 'name' ? 'Change your full name' : 'Change your email address'}
        back={() => setEditing(null)}
      >
        <FieldsForm
          initial={values}
          fields={[
            {
              key: editing,
              label: editing === 'name' ? 'Full name' : 'Email address',
              autoComplete: editing === 'name' ? 'name' : 'email',
              type: editing === 'email' ? 'email' : 'text',
              validate: editing === 'email' ? email : undefined,
            },
          ]}
          submitLabel="Save and return"
          onComplete={(next) => {
            setValues((current) => ({ ...current, ...next }))
            setEditing(null)
          }}
        />
      </PatternPage>
    )
  return (
    <PatternPage title="Check your answers before sending your application">
      <Heading as="h2" size={24}>
        Personal details
      </Heading>
      <SummaryList.Root>
        {(['name', 'email'] as const).map((key) => (
          <SummaryList.Row key={key}>
            <SummaryList.Key>{key === 'name' ? 'Full name' : 'Email address'}</SummaryList.Key>
            <SummaryList.Value>{values[key]}</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                href={`#change-${key}`}
                visuallyHiddenText={key === 'name' ? 'full name' : 'email address'}
                onClick={(event) => {
                  event.preventDefault()
                  setEditing(key)
                }}
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        ))}
      </SummaryList.Root>
      <Heading as="h2" size={24}>
        Now send your application
      </Heading>
      <Text>
        By submitting, you confirm that these details are correct to the best of your knowledge. The
        service team would review your application and contact you by email.
      </Text>
      <Button alignSelf="start" onClick={() => setSubmitted(true)}>
        Accept and send
      </Button>
    </PatternPage>
  )
}

export function CompleteMultipleTasksExample() {
  const [data, setData] = useState<Record<string, string>>({})
  const [task, setTask] = useState<'name' | 'email' | null>(null)
  const [sent, setSent] = useState(false)
  const [review, setReview] = useState(false)
  if (review)
    return (
      <PatternPage title="Check your application" back={() => setReview(false)}>
        <SummaryList.Root>
          {(['name', 'email'] as const).map((key) => (
            <SummaryList.Row key={key}>
              <SummaryList.Key>{key === 'name' ? 'Full name' : 'Email address'}</SummaryList.Key>
              <SummaryList.Value>{data[key]}</SummaryList.Value>
              <SummaryList.Actions>
                <SummaryList.ActionLink
                  href={`#change-${key}`}
                  visuallyHiddenText={key === 'name' ? 'full name' : 'email address'}
                  onClick={(event) => {
                    event.preventDefault()
                    setReview(false)
                    setTask(key)
                  }}
                >
                  Change
                </SummaryList.ActionLink>
              </SummaryList.Actions>
            </SummaryList.Row>
          ))}
        </SummaryList.Root>
        <Text>
          Confirm these details are correct before sending this example application. No information
          will be sent to a service.
        </Text>
        <Button
          alignSelf="start"
          onClick={() => {
            setSent(true)
            setReview(false)
          }}
        >
          Accept and send
        </Button>
      </PatternPage>
    )
  if (task)
    return (
      <PatternPage
        title={task === 'name' ? 'Your personal details' : 'Your contact details'}
        back={() => setTask(null)}
      >
        <FieldsForm
          fields={[
            {
              key: task,
              label: task === 'name' ? 'Full name' : 'Email address',
              type: task === 'email' ? 'email' : 'text',
              validate: task === 'email' ? email : undefined,
            },
          ]}
          initial={data}
          submitLabel="Save and return to tasks"
          onComplete={(values) => {
            setData((current) => ({ ...current, ...values }))
            setTask(null)
            setSent(false)
          }}
        />
      </PatternPage>
    )
  return (
    <PatternPage title="Your application">
      <Text>
        {Number(Boolean(data.name)) + Number(Boolean(data.email))} of 2 information tasks completed.
        Saved answers are kept while this example is open.
      </Text>
      {sent && <Notice>Your example application has been submitted.</Notice>}
      <TaskList.Root heading="Prepare your application">
        {(['name', 'email'] as const).map((key) => (
          <TaskList.Item
            key={key}
            title={key === 'name' ? 'Personal details' : 'Contact details'}
            href={`#task-${key}`}
            status={data[key] ? 'completed' : 'notStarted'}
            onClick={(event) => {
              event.preventDefault()
              setTask(key)
            }}
          />
        ))}
      </TaskList.Root>
      <TaskList.Root heading="Send your application">
        {data.name && data.email ? (
          <TaskList.Item
            title="Submit your application"
            href="#submit"
            status={sent ? 'completed' : 'notStarted'}
            onClick={(event) => {
              event.preventDefault()
              setReview(true)
            }}
          />
        ) : (
          <Box as="li" py={4} borderBottom="1px solid" borderColor="border">
            <Stack gap={2} align="start">
              <Text fontWeight="700">Submit your application</Text>
              <Text>Complete personal details and contact details first.</Text>
              <Tag variant="gray">Cannot start yet</Tag>
            </Stack>
          </Box>
        )}
      </TaskList.Root>
      <ContactLink />
    </PatternPage>
  )
}

export function ConfirmContactExample({ kind }: { kind: 'phone' | 'email' }) {
  const isPhone = kind === 'phone'
  const [destination, setDestination] = useState(isPhone ? '07700 900123' : 'alex@example.com')
  const [editing, setEditing] = useState(false)
  const [code, setCode] = useState('')
  const [issued, setIssued] = useState(Date.now())
  const [generation, setGeneration] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [resends, setResends] = useState(0)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const id = useId()
  const expected = String(123456 + generation)
  const renew = () => {
    setGeneration((value) => value + 1)
    setIssued(Date.now())
    setAttempts(0)
    setCode('')
    setError('')
    setNotice('A new example code is ready. The previous code no longer works.')
  }
  if (editing)
    return (
      <PatternPage
        title={`Change your ${isPhone ? 'phone number' : 'email address'}`}
        back={() => setEditing(false)}
      >
        <FieldsForm
          initial={{ destination }}
          fields={[
            {
              key: 'destination',
              label: isPhone ? 'Mobile phone number' : 'Email address',
              type: isPhone ? 'tel' : 'email',
              autoComplete: isPhone ? 'tel' : 'email',
              validate: isPhone ? undefined : email,
            },
          ]}
          onComplete={(values) => {
            setDestination(values.destination)
            setEditing(false)
            setResends(0)
            renew()
          }}
        />
      </PatternPage>
    )
  if (confirmed)
    return (
      <PatternPage title={`${isPhone ? 'Phone number' : 'Email address'} confirmed`}>
        <Notice>This example confirmation is complete.</Notice>
        <Text>
          The code has been used and cannot be used again. Confirmation checks access to a contact
          method, not identity.
        </Text>
        <ContactLink />
      </PatternPage>
    )
  return (
    <PatternPage title={`Confirm your ${isPhone ? 'phone number' : 'email address'}`}>
      <Text>
        In a live service,{' '}
        {isPhone
          ? `a text message would go to the number ending ${destination.replace(/\D/g, '').slice(-4)}`
          : `an email would go to ${destination}`}
        . Open your {isPhone ? 'messages' : 'email on this or another device'}, then return here and
        enter the code. It expires after 10 minutes.
      </Text>
      <InsetText>
        This is a simulation. No message is sent. Use example code {expected}. Do not enter real
        contact details.
      </InsetText>
      {notice && <Notice>{notice}</Notice>}
      <Box asChild>
        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            if (attempts >= 3) {
              setError('You have tried 3 times. Request a new code or contact the team.')
              return
            }
            if (Date.now() - issued >= 600000) {
              setError('This code has expired. Request a new code.')
              return
            }
            if (code.trim() !== expected) {
              setAttempts((value) => value + 1)
              setError(
                attempts === 2
                  ? 'You have tried 3 times. Request a new code or contact the team.'
                  : 'Enter the 6-digit code from your message'
              )
              return
            }
            setConfirmed(true)
          }}
        >
          <Stack gap={6}>
            <Errors prefix={id} errors={error ? { code: error } : {}} />
            <Textinput
              id={`${id}-code`}
              name="code"
              label="Security code"
              hint="Enter the 6-digit code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              width="10"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              error={error || undefined}
            />
            <Button type="submit" alignSelf="start">
              Confirm {isPhone ? 'phone number' : 'email address'}
            </Button>
          </Stack>
        </form>
      </Box>
      <Button
        variant="secondary"
        alignSelf="start"
        disabled={resends >= 3}
        onClick={() => {
          setResends((value) => value + 1)
          renew()
        }}
      >
        Request a new code
      </Button>
      {resends >= 3 && (
        <Text>
          You have requested 3 replacement codes in this example. Contact the team for another way
          to continue.
        </Text>
      )}
      <Link
        href="#change-contact"
        onClick={(event) => {
          event.preventDefault()
          setEditing(true)
        }}
      >
        Change {isPhone ? 'phone number' : 'email address'}
      </Link>
      <Button
        variant="secondary"
        alignSelf="start"
        onClick={() => {
          setIssued(0)
          setNotice('The example code has expired. Request a new code to continue.')
        }}
      >
        Simulate code expiry
      </Button>
      <Text>
        If you cannot access {isPhone ? 'text messages' : 'email'}, ask the team for another way to
        confirm your details.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ContactADepartmentOrServiceTeamExample() {
  return (
    <PatternPage title="Get help with your application">
      <InsetText>
        These contact details demonstrate the content a service must provide. They are fictional and
        are not monitored.
      </InsetText>
      <Heading as="h2" size={24}>
        Telephone
      </Heading>
      <Text>Example application support: 01632 960000</Text>
      <Text>
        Monday to Friday, 9am to 5pm UK time, except bank holidays. Welsh-language support is
        available during the same hours.
      </Text>
      <Link href="https://www.gov.uk/call-charges" target="_top">
        Find out about call charges
      </Link>
      <Heading as="h2" size={24}>
        If you cannot hear or speak on the phone
      </Heading>
      <Text>
        Use Relay UK with 18001 followed by the service telephone number. You can also contact the
        team by email.
      </Text>
      <Link href="https://www.relayuk.bt.com/" target="_top">
        How to use Relay UK
      </Link>
      <Heading as="h2" size={24}>
        Email
      </Heading>
      <Text>
        Example inbox: applications@example.com. A live service would aim to reply within 2 working
        days.
      </Text>
      <Text>
        Include your application reference, if you have one, and explain what you need help with. Do
        not send passwords, security codes or payment card details.
      </Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Return to the example service start page
      </Link>
    </PatternPage>
  )
}

export function CreateAUsernameExample() {
  const [username, setUsername] = useState('')
  const [editing, setEditing] = useState(true)
  return (
    <PatternPage title={editing ? 'Create a username' : 'Your username is available'}>
      <Text>
        This example discussion service needs a public name for your posts. Choose a name that does
        not reveal your identity. Usernames are not case sensitive.
      </Text>
      {editing ? (
        <FieldsForm
          initial={{ username }}
          fields={[
            {
              key: 'username',
              label: 'Create a username',
              autoComplete: 'username',
              hint: 'Use letters, numbers, hyphens or underscores. For this example, “alex” is already taken.',
              validate: (value) =>
                !/^[a-z0-9_-]+$/i.test(value)
                  ? 'Use only letters, numbers, hyphens or underscores'
                  : value.toLowerCase() === 'alex'
                    ? 'This username is already taken. Try alex_garden or choose another username.'
                    : undefined,
            },
          ]}
          submitLabel="Check availability"
          onComplete={(values) => {
            setUsername(values.username)
            setEditing(false)
          }}
        />
      ) : (
        <>
          <Notice>{username} is available in this example.</Notice>
          <Button variant="secondary" alignSelf="start" onClick={() => setEditing(true)}>
            Change username
          </Button>
        </>
      )}
      <Text>
        In a live service you could recover a forgotten username, change it in account settings, or
        ask the team for help without email access.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function CreateAccountsExample() {
  const [mode, setMode] = useState<'choice' | 'create' | 'signin' | 'done'>('choice')
  const [savedEmail, setSavedEmail] = useState('')
  return (
    <PatternPage
      title={
        mode === 'signin'
          ? 'Sign in'
          : mode === 'done'
            ? 'Example account details checked'
            : 'Create an account'
      }
      back={mode !== 'choice' ? () => setMode('choice') : undefined}
    >
      <Text>
        You can make a one-off application without an account. Create an account only if you need to
        return regularly to manage your garden plot.
      </Text>
      {mode === 'choice' ? (
        <>
          <Button alignSelf="start" onClick={() => setMode('create')}>
            Create an account
          </Button>
          <Link
            href="#signin"
            onClick={(event) => {
              event.preventDefault()
              setMode('signin')
            }}
          >
            Sign in to an existing account
          </Link>
          <Link href={storyHref('ask-users-for', 'names')} target="_top">
            Continue without an account
          </Link>
        </>
      ) : mode === 'done' ? (
        <>
          <Notice>Your example details passed the form checks. No account was created.</Notice>
          <Text>
            Your service application would be retained when you return from account creation.
          </Text>
          <Link href={storyHref('help-users-to', 'confirm-an-email-address')} target="_top">
            Try email confirmation
          </Link>
        </>
      ) : (
        <FieldsForm
          key={mode}
          initial={{ email: savedEmail }}
          fields={[
            {
              key: 'email',
              label: 'Email address',
              type: 'email',
              autoComplete: 'username',
              validate: email,
            },
            {
              key: 'password',
              label: mode === 'create' ? 'Create a password' : 'Password',
              type: 'password',
              autoComplete: mode === 'create' ? 'new-password' : 'current-password',
              hint:
                mode === 'create'
                  ? 'For this example, use at least 12 characters. You can paste a password or use a password manager.'
                  : undefined,
              validate:
                mode === 'create'
                  ? (value) =>
                      value.length < 12 ? 'Enter a password with at least 12 characters' : undefined
                  : undefined,
            },
          ]}
          submitLabel={mode === 'create' ? 'Create an account' : 'Sign in'}
          onComplete={(values) => {
            setSavedEmail(values.email)
            setMode('done')
          }}
        />
      )}
      <Text>
        Contact the team if you have forgotten your password, cannot use email, need to change your
        contact details or want to close an account. In this example no credentials are stored or
        sent.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ExitAPageQuicklyExample() {
  const [ready, setReady] = useState(false)
  return (
    <>
      <SkipLink href="https://www.bbc.co.uk/weather" target="_top">
        Exit this page quickly
      </SkipLink>
      <PatternPage title={ready ? 'Get support safely' : 'Before you continue'}>
        <Button asChild variant="error" alignSelf="start">
          <a href="https://www.bbc.co.uk/weather" target="_top" rel="noreferrer">
            Exit this page
          </a>
        </Button>
        <Text>
          The exit link takes you straight to BBC Weather. It does not remove browser history or
          hide activity from someone monitoring your device or network.
        </Text>
        {!ready ? (
          <>
            <Text>
              If it is safe to continue, use a device you trust. Read the online safety advice
              before sharing personal information.
            </Text>
            <Button alignSelf="start" onClick={() => setReady(true)}>
              Continue to support information
            </Button>
          </>
        ) : (
          <>
            <Text>If you are in immediate danger, call 999 when it is safe to do so.</Text>
            <Link href="https://www.gov.uk/guidance/domestic-abuse-how-to-get-help" target="_top">
              Find domestic abuse support and online safety advice
            </Link>
          </>
        )}
        <Link href="https://www.bbc.co.uk/weather" target="_top" rel="noreferrer">
          Leave this website for BBC Weather
        </Link>
      </PatternPage>
    </>
  )
}

export function NavigateAServiceExample() {
  const [page, setPage] = useState('Applications')
  const pages = ['Applications', 'Messages', 'Account']
  return (
    <>
      <GOVUKHeader.Root>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="https://www.gov.uk/" target="_top">
            <GOVUKHeader.Logotype />
          </GOVUKHeader.Logo>
        </GOVUKHeader.Container>
      </GOVUKHeader.Root>
      <ServiceNavigation.Root aria-label="Garden plot service">
        <ServiceNavigation.ServiceName
          href="#applications"
          onClick={(event) => {
            event.preventDefault()
            setPage('Applications')
          }}
        >
          Manage your garden plot
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav collapsible={false} aria-label="Service sections">
          <ServiceNavigation.List>
            {pages.map((name) => (
              <ServiceNavigation.Item key={name} current={page === name}>
                <ServiceNavigation.Link
                  current={page === name}
                  href={`#${name.toLowerCase()}`}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(name)
                  }}
                >
                  {name}
                </ServiceNavigation.Link>
              </ServiceNavigation.Item>
            ))}
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
      <PatternPage title={page}>
        {page === 'Applications' ? (
          <>
            <Text>You have no applications in this example.</Text>
            <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
              Start an application
            </Link>
          </>
        ) : page === 'Messages' ? (
          <Text>You have no new messages.</Text>
        ) : (
          <>
            <Text>Manage your contact details and account access.</Text>
            <Link href={storyHref('help-users-to', 'create-accounts')} target="_top">
              Explore account options
            </Link>
          </>
        )}
        <ContactLink />
      </PatternPage>
    </>
  )
}

export function ValidationExample() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  return (
    <PatternPage
      title={done ? 'Contact details checked' : 'Your contact details'}
      back={done ? () => setDone(false) : undefined}
    >
      {done ? (
        <Notice>Your example contact details have been checked.</Notice>
      ) : (
        <>
          <Text>
            Leave a field empty or enter an email without an @ sign to try the error recovery. Your
            other answers will stay in place.
          </Text>
          <FieldsForm
            initial={values}
            fields={[
              { key: 'name', label: 'Full name', autoComplete: 'name' },
              {
                key: 'email',
                label: 'Email address',
                type: 'email',
                autoComplete: 'email',
                validate: email,
              },
            ]}
            onComplete={(next) => {
              setValues(next)
              setDone(true)
            }}
          />
        </>
      )}
    </PatternPage>
  )
}

export function StartUsingAServiceExample() {
  return (
    <PatternPage title="Apply for a community garden plot">
      <Text>
        Use this example service to apply for a community garden plot in England. You must be aged
        18 or over.
      </Text>
      <Text>
        There is no application fee. It takes about 10 minutes to apply. The example service would
        contact you within 10 working days.
      </Text>
      <Heading as="h2" size={24}>
        Before you start
      </Heading>
      <Text>
        You will need your name, contact details and home address. Use fictional details in this
        demonstration.
      </Text>
      <Button asChild alignSelf="start">
        <a href={storyHref('help-users-to', 'check-a-service-is-suitable')} target="_top">
          Start now
        </a>
      </Button>
      <Heading as="h2" size={24}>
        Return to an application
      </Heading>
      <Link href={storyHref('help-users-to', 'complete-multiple-tasks')} target="_top">
        Continue your example application
      </Link>
      <Heading as="h2" size={24}>
        Other ways to apply
      </Heading>
      <Text>
        If you cannot apply online, the example support team could help by phone or arrange an
        accessible application format.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}
