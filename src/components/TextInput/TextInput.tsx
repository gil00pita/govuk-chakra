import { Field, Input as ChakraInput, type FieldRootProps, type InputProps } from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export type TextInputWidth = 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'

const WIDTH_MAX: Record<Exclude<TextInputWidth, 'full'>, string> = {
  '30': '59ex',
  '20': '41ex',
  '10': '23ex',
  '5': '10.8ex',
  '4': '9ex',
  '3': '7.2ex',
  '2': '5.4ex',
}

export interface TextInputProps extends Omit<InputProps, 'size'> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  width?: TextInputWidth
  labelSize?: 19 | 24
  formProps?: Omit<FieldRootProps, 'children' | 'invalid'>
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
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
    <Field.Root
      required={required}
      disabled={disabled}
      invalid={isInvalid}
      display="flex"
      alignItems="flex-start"
      gap={pxToRem(8)}
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

      <ChakraInput
        ref={ref}
        id={inputId}
        aria-describedby={describedBy}
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor={isInvalid ? 'red.500' : 'grey.950'}
        bg="common.white"
        color="grey.950"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(12)}
        py={pxToRem(5)}
        h={pxToRem(40)}
        w={width === 'full' ? '100%' : 'auto'}
        maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
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
