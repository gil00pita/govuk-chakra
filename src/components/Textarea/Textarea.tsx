import {
  Field,
  Textarea as ChakraTextarea,
  type FieldRootProps,
  type TextareaProps,
} from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export interface TextAreaProps extends Omit<TextareaProps, 'size'> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  labelSize?: 19 | 24
  formProps?: Omit<FieldRootProps, 'children' | 'invalid'>
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    id,
    label,
    hint,
    error,
    labelSize = 19,
    rows = 5,
    required,
    disabled,
    invalid,
    formProps,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const textAreaId = id ?? `govuk-text-area-${generatedId}`
  const hintId = hint ? `${textAreaId}-hint` : undefined
  const errorId = error ? `${textAreaId}-error` : undefined
  const isInvalid = Boolean(error) || Boolean(invalid)

  const describedBy =
    [hintId, errorId, props['aria-describedby']].filter(Boolean).join(' ') || undefined

  return (
    <Field.Root
      required={required}
      disabled={disabled}
      invalid={isInvalid}
      display="flex"
      alignItems="flex-start"
      gap={pxToRem(8)}
      borderLeftWidth={isInvalid ? pxToRem(5) : 0}
      borderLeftColor={isInvalid ? 'red.500' : 'transparent'}
      pl={isInvalid ? pxToRem(15) : 0}
      {...formProps}
    >
      {label ? (
        <Field.Label asChild>
          <Text fontSize={labelSize} fontWeight="700" color="grey.950" mb={0}>
            {label}
          </Text>
        </Field.Label>
      ) : null}

      {hint ? (
        <Field.HelperText id={hintId} asChild>
          <Text fontSize={19} color="grey.400" mb={0}>
            {hint}
          </Text>
        </Field.HelperText>
      ) : null}

      {error ? (
        <Field.ErrorText id={errorId} asChild>
          <Text fontSize={19} color="red.500" fontWeight="700" mb={0}>
            {`Error: ${error}`}
          </Text>
        </Field.ErrorText>
      ) : null}

      <ChakraTextarea
        ref={ref}
        id={textAreaId}
        rows={rows}
        resize="vertical"
        aria-describedby={describedBy}
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor={isInvalid ? 'red.500' : 'grey.950'}
        bg="common.white"
        color="grey.950"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(12)}
        py={pxToRem(8)}
        w="100%"
        _placeholder={{ color: 'grey.400', opacity: 1 }}
        _hover={{ borderColor: isInvalid ? 'red.500' : 'common.black' }}
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
    </Field.Root>
  )
})
