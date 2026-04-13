import {
  Box,
  DatePicker as ChakraDatePicker,
  Field,
  chakra,
  type DatePickerClearTriggerProps as ChakraDatePickerClearTriggerProps,
  type DatePickerContentProps as ChakraDatePickerContentProps,
  type DatePickerControlProps as ChakraDatePickerControlProps,
  type DatePickerDayTableProps as ChakraDatePickerDayTableProps,
  type DatePickerHeaderProps as ChakraDatePickerHeaderProps,
  type DatePickerIndicatorGroupProps as ChakraDatePickerIndicatorGroupProps,
  type DatePickerInputProps as ChakraDatePickerInputProps,
  type DatePickerLabelProps as ChakraDatePickerLabelProps,
  type DatePickerMonthSelectProps as ChakraDatePickerMonthSelectProps,
  type DatePickerMonthTableProps as ChakraDatePickerMonthTableProps,
  type DatePickerNextTriggerProps as ChakraDatePickerNextTriggerProps,
  type DatePickerPositionerProps as ChakraDatePickerPositionerProps,
  type DatePickerPresetTriggerProps as ChakraDatePickerPresetTriggerProps,
  type DatePickerPrevTriggerProps as ChakraDatePickerPrevTriggerProps,
  type DatePickerRangeTextProps as ChakraDatePickerRangeTextProps,
  type DatePickerRootProps as ChakraDatePickerRootProps,
  type DatePickerTriggerProps as ChakraDatePickerTriggerProps,
  type DatePickerValueChangeDetails as ChakraDatePickerValueChangeDetails,
  type DatePickerValueTextProps as ChakraDatePickerValueTextProps,
  type DatePickerViewProps as ChakraDatePickerViewProps,
  type DatePickerViewTriggerProps as ChakraDatePickerViewTriggerProps,
  type DatePickerYearSelectProps as ChakraDatePickerYearSelectProps,
  type DatePickerYearTableProps as ChakraDatePickerYearTableProps,
  type DateValue,
  type FieldRootProps,
} from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { RiCalendarLine } from 'react-icons/ri'

import { Text } from '@/components/Text'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'
import { govukFont, pxToRem } from '@/utils'

export type DatePickerWidth = 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'

const WIDTH_MAX: Record<Exclude<DatePickerWidth, 'full'>, string> = {
  '30': '59ex',
  '20': '41ex',
  '10': '23ex',
  '5': '10.8ex',
  '4': '9ex',
  '3': '7.2ex',
  '2': '5.4ex',
}

interface DatePickerFieldContextValue {
  describedBy?: string
  disabled?: boolean
  invalid?: boolean
  labelSize: 19 | 24
  required?: boolean
  width: DatePickerWidth
}

const DatePickerFieldContext = createContext<DatePickerFieldContextValue | null>(null)

const useDatePickerFieldContext = (componentName: string) => {
  const context = useContext(DatePickerFieldContext)

  if (!context) {
    throw new Error(`${componentName} must be used within DatePicker.Root`)
  }

  return context
}

export interface DatePickerRootProps extends Omit<
  ChakraDatePickerRootProps,
  'disabled' | 'invalid'
> {
  children: ReactNode
  disabled?: boolean
  formProps?: Omit<FieldRootProps, 'children' | 'disabled' | 'invalid' | 'required'>
  invalid?: boolean
  labelSize?: 19 | 24
  required?: boolean
  width?: DatePickerWidth
}

export interface DatePickerLabelProps extends Omit<ChakraDatePickerLabelProps, 'children'> {
  children: ReactNode
  fontSize?: 19 | 24
}

export interface DatePickerHintProps extends ComponentPropsWithoutRef<typeof Text> {
  id?: string
}

export interface DatePickerErrorProps extends ComponentPropsWithoutRef<typeof Text> {
  id?: string
}

export type DatePickerControlProps = ChakraDatePickerControlProps
export interface DatePickerTriggerProps extends ChakraDatePickerTriggerProps {
  children?: ReactNode
}
export type DatePickerInputProps = ChakraDatePickerInputProps
export type DatePickerValueTextProps = ChakraDatePickerValueTextProps
export type DatePickerIndicatorGroupProps = ChakraDatePickerIndicatorGroupProps
export type DatePickerClearTriggerProps = ChakraDatePickerClearTriggerProps
export type DatePickerPositionerProps = ChakraDatePickerPositionerProps
export type DatePickerContentProps = ChakraDatePickerContentProps
export type DatePickerHeaderProps = ChakraDatePickerHeaderProps
export type DatePickerPresetTriggerProps = ChakraDatePickerPresetTriggerProps
export type DatePickerPrevTriggerProps = ChakraDatePickerPrevTriggerProps
export type DatePickerNextTriggerProps = ChakraDatePickerNextTriggerProps
export type DatePickerRangeTextProps = ChakraDatePickerRangeTextProps
export type DatePickerViewTriggerProps = ChakraDatePickerViewTriggerProps
export type DatePickerMonthSelectProps = ChakraDatePickerMonthSelectProps
export type DatePickerYearSelectProps = ChakraDatePickerYearSelectProps
export type DatePickerViewProps = ChakraDatePickerViewProps
export type DatePickerDayTableProps = ChakraDatePickerDayTableProps
export type DatePickerMonthTableProps = ChakraDatePickerMonthTableProps
export type DatePickerYearTableProps = ChakraDatePickerYearTableProps
export type DatePickerValueChangeDetails = ChakraDatePickerValueChangeDetails

