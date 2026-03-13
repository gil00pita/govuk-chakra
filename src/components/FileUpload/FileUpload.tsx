import {
  Box,
  Field,
  Input as ChakraInput,
  chakra,
  type FieldRootProps,
  type InputProps,
} from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { pxToRem } from '@/utils'

export interface FileUploadProps extends Omit<InputProps, 'size' | 'type'> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  labelSize?: 19 | 24
  formProps?: Omit<FieldRootProps, 'children' | 'invalid'>
  invalid?: boolean
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(function FileUpload(
  { id, label, hint, error, labelSize = 19, required, disabled, invalid, formProps, ...props },
  ref
) {
  const generatedId = useId()
  const inputId = id ?? `govuk-file-upload-${generatedId}`
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
        <chakra.label
          htmlFor={inputId}
          fontSize={pxToRem(labelSize)}
          lineHeight={labelSize === 24 ? pxToRem(30) : pxToRem(25)}
          fontWeight="700"
          color="var(--chakra-colors-grey-950)"
          marginBottom={0}
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
          color="grey.400"
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
          color="red.500"
          fontWeight="700"
          mb={0}
        >
          {`Error: ${error}`}
        </Box>
      ) : null}

      <ChakraInput
        ref={ref}
        id={inputId}
        type="file"
        aria-describedby={describedBy}
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor={isInvalid ? 'red.500' : 'grey.950'}
        bg="common.white"
        color="grey.950"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(8)}
        py={pxToRem(4)}
        h="auto"
        minH={pxToRem(40)}
        w="100%"
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
        css={{
          '&::file-selector-button': {
            marginRight: pxToRem(12),
            padding: `${pxToRem(6)} ${pxToRem(10)}`,
            border: `${pxToRem(2)} solid var(--chakra-colors-grey-950)`,
            borderRadius: 0,
            background: 'var(--chakra-colors-common-white)',
            color: 'var(--chakra-colors-grey-950)',
            fontSize: pxToRem(19),
            lineHeight: pxToRem(25),
            cursor: disabled ? 'not-allowed' : 'pointer',
          },
          '&::-webkit-file-upload-button': {
            marginRight: pxToRem(12),
            padding: `${pxToRem(6)} ${pxToRem(10)}`,
            border: `${pxToRem(2)} solid var(--chakra-colors-grey-950)`,
            borderRadius: 0,
            background: 'var(--chakra-colors-common-white)',
            color: 'var(--chakra-colors-grey-950)',
            fontSize: pxToRem(19),
            lineHeight: pxToRem(25),
            cursor: disabled ? 'not-allowed' : 'pointer',
          },
        }}
        {...props}
      />
    </Field.Root>
  )
})
