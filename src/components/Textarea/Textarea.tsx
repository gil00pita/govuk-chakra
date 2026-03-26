import {
  Field,
  Textarea as ChakraTextarea,
  type FieldRootProps,
  type TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type ReactNode,
} from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

// ─── Types ───────────────────────────────────────────────────────────

export interface TextareaRootProps extends FieldRootProps {
  /** Whether the textarea is in an invalid state */
  invalid?: boolean
}

export interface TextareaLabelProps {
  /** Font size for the label */
  fontSize?: 19 | 24
  children: ReactNode
}

export interface TextareaHintProps {
  /** ID applied to the hint element for aria-describedby linking */
  id?: string
  children: ReactNode
}

export interface TextareaErrorProps {
  /** ID applied to the error element for aria-describedby linking */
  id?: string
  children: ReactNode
}

export type TextareaInputProps = Omit<ChakraTextareaProps, 'size'>

const TextareaFieldContext = createContext<{ inputId: string } | null>(null)

// ─── Subcomponents ───────────────────────────────────────────────────

export const Textarea = {
  Root: forwardRef<HTMLDivElement, TextareaRootProps>(function TextareaRoot(
    { invalid, children, ...props },
    ref
  ) {
    const isInvalid = Boolean(invalid)
    const generatedId = useId()
    const inputId = `govuk-textarea-${generatedId}`

    return (
      <TextareaFieldContext.Provider value={{ inputId }}>
        <Field.Root
          ref={ref}
          invalid={isInvalid}
          display="flex"
          alignItems="flex-start"
          gap={pxToRem(8)}
          borderLeftWidth={isInvalid ? pxToRem(5) : 0}
          borderLeftColor={isInvalid ? 'fg.error' : 'transparent'}
          pl={isInvalid ? pxToRem(15) : 0}
          {...props}
        >
          {children}
        </Field.Root>
      </TextareaFieldContext.Provider>
    )
  }),

  Label: forwardRef<HTMLLabelElement, TextareaLabelProps>(function TextareaLabel(
    { fontSize = 19, children, ...props },
    ref
  ) {
    const field = useContext(TextareaFieldContext)

    return (
      <Text
        as="label"
        ref={ref}
        htmlFor={field?.inputId}
        fontSize={fontSize}
        fontWeight="700"
        color="fg"
        mb={0}
        {...props}
      >
        {children}
      </Text>
    )
  }),

  Hint: forwardRef<HTMLDivElement, TextareaHintProps>(function TextareaHint(
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
  }),

  Error: forwardRef<HTMLDivElement, TextareaErrorProps>(function TextareaError(
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
  }),

  Input: forwardRef<HTMLTextAreaElement, TextareaInputProps>(function TextareaInput(
    { rows = 5, id, ...props },
    ref
  ) {
    const field = useContext(TextareaFieldContext)

    return (
      <ChakraTextarea
        ref={ref}
        id={id ?? field?.inputId}
        rows={rows}
        resize="vertical"
        borderRadius="0"
        borderWidth={pxToRem(2)}
        fontFamily="body"
        borderColor="border.input"
        bg="transparent"
        color="fg"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(12)}
        py={pxToRem(8)}
        w="100%"
        _placeholder={{ color: 'fg.muted', opacity: 1 }}
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
          color: 'fg.muted',
          bg: 'bg.muted',
        }}
        {...props}
      />
    )
  }),
}

// ─── Named Exports ───────────────────────────────────────────────────

export const TextareaRoot = Textarea.Root
export const TextareaLabel = Textarea.Label
export const TextareaHint = Textarea.Hint
export const TextareaError = Textarea.Error
export const TextareaInput = Textarea.Input
