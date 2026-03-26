import {
  Box,
  Field,
  NativeSelect,
  chakra,
  type FieldRootProps,
  type NativeSelectFieldProps,
} from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { pxToRem } from '@/utils'

export type SelectWidth = 'full' | '20' | '10' | '5'

const WIDTH_MAX: Record<Exclude<SelectWidth, 'full'>, string> = {
  '20': '20em',
  '10': '10.5em',
  '5': '5.5em',
}

export interface SelectProps extends Omit<NativeSelectFieldProps, 'size'> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  width?: SelectWidth
  labelSize?: 19 | 24
  formProps?: Omit<FieldRootProps, 'children' | 'invalid'>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  invalid?: boolean
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
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
    children,
    placeholder,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const selectId = id ?? `govuk-select-${generatedId}`
  const hintId = hint ? `${selectId}-hint` : undefined
  const errorId = error ? `${selectId}-error` : undefined
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
        <chakra.label
          htmlFor={selectId}
          fontSize={pxToRem(labelSize)}
          lineHeight={labelSize === 24 ? pxToRem(30) : pxToRem(25)}
          fontWeight="700"
          color="fg"
          mb={0}
        >
          {label}
        </chakra.label>
      ) : null}

      {hint ? (
        <Box
          id={hintId}
          as="div"
          fontSize={pxToRem(19)}
          lineHeight={pxToRem(25)}
          color="fg.muted"
          mb={0}
        >
          {hint}
        </Box>
      ) : null}

      {error ? (
        <Box
          id={errorId}
          as="div"
          fontSize={pxToRem(19)}
          lineHeight={pxToRem(25)}
          color="fg.error"
          fontWeight="700"
          mb={0}
        >
          {`Error: ${error}`}
        </Box>
      ) : null}

      <NativeSelect.Root
        disabled={disabled}
        invalid={isInvalid}
        w={width === 'full' ? '100%' : 'auto'}
        maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
      >
        <NativeSelect.Field
          ref={ref}
          id={selectId}
          aria-describedby={describedBy}
          borderRadius="0"
          borderWidth={pxToRem(2)}
          borderColor={isInvalid ? 'fg.error' : 'border.input'}
          bg="bg"
          color="fg"
          fontSize={pxToRem(19)}
          lineHeight={pxToRem(25)}
          ps={pxToRem(8)}
          pe={pxToRem(40)}
          py={pxToRem(5)}
          h={pxToRem(40)}
          w="100%"
          _hover={{ borderColor: isInvalid ? 'fg.error' : 'border.input' }}
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
            borderColor: 'grey.400',
          }}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled={required} hidden={required}>
              {placeholder}
            </option>
          ) : null}
          {children}
        </NativeSelect.Field>

        <NativeSelect.Indicator
          color={disabled ? 'fg.disabled' : 'fg'}
          fontSize={pxToRem(18)}
          insetEnd={pxToRem(10)}
        />
      </NativeSelect.Root>
    </Field.Root>
  )
})
