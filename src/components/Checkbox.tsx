import {
  Checkbox as ChakraCheckbox,
  Fieldset,
  type CheckboxRootProps,
  type FieldsetRootProps,
} from '@chakra-ui/react'
import React, { forwardRef, type ReactNode } from 'react'
import { Text } from './Text'

// ─── Types ───────────────────────────────────────────────────────────
export interface CheckboxProps extends CheckboxRootProps {
  /** Hint text displayed below the label */
  hint?: string
}

export interface CheckboxControlProps extends ChakraCheckbox.ControlProps {
  /** Use smaller checkboxes (24×24 instead of 40×40) */
  size?: 'sm' | 'lg'
}

export interface CheckboxGroupProps extends Omit<FieldsetRootProps, 'children'> {
  /** Legend / question text */
  legend: string
  /** Whether the legend should be visually styled as page heading */
  legendAsHeading?: boolean
  /** Hint text below the legend */
  hint?: string
  /** Error message */
  error?: string
  children: ReactNode
}

// ─── GOV.UK Styles ───────────────────────────────────────────────────
const govukCheckboxStyles = {
  control: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
    border: '2px solid',
    borderColor: 'black',
    borderRadius: '0',
    bg: 'fg',
    _dark: {
      _checked: {
        bg: 'white',
        borderColor: 'white',
      },
    },

    _checked: {
      bg: 'black',
      borderColor: 'black',
      color: 'fg',
      _hover: {
        bg: 'black',
        borderColor: 'black',
      },
    },
    _focus: {
      boxShadow:
        '0 0 0 3px var(--chakra-colors-focus), 0 0 0 7px var(--chakra-colors-common-black)',
      outline: 'none',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    _invalid: {
      borderColor: 'red.500',
    },
  },
  small: {
    width: '24px',
    height: '24px',
    minWidth: '24px',
  },
}

// ─── Subcomponents ───────────────────────────────────────────────────
export const Checkbox = {
  Root: forwardRef<HTMLLabelElement, CheckboxProps>(function CheckboxRoot(
    { hint, children, ...props },
    ref
  ) {
    return (
      <ChakraCheckbox.Root
        ref={ref}
        display="flex"
        gap={3}
        py={2}
        cursor="pointer"
        color="fg"
        {...props}
        _dark={{
          _hover: {
            '& > .control': {
              bg: 'common.transparent',
              borderColor: 'common.white',
            },
          },
        }}
        _hover={{
          '& > .control': {
            bg: 'common.transparent',
            borderColor: 'common.black',
          },
          '& > .control > .indicator': {
            stroke: 'fg',
          },
        }}
      >
        {children}
      </ChakraCheckbox.Root>
    )
  }),

  Control: forwardRef<HTMLElement, CheckboxControlProps>(function CheckboxControl(
    { size, children, ...props },
    ref
  ) {
    const controlSize =
      size === 'sm'
        ? { ...govukCheckboxStyles.control, ...govukCheckboxStyles.small }
        : govukCheckboxStyles.control

    return (
      <ChakraCheckbox.Control
        {...props}
        ref={ref}
        css={controlSize}
        className="control"
        bg="common.transparent"
        borderColor={'common.black'}
        _dark={{
          borderColor: 'common.white',
          _checked: {
            bg: 'common.transparent',
            borderColor: 'common.white',
          },
        }}
        bg={'bg'}
        _checked={{
          bg: 'bg',
        }}
      >
        {children ?? <ChakraCheckbox.Indicator className="indicator" stroke={'fg'} />}
      </ChakraCheckbox.Control>
    )
  }),

  Label: forwardRef<HTMLSpanElement, ChakraCheckbox.LabelProps>(function CheckboxLabel(
    { children, ...props },
    ref
  ) {
    return (
      <ChakraCheckbox.Label
        ref={ref}
        color="fg"
        cursor="pointer"
        className="label"
        {...props}
        asChild
      >
        <Text fontSize={16}>{children}</Text>
      </ChakraCheckbox.Label>
    )
  }),

  HiddenInput: forwardRef<HTMLInputElement, ChakraCheckbox.HiddenInputProps>(
    function CheckboxHiddenInput(props, ref) {
      return <ChakraCheckbox.HiddenInput ref={ref} className="hidden-input" {...props} />
    }
  ),

  Indicator: forwardRef<HTMLDivElement, ChakraCheckbox.IndicatorProps>(
    function CheckboxIndicator(props, ref) {
      return <ChakraCheckbox.Indicator ref={ref} className="indicator" {...props} />
    }
  ),

  Hint: forwardRef<HTMLParagraphElement, React.ComponentProps<typeof Text>>(
    function CheckboxHint(props, ref) {
      return (
        <Text
          ref={ref}
          fontSize={16}
          color="fg.muted"
          className="hint"
          mt={1}
          css={{ '[data-disabled] &': { opacity: 0.5 } }}
          {...props}
        />
      )
    }
  ),

  Group: forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(function CheckboxGroup(
    { legend, legendAsHeading = false, hint, error, children, ...props },
    ref
  ) {
    return (
      <Fieldset.Root ref={ref} invalid={Boolean(error)} className="group" {...props}>
        <Fieldset.Legend
          fontSize={legendAsHeading ? '1.5rem' : '1.1875rem'}
          fontWeight={legendAsHeading ? 'bold' : 'normal'}
          lineHeight={legendAsHeading ? '1.875rem' : '1.5625rem'}
          mb={hint || error ? 1 : 3}
        >
          {legend}
        </Fieldset.Legend>

        {hint ? (
          <Text fontSize="1rem" color="fg.muted" mb={3}>
            {hint}
          </Text>
        ) : null}

        {error ? (
          <Fieldset.ErrorText
            fontSize="1.1875rem"
            fontWeight="bold"
            color="danger"
            borderLeft="4px solid"
            borderColor="danger"
            pl={3}
            mb={3}
          >
            {error}
          </Fieldset.ErrorText>
        ) : null}

        <Fieldset.Content display="flex" flexDirection="column" gap={0}>
          {children}
        </Fieldset.Content>
      </Fieldset.Root>
    )
  }),
}

export const CheckboxRoot = Checkbox.Root
export const CheckboxControl = Checkbox.Control
export const CheckboxLabel = Checkbox.Label
export const CheckboxHiddenInput = Checkbox.HiddenInput
export const CheckboxIndicator = Checkbox.Indicator
export const CheckboxHint = Checkbox.Hint
export const CheckboxGroup = Checkbox.Group
