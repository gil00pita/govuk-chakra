import { Box, Input as ChakraInput, chakra, type BoxProps, type InputProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ReactNode } from 'react'

import { pxToRem } from '@/utils'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'

// ─── Context ─────────────────────────────────────────────────────────

interface DateInputContextValue {
  invalid?: boolean
  showHint?: boolean
  hideLegend?: boolean
  asPageHeading?: boolean
}

const DateInputContext = createContext<DateInputContextValue>({})
const useDateInputContext = () => useContext(DateInputContext)

// ─── Types ───────────────────────────────────────────────────────────

export type DateInputWidth = '2' | '4'

const WIDTH_MAX: Record<DateInputWidth, string> = {
  '2': '5.4ex',
  '4': '9ex',
}

export interface DateInputRootProps extends BoxProps {
  children: ReactNode
  invalid?: boolean
  showHint?: boolean
  hideLegend?: boolean
}

export interface DateInputLegendProps {
  /** Render the legend as an h1 page heading */

  children: ReactNode
}

export interface DateInputHintProps {
  id?: string
  children: ReactNode
}

export interface DateInputErrorProps {
  id?: string
  children: ReactNode
}

export interface DateInputContainerProps extends BoxProps {
  children: ReactNode
}

export interface DateInputFieldProps extends BoxProps {
  children: ReactNode
}

export interface DateInputLabelProps {
  htmlFor?: string
  children: ReactNode
}

export interface DateInputInputProps extends Omit<InputProps, 'size'> {
  inputWidth?: DateInputWidth
}

// ─── Subcomponents ───────────────────────────────────────────────────

export const DateInput = {
  Root: forwardRef<HTMLDivElement, DateInputRootProps>(function DateInputRoot(
    { children, invalid, hideLegend = false, asPageHeading = false, showHint = false, ...props },
    ref
  ) {
    return (
      <DateInputContext.Provider
        value={{
          invalid: Boolean(invalid),
          showHint: Boolean(showHint),
          hideLegend: Boolean(hideLegend),
          asPageHeading: Boolean(asPageHeading),
        }}
      >
        <Box
          ref={ref}
          paddingLeft={invalid ? pxToRem(15) : 0}
          borderLeft={invalid ? `${pxToRem(5)} solid` : '0'}
          borderColor={invalid ? 'border.error' : 'transparent'}
          {...props}
        >
          <Box as="fieldset" border="0" p={0} m={0} minInlineSize={0}>
            {children}
          </Box>
        </Box>
      </DateInputContext.Provider>
    )
  }),

  Legend: forwardRef<HTMLDivElement, DateInputLegendProps>(function DateInputLegend(
    { children, ...props },
    ref
  ) {
    const { hideLegend, asPageHeading } = useDateInputContext()
    if (hideLegend) return null
    return (
      <Box ref={ref} as="legend" mb={pxToRem(10)} width="100%" {...props}>
        {asPageHeading ? (
          <Heading as="h1" size={36} color="fg">
            {children}
          </Heading>
        ) : (
          <Text as="span" fontSize={24} fontWeight="700" color="fg">
            {children}
          </Text>
        )}
      </Box>
    )
  }),

  Hint: forwardRef<HTMLParagraphElement, DateInputHintProps>(function DateInputHint(
    { children, ...props },
    ref
  ) {
    const { showHint } = useDateInputContext()
    if (!showHint) return null

    return (
      <Text ref={ref} fontSize={19} color="fg.muted" mb={pxToRem(15)} {...props}>
        {children}
      </Text>
    )
  }),

  Error: forwardRef<HTMLParagraphElement, DateInputErrorProps>(function DateInputError(
    { children, ...props },
    ref
  ) {
    const { invalid } = useDateInputContext()
    if (!invalid) return null

    return (
      <Text ref={ref} fontSize={19} color="border.error" fontWeight="700" mb={3} {...props}>
        {children}
      </Text>
    )
  }),

  Container: forwardRef<HTMLDivElement, DateInputContainerProps>(function DateInputContainer(
    { children, ...props },
    ref
  ) {
    return (
      <Box ref={ref} display="flex" flexWrap="wrap" gap={pxToRem(20)} {...props}>
        {children}
      </Box>
    )
  }),

  Field: forwardRef<HTMLDivElement, DateInputFieldProps>(function DateInputField(
    { children, ...props },
    ref
  ) {
    return (
      <Box ref={ref} display="flex" flexDirection="column" gap={pxToRem(10)} {...props}>
        {children}
      </Box>
    )
  }),

  Label: forwardRef<HTMLLabelElement, DateInputLabelProps>(function DateInputLabel(
    { children, ...props },
    ref
  ) {
    return (
      <chakra.label
        ref={ref}
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        color="fg"
        marginBottom={0}
        {...props}
      >
        {children}
      </chakra.label>
    )
  }),

  Input: forwardRef<HTMLInputElement, DateInputInputProps>(function DateInputInput(
    { inputWidth = '2', ...props },
    ref
  ) {
    const { invalid } = useDateInputContext()

    return (
      <ChakraInput
        ref={ref}
        w="100%"
        maxW={WIDTH_MAX[inputWidth]}
        inputMode="numeric"
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor={invalid ? 'border.error' : 'border.input'}
        bgColor="transparent"
        color="fg"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        px={pxToRem(8)}
        py={pxToRem(5)}
        h={pxToRem(40)}
        _placeholder={{ color: 'fg.muted', opacity: 1 }}
        _hover={{ borderColor: 'border.input' }}
        _focusVisible={{
          outline: `${pxToRem(3)} solid`,
          outlineColor: 'yellow.500',
          outlineOffset: '0',
          borderColor: 'border.input',
          boxShadow: 'inset 0 0 0 2px var(--chakra-colors-common-black)',
        }}
        _invalid={{ borderColor: 'border.error' }}
        _disabled={{
          opacity: 1,
          cursor: 'not-allowed',
          color: 'fg.disabled',
          bgColor: 'bg.disabled',
        }}
        {...props}
      />
    )
  }),
}

// ─── Named Exports ───────────────────────────────────────────────────

export const DateInputRoot = DateInput.Root
export const DateInputLegend = DateInput.Legend
export const DateInputHint = DateInput.Hint
export const DateInputError = DateInput.Error
export const DateInputContainer = DateInput.Container
export const DateInputField = DateInput.Field
export const DateInputLabel = DateInput.Label
export const DateInputInput = DateInput.Input
