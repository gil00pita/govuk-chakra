import { Field, Input as ChakraInput, type FieldRootProps, type InputProps } from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export type TextinputWidth = 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'

const WIDTH_MAX: Record<Exclude<TextinputWidth, 'full'>, string> = {
  '30': '59ex',
  '20': '41ex',
  '10': '23ex',
  '5': '10.8ex',
  '4': '9ex',
  '3': '7.2ex',
  '2': '5.4ex',
}

export interface TextinputRootProps extends FieldRootProps {
  invalid?: boolean
}

export interface TextinputLabelProps {
  fontSize?: 19 | 24
  children: ReactNode
}

export interface TextinputHintProps {
  id?: string
  children: ReactNode
}

export interface TextinputErrorProps {
  id?: string
  children: ReactNode
}

export interface TextinputInputProps extends Omit<InputProps, 'size'> {
  width?: TextinputWidth
  invalid?: boolean
}

export interface TextinputProps extends Omit<TextinputInputProps, 'invalid'> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  labelSize?: 19 | 24
  formProps?: Omit<TextinputRootProps, 'children' | 'invalid'>
  invalid?: boolean
}

const TextinputRoot = forwardRef<HTMLDivElement, TextinputRootProps>(function TextinputRoot(
  { invalid, children, ...props },
  ref
) {
  return (
    <Field.Root
      ref={ref}
      invalid={Boolean(invalid)}
      display="flex"
      alignItems="flex-start"
      gap={pxToRem(8)}
      {...props}
    >
      {children}
    </Field.Root>
  )
})

const TextinputLabel = forwardRef<HTMLLabelElement, TextinputLabelProps>(function TextinputLabel(
  { fontSize = 19, children, ...props },
  ref
) {
  return (
    <Field.Label ref={ref} asChild {...props}>
      <Text fontSize={fontSize} fontWeight="700" color="fg" mb={0}>
        {children}
      </Text>
    </Field.Label>
  )
})

const TextinputHint = forwardRef<HTMLDivElement, TextinputHintProps>(function TextinputHint(
  { children, ...props },
  ref
) {
  return (
    <Field.HelperText ref={ref} asChild {...props}>
      <Text fontSize={19} color="fg.muted" mb={0}>
        {children}
      </Text>
    </Field.HelperText>
  )
})

const TextinputError = forwardRef<HTMLDivElement, TextinputErrorProps>(function TextinputError(
  { children, ...props },
  ref
) {
  return (
    <Field.ErrorText ref={ref} asChild {...props}>
      <Text fontSize={19} color="fg.error" fontWeight="700" mb={0}>
        {`Error: ${children}`}
      </Text>
    </Field.ErrorText>
  )
})

const TextinputInput = forwardRef<HTMLInputElement, TextinputInputProps>(function TextinputInput(
  { width = 'full', invalid, ...props },
  ref
) {
  return (
    <ChakraInput
      ref={ref}
      borderRadius="0"
      borderWidth={pxToRem(2)}
      borderColor={invalid ? 'fg.error' : 'border.input'}
      fontFamily="body"
      bg="transparent"
      color="fg"
      fontSize={pxToRem(19)}
      lineHeight={pxToRem(25)}
      px={pxToRem(12)}
      py={pxToRem(5)}
      h={pxToRem(40)}
      w={width === 'full' ? '100%' : 'auto'}
      maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
      _placeholder={{ color: 'fg.muted', opacity: 1 }}
      _hover={{ borderColor: invalid ? 'fg.error' : 'border.input' }}
      _focusVisible={{
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'yellow.500',
        outlineOffset: '0',
        borderColor: 'border.input',
        boxShadow: 'inset 0 0 0 2px var(--chakra-colors-border-input)',
      }}
      _invalid={{ borderColor: 'fg.error' }}
      _disabled={{
        opacity: 1,
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
      }}
      {...props}
    />
  )
})

const TextinputRootComponent = forwardRef<HTMLInputElement, TextinputProps>(function Textinput(
  {
    id,
    label,
    hint,
    error,
    width = 'full',
    labelSize = 19,
    required,
    disabled,
    invalid,
    formProps,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const inputId = id ?? `govuk-text-input-${generatedId}`
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const isInvalid = Boolean(error) || Boolean(invalid)
  const describedBy =
    [hintId, errorId, props['aria-describedby']].filter(Boolean).join(' ') || undefined

  return (
    <TextinputRoot required={required} disabled={disabled} invalid={isInvalid} {...formProps}>
      {label ? <TextinputLabel fontSize={labelSize}>{label}</TextinputLabel> : null}
      {hint ? <TextinputHint id={hintId}>{hint}</TextinputHint> : null}
      {error ? <TextinputError id={errorId}>{error}</TextinputError> : null}
      <TextinputInput
        ref={ref}
        id={inputId}
        aria-describedby={describedBy}
        width={width}
        invalid={isInvalid}
        {...props}
      />
    </TextinputRoot>
  )
})

export const Textinput = Object.assign(TextinputRootComponent, {
  Root: TextinputRoot,
  Label: TextinputLabel,
  Hint: TextinputHint,
  Error: TextinputError,
  Input: TextinputInput,
})

export { TextinputRoot, TextinputLabel, TextinputHint, TextinputError, TextinputInput }