const DatePickerRoot = forwardRef<HTMLDivElement, DatePickerRootProps>(function DatePickerRoot(
  {
    id,
    width = 'full',
    labelSize = 19,
    required,
    disabled,
    invalid,
    formProps,
    children,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const pickerId = id ?? `govuk-date-picker-${generatedId}`
  const hintId = `${pickerId}-hint`
  const errorId = `${pickerId}-error`
  const isInvalid = Boolean(invalid)
  const describedBy =
    [hintId, isInvalid ? errorId : undefined, props['aria-describedby']]
      .filter(Boolean)
      .join(' ') || undefined

  return (
    <DatePickerFieldContext.Provider
      value={{
        describedBy,
        disabled,
        invalid: isInvalid,
        labelSize,
        required,
        width,
      }}
    >
      <Field.Root
        required={required}
        disabled={disabled}
        invalid={isInvalid}
        display="flex"
        alignItems="flex-start"
        gap={pxToRem(8)}
        {...formProps}
      >
        <ChakraDatePicker.Root
          ref={ref}
          id={pickerId}
          disabled={disabled}
          invalid={isInvalid}
          {...props}
        >
          {children}
        </ChakraDatePicker.Root>
      </Field.Root>
    </DatePickerFieldContext.Provider>
  )
})

const DatePickerLabel = forwardRef<HTMLLabelElement, DatePickerLabelProps>(function DatePickerLabel(
  { children, fontSize, ...props },
  ref
) {
  const { labelSize } = useDatePickerFieldContext('DatePicker.Label')
  const resolvedFontSize = fontSize ?? labelSize

  return (
    <ChakraDatePicker.Label asChild>
      <chakra.label
        ref={ref}
        {...govukFont(resolvedFontSize)}
        fontWeight="700"
        color="fg"
        marginBottom={0}
        {...props}
      >
        {children}
      </chakra.label>
    </ChakraDatePicker.Label>
  )
})

const DatePickerHint = forwardRef<HTMLParagraphElement, DatePickerHintProps>(
  function DatePickerHint({ children, id, ...props }, ref) {
    const { describedBy } = useDatePickerFieldContext('DatePicker.Hint')
    const resolvedId = id ?? describedBy?.split(' ').find((value) => value.endsWith('-hint'))

    return (
      <Text ref={ref} id={resolvedId} fontSize={19} color="fg.muted" mb={0} {...props}>
        {children}
      </Text>
    )
  }
)

const DatePickerError = forwardRef<HTMLParagraphElement, DatePickerErrorProps>(
  function DatePickerError({ children, id, ...props }, ref) {
    const { describedBy, invalid } = useDatePickerFieldContext('DatePicker.Error')

    if (!invalid) {
      return null
    }

    const resolvedId = id ?? describedBy?.split(' ').find((value) => value.endsWith('-error'))

    return (
      <Text
        ref={ref}
        id={resolvedId}
        fontSize={19}
        color="fg.error"
        fontWeight="700"
        mb={0}
        {...props}
      >
        {`Error: ${children}`}
      </Text>
    )
  }
)

const DatePickerControl = forwardRef<HTMLDivElement, DatePickerControlProps>(
  function DatePickerControl(props, ref) {
    return <ChakraDatePicker.Control ref={ref} {...props} />
  }
)

const DatePickerTrigger = forwardRef<HTMLButtonElement, DatePickerTriggerProps>(
  function DatePickerTrigger({ children, ...props }, ref) {
    const { describedBy, disabled, invalid, width } =
      useDatePickerFieldContext('DatePicker.Trigger')

    return (
      <ChakraDatePicker.Trigger
        ref={ref}
        aria-describedby={describedBy}
        disabled={disabled}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={pxToRem(8)}
        w={width === 'full' ? '100%' : 'auto'}
        minW={pxToRem(220)}
        maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
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
        _hover={{ borderColor: invalid ? 'fg.error' : 'border.input' }}
        _focusVisible={getFieldFocusStyles({
          borderColor: invalid ? 'fg.error' : 'border.input',
        })}
        _focus={getFieldFocusStyles({
          borderColor: invalid ? 'fg.error' : 'border.input',
        })}
        _invalid={{ borderColor: 'fg.error' }}
        _disabled={{
          opacity: 1,
          cursor: 'not-allowed',
          color: 'fg.disabled',
          bg: 'bg.disabled',
        }}
        {...props}
      >
        {children ?? (
          <>
            <DatePickerValueText placeholder="Select date" />
            <Box as="span" aria-hidden="true" color="fg.muted">
              <RiCalendarLine />
            </Box>
          </>
        )}
      </ChakraDatePicker.Trigger>
    )
  }
)

const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  function DatePickerInput(props, ref) {
    const { describedBy, disabled, invalid, width } = useDatePickerFieldContext('DatePicker.Input')

    return (
      <ChakraDatePicker.Input
        ref={ref}
        aria-describedby={describedBy}
        disabled={disabled}
        w={width === 'full' ? '100%' : 'auto'}
        minW={pxToRem(220)}
        maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
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
        _hover={{ borderColor: invalid ? 'fg.error' : 'border.input' }}
        _focusVisible={getFieldFocusStyles({
          borderColor: invalid ? 'fg.error' : 'border.input',
        })}
        _focus={getFieldFocusStyles({
          borderColor: invalid ? 'fg.error' : 'border.input',
        })}
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
  }
)

const DatePickerValueText = forwardRef<HTMLSpanElement, DatePickerValueTextProps>(
  function DatePickerValueText(props, ref) {
    return (
      <ChakraDatePicker.ValueText
        ref={ref}
        flex="1"
        textAlign="left"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        {...props}
      />
    )
  }
)

const DatePickerIndicatorGroup = forwardRef<HTMLDivElement, DatePickerIndicatorGroupProps>(
  function DatePickerIndicatorGroup(props, ref) {
    return <ChakraDatePicker.IndicatorGroup ref={ref} {...props} />
  }
)

const DatePickerClearTrigger = forwardRef<HTMLButtonElement, DatePickerClearTriggerProps>(
  function DatePickerClearTrigger(props, ref) {
    return <ChakraDatePicker.ClearTrigger ref={ref} {...props} />
  }
)

const DatePickerPositioner = forwardRef<HTMLDivElement, DatePickerPositionerProps>(
  function DatePickerPositioner(props, ref) {
    return <ChakraDatePicker.Positioner ref={ref} {...props} />
  }
)

const DatePickerContent = forwardRef<HTMLDivElement, DatePickerContentProps>(
  function DatePickerContent(props, ref) {
    return (
      <ChakraDatePicker.Content
        ref={ref}
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor="border.input"
        bg="bg"
        boxShadow="none"
        p={pxToRem(8)}
        {...props}
      />
    )
  }
)

const DatePickerHeader = ChakraDatePicker.Header
const DatePickerPresetTrigger = ChakraDatePicker.PresetTrigger
const DatePickerPrevTrigger = ChakraDatePicker.PrevTrigger
const DatePickerNextTrigger = ChakraDatePicker.NextTrigger
const DatePickerRangeText = ChakraDatePicker.RangeText
const DatePickerViewTrigger = ChakraDatePicker.ViewTrigger
const DatePickerMonthSelect = ChakraDatePicker.MonthSelect
const DatePickerYearSelect = ChakraDatePicker.YearSelect
const DatePickerView = ChakraDatePicker.View
const DatePickerDayTable = ChakraDatePicker.DayTable
const DatePickerMonthTable = ChakraDatePicker.MonthTable
const DatePickerYearTable = ChakraDatePicker.YearTable

export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  Label: DatePickerLabel,
  Hint: DatePickerHint,
  Error: DatePickerError,
  Control: DatePickerControl,
  Trigger: DatePickerTrigger,
  Input: DatePickerInput,
  ValueText: DatePickerValueText,
  IndicatorGroup: DatePickerIndicatorGroup,
  ClearTrigger: DatePickerClearTrigger,
  Positioner: DatePickerPositioner,
  Content: DatePickerContent,
  Header: DatePickerHeader,
  PresetTrigger: DatePickerPresetTrigger,
  PrevTrigger: DatePickerPrevTrigger,
  NextTrigger: DatePickerNextTrigger,
  RangeText: DatePickerRangeText,
  ViewTrigger: DatePickerViewTrigger,
  MonthSelect: DatePickerMonthSelect,
  YearSelect: DatePickerYearSelect,
  View: DatePickerView,
  DayTable: DatePickerDayTable,
  MonthTable: DatePickerMonthTable,
  YearTable: DatePickerYearTable,
})

export {
  DatePickerRoot,
  DatePickerLabel,
  DatePickerHint,
  DatePickerError,
  DatePickerControl,
  DatePickerTrigger,
  DatePickerInput,
  DatePickerValueText,
  DatePickerIndicatorGroup,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerHeader,
  DatePickerPresetTrigger,
  DatePickerPrevTrigger,
  DatePickerNextTrigger,
  DatePickerRangeText,
  DatePickerViewTrigger,
  DatePickerMonthSelect,
  DatePickerYearSelect,
  DatePickerView,
  DatePickerDayTable,
  DatePickerMonthTable,
  DatePickerYearTable,
}

export type { DateValue }
