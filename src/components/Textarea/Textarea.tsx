import {
  Field,
  Textarea as ChakraTextarea,
  type FieldRootProps,
  type TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

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

export interface TextareaInputProps extends Omit<ChakraTextareaProps, 'size'> {}

// ─── Subcomponents ───────────────────────────────────────────────────

export const Textarea = {
  Root: forwardRef<HTMLDivElement, TextareaRootProps>(function TextareaRoot(
    { invalid, children, ...props },
    ref
  ) {
    const isInvalid = Boolean(invalid)

    return (
      <Field.Root
        ref={ref}
        invalid={isInvalid}
        display="flex"
        alignItems="flex-start"
        gap={pxToRem(8)}
        borderLeftWidth={isInvalid ? pxToRem(5) : 0}
        borderLeftColor={isInvalid ? 'red.500' : 'transparent'}
        pl={isInvalid ? pxToRem(15) : 0}
        {...props}
      >
        {children}
      </Field.Root>
    )
  }),

  Label: forwardRef<HTMLLabelElement, TextareaLabelProps>(function TextareaLabel(
    { fontSize = 19, children, ...props },
    ref
  ) {
    return (
      <Field.Label ref={ref} asChild {...props}>
        <Text fontSize={fontSize} fontWeight="700" color="grey.950" mb={0}>
          {children}
        </Text>
      </Field.Label>
    )
  }),

  Hint: forwardRef<HTMLDivElement, TextareaHintProps>(function TextareaHint(
    { children, ...props },
    ref
  ) {
    return (
      <Field.HelperText ref={ref} asChild {...props}>
        <Text fontSize={19} color="grey.400" mb={0}>
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
        <Text fontSize={19} color="red.500" fontWeight="700" mb={0}>
          {`Error: ${children}`}
        </Text>
      </Field.ErrorText>
    )
  }),

  Input: forwardRef<HTMLTextAreaElement, TextareaInputProps>(function TextareaInput(
    { rows = 5, ...props },
    ref
  ) {
    return (
      <ChakraTextarea
        ref={ref}
        rows={rows}
        resize="vertical"
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor="grey.950"
        bg="common.white"
        color="grey.950"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(12)}
        py={pxToRem(8)}
        w="100%"
        _placeholder={{ color: 'grey.400', opacity: 1 }}
        _hover={{ borderColor: 'common.black' }}
        _focusVisible={{
          outline: `${pxToRem(3)} solid`,
          outlineColor: 'yellow.500',
          outlineOffset: '0',
          borderColor: 'common.black',
          boxShadow: 'inset 0 0 0 2px var(--chakra-colors-common-black)',
        }}
        _invalid={{ borderColor: 'red.500' }}
        _disabled={{
          opacity: 1,
          cursor: 'not-allowed',
          color: 'grey.700',
          bg: 'grey.100',
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
