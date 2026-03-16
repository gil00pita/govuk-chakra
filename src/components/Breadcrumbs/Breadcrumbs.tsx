import { Box, type BoxProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ComponentProps } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

export interface BreadcrumbsProps extends BoxProps {
  inverse?: boolean
  landmarkLabel?: string
}

export type BreadcrumbsListProps = BoxProps

export interface BreadcrumbsItemProps extends BoxProps {
  current?: boolean
}

export type BreadcrumbsLinkProps = ComponentProps<typeof Link>

export type BreadcrumbsCurrentProps = BoxProps

type BreadcrumbsContextValue = {
  inverse: boolean
}

const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({ inverse: false })

function useBreadcrumbsContext() {
  return useContext(BreadcrumbsContext)
}

const BreadcrumbsRoot = forwardRef<HTMLDivElement, BreadcrumbsProps>(function Breadcrumbs(
  { inverse = false, landmarkLabel = 'Breadcrumb', children, ...props },
  ref
) {
  return (
    <BreadcrumbsContext.Provider value={{ inverse }}>
      <Box ref={ref} as="nav" aria-label={landmarkLabel} width="100%" color="inherit" {...props}>
        {children}
      </Box>
    </BreadcrumbsContext.Provider>
  )
})

const BreadcrumbsList = forwardRef<HTMLOListElement, BreadcrumbsListProps>(
  function BreadcrumbsList(props, ref) {
    const { inverse } = useBreadcrumbsContext()

    return (
      <Box
        ref={ref}
        as="ol"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        listStyleType="none"
        m={0}
        p={0}
        fontSize={pxToRem(16)}
        lineHeight={1.25}
        color={inverse ? 'common.white' : 'grey.950'}
        {...props}
      />
    )
  }
)

const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(function BreadcrumbsItem(
  { current = false, children, ...props },
  ref
) {
  const { inverse } = useBreadcrumbsContext()

  return (
    <Box
      ref={ref}
      as="li"
      display="inline-flex"
      alignItems="center"
      position="relative"
      pe={pxToRem(10)}
      me={pxToRem(10)}
      mb={pxToRem(5)}
      css={{
        '&:not(:first-of-type)': {
          paddingInlineStart: pxToRem(15),
        },
        '&:not(:first-of-type)::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          width: pxToRem(7),
          height: pxToRem(7),
          transform: 'translateY(-50%) rotate(15deg)',
          borderRight: '1px solid',
          borderBottom: '1px solid',
          borderColor: inverse
            ? 'var(--chakra-colors-common-white)'
            : 'var(--chakra-colors-grey-700)',
        },
      }}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Box>
  )
})

const BreadcrumbsLink = forwardRef<HTMLAnchorElement, BreadcrumbsLinkProps>(
  function BreadcrumbsLink(props, ref) {
    const { inverse } = useBreadcrumbsContext()

    return (
      <Link
        ref={ref}
        color={inverse ? 'common.white' : 'brand.500'}
        fontSize={pxToRem(16)}
        lineHeight={1.25}
        whiteSpace="nowrap"
        _hover={{
          color: inverse ? 'common.white' : 'brand.700',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _visited={{
          color: inverse ? 'common.white' : 'fg',
        }}
        _dark={undefined}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'fg',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          _hover: {
            color: 'fg',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
        }}
        {...props}
      />
    )
  }
)

const BreadcrumbsCurrent = forwardRef<HTMLSpanElement, BreadcrumbsCurrentProps>(
  function BreadcrumbsCurrent(props, ref) {
    const { inverse } = useBreadcrumbsContext()

    return (
      <Box
        ref={ref}
        as="span"
        fontSize={pxToRem(16)}
        lineHeight={1.25}
        color={inverse ? 'common.white' : 'grey.950'}
        whiteSpace="nowrap"
        {...props}
      />
    )
  }
)

type BreadcrumbsCompound = typeof BreadcrumbsRoot & {
  Root: typeof BreadcrumbsRoot
  List: typeof BreadcrumbsList
  Item: typeof BreadcrumbsItem
  Link: typeof BreadcrumbsLink
  Current: typeof BreadcrumbsCurrent
}

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Root: BreadcrumbsRoot,
  List: BreadcrumbsList,
  Item: BreadcrumbsItem,
  Link: BreadcrumbsLink,
  Current: BreadcrumbsCurrent,
}) as BreadcrumbsCompound

export { BreadcrumbsRoot, BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink, BreadcrumbsCurrent }
