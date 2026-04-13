import { Box, Icon, VStack, type BoxProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface PaginationProps extends BoxProps {
  landmarkLabel?: string
  block?: boolean
}

export type PaginationListProps = BoxProps

export interface PaginationItemProps extends BoxProps {
  current?: boolean
  ellipsis?: boolean
}

export interface PaginationLinkProps extends React.ComponentProps<typeof Link> {
  current?: boolean
  number?: ReactNode
  visuallyHiddenText?: string
}

export interface PaginationNavLinkProps extends React.ComponentProps<typeof Link> {
  label?: ReactNode
}

interface PaginationContextValue {
  block: boolean
}

const PaginationContext = createContext<PaginationContextValue | null>(null)

function usePaginationContext() {
  return useContext(PaginationContext)
}

const ChevronIcon = ({ direction }: { direction: 'previous' | 'next' }) => (
  <Icon
    as="svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 15 13"
    width={pxToRem(15)}
    height={pxToRem(13)}
    flexShrink={0}
  >
    <path
      fill="currentColor"
      d={
        direction === 'previous'
          ? 'm6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z'
          : 'm8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z'
      }
    />
  </Icon>
)

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { landmarkLabel = 'Pagination', block = false, children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="nav" aria-label={landmarkLabel} width="100%" {...props}>
      <PaginationContext.Provider value={{ block }}>
        <Box
          display="flex"
          flexDirection={block ? 'column' : { base: 'column', md: 'row' }}
          alignItems={block ? 'stretch' : { md: 'center' }}
          justifyContent="flex-start"
          gap={block ? 0 : pxToRem(10)}
        >
          {children}
        </Box>
      </PaginationContext.Provider>
    </Box>
  )
})

const PaginationList = forwardRef<HTMLUListElement, PaginationListProps>(
  function PaginationList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap={pxToRem(10)}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(function PaginationItem(
  { current = false, ellipsis = false, children, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      as="li"
      minW={ellipsis ? 'auto' : pxToRem(40)}
      h={ellipsis ? 'auto' : pxToRem(40)}
      display="flex"
      color={current ? 'white' : 'primary.600'}
      alignItems="center"
      justifyContent="center"
      bgColor={current ? 'primary.600' : 'transparent'}
      _hover={{
        border: '0',
        borderColor: 'transparent',
        bgColor: current ? 'primary.600' : !ellipsis ? 'gray.50' : 'transparent',
      }}
      _dark={{
        _hover: {
          border: '0',
          bgColor: current ? 'primary.700' : !ellipsis ? 'gray.700' : 'transparent',
        },
      }}
      _visited={{
        color: current ? 'white' : 'primary.600',
      }}
      {...props}
    >
      {ellipsis ? (
        <Text as="span" fontSize={19} color="currentColor" mb={0}>
          ...
        </Text>
      ) : (
        children
      )}
    </Box>
  )
})

const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(function PaginationLink(
  { current = false, number, visuallyHiddenText, children, ...props },
  ref
) {
  const content = children ?? number

  return (
    <Link
      ref={ref}
      aria-current={current ? 'page' : undefined}
      aria-label={visuallyHiddenText}
      className="page-link"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      minW={pxToRem(38)}
      h={pxToRem(38)}
      px={pxToRem(10)}
      color="currentColor"
      fontSize={19}
      fontWeight={current ? '700' : '400'}
      textDecoration={'underline'}
      bgColor={current ? 'primary.600' : 'transparent'}
      rounded="0"
      _hover={{
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)',
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'fg',
        rounded: '0',
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)',
        _hover: {
          color: 'fg',
          bgColor: 'yellow.500',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        },
      }}
      _visited={{
        color: current ? 'white' : 'primary.600',
      }}
      _dark={{
        color: current ? 'common.white' : 'fg.link',
        _hover: {
          color: 'common.white',
          bgColor: 'primary.700',
        },
        _focus: {
          color: 'common.black',
          _hover: {
            color: 'common.black',
            bgColor: 'yellow.500',
          },
          _visited: {
            color: 'common.black',
          },
        },
        _visited: {
          color: 'white',
        },
      }}
      {...props}
    >
      {content}
    </Link>
  )
})

