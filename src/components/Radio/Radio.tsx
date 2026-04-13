import {
  Box,
  RadioGroup as ChakraRadioGroup,
  type RadioGroupItemControlProps,
  type RadioGroupItemProps,
  type RadioGroupItemTextProps,
  type RadioGroupRootProps,
} from '@chakra-ui/react'
import React, { createContext, forwardRef, useContext, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

const SMALLER_RADIO_CONTROL_SIZE = pxToRem(20)
const DEFAULT_RADIO_CONTROL_SIZE = pxToRem(40)
const SMALLER_RADIO_INDICATOR_SIZE = pxToRem(10)
const DEFAULT_RADIO_INDICATOR_SIZE = pxToRem(18)
const SMALLER_RADIO_HINT_OFFSET = pxToRem(35)
const DEFAULT_RADIO_HINT_OFFSET = pxToRem(55)

const RadioSizeContext = createContext({ smaller: false })

function useRadioSize() {
  return useContext(RadioSizeContext)
}

const RadioItemPrimitive = ChakraRadioGroup.Item as React.ElementType
const RadioItemControlPrimitive = ChakraRadioGroup.ItemControl as React.ElementType
const RadioItemTextPrimitive = ChakraRadioGroup.ItemText as React.ElementType

export interface RadioRootProps extends RadioGroupRootProps {
  smaller?: boolean
}

export interface RadioItemProps extends RadioGroupItemProps {
  children?: ReactNode
  hint?: ReactNode
}

export type RadioControlProps = RadioGroupItemControlProps

export type RadioTextProps = RadioGroupItemTextProps

export type RadioHintProps = React.ComponentProps<typeof Text>

export interface RadioGroupProps extends React.ComponentProps<typeof Box> {
  legend: string
  legendAsHeading?: boolean
  hint?: ReactNode
  error?: ReactNode
  children: ReactNode
}

type RadioItemIndicatorComponent = React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof ChakraRadioGroup.ItemIndicator> &
    React.RefAttributes<HTMLSpanElement>
>

interface RadioComponents {
  Root: typeof RadioRoot
  Item: typeof RadioItem
  ItemHiddenInput: typeof RadioItemHiddenInput
  ItemControl: typeof RadioItemControl
  ItemIndicator: typeof RadioItemIndicator
  ItemText: typeof RadioItemText
  Hint: typeof RadioHint
  Group: typeof RadioGroup
}

const RadioRoot = forwardRef<HTMLDivElement, RadioRootProps>(function RadioRoot(props, ref) {
  const { smaller = false, ...rest } = props

  return (
    <RadioSizeContext.Provider value={{ smaller }}>
      <ChakraRadioGroup.Root
        ref={ref}
        data-smaller={smaller ? '' : undefined}
        display="flex"
        flexDirection="column"
        gap={0}
        {...rest}
      />
    </RadioSizeContext.Provider>
  )
})

const RadioHint = forwardRef<HTMLParagraphElement, RadioHintProps>(function RadioHint(props, ref) {
  const { smaller } = useRadioSize()

  return (
    <Text
      ref={ref}
      fontSize={smaller ? '16px' : 19}
      color="fg.muted"
      mt={pxToRem(-4)}
      mb={0}
      css={{ '[data-disabled] &': { opacity: 0.5 } }}
      {...props}
    />
  )
})

const RadioItem = forwardRef<HTMLDivElement, RadioItemProps>(function RadioItem(
  { hint, children, ...props },
  ref
) {
  const { smaller } = useRadioSize()

  return (
    <RadioItemPrimitive
      ref={ref}
      display="flex"
      flexWrap="wrap"
      alignItems={smaller ? 'center' : 'flex-start'}
      columnGap={pxToRem(15)}
      rowGap={0}
      py={0}
      mb={pxToRem(10)}
      cursor="pointer"
      color="fg"
      data-govuk-radio-item=""
      _hover={{
        '& [data-govuk-radio-control]': {
          borderColor: 'border.input',
          boxShadow: `0 0 0 10px {colors.gray.100}`,
        },
      }}
      _dark={{
        _hover: {
          '& [data-govuk-radio-control]': {
            boxShadow: `0 0 0 10px {colors.gray.700}`,
          },
        },
      }}
      {...props}
    >
      {children}
      {hint ? (
        <Box flexBasis="100%" pl={smaller ? SMALLER_RADIO_HINT_OFFSET : DEFAULT_RADIO_HINT_OFFSET}>
          <RadioHint>{hint}</RadioHint>
        </Box>
      ) : null}
    </RadioItemPrimitive>
  )
})

const RadioItemHiddenInput = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<typeof ChakraRadioGroup.ItemHiddenInput>
>(function RadioItemHiddenInput(props, ref) {
  return <ChakraRadioGroup.ItemHiddenInput ref={ref} {...props} />
})

const RadioItemControl = forwardRef<HTMLDivElement, RadioControlProps>(
  function RadioControl(props, ref) {
    const { smaller } = useRadioSize()
    const controlSize = smaller ? SMALLER_RADIO_CONTROL_SIZE : DEFAULT_RADIO_CONTROL_SIZE

    return (
      <RadioItemControlPrimitive
        ref={ref}
        data-govuk-radio-control=""
        bgColor="transparent"
        borderRadius="full"
        borderColor="border.input"
        borderWidth="2px"
        borderStyle="solid"
        width={controlSize}
        height={controlSize}
        minWidth={controlSize}
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
  }
)

const RadioItemIndicator: RadioItemIndicatorComponent = forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof ChakraRadioGroup.ItemIndicator>
>(function RadioIndicator(props, ref) {
  const { smaller } = useRadioSize()

  return (
    <ChakraRadioGroup.ItemIndicator
      ref={ref}
      className="check-indicator"
      bgColor="transparent"
      borderRadius="full"
      borderColor="transparent"
      borderWidth={0}
      width={smaller ? SMALLER_RADIO_INDICATOR_SIZE : DEFAULT_RADIO_INDICATOR_SIZE}
      height={smaller ? SMALLER_RADIO_INDICATOR_SIZE : DEFAULT_RADIO_INDICATOR_SIZE}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      transition="background-color 0.2s ease, border-color 0.2s ease"
      css={{
        '&[data-state=checked]': {
          bg: 'border.input',
          color: 'border.input',
        },
        '[data-state=checked] &': {
          bg: 'border.input',
          color: 'border.input',
        },
      }}
      {...props}
    />
  )
})

const RadioItemText = forwardRef<HTMLSpanElement, RadioTextProps>(function RadioText(props, ref) {
  const { smaller } = useRadioSize()

  return (
    <RadioItemTextPrimitive
      ref={ref}
      color="fg"
      cursor="pointer"
      fontSize={smaller ? '16px' : pxToRem(19)}
      lineHeight={smaller ? pxToRem(20) : pxToRem(40)}
      {...props}
    />
  )
})

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
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
      paddingLeft={error ? pxToRem(15) : 0}
      borderLeftWidth={error ? pxToRem(5) : 0}
      borderLeftColor={error ? 'danger' : 'transparent'}
      w="full"
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
})

export const Radio: RadioComponents = {
  Root: RadioRoot,
  Item: RadioItem,
  ItemHiddenInput: RadioItemHiddenInput,
  ItemControl: RadioItemControl,
  ItemIndicator: RadioItemIndicator,
  ItemText: RadioItemText,
  Hint: RadioHint,
  Group: RadioGroup,
}

export {
  RadioRoot,
  RadioItem,
  RadioItemHiddenInput,
  RadioItemControl,
  RadioItemIndicator,
  RadioItemText,
  RadioHint,
  RadioGroup,
}
