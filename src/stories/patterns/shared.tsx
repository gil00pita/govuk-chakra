import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Textinput,
  ErrorSummary,
  Radio,
  BackLink,
  Link,
  NotificationBanner,
} from '@/govuk-chakra'

export const storyHref = (group: 'ask-users-for' | 'help-users-to' | 'pages', name: string) =>
  `./?path=/story/gov-uk-patterns-${group}--${name}`

export function PatternPage({
  title,
  children,
  back,
  heading = true,
}: {
  title: string
  children: ReactNode
  back?: () => void
  heading?: boolean
}) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const previousTitle = useRef(title)
  useEffect(() => {
    if (
      previousTitle.current !== title ||
      new URLSearchParams(window.location.search).get('viewMode') === 'story'
    )
      ref.current?.focus()
    previousTitle.current = title
  }, [title])
  useEffect(() => {
    // Storybook docs mount several examples together; only set the title in a standalone canvas.
    if (new URLSearchParams(window.location.search).get('viewMode') !== 'story') return
    const previous = document.title
    document.title = `${title} – Example service – GOV.UK`
    return () => {
      document.title = previous
    }
  }, [title])
  return (
    <Box bg="bg" color="fg" minH="100%" px={{ base: 4, md: 8 }} py={8}>
      <Box
        as="main"
        maxW="740px"
        mx="auto"
        ref={ref}
        tabIndex={-1}
        outline="none"
        aria-labelledby={heading ? id : undefined}
      >
        <Stack gap={6} align="stretch">
          {back && (
            <BackLink
              href="#"
              onClick={(event) => {
                event.preventDefault()
                back()
              }}
            >
              Back
            </BackLink>
          )}
          {heading && (
            <Heading id={id} as="h1" size={36}>
              {title}
            </Heading>
          )}
          {children}
        </Stack>
      </Box>
    </Box>
  )
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <NotificationBanner.Root variant="success" heading="Success" role="status">
      <NotificationBanner.Body>{children}</NotificationBanner.Body>
    </NotificationBanner.Root>
  )
}

export function Errors({ errors, prefix }: { errors: Record<string, string>; prefix: string }) {
  return Object.keys(errors).length > 0 ? (
    <ErrorSummary.Root key={JSON.stringify(errors)}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        {Object.entries(errors).map(([key, message]) => (
          <ErrorSummary.Item key={key}>
            <ErrorSummary.Link
              href={`#${prefix}-${key}`}
              onClick={(event) => {
                const target = event.currentTarget.ownerDocument.getElementById(`${prefix}-${key}`)
                if (!target) return
                event.preventDefault()
                const control = target.matches('input, textarea, select')
                  ? target
                  : target.querySelector<HTMLElement>('input, textarea, select, button')
                const focusTarget = control ?? target
                focusTarget.focus()
                target.scrollIntoView({ block: 'center' })
              }}
            >
              {message}
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        ))}
      </ErrorSummary.List>
    </ErrorSummary.Root>
  ) : null
}

export interface FieldSpec {
  key: string
  label: string
  hint?: string
  type?: 'text' | 'email' | 'tel' | 'password'
  autoComplete?: string
  inputMode?: 'numeric' | 'email' | 'tel' | 'text'
  optional?: boolean
  width?: 'full' | '20' | '10' | '5' | '4' | '3' | '2'
  validate?: (value: string) => string | undefined
}

export function FieldsForm({
  fields,
  initial = {},
  onComplete,
  submitLabel = 'Continue',
  children,
  prefix: suppliedPrefix,
  pageLabel = false,
}: {
  fields: FieldSpec[]
  initial?: Record<string, string>
  onComplete: (values: Record<string, string>) => void
  submitLabel?: string
  children?: ReactNode
  prefix?: string
  pageLabel?: boolean
}) {
  const id = useId()
  const prefix = suppliedPrefix ?? id
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Box asChild>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          const next: Record<string, string> = {}
          fields.forEach((field) => {
            const value = values[field.key] ?? ''
            if (!field.optional && !value.trim())
              next[field.key] = `Enter ${field.label.toLowerCase()}`
            else if (value.trim()) {
              const message = field.validate?.(value)
              if (message) next[field.key] = message
            }
          })
          setErrors(next)
          if (!Object.keys(next).length) onComplete(values)
        }}
      >
        <Stack gap={6} align="stretch">
          <Errors errors={errors} prefix={prefix} />
          {fields.map((field) => (
            <Stack gap={2} key={field.key}>
              <Textinput
                id={`${prefix}-${field.key}`}
                name={field.key}
                label={
                  pageLabel ? (
                    <Heading as="h1" size={36}>
                      {field.label}
                    </Heading>
                  ) : (
                    field.label
                  )
                }
                hint={field.hint}
                error={errors[field.key]}
                type={field.type === 'password' && showPassword ? 'text' : (field.type ?? 'text')}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                spellCheck={false}
                autoCapitalize="none"
                width={field.width ?? 'full'}
                value={values[field.key] ?? ''}
                onChange={(event) =>
                  setValues((current) => ({ ...current, [field.key]: event.target.value }))
                }
              />
              {field.type === 'password' && (
                <Button
                  alignSelf="start"
                  variant="secondary"
                  type="button"
                  aria-controls={`${prefix}-${field.key}`}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide password' : 'Show password'}
                </Button>
              )}
            </Stack>
          ))}
          {children}
          <Button type="submit" alignSelf="start">
            {submitLabel}
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export function Choice({
  legend,
  options,
  value,
  onChange,
  error,
  id,
}: {
  legend: string
  options: string[]
  value: string
  onChange: (value: string) => void
  error?: string
  id?: string
}) {
  const name = useId()
  return (
    <Radio.Group legend={legend} error={error}>
      <Radio.Root
        id={id}
        name={name}
        value={value}
        onValueChange={(details) => onChange(details.value ?? '')}
      >
        {options.map((option) => (
          <Radio.Item key={option} value={option}>
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>{option}</Radio.ItemText>
          </Radio.Item>
        ))}
      </Radio.Root>
    </Radio.Group>
  )
}

export function ContactLink() {
  return (
    <Link href={storyHref('help-users-to', 'contact-a-department-or-service-team')} target="_top">
      Get help with your application
    </Link>
  )
}

export function Completed({
  onBack,
  children = 'Your answer has been recorded for this example.',
}: {
  onBack: () => void
  children?: ReactNode
}) {
  return (
    <PatternPage title="Answer recorded" back={onBack}>
      <Notice>{children}</Notice>
      <Text fontSize={19}>You can go back to change your answer.</Text>
    </PatternPage>
  )
}
