import {
  Field,
  NativeSelect,
  Select as ChakraSelect,
  chakra,
  type FieldRootProps,
  type ListCollection,
  type SelectClearTriggerProps as ChakraSelectClearTriggerProps,
  type SelectContentProps as ChakraSelectContentProps,
  type SelectControlProps as ChakraSelectControlProps,
  type SelectIndicatorGroupProps as ChakraSelectIndicatorGroupProps,
  type SelectIndicatorProps as ChakraSelectIndicatorProps,
  type SelectItemGroupLabelProps as ChakraSelectItemGroupLabelProps,
  type SelectItemGroupProps as ChakraSelectItemGroupProps,
  type SelectItemIndicatorProps as ChakraSelectItemIndicatorProps,
  type SelectItemProps as ChakraSelectItemProps,
  type SelectItemTextProps as ChakraSelectItemTextProps,
  type SelectLabelProps as ChakraSelectLabelProps,
  type SelectPositionerProps as ChakraSelectPositionerProps,
  type SelectRootProps as ChakraSelectRootProps,
  type SelectTriggerProps as ChakraSelectTriggerProps,
  type SelectValueChangeDetails as ChakraSelectValueChangeDetails,
  type SelectValueTextProps as ChakraSelectValueTextProps,
} from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  isValidElement,
  Children,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react'

import { Text } from '@/components/Text'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'
import { govukFont, pxToRem } from '@/utils'

export type SelectWidth = 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'

export interface SelectItemData {
  label: ReactNode
  value: string
  disabled?: boolean
}

const WIDTH_MAX: Record<Exclude<SelectWidth, 'full'>, string> = {
  '30': '59ex',
  '20': '41ex',
  '10': '23ex',
  '5': '10.8ex',
  '4': '9ex',
  '3': '7.2ex',
  '2': '5.4ex',
}

interface SelectFieldContextValue {
  collection: SelectCollection
  describedBy?: string
  disabled?: boolean
  invalid?: boolean
  labelSize: 19 | 24
  native?: boolean
  required?: boolean
  selectId: string
}

const SelectFieldContext = createContext<SelectFieldContextValue | null>(null)

const useSelectFieldContext = (componentName: string) => {
  const context = useContext(SelectFieldContext)

  if (!context) {
    throw new Error(`${componentName} must be used within Select.Root`)
  }

  return context
}

export interface SelectRootProps extends Omit<
  ChakraSelectRootProps<SelectItemData>,
  'disabled' | 'invalid'
> {
  children: ReactNode
  collection: SelectCollection
  disabled?: boolean
  formProps?: Omit<FieldRootProps, 'children' | 'disabled' | 'invalid' | 'required'>
  invalid?: boolean
  labelSize?: 19 | 24
  native?: boolean
  required?: boolean
  width?: SelectWidth
  w?: SelectWidth
}

export interface SelectLabelProps extends Omit<ChakraSelectLabelProps, 'children'> {
  children: ReactNode
  fontSize?: 19 | 24
}

export interface SelectHintProps extends ComponentPropsWithoutRef<typeof Text> {
  id?: string
}

export interface SelectErrorProps extends ComponentPropsWithoutRef<typeof Text> {
  id?: string
}

export type SelectHiddenSelectProps = ComponentPropsWithoutRef<typeof ChakraSelect.HiddenSelect>
export type SelectControlProps = ChakraSelectControlProps
export type SelectTriggerProps = ChakraSelectTriggerProps
export type SelectValueTextProps = ChakraSelectValueTextProps
export type SelectIndicatorGroupProps = ChakraSelectIndicatorGroupProps
export type SelectIndicatorProps = ChakraSelectIndicatorProps
export type SelectPositionerProps = ChakraSelectPositionerProps
export type SelectContentProps = ChakraSelectContentProps
export type SelectClearTriggerProps = ChakraSelectClearTriggerProps
export type SelectItemGroupProps = ChakraSelectItemGroupProps
export type SelectItemGroupLabelProps = ChakraSelectItemGroupLabelProps
export interface SelectItemProps extends Omit<ChakraSelectItemProps, 'item' | 'children'> {
  children?: ReactNode
  item: SelectItemData
}
export type SelectItemTextProps = ChakraSelectItemTextProps
export type SelectItemIndicatorProps = ChakraSelectItemIndicatorProps
export type SelectCollection = ListCollection<SelectItemData>
export type SelectValueChangeDetails = ChakraSelectValueChangeDetails<SelectItemData>

