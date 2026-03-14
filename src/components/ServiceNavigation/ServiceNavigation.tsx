import { Box, Button, type BoxProps } from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
  useState,
  type ComponentProps,
} from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

type ServiceNavigationContextValue = {
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean | ((current: boolean) => boolean)) => void
  navigationId: string
}

const ServiceNavigationContext = createContext<ServiceNavigationContextValue | null>(null)

function useServiceNavigationContext() {
  return useContext(ServiceNavigationContext)
}

export interface ServiceNavigationRootProps extends BoxProps {
  defaultMobileOpen?: boolean
}

export type ServiceNavigationServiceNameProps = ComponentProps<typeof Link>

export interface ServiceNavigationNavProps extends BoxProps {
  collapsible?: boolean
}

export interface ServiceNavigationToggleProps extends ComponentProps<typeof Button> {
  navigationId?: string
  openLabel?: string
  closedLabel?: string
}

export type ServiceNavigationListProps = BoxProps

export interface ServiceNavigationItemProps extends BoxProps {
  current?: boolean
  active?: boolean
}

export interface ServiceNavigationLinkProps extends ComponentProps<typeof Link> {
  current?: boolean
  active?: boolean
}

const ServiceNavigationRoot = forwardRef<HTMLDivElement, ServiceNavigationRootProps>(
  function ServiceNavigationRoot({ children, defaultMobileOpen = false, ...props }, ref) {
    const navigationId = useId()
    const [isMobileOpen, setIsMobileOpen] = useState(defaultMobileOpen)

    const contextValue = useMemo(
      () => ({ isMobileOpen, setIsMobileOpen, navigationId }),
      [isMobileOpen, navigationId]
    )

    return (
      <ServiceNavigationContext.Provider value={contextValue}>
        <Box
          ref={ref}
          as="section"
          width="100%"
          borderBottom="1px solid"
          borderColor="grey.100"
          bg="common.white"
          color="grey.950"
          {...props}
        >
          <Box maxW="1200px" mx="auto" px={{ base: pxToRem(15), md: pxToRem(30) }}>
            {children}
          </Box>
        </Box>
      </ServiceNavigationContext.Provider>
    )
  }
)

const ServiceNavigationServiceName = forwardRef<
  HTMLAnchorElement,
  ServiceNavigationServiceNameProps
>(function ServiceNavigationServiceName(props, ref) {
  return (
    <Link
      ref={ref}
      display="inline-block"
      fontSize={24}
      lineHeight={1.25}
      fontWeight="700"
      color="grey.950"
      textDecoration="none"
      py={pxToRem(15)}
      _hover={{
        color: 'grey.950',
        textDecoration: 'underline',
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
})

const ServiceNavigationNav = forwardRef<HTMLDivElement, ServiceNavigationNavProps>(
  function ServiceNavigationNav({ children, collapsible = true, id, ...props }, ref) {
    const context = useServiceNavigationContext()
    const resolvedId = id ?? context?.navigationId
    const isMobileOpen = context?.isMobileOpen ?? false

    return (
      <Box
        ref={ref}
        as="nav"
        id={resolvedId}
        aria-label="Menu"
        borderTop="1px solid"
        borderColor="grey.100"
        display={{
          base: collapsible ? (isMobileOpen ? 'block' : 'none') : 'block',
          md: 'block',
        }}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

const ServiceNavigationToggle = forwardRef<HTMLButtonElement, ServiceNavigationToggleProps>(
  function ServiceNavigationToggle(
    { navigationId, openLabel = 'Menu', closedLabel = 'Close menu', children, ...props },
    ref
  ) {
    const context = useServiceNavigationContext()
    const resolvedNavigationId = navigationId ?? context?.navigationId
    const isMobileOpen = context?.isMobileOpen ?? false

    return (
      <Button
        ref={ref}
        type="button"
        variant="plain"
        display={{ base: 'inline-flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        px={0}
        py={pxToRem(15)}
        minH="auto"
        h="auto"
        fontSize={19}
        lineHeight={1.3157894737}
        fontWeight="700"
        color="brand.500"
        textDecoration="underline"
        textUnderlineOffset="0.1578em"
        textDecorationThickness="max(1px, 0.0625rem)"
        borderRadius="0"
        aria-controls={resolvedNavigationId}
        aria-expanded={isMobileOpen}
        onClick={() => context?.setIsMobileOpen((current) => !current)}
        _hover={{
          color: 'brand.700',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          bg: 'transparent',
        }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bg: 'yellow.500',
          color: 'common.black',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        {...props}
      >
        {children ?? (isMobileOpen ? closedLabel : openLabel)}
      </Button>
    )
  }
)

const ServiceNavigationList = forwardRef<HTMLUListElement, ServiceNavigationListProps>(
  function ServiceNavigationList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        m={0}
        p={0}
        display={{ base: 'block', md: 'flex' }}
        alignItems={{ md: 'center' }}
        {...props}
      />
    )
  }
)

const ServiceNavigationItem = forwardRef<HTMLLIElement, ServiceNavigationItemProps>(
  function ServiceNavigationItem({ current, active, ...props }, ref) {
    const isCurrent = current ?? active ?? false

    return (
      <Box
        ref={ref}
        as="li"
        position="relative"
        mr={{ md: pxToRem(30) }}
        py={{ base: pxToRem(13), md: 0 }}
        borderTop="1px solid"
        borderColor="grey.100"
        _first={{ borderTop: { md: 'none' } }}
        _last={{ mr: { md: 0 } }}
        data-current={isCurrent ? 'true' : 'false'}
        {...props}
      />
    )
  }
)

const ServiceNavigationLink = forwardRef<HTMLAnchorElement, ServiceNavigationLinkProps>(
  function ServiceNavigationLink({ current, active, ...props }, ref) {
    const isCurrent = current ?? active ?? false

    return (
      <Link
        ref={ref}
        aria-current={isCurrent ? 'page' : undefined}
        display="inline-block"
        position="relative"
        py={{ md: pxToRem(18) }}
        ps={isCurrent ? { base: pxToRem(12), md: 0 } : undefined}
        color="grey.950"
        fontSize={19}
        lineHeight={1.3157894737}
        fontWeight={isCurrent ? '700' : '400'}
        textDecoration="none"
        _hover={{
          color: 'grey.950',
          textDecoration: 'underline',
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
        css={
          isCurrent
            ? {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: pxToRem(4),
                  backgroundColor: 'brand.500',
                },
                '@media screen and (min-width: 48em)': {
                  '&::after': {
                    left: 0,
                    right: 0,
                    top: 'auto',
                    bottom: 0,
                    width: '100%',
                    height: pxToRem(4),
                  },
                },
              }
            : undefined
        }
        {...props}
      />
    )
  }
)

export const ServiceNavigation = Object.assign(ServiceNavigationRoot, {
  Root: ServiceNavigationRoot,
  ServiceName: ServiceNavigationServiceName,
  Nav: ServiceNavigationNav,
  Toggle: ServiceNavigationToggle,
  List: ServiceNavigationList,
  Item: ServiceNavigationItem,
  Link: ServiceNavigationLink,
})

export {
  ServiceNavigationRoot,
  ServiceNavigationServiceName,
  ServiceNavigationNav,
  ServiceNavigationToggle,
  ServiceNavigationList,
  ServiceNavigationItem,
  ServiceNavigationLink,
}
