import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

export type GovUKHeaderProps = BoxProps

export type GovUKHeaderContainerProps = BoxProps

export type GovUKHeaderProductNameProps = React.ComponentProps<typeof Link>

export type GovUKHeaderServiceNameProps = React.ComponentProps<typeof Link>

export type GovUKHeaderNavigationProps = BoxProps

export type GovUKHeaderListProps = BoxProps

export type GovUKHeaderListItemProps = BoxProps & {
  current?: boolean
}

export interface GovUKHeaderLinkProps extends React.ComponentProps<typeof Link> {
  current?: boolean
}

const GovUKHeaderRoot = forwardRef<HTMLElement, GovUKHeaderProps>(function GovUKHeader(props, ref) {
  return (
    <Box
      ref={ref}
      as="header"
      bg="grey.950"
      color="common.white"
      borderBottom="10px solid"
      borderBottomColor="brand.500"
      {...props}
    />
  )
})

const GovUKHeaderContainer = forwardRef<HTMLDivElement, GovUKHeaderContainerProps>(
  function GovUKHeaderContainer(props, ref) {
    return (
      <Box
        ref={ref}
        maxW="1200px"
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        py={pxToRem(10)}
        {...props}
      />
    )
  }
)

const GovUKHeaderProductName = forwardRef<HTMLAnchorElement, GovUKHeaderProductNameProps>(
  function GovUKHeaderProductName(props, ref) {
    return (
      <Link
        ref={ref}
        display="inline-flex"
        alignItems="center"
        gap={pxToRem(10)}
        color="common.white"
        textDecoration="none"
        fontSize={pxToRem(30)}
        lineHeight={pxToRem(30)}
        fontWeight="700"
        _hover={{ color: 'common.white', textDecoration: 'none' }}
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
        <Box
          as="span"
          fontSize={pxToRem(14)}
          lineHeight={1}
          fontWeight="700"
          letterSpacing={pxToRem(1)}
        >
          GOV.UK
        </Box>
      </Link>
    )
  }
)

const GovUKHeaderServiceName = forwardRef<HTMLAnchorElement, GovUKHeaderServiceNameProps>(
  function GovUKHeaderServiceName(props, ref) {
    return (
      <Link
        ref={ref}
        color="common.white"
        textDecoration="none"
        fontSize={pxToRem(24)}
        lineHeight={pxToRem(30)}
        fontWeight="700"
        _hover={{ color: 'common.white', textDecoration: 'underline' }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      />
    )
  }
)

const GovUKHeaderNavigation = forwardRef<HTMLDivElement, GovUKHeaderNavigationProps>(
  function GovUKHeaderNavigation(props, ref) {
    return (
      <Box
        ref={ref}
        borderTop="1px solid"
        borderTopColor="rgba(255,255,255,0.25)"
        mt={pxToRem(10)}
        pt={pxToRem(10)}
        {...props}
      />
    )
  }
)

const GovUKHeaderList = forwardRef<HTMLUListElement, GovUKHeaderListProps>(
  function GovUKHeaderList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap={pxToRem(20)}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const GovUKHeaderListItem = forwardRef<HTMLLIElement, GovUKHeaderListItemProps>(
  function GovUKHeaderListItem({ current = false, ...props }, ref) {
    return (
      <Box ref={ref} as="li" position="relative" fontWeight={current ? '700' : '400'} {...props} />
    )
  }
)

const GovUKHeaderLink = forwardRef<HTMLAnchorElement, GovUKHeaderLinkProps>(
  function GovUKHeaderLink({ current = false, ...props }, ref) {
    return (
      <Link
        ref={ref}
        aria-current={current ? 'page' : undefined}
        color="common.white"
        textDecoration="underline"
        textDecorationThickness="max(1px, 0.0625rem)"
        textUnderlineOffset="0.1578em"
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(20)}
        fontWeight={current ? '700' : '400'}
        _hover={{
          color: 'common.white',
          textDecorationThickness: 'max(3px, 0.1875rem)',
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
      />
    )
  }
)

export const GovUKHeader = Object.assign(GovUKHeaderRoot, {
  Root: GovUKHeaderRoot,
  Container: GovUKHeaderContainer,
  ProductName: GovUKHeaderProductName,
  ServiceName: GovUKHeaderServiceName,
  Navigation: GovUKHeaderNavigation,
  List: GovUKHeaderList,
  ListItem: GovUKHeaderListItem,
  Link: GovUKHeaderLink,
})

export {
  GovUKHeaderRoot,
  GovUKHeaderContainer,
  GovUKHeaderProductName,
  GovUKHeaderServiceName,
  GovUKHeaderNavigation,
  GovUKHeaderList,
  GovUKHeaderListItem,
  GovUKHeaderLink,
}
