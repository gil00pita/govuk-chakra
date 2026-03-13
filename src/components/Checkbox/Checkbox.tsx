import {
  Checkbox as ChakraCheckbox,
  Fieldset,
  type CheckboxRootProps,
  type FieldsetRootProps,
} from '@chakra-ui/react'
import React, { forwardRef, type ReactNode } from 'react'
import { Heading } from '@/components/Heading/Heading'
import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'
import { createIcon } from '@chakra-ui/react'
// ─── Types ───────────────────────────────────────────────────────────
export interface CheckboxProps extends CheckboxRootProps {
  /** Hint text displayed below the label */
  hint?: string
  size?: 'sm' | 'lg'
}

export interface CheckboxControlProps extends ChakraCheckbox.ControlProps {
  /** Use smaller checkboxes (24×24 instead of 40×40) */
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

// ─── Subcomponents ───────────────────────────────────────────────────
export const Checkbox = {
  Root: forwardRef<HTMLLabelElement, CheckboxProps>(function CheckboxRoot(
    { hint, size, children, ...props },
    ref
  ) {
    return (
      <ChakraCheckbox.Root
        ref={ref}
        className="root"
        display="flex"
        alignItems={size === 'sm' ? 'center' : 'flex-start'}
        gap={pxToRem(15)}
        py={0}
        mb={pxToRem(10)}
        cursor="pointer"
        color="fg"
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
            boxShadow: size === 'sm' ? `0 0 0 10px var(--govuk-color-hover, #cecece)` : 'none',
          },
          '& > .control > .indicator': {
            stroke: 'fg',
          },
          '&:focus > .control, &:focus-within > .control': {
            borderWidth: '4px',
            outline: '3px solid transparent',
            outlineOffset: '1px',
            boxShadow: '0 0 0 3px var(--govuk-color-focus, #fd0)',
          },
        }}
        css={{
          '&:focus > .control, &:focus-within > .control': {
            borderWidth: '4px',
            outline: '3px solid transparent',
            outlineOffset: '1px',
            boxShadow: '0 0 0 3px var(--govuk-color-focus, #fd0)',
          },

          '& .label': {
            lineHeight: size === 'sm' ? pxToRem(19) : pxToRem(41),
          },
          '& .control': {
            width: size === 'sm' ? pxToRem(20) : pxToRem(40),
            height: size === 'sm' ? pxToRem(20) : pxToRem(40),
            minWidth: size === 'sm' ? pxToRem(20) : pxToRem(40),
          },
        }}
        {...props}
      >
        {children}
      </ChakraCheckbox.Root>
    )
  }),

  Control: forwardRef<HTMLElement, CheckboxControlProps>(function CheckboxControl(
    { children, ...props },
    ref
  ) {
    return (
      <ChakraCheckbox.Control
        ref={ref}
        className="control"
        bg="common.transparent"
        borderRadius="0"
        borderColor={'common.black'}
        borderWidth="2px"
        borderStyle={'solid'}
        alignItems="flex-start"
        _dark={{
          borderColor: 'common.white',
          _checked: {
            bg: 'common.transparent',
            borderColor: 'common.white',
          },
          _hover: {
            bg: 'common.transparent',
            _checked: {
              bg: 'common.transparent',
            },
          },
        }}
        _checked={{
          borderColor: 'black',
          color: 'fg',
          bg: 'bg',
          _hover: {
            borderColor: 'black',
            bg: 'common.transparent',
          },
        }}
        _focus={{
          borderWidth: '4px',
          outline: '3px solid transparent',
          outlineOffset: '1px',
          boxShadow: ' 0 0 0 3px var(--govuk-color-focus, #fd0)',
        }}
        _disabled={{
          opacity: 0.5,
          cursor: 'not-allowed',
        }}
        _invalid={{
          borderColor: 'border.error',
        }}
        {...props}
      >
        {children ?? (
          <ChakraCheckbox.Indicator
            className="indicator"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="butt"
            strokeLinejoin="butt"
          />
        )}
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
        // py={pxToRem(7)}
        asChild
        {...props}
      >
        <Text fontSize={16}>{children}</Text>
      </ChakraCheckbox.Label>
    )
  }),

  HiddenInput: forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithRef<typeof ChakraCheckbox.HiddenInput>
  >(function CheckboxHiddenInput(props, ref) {
    return <ChakraCheckbox.HiddenInput ref={ref} className="hidden-input" {...props} />
  }),

  Indicator: forwardRef<SVGSVGElement, ChakraCheckbox.IndicatorProps>(
    function CheckboxIndicator(props, ref) {
      return (
        <ChakraCheckbox.Indicator
          ref={ref}
          className="indicator-check"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="butt"
          strokeLinejoin="butt"
          {...props}
        />
      )
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
      <Fieldset.Root
        ref={ref}
        invalid={Boolean(error)}
        className="group"
        mb={{ base: pxToRem(30), md: pxToRem(20) }}
        border={'0px solid transparent'}
        padding={0}
        paddingLeft={Boolean(error) ? pxToRem(15) : 0}
        borderLeftWidth={Boolean(error) ? pxToRem(5) : 0}
        borderLeftColor={Boolean(error) ? 'danger' : 'transparent'}
        css={{
          '& .root:last-of-type': {
            mb: 0,
          },
        }}
        {...props}
      >
        <Fieldset.Legend
          // fontSize={legendAsHeading ? '1.5rem' : '1.1875rem'}
          // fontWeight={legendAsHeading ? 'bold' : 'normal'}
          // lineHeight={legendAsHeading ? '1.875rem' : '1.5625rem'}
          mb={hint || error ? 1 : 3}
          float="left"
          width="100%"
          asChild
        >
          {legendAsHeading ? (
            <Heading as="h1" size={36}>
              {legend}
            </Heading>
          ) : (
            <Text fontSize={24}>{legend}</Text>
          )}
        </Fieldset.Legend>

        {hint ? (
          <Text fontSize={19} color="fg.muted" mb={3}>
            {hint}
          </Text>
        ) : null}

        {error ? (
          <Fieldset.ErrorText asChild mb={3}>
            <Text fontSize={19} fontWeight={'700'} color="danger">
              {error}
            </Text>
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
