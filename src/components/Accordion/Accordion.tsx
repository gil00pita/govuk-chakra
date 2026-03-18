import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionItemContent as ChakraAccordionItemContent,
  AccordionItemContentProps as ChakraAccordionItemContentProps,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionItemTrigger as ChakraAccordionItemTrigger,
  AccordionItemTriggerProps as ChakraAccordionItemTriggerProps,
  AccordionRootProps as ChakraAccordionRootProps,
  Box,
  type BoxProps,
  Stack,
  type StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  type ComponentProps,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { Link } from '@/components/Link/Link'
import { pxToRem } from '@/utils'

type AccordionValueChangeDetails = { value: string[] }

type AccordionContextValue = {
  value: string[]
  multiple: boolean
  onValueChange: (details: AccordionValueChangeDetails) => void
  itemValues: string[]
  registerItemValue: (value: string) => () => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext(componentName: string) {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(`${componentName} must be used within Accordion.Root`)
  }

  return context
}

export interface AccordionProps
  extends
    Omit<BoxProps, 'children' | 'defaultValue' | 'onValueChange' | 'value'>,
    Pick<ChakraAccordionRootProps, 'defaultValue' | 'multiple' | 'onValueChange' | 'value'> {
  children: ReactNode
}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(function AccordionRoot(
  { children, defaultValue, multiple = true, onValueChange, value, ...props },
  ref
) {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? [])
  const [itemValues, setItemValues] = useState<string[]>([])
  const currentValue = value ?? internalValue

  const handleValueChange = useCallback(
    (details: AccordionValueChangeDetails) => {
      if (value === undefined) {
        setInternalValue(details.value)
      }

      onValueChange?.(details)
    },
    [onValueChange, value]
  )

  const registerItemValue = useCallback((itemValue: string) => {
    setItemValues((currentValues) =>
      currentValues.includes(itemValue) ? currentValues : [...currentValues, itemValue]
    )

    return () => {
      setItemValues((currentValues) => currentValues.filter((value) => value !== itemValue))
    }
  }, [])

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      value: currentValue,
      multiple,
      onValueChange: handleValueChange,
      itemValues,
      registerItemValue,
    }),
    [currentValue, handleValueChange, itemValues, multiple, registerItemValue]
  )

  return (
    <AccordionContext.Provider value={contextValue}>
      <Box
        ref={ref}
        width="100%"
        fontSize={pxToRem(16)}
        css={{
          h2: { fontSize: pxToRem(19), fontWeight: 700, lineHeight: '1.3', margin: 0 },
        }}
        {...props}
      >
        {children}
      </Box>
    </AccordionContext.Provider>
  )
})

AccordionRoot.displayName = 'Accordion'

export interface AccordionActionsProps extends StackProps {
  children: ReactNode
}

const AccordionActions = forwardRef<HTMLDivElement, AccordionActionsProps>(
  function AccordionActions({ children, ...props }, ref) {
    return (
      <Stack
        ref={ref}
        direction="row"
        justify="flex-start"
        pb={pxToRem(14)}
        borderBottom="1px solid"
        borderColor="border.emphasized"
        {...props}
      >
        {children}
      </Stack>
    )
  }
)

AccordionActions.displayName = 'AccordionActions'

export interface AccordionToggleAllProps extends Omit<
  ComponentProps<typeof Link>,
  'children' | 'href' | 'onClick'
> {
  openLabel?: ReactNode
  closeLabel?: ReactNode
  href?: string
}

