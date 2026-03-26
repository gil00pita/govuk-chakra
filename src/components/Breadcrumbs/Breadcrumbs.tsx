import { Box, type BoxProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ComponentProps } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'
import { Text } from '../Text'

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
        color={inverse ? 'common.white' : 'fg'}
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
      pe={pxToRem(5)}
      // me={pxToRem(10)}
      // mb={pxToRem(5)}
      _dark={{
        '&:not(:first-of-type)::before': {
          borderColor: inverse ? 'common.white' : 'common.white/70',
        },
      }}
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
          transform: 'translateY(-50%) rotate(-45deg)',
          borderRight: '1px solid',
          borderBottom: '1px solid',
          borderColor: inverse ? 'common.white' : 'border.subtle',
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
        color={inverse ? 'common.white' : 'fg'}
        _hover={{
          color: inverse ? 'common.white' : 'fg',
          textDecorationThickness: '3px',
        }}
        _visited={{
          color: inverse ? 'common.white' : 'fg',
        }}
        _dark={undefined}
        {...props}
      >
        <Text as="span" whiteSpace="nowrap" fontSize={16} color={'currentColor'}>
          {props.children}
        </Text>
      </Link>
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
        color={inverse ? 'common.white' : 'fg'}
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