const PaginationPrevious = forwardRef<HTMLAnchorElement, PaginationNavLinkProps>(
  function PaginationPrevious({ label, children, ...props }, ref) {
    const context = usePaginationContext()
    const block = context?.block ?? false

    return (
      <Link
        ref={ref}
        rel="prev"
        display="inline-flex"
        alignItems="center"
        width={block ? 'full' : undefined}
        gap={pxToRem(15)}
        h={children ? 'auto' : pxToRem(40)}
        pr={children ? '0' : pxToRem(15)}
        py={block ? pxToRem(15) : 0}
        borderBottom={
          block
            ? { base: '1px solid {colors.gray.100}', _dark: '1px solid {colors.gray.700}' }
            : 'none'
        }
        _hover={{ bgColor: { base: 'gray.50', _dark: 'gray.700' } }}
        _focus={{
          outline: 'none',
          bgColor: 'yellow.500',
          color: 'fg',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          _hover: {
            color: 'fg',
            bgColor: 'yellow.500',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
        }}
        _visited={{
          color: 'primary.300',
        }}
        _dark={{
          color: 'fg.link',
          borderBottom: block
            ? { base: '1px solid {colors.gray.700}', _dark: '1px solid {colors.gray.700}' }
            : 'none',
          _hover: {
            color: 'primary.300',
            bgColor: 'common.black',
          },
          _focus: {
            color: 'common.black',
            _hover: {
              color: 'common.black',
              bgColor: 'yellow.500',
            },
            _visited: {
              color: 'common.black',
            },
          },
          _visited: {
            color: 'primary.300',
          },
        }}
        {...props}
      >
        <ChevronIcon direction="previous" />
        {children ? (
          <VStack align="start" gap={0}>
            <Text as="span" fontSize={19} color="inherit" fontWeight="700" mb={0}>
              {children ?? 'Previous'}
            </Text>
            <>
              {label ? (
                <Text as="span" display="block" fontSize={19} color="inherit" mb={0}>
                  {label}
                </Text>
              ) : null}
            </>
          </VStack>
        ) : (
          <>
            {label ? (
              <Text as="span" display="block" fontSize={19} color="inherit" mb={0}>
                {label}
              </Text>
            ) : null}
          </>
        )}
      </Link>
    )
  }
)

const PaginationNext = forwardRef<HTMLAnchorElement, PaginationNavLinkProps>(
  function PaginationNext({ label, children, ...props }, ref) {
    const context = usePaginationContext()
    const block = context?.block ?? false

    return (
      <Link
        ref={ref}
        rel="next"
        display="inline-flex"
        alignItems="center"
        width={block ? 'full' : undefined}
        gap={pxToRem(15)}
        h={children ? 'auto' : pxToRem(40)}
        pl={children ? '0' : pxToRem(15)}
        py={block ? pxToRem(15) : 0}
        _hover={{ bgColor: { base: 'gray.50', _dark: 'gray.700' } }}
        _focus={{
          outline: 'none',
          bgColor: 'yellow.500',
          color: 'fg',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          _hover: {
            color: 'fg',
            bgColor: 'yellow.500',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
        }}
        _visited={{
          color: 'primary.600',
        }}
        _dark={{
          color: 'fg.link',
          _hover: {
            color: 'primary.300',
            bgColor: 'common.black',
          },
          _focus: {
            color: 'common.black',
            _hover: {
              color: 'common.black',
              bgColor: 'yellow.500',
            },
            _visited: {
              color: 'common.black',
            },
          },
          _visited: {
            color: 'primary.300',
          },
        }}
        {...props}
      >
        <ChevronIcon direction="next" />
        {children ? (
          <VStack align="start" gap={0}>
            <Text as="span" fontSize={19} color="inherit" fontWeight="700" mb={0}>
              {children ?? 'Previous'}
            </Text>
            <>
              {label ? (
                <Text as="span" display="block" fontSize={19} color="inherit" mb={0}>
                  {label}
                </Text>
              ) : null}
            </>
          </VStack>
        ) : (
          <>
            {label ? (
              <Text as="span" display="block" fontSize={19} color="inherit" mb={0}>
                {label}
              </Text>
            ) : null}
          </>
        )}
      </Link>
    )
  }
)

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  List: PaginationList,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
})

export {
  PaginationRoot,
  PaginationList,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
}