function findPlaceholder(children: ReactNode): string | undefined {
  let placeholder: string | undefined

  Children.forEach(children, (child) => {
    if (placeholder || !isValidElement(child)) {
      return
    }

    const element = child as ReactElement<{ children?: ReactNode; placeholder?: string }>

    if (typeof element.props.placeholder === 'string') {
      placeholder = element.props.placeholder
      return
    }

    if (element.props.children) {
      placeholder = findPlaceholder(element.props.children)
    }
  })

  return placeholder
}

const SelectRoot = forwardRef<HTMLDivElement, SelectRootProps>(function SelectRoot(
  {
    collection,
    id,
    width = 'full',
    labelSize = 19,
    native = false,
    required,
    disabled,
    invalid,
    formProps,
    positioning,
    children,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const selectId = id ?? `govuk-select-${generatedId}`
  const hintId = `${selectId}-hint`
  const errorId = `${selectId}-error`
  const isInvalid = Boolean(invalid)
  const placeholder = findPlaceholder(children)
  const describedBy =
    [hintId, isInvalid ? errorId : undefined, props['aria-describedby']]
      .filter(Boolean)
      .join(' ') || undefined
  const currentValue = props.value
  const defaultValue = props.defaultValue

  const nativeValue =
    currentValue === undefined ? undefined : props.multiple ? currentValue : (currentValue[0] ?? '')
  const nativeDefaultValue =
    defaultValue === undefined ? undefined : props.multiple ? defaultValue : (defaultValue[0] ?? '')

  return (
    <SelectFieldContext.Provider
      value={{
        collection,
        describedBy,
        disabled,
        invalid: isInvalid,
        labelSize,
        native,
        required,
        selectId,
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
        {native ? (
          <>
            {children}
            <NativeSelect.Root
              ref={ref}
              disabled={disabled}
              invalid={isInvalid}
              width={width === 'full' ? '100%' : 'auto'}
              minW={pxToRem(220)}
              maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
            >
              <NativeSelect.Field
                id={selectId}
                aria-describedby={describedBy}
                multiple={props.multiple}
                name={props.name}
                value={nativeValue}
                defaultValue={nativeDefaultValue}
                onChange={(event) => {
                  const value = props.multiple
                    ? Array.from(event.currentTarget.selectedOptions, (option) => option.value)
                    : [event.currentTarget.value]

                  props.onValueChange?.({
                    value,
                    items: collection.items.filter((item) => value.includes(item.value)),
                  } as SelectValueChangeDetails)
                }}
                borderRadius="0"
                borderWidth={pxToRem(2)}
                borderColor={isInvalid ? 'fg.error' : 'border.input'}
                fontFamily="body"
                bg="transparent"
                color="fg"
                fontSize={pxToRem(19)}
                lineHeight={pxToRem(25)}
                px={pxToRem(8)}
                py={pxToRem(5)}
                h={props.multiple ? 'auto' : pxToRem(40)}
                minH={pxToRem(40)}
                _placeholder={{ color: 'fg.muted', opacity: 1 }}
                _hover={{ borderColor: isInvalid ? 'fg.error' : 'border.input' }}
                _focusVisible={getFieldFocusStyles({
                  borderColor: isInvalid ? 'fg.error' : 'border.input',
                })}
                _focus={getFieldFocusStyles({
                  borderColor: isInvalid ? 'fg.error' : 'border.input',
                })}
                _invalid={{ borderColor: 'fg.error' }}
                _disabled={{
                  opacity: 1,
                  cursor: 'not-allowed',
                  color: 'fg.disabled',
                  bg: 'bg.disabled',
                  borderColor: 'border.disabled',
                }}
              >
                {!props.multiple && placeholder ? <option value="">{placeholder}</option> : null}
                {collection.items.map((item) => (
                  <option key={item.value} value={item.value} disabled={item.disabled}>
                    {typeof item.label === 'string' ? item.label : item.value}
                  </option>
                ))}
              </NativeSelect.Field>
              {!props.multiple ? <NativeSelect.Indicator /> : null}
            </NativeSelect.Root>
          </>
        ) : (
          <ChakraSelect.Root
            ref={ref}
            collection={collection}
            disabled={disabled}
            invalid={isInvalid}
            positioning={{ sameWidth: true, ...positioning }}
            width={width === 'full' ? '100%' : 'auto'}
            minW={pxToRem(220)}
            maxW={width === 'full' ? undefined : WIDTH_MAX[width]}
            {...props}
          >
            {children}
          </ChakraSelect.Root>
        )}
      </Field.Root>
    </SelectFieldContext.Provider>
  )
})

const SelectLabel = forwardRef<HTMLLabelElement, SelectLabelProps>(function SelectLabel(
  { fontSize, children, ...props },
  ref
) {
  const field = useSelectFieldContext('Select.Label')
  const resolvedFontSize = fontSize ?? field.labelSize

  if (field.native) {
    return (
      <chakra.label
        ref={ref}
        htmlFor={field.selectId}
        {...govukFont(resolvedFontSize)}
        fontWeight="700"
        color="fg"
        mb={0}
        {...props}
      >
        {children}
      </chakra.label>
    )
  }

  return (
    <ChakraSelect.Label
      ref={ref}
      htmlFor={field.selectId}
      {...govukFont(resolvedFontSize)}
      fontWeight="700"
      color="fg"
      mb={0}
      {...props}
    >
      {children}
    </ChakraSelect.Label>
  )
})

const SelectHint = forwardRef<HTMLDivElement, SelectHintProps>(function SelectHint(props, ref) {
  const field = useSelectFieldContext('Select.Hint')

  return (
    <Field.HelperText ref={ref} id={props.id ?? `${field.selectId}-hint`} asChild>
      <Text fontSize={19} color="fg.muted" mb={0} {...props} />
    </Field.HelperText>
  )
})

const SelectError = forwardRef<HTMLDivElement, SelectErrorProps>(function SelectError(props, ref) {
  const field = useSelectFieldContext('Select.Error')

  return (
    <Field.ErrorText ref={ref} id={props.id ?? `${field.selectId}-error`} asChild>
      <Text fontSize={19} color="fg.error" fontWeight="700" mb={0} {...props}>
        {`Error: ${props.children}`}
      </Text>
    </Field.ErrorText>
  )
})

const SelectHiddenSelect = forwardRef<HTMLSelectElement, SelectHiddenSelectProps>(
  function SelectHiddenSelect(props, ref) {
    const field = useSelectFieldContext('Select.HiddenSelect')

    if (field.native) {
      return null
    }

    return (
      <ChakraSelect.HiddenSelect
        ref={ref}
        id={field.selectId}
        aria-describedby={field.describedBy}
        disabled={field.disabled}
        required={field.required}
        {...props}
      />
    )
  }
)

const SelectControl = forwardRef<HTMLDivElement, SelectControlProps>(
  function SelectControl(props, ref) {
    const field = useSelectFieldContext('Select.Control')

    if (field.native) {
      return null
    }

    return <ChakraSelect.Control ref={ref} width="100%" {...props} />
  }
)

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(function SelectTrigger(
  { children, ...props },
  ref
) {
  const field = useSelectFieldContext('Select.Trigger')

  if (field.native) {
    return null
  }

  return (
    <ChakraSelect.Trigger
      ref={ref}
      aria-describedby={field.describedBy}
      borderRadius="0"
      borderWidth={pxToRem(2)}
      borderColor={field.invalid ? 'fg.error' : 'border.input'}
      bg="transparent"
      color="fg"
      fontFamily="body"
      fontSize={pxToRem(19)}
      lineHeight={pxToRem(25)}
      ps={pxToRem(8)}
      pe={pxToRem(40)}
      py={pxToRem(5)}
      h={pxToRem(40)}
      minH={pxToRem(40)}
      width="100%"
      justifyContent="space-between"
      textAlign="left"
      _hover={{ borderColor: field.invalid ? 'fg.error' : 'border.input' }}
      _focusVisible={getFieldFocusStyles({
        borderColor: field.invalid ? 'fg.error' : 'border.input',
      })}
      _focus={getFieldFocusStyles({
        borderColor: field.invalid ? 'fg.error' : 'border.input',
      })}
      _invalid={{ borderColor: 'fg.error' }}
      _disabled={{
        opacity: 1,
        cursor: 'not-allowed',
        color: 'fg.disabled',
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
      }}
      {...props}
    >
      {children}
      <ChakraSelect.IndicatorGroup>
        <ChakraSelect.Indicator
          color={field.disabled ? 'fg.disabled' : 'fg'}
          fontSize={pxToRem(18)}
        />
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Trigger>
  )
})

const SelectValueText = forwardRef<HTMLSpanElement, SelectValueTextProps>(
  function SelectValueText(props, ref) {
    const field = useSelectFieldContext('Select.ValueText')

    if (field.native) {
      return null
    }

    return <ChakraSelect.ValueText ref={ref} color="fg" {...props} />
  }
)

const SelectIndicatorGroup = forwardRef<HTMLDivElement, SelectIndicatorGroupProps>(
  function SelectIndicatorGroup(props, ref) {
    const field = useSelectFieldContext('Select.IndicatorGroup')

    if (field.native) {
      return null
    }

    return <ChakraSelect.IndicatorGroup ref={ref} {...props} />
  }
)

const SelectIndicator = forwardRef<HTMLDivElement, SelectIndicatorProps>(
  function SelectIndicator(props, ref) {
    const field = useSelectFieldContext('Select.Indicator')

    if (field.native) {
      return null
    }

    return <ChakraSelect.Indicator ref={ref} {...props} />
  }
)

const SelectPositioner = forwardRef<HTMLDivElement, SelectPositionerProps>(
  function SelectPositioner(props, ref) {
    const field = useSelectFieldContext('Select.Positioner')

    if (field.native) {
      return null
    }

    return <ChakraSelect.Positioner ref={ref} {...props} />
  }
)

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  function SelectContent(props, ref) {
    const field = useSelectFieldContext('Select.Content')

    if (field.native) {
      return null
    }

    return (
      <ChakraSelect.Content
        ref={ref}
        borderRadius="0"
        borderWidth={pxToRem(2)}
        borderColor="border.input"
        bg="bg"
        color="fg"
        boxShadow="md"
        py={0}
        px={0}
        {...props}
      />
    )
  }
)

const SelectClearTrigger = forwardRef<HTMLButtonElement, SelectClearTriggerProps>(
  function SelectClearTrigger(props, ref) {
    const field = useSelectFieldContext('Select.ClearTrigger')

    if (field.native) {
      return null
    }

    return <ChakraSelect.ClearTrigger ref={ref} {...props} />
  }
)

const SelectItemGroup = forwardRef<HTMLDivElement, SelectItemGroupProps>(
  function SelectItemGroup(props, ref) {
    const field = useSelectFieldContext('Select.ItemGroup')

    if (field.native) {
      return null
    }

    return <ChakraSelect.ItemGroup ref={ref} {...props} />
  }
)

const SelectItemGroupLabel = forwardRef<HTMLDivElement, SelectItemGroupLabelProps>(
  function SelectItemGroupLabel(props, ref) {
    const field = useSelectFieldContext('Select.ItemGroupLabel')

    if (field.native) {
      return null
    }

    return (
      <ChakraSelect.ItemGroupLabel
        ref={ref}
        px={pxToRem(12)}
        py={pxToRem(8)}
        fontWeight="700"
        color="fg.muted"
        {...props}
      />
    )
  }
)

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem(
  { item, children, ...props },
  ref
) {
  const field = useSelectFieldContext('Select.Item')

  if (field.native) {
    return null
  }

  return (
    <ChakraSelect.Item
      ref={ref}
      item={item}
      px={pxToRem(12)}
      py={pxToRem(8)}
      color="fg"
      cursor={item.disabled ? 'not-allowed' : 'pointer'}
      _highlighted={{ bg: 'bg.subtle' }}
      _disabled={{ color: 'fg.disabled', cursor: 'not-allowed' }}
      {...props}
    >
      {children ?? (
        <>
          <ChakraSelect.ItemText asChild>
            <Text fontSize={16}>{item.label}</Text>
          </ChakraSelect.ItemText>
          <ChakraSelect.ItemIndicator />
        </>
      )}
    </ChakraSelect.Item>
  )
})

const SelectItemText = forwardRef<HTMLDivElement, SelectItemTextProps>(
  function SelectItemText(props, ref) {
    const field = useSelectFieldContext('Select.ItemText')

    if (field.native) {
      return null
    }

    return <ChakraSelect.ItemText ref={ref} {...props} />
  }
)

const SelectItemIndicator = forwardRef<HTMLDivElement, SelectItemIndicatorProps>(
  function SelectItemIndicator(props, ref) {
    const field = useSelectFieldContext('Select.ItemIndicator')

    if (field.native) {
      return null
    }

    return <ChakraSelect.ItemIndicator ref={ref} {...props} />
  }
)

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Label: SelectLabel,
  Hint: SelectHint,
  Error: SelectError,
  HiddenSelect: SelectHiddenSelect,
  Control: SelectControl,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
  IndicatorGroup: SelectIndicatorGroup,
  Indicator: SelectIndicator,
  Positioner: SelectPositioner,
  Content: SelectContent,
  ClearTrigger: SelectClearTrigger,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
})

export {
  SelectRoot,
  SelectLabel,
  SelectHint,
  SelectError,
  SelectHiddenSelect,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectIndicatorGroup,
  SelectIndicator,
  SelectPositioner,
  SelectContent,
  SelectClearTrigger,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
}
