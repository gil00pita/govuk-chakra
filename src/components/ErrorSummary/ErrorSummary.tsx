import { Box, type BoxProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, useEffect, useId, useRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading/Heading'
import { Link } from '@/components/Link/Link'
import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

interface ErrorSummaryContextValue {
  headingId: string
}

const ErrorSummaryContext = createContext<ErrorSummaryContextValue | null>(null)
const useErrorSummaryContext = () => useContext(ErrorSummaryContext)

export interface ErrorSummaryRootProps extends BoxProps {
  children: ReactNode
  disableAutoFocus?: boolean
}

export interface ErrorSummaryTitleProps extends React.ComponentProps<typeof Heading> {
  children: ReactNode
}

export interface ErrorSummaryDescriptionProps extends React.ComponentProps<typeof Text> {
  children: ReactNode
}

export interface ErrorSummaryListProps extends BoxProps {
  children: ReactNode
}

export interface ErrorSummaryItemProps extends BoxProps {
  children: ReactNode
}

export interface ErrorSummaryLinkProps extends React.ComponentProps<typeof Link> {
  children: ReactNode
}

const ErrorSummaryRoot = forwardRef<HTMLDivElement, ErrorSummaryRootProps>(function ErrorSummaryRoot(
  { children, disableAutoFocus = false, id, ...props },
  ref
) {
  const generatedId = useId()
  const headingId = id ? `${id}-title` : `govuk-error-summary-${generatedId}-title`
  const localRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!disableAutoFocus) {
      localRef.current?.focus()
    }
  }, [disableAutoFocus])

  return (
    <ErrorSummaryContext.Provider value={{ headingId }}>
      <Box
        ref={(node: HTMLDivElement | null) => {
          localRef.current = node

          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        id={id}
        as="section"
        role="alert"
        aria-labelledby={headingId}
        tabIndex={-1}
        borderStyle="solid"
        borderWidth={pxToRem(5)}
        borderColor="border.error"
        bg="transparent"
        color="fg"
        p={{ base: pxToRem(15), md: pxToRem(20) }}
        _focusVisible={{
          outline: `${pxToRem(3)} solid`,
          outlineColor: 'yellow.500',
          outlineOffset: 0,
        }}
        {...props}
      >
        {children}
      </Box>
    </ErrorSummaryContext.Provider>
  )
})

const ErrorSummaryTitle = forwardRef<HTMLHeadingElement, ErrorSummaryTitleProps>(
  function ErrorSummaryTitle({ children, id, ...props }, ref) {
    const context = useErrorSummaryContext()
    const titleId = id ?? context?.headingId

    return (
      <Heading ref={ref} as="h2" id={titleId} size={24} color="fg" mb={pxToRem(15)} {...props}>
        {children}
      </Heading>
    )
  }
)

const ErrorSummaryDescription = forwardRef<HTMLParagraphElement, ErrorSummaryDescriptionProps>(
  function ErrorSummaryDescription({ children, ...props }, ref) {
    return (
      <Text ref={ref} fontSize={19} color="fg.muted" mb={pxToRem(15)} {...props}>
        {children}
      </Text>
    )
  }
)

const ErrorSummaryList = forwardRef<HTMLUListElement, ErrorSummaryListProps>(function ErrorSummaryList(
  { children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="ul" listStyleType="none" m={0} p={0} {...props}>
      {children}
    </Box>
  )
})

const ErrorSummaryItem = forwardRef<HTMLLIElement, ErrorSummaryItemProps>(function ErrorSummaryItem(
  { children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="li" m={0} mb={pxToRem(5)} {...props}>
      {children}
    </Box>
  )
})

const ErrorSummaryLink = forwardRef<HTMLAnchorElement, ErrorSummaryLinkProps>(function ErrorSummaryLink(
  { children, ...props },
  ref
) {
  return (
    <Link
      ref={ref}
      fontSize={19}
      fontWeight="700"
      color="red.500"
      _hover={{
        color: 'red.700',
      }}
      _dark={{
        color: 'red.200',
        _hover: {
          color: 'red.400',
        },
        _focus: {
          color: 'fg',
        },
        _visited: {
          color: 'govuk.darkGrey',
        },
      }}
      {...props}
    >
      {children}
    </Link>
  )
})

export const ErrorSummary = {
  Root: ErrorSummaryRoot,
  Title: ErrorSummaryTitle,
  Description: ErrorSummaryDescription,
  List: ErrorSummaryList,
  Item: ErrorSummaryItem,
  Link: ErrorSummaryLink,
}

export {
  ErrorSummaryRoot,
  ErrorSummaryTitle,
  ErrorSummaryDescription,
  ErrorSummaryList,
  ErrorSummaryItem,
  ErrorSummaryLink,
}
