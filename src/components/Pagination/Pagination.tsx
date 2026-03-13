import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface PaginationProps extends BoxProps {
  landmarkLabel?: string
  block?: boolean
}

export interface PaginationListProps extends BoxProps {}

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

const ChevronIcon = ({ direction }: { direction: 'previous' | 'next' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 15 13"
    style={{
      width: pxToRem(15),
      height: pxToRem(13),
      flexShrink: 0,
      marginTop: pxToRem(6),
    }}
  >
    <path
      fill="currentColor"
      d={
        direction === 'previous'
          ? 'm6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z'
          : 'm8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z'
      }
    />
  </svg>
)

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { landmarkLabel = 'Pagination', block = false, children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="nav" aria-label={landmarkLabel} width="100%" {...props}>
      <Box
        display="flex"
        flexDirection={block ? 'column' : { base: 'column', md: 'row' }}
        alignItems={block ? 'stretch' : { md: 'center' }}
        justifyContent="space-between"
        gap={block ? pxToRem(15) : pxToRem(10)}
      >
        {children}
      </Box>
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
      alignItems="center"
      justifyContent="center"
      bg={current ? 'common.white' : 'transparent'}
      border={current ? '1px solid' : 'none'}
      borderColor={current ? 'grey.950' : 'transparent'}
      {...props}
    >
      {ellipsis ? (
        <Text as="span" fontSize={19} color="grey.950" mb={0}>
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
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      minW={pxToRem(38)}
      h={pxToRem(38)}
      px={pxToRem(10)}
      color="grey.950"
      fontSize={19}
      fontWeight={current ? '700' : '400'}
      textDecoration={current ? 'none' : 'underline'}
      _hover={{
        color: 'grey.950',
        textDecoration: current ? 'none' : 'underline',
        textDecorationThickness: current ? undefined : 'max(3px, 0.1875rem)',
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'common.black',
        textDecoration: 'none',
      }}
      {...props}
    >
      {content}
    </Link>
  )
})

const PaginationPrevious = forwardRef<HTMLAnchorElement, PaginationNavLinkProps>(
  function PaginationPrevious({ label, children, ...props }, ref) {
    return (
      <Link
        ref={ref}
        rel="prev"
        display="inline-flex"
        alignItems="flex-start"
        gap={pxToRem(15)}
        color="grey.950"
        textDecoration="none"
        _hover={{ color: 'grey.950', textDecoration: 'none' }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      >
        <ChevronIcon direction="previous" />
        <Box>
          <Text as="span" fontSize={27} color="inherit" fontWeight="700" mb={0}>
            {children ?? 'Previous'}
          </Text>
          {label ? (
            <Text as="span" display="block" fontSize={16} color="inherit" mb={0}>
              {label}
            </Text>
          ) : null}
        </Box>
      </Link>
    )
  }
)

const PaginationNext = forwardRef<HTMLAnchorElement, PaginationNavLinkProps>(
  function PaginationNext({ label, children, ...props }, ref) {
    return (
      <Link
        ref={ref}
        rel="next"
        display="inline-flex"
        alignItems="flex-start"
        gap={pxToRem(15)}
        color="grey.950"
        textDecoration="none"
        _hover={{ color: 'grey.950', textDecoration: 'none' }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      >
        <Box>
          <Text as="span" fontSize={27} color="inherit" fontWeight="700" mb={0}>
            {children ?? 'Next'}
          </Text>
          {label ? (
            <Text as="span" display="block" fontSize={16} color="inherit" mb={0}>
              {label}
            </Text>
          ) : null}
        </Box>
        <ChevronIcon direction="next" />
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
