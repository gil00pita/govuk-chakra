import {
  AccordionRootProps,
  Box,
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionItemContent as ChakraAccordionItemContent,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionItemTrigger as ChakraAccordionItemTrigger,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ReactNode, forwardRef } from 'react'

import { pxToRem } from '@/utils'

// Custom Accordion Root with GOV.UK styling
export interface AccordionProps extends AccordionRootProps {
  children: ReactNode
}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  return (
    <ChakraAccordion.Root
      ref={ref}
      multiple
      border="0px solid"
      borderColor="gray.400"
      borderRadius="0"
      fontSize="16px"
      lineHeight="1.25"
      {...props}
    />
  )
})

AccordionRoot.displayName = 'Accordion'

// Custom Accordion Item with GOV.UK styling
export interface AccordionItemProps extends ChakraAccordionItemProps {
  children: ReactNode
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  return (
    <ChakraAccordionItem
      ref={ref}
      border="none"
      borderTop="1px solid"
      borderTopColor="border.emphasized"
      _first={{
        borderTop: 'none',
      }}
      {...props}
    />
  )
})

AccordionItem.displayName = 'AccordionItem'

// Custom Accordion Trigger with GOV.UK styling (v3 uses Trigger instead of Button)
export interface AccordionTriggerProps {
  children: ReactNode
  [key: string]: any
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>((props, ref) => {
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
      transition={' background-color 0.1s ease'}
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
      <VStack gap={2} w="100%" justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Box as="span" flex="1" mr={2} className="trigger-title" color={'fg'}>
          {props.children}
        </Box>
        <Box
          display={'inline-flex'}
          alignItems={'center'}
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
            borderColor={'brand.500'}
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
            }}
          />
          <Text
            className="chevron-text"
            fontSize={pxToRem(19)}
            lineHeight={'1.3157894737'}
            fontWeight={'500'}
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
            lineHeight={'1.3157894737'}
            fontWeight={'500'}
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
      {/* <AccordionItemIndicator
        fontSize="24px"
        color="currentColor"
        transform="rotate(0deg)"
        transition="transform 0.2s ease-in-out"
        _open={{
          transform: 'rotate(180deg)',
        }}
      /> */}
    </ChakraAccordionItemTrigger>
  )
})

AccordionTrigger.displayName = 'AccordionTrigger'

// Custom Accordion Content with GOV.UK styling (v3 uses Content instead of Panel)
export interface AccordionContentProps {
  children: ReactNode
  [key: string]: any
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => {
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
})

AccordionContent.displayName = 'AccordionContent'

type AccordionCompound = typeof AccordionRoot & {
  Root: typeof AccordionRoot
  Item: typeof AccordionItem
  Trigger: typeof AccordionTrigger
  Content: typeof AccordionContent
}

// Compound component pattern
const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
}) as AccordionCompound

// Export individual components as well
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
