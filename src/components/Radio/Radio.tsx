import {
  Box,
  RadioGroup as ChakraRadioGroup,
  type RadioGroupItemControlProps,
  type RadioGroupItemProps,
  type RadioGroupItemTextProps,
  type RadioGroupRootProps,
} from '@chakra-ui/react'
import React, { forwardRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

const RadioItemPrimitive = ChakraRadioGroup.Item as React.ElementType
const RadioItemControlPrimitive = ChakraRadioGroup.ItemControl as React.ElementType
const RadioItemTextPrimitive = ChakraRadioGroup.ItemText as React.ElementType

export interface RadioRootProps extends RadioGroupRootProps {}

export interface RadioItemProps extends RadioGroupItemProps {
  children?: ReactNode
  hint?: ReactNode
}

export interface RadioControlProps extends RadioGroupItemControlProps {}

export interface RadioTextProps extends RadioGroupItemTextProps {}

export interface RadioHintProps extends React.ComponentProps<typeof Text> {}

export interface RadioGroupProps extends React.ComponentProps<typeof Box> {
  legend: string
  legendAsHeading?: boolean
  hint?: ReactNode
  error?: ReactNode
  children: ReactNode
}

export const Radio = {
  Root: forwardRef<HTMLDivElement, RadioRootProps>(function RadioRoot(props, ref) {
    return (
      <ChakraRadioGroup.Root ref={ref} display="flex" flexDirection="column" gap={0} {...props} />
    )
  }),

  Item: forwardRef<HTMLDivElement, RadioItemProps>(function RadioItem(
    { hint, children, ...props },
    ref
  ) {
    return (
      <RadioItemPrimitive
        ref={ref}
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        columnGap={pxToRem(15)}
        rowGap={0}
        py={0}
        mb={pxToRem(10)}
        cursor="pointer"
        color="fg"
        data-govuk-radio-item=""
        _hover={{
          '& [data-govuk-radio-control]': {
            borderColor: 'common.black',
            boxShadow: `0 0 0 10px var(--govuk-color-hover, #cecece)`,
          },
        }}
        {...props}
      >
        {children}
        {hint ? (
          <Box flexBasis="100%" pl={pxToRem(55)}>
            <Radio.Hint>{hint}</Radio.Hint>
          </Box>
        ) : null}
      </RadioItemPrimitive>
    )
  }),

  ItemHiddenInput: forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithRef<typeof ChakraRadioGroup.ItemHiddenInput>
  >(function RadioItemHiddenInput(props, ref) {
    return <ChakraRadioGroup.ItemHiddenInput ref={ref} {...props} />
  }),

  ItemControl: forwardRef<HTMLDivElement, RadioControlProps>(function RadioControl(props, ref) {
    return (
      <RadioItemControlPrimitive
        ref={ref}
        data-govuk-radio-control=""
        bg="common.white"
        borderRadius="full"
        borderColor="common.black"
        borderWidth="2px"
        borderStyle="solid"
        width={pxToRem(40)}
        height={pxToRem(40)}
        minWidth={pxToRem(40)}
        position="relative"
        _focus={{
          outline: '3px solid transparent',
          outlineOffset: '0',
          boxShadow: '0 0 0 4px var(--govuk-color-focus, #fd0)',
        }}
        _disabled={{
          opacity: 0.5,
          cursor: 'not-allowed',
        }}
        _invalid={{
          borderColor: 'red.500',
        }}
        {...props}
      />
    )
  }),

  ItemIndicator: forwardRef<
    HTMLSpanElement,
    React.ComponentProps<typeof ChakraRadioGroup.ItemIndicator>
  >(function RadioIndicator(props, ref) {
    return (
      <ChakraRadioGroup.ItemIndicator
        ref={ref}
        className="check-indicator"
        bg="transparent"
        borderRadius="full"
        borderColor="transparent"
        borderWidth={0}
        width={pxToRem(18)}
        height={pxToRem(18)}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        transition="background-color 0.2s ease, border-color 0.2s ease"
        // _selected={{
        //   bg: 'common.black',
        //   borderColor: 'common.black',
        // }}
        css={{
          '&[data-state=checked]': {
            bg: 'common.black',
            color: 'common.black',
          },
          '[data-state=checked] &': {
            bg: 'common.black',
            color: 'common.black',
          },
        }}
        {...props}
      />
    )
  }),

  ItemText: forwardRef<HTMLSpanElement, RadioTextProps>(function RadioText(props, ref) {
    return (
      <RadioItemTextPrimitive
        ref={ref}
        color="fg"
        cursor="pointer"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(40)}
        {...props}
      />
    )
  }),

  Hint: forwardRef<HTMLParagraphElement, RadioHintProps>(function RadioHint(props, ref) {
    return (
      <Text
        ref={ref}
        fontSize={19}
        color="fg.muted"
        mt={pxToRem(-4)}
        mb={0}
        css={{ '[data-disabled] &': { opacity: 0.5 } }}
        {...props}
      />
    )
  }),

  Group: forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
    { legend, legendAsHeading = false, hint, error, children, ...props },
    ref
  ) {
    return (
      <Box
        ref={ref}
        as="fieldset"
        mb={{ base: pxToRem(30), md: pxToRem(20) }}
        border="0px solid transparent"
        padding={0}
        paddingLeft={Boolean(error) ? pxToRem(15) : 0}
        borderLeftWidth={Boolean(error) ? pxToRem(5) : 0}
        borderLeftColor={Boolean(error) ? 'danger' : 'transparent'}
        css={{
          '& [data-govuk-radio-item]:last-of-type': {
            mb: 0,
          },
        }}
        {...props}
      >
        <Box as="legend" mb={hint || error ? 1 : 3} float="left" width="100%">
          {legendAsHeading ? (
            <Heading as="h1" fontWeight={700} size={36}>
              {legend}
            </Heading>
          ) : (
            <Text fontSize={24}>{legend}</Text>
          )}
        </Box>

        {hint ? (
          <Text fontSize={19} color="fg.muted" mb={3} clear="left">
            {hint}
          </Text>
        ) : null}

        {error ? (
          <Text
            fontSize={19}
            fontWeight="700"
            color="danger"
            mb={3}
            clear={!hint ? 'left' : undefined}
          >
            {error}
          </Text>
        ) : null}

        <Box
          display="flex"
          flexDirection="column"
          gap={0}
          clear={!hint && !error ? 'left' : undefined}
        >
          {children}
        </Box>
      </Box>
    )
  }),
}

export const RadioRoot = Radio.Root
export const RadioItem = Radio.Item
export const RadioItemHiddenInput = Radio.ItemHiddenInput
export const RadioItemControl = Radio.ItemControl
export const RadioItemIndicator = Radio.ItemIndicator
export const RadioItemText = Radio.ItemText
export const RadioHint = Radio.Hint
export const RadioGroup = Radio.Group