const AccordionToggleAll = forwardRef<HTMLAnchorElement, AccordionToggleAllProps>(
  function AccordionToggleAll(
    { closeLabel = 'Hide all sections', href = '#', openLabel = 'Show all sections', ...props },
    ref
  ) {
    const { itemValues, onValueChange, value } = useAccordionContext('Accordion.ToggleAll')
    const allOpen =
      itemValues.length > 0 && itemValues.every((itemValue) => value.includes(itemValue))

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      onValueChange({ value: allOpen ? [] : itemValues })
    }

    return (
      <Link
        ref={ref}
        href={href}
        py={pxToRem(5)}
        fontSize="sm"
        onClick={handleClick}
        textDecoration="underline"
        _hover={{
          bgColor: 'bg.muted',
          '& .chevron': {
            color: 'fg.inverted',
            bgColor: 'fg',
            borderColor: 'fg.inverted',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          '& .chevron:after': {
            color: 'fg.inverted',
            borderColor: 'fg.inverted',
          },
          '& .chevron-text': {
            color: 'fg',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
        }}
        _focus={{
          outline: 0,
          '& .chevron': {
            color: 'fg.inverted',
            bgColor: 'fg',
            borderColor: 'fg',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          '& .chevron:after': {
            color: 'fg.inverted',
            borderColor: 'fg.inverted',
          },
          '& .chevron-text': {
            color: 'black',
            bgColor: 'yellow.500',
            textDecoration: 'underline',
            textDecorationColor: 'fg.inverted',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
        }}
        {...props}
      >
        <Box
          as="span"
          className="chevron"
          transform={allOpen ? 'rotate(0deg)' : 'rotate(180deg)'}
          boxSizing="border-box"
          display="inline-block"
          position="relative"
          width={pxToRem(20)}
          height={pxToRem(20)}
          border="1px solid"
          borderColor="brand.500"
          borderRadius="50%"
          verticalAlign="middle"
          transition="transform 0.2s ease-in-out"
          _after={{
            content: '""',
            color: 'brand.500',
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            bottom: pxToRem(5),
            left: pxToRem(6),
            width: pxToRem(6),
            height: pxToRem(6),
            transform: 'rotate(-45deg)',
            borderTop: `${pxToRem(2)} solid`,
            borderRight: `${pxToRem(2)} solid`,
          }}
        />
        <Text className="chevron-text" fontSize={pxToRem(19)} lineHeight="1.3157894737">
          {allOpen ? closeLabel : openLabel}
        </Text>
      </Link>
    )
  }
)

AccordionToggleAll.displayName = 'AccordionToggleAll'

export interface AccordionItemsProps {
  children: ReactNode
}

const AccordionItems = forwardRef<HTMLDivElement, AccordionItemsProps>(function AccordionItems(
  { children },
  ref
) {
  const { multiple, onValueChange, value } = useAccordionContext('Accordion.Items')

  return (
    <ChakraAccordion.Root
      ref={ref}
      multiple={multiple}
      value={value}
      onValueChange={onValueChange}
      fontSize={pxToRem(16)}
      lineHeight="1.25"
    >
      {children}
    </ChakraAccordion.Root>
  )
})

AccordionItems.displayName = 'AccordionItems'

export interface AccordionItemProps extends ChakraAccordionItemProps {
  children: ReactNode
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(
  { children, value, ...props },
  ref
) {
  const { registerItemValue } = useAccordionContext('Accordion.Item')

  useEffect(() => registerItemValue(value), [registerItemValue, value])

  return (
    <ChakraAccordionItem
      ref={ref}
      value={value}
      border="none"
      borderTop="1px solid"
      borderTopColor="border"
      _first={{
        borderTop: 'none',
      }}
      {...props}
    >
      {children}
    </ChakraAccordionItem>
  )
})

AccordionItem.displayName = 'AccordionItem'

export interface AccordionTriggerProps extends ChakraAccordionItemTriggerProps {
  children: ReactNode
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  function AccordionTrigger(props, ref) {
    return (
      <ChakraAccordionItemTrigger
        ref={ref}
        px={0}
        textAlign="left"
        fontWeight="bold"
        fontSize="19px"
        lineHeight="1.31579"
        color="fg"
        border="none"
        pt={pxToRem(10)}
        pb={pxToRem(20)}
        transition=" background-color 0.1s ease"
        css={{
          '& .trigger-title': {
            fontSize: pxToRem(24),
          },
        }}
        _hover={{
          bg: 'bg.muted',
          color: 'fg',
          '& .chevron': { color: 'fg', bgColor: 'fg', borderColor: 'fg' },
          '& .chevron:after': { color: 'fg.inverted', borderColor: 'fg.inverted' },
          '& .chevron-text': { color: 'fg' },
        }}
        _open={{
          bg: 'transparent',
        }}
        _focus={{
          outline: '0px solid',
          '& .trigger-title, & .chevron-container, & .chevron-text': {
            color: 'fg',
            bgColor: 'yellow.500',
            borderColor: 'yellow.500',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          '& .chevron': { color: 'fg', bgColor: 'fg', borderColor: 'fg' },
          '& .chevron:after': { color: 'fg.inverted', borderColor: 'fg.inverted' },
        }}
        {...props}
      >
        <VStack gap={2} w="100%" justifyContent="flex-start" alignItems="flex-start">
          <Box as="span" flex="1" mr={2} className="trigger-title" color="fg">
            {props.children}
          </Box>
          <Box
            display="inline-flex"
            alignItems="center"
            gap={pxToRem(5)}
            className="chevron-container"
            mb={pxToRem(13)}
          >
            <Box
              as="span"
              className="chevron"
              transform="rotate(180deg)"
              boxSizing="border-box"
              display="inline-block"
              position="relative"
              width={pxToRem(20)}
              height={pxToRem(20)}
              border="1px solid"
              borderColor="brand.500"
              borderRadius="50%"
              verticalAlign="middle"
              transition="transform 0.2s ease-in-out"
              css={{
                "[data-state='open'] &": {
                  transform: 'rotate(0deg)',
                },
              }}
              _after={{
                content: '""',
                color: 'brand.500',
                boxSizing: 'border-box',
                display: 'block',
                position: 'absolute',
                bottom: pxToRem(5),
                left: pxToRem(6),
                width: pxToRem(6),
                height: pxToRem(6),
                transform: 'rotate(-45deg)',
                borderTop: `${pxToRem(2)} solid`,
                borderRight: `${pxToRem(2)} solid`,
                borderColor: 'border',
              }}
            />
            <Text
              className="chevron-text"
              fontSize={pxToRem(19)}
              lineHeight="1.3157894737"
              fontWeight="500"
              color="brand.500"
              css={{
                "[data-state='closed'] &": {
                  display: 'inherit',
                },
                "[data-state='open'] &": {
                  display: 'none',
                },
              }}
            >
              Show
            </Text>
            <Text
              className="chevron-text"
              fontSize={pxToRem(19)}
              lineHeight="1.3157894737"
              fontWeight="500"
              color="brand.500"
              css={{
                "[data-state='closed'] &": {
                  display: 'none',
                },
                "[data-state='open'] &": {
                  display: 'inherit',
                },
              }}
            >
              Hide
            </Text>
          </Box>
        </VStack>
      </ChakraAccordionItemTrigger>
    )
  }
)

AccordionTrigger.displayName = 'AccordionTrigger'

export interface AccordionContentProps extends ChakraAccordionItemContentProps {
  children: ReactNode
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, ref) {
    return (
      <ChakraAccordionItemContent
        ref={ref}
        px={0}
        pt={pxToRem(15)}
        pb={pxToRem(50)}
        fontSize={pxToRem(19)}
        lineHeight="1.5"
        color="fg"
        bg="bg"
        {...props}
      />
    )
  }
)

AccordionContent.displayName = 'AccordionContent'

type AccordionCompound = typeof AccordionRoot & {
  Root: typeof AccordionRoot
  Actions: typeof AccordionActions
  ToggleAll: typeof AccordionToggleAll
  Items: typeof AccordionItems
  Item: typeof AccordionItem
  Trigger: typeof AccordionTrigger
  Content: typeof AccordionContent
}

const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Actions: AccordionActions,
  ToggleAll: AccordionToggleAll,
  Items: AccordionItems,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
}) as AccordionCompound

export {
  Accordion,
  AccordionActions,
  AccordionContent,
  AccordionItem,
  AccordionItems,
  AccordionToggleAll,
  AccordionTrigger,
}
