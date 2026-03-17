import { Box, Button, HStack, Icon, Stack, StackProps, type BoxProps } from '@chakra-ui/react'
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
import { Text } from '../Text'

const MenuCaretIcon = ({ ...props }: ComponentProps<typeof Icon>) => (
  <Icon
    as="svg"
    viewBox="0 0 10 6"
    flexShrink={0}
    aria-hidden="true"
    focusable="false"
    boxSize={pxToRem(10)}
    w={pxToRem(10)}
    h={pxToRem(6)}
    transition={'transform 0.3s ease'}
    {...props}
  >
    <path d="M0 6 5 0l5 6H0Z" fill="currentColor" />
  </Icon>
)

type ServiceNavigationContextValue = {
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean | ((current: boolean) => boolean)) => void
  navigationId: string
}

const ServiceNavigationContext = createContext<ServiceNavigationContextValue | null>(null)

function useServiceNavigationContext() {
  return useContext(ServiceNavigationContext)
}

export interface ServiceNavigationRootProps extends StackProps {
  defaultMobileOpen?: boolean
}

export type ServiceNavigationServiceContainerProps = StackProps
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
        <HStack
          ref={ref}
          as="nav"
          width="100%"
          borderBottom="1px solid"
          borderColor="primary.200"
          bg="common.white"
          color="fg"
          bgColor={'primary.50'}
          w={'full'}
          {...props}
        >
          <HStack
            w={'full'}
            maxW="1200px"
            mx="auto"
            px={{ base: 0, md: pxToRem(30) }}
            gap={0}
            alignItems={{ base: 'stretch', md: 'center' }}
            flexDirection={{ base: 'column', md: 'row' }}
            flexWrap={'wrap'}
          >
            {children}
          </HStack>
        </HStack>
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
      my={pxToRem(10)}
      mr={{ base: 0, md: pxToRem(30) }}
      ml={{ base: pxToRem(15), md: 0 }}
      noStyle
      className="service-name"
      {...props}
    >
      <Text fontSize={19} fontWeight="700" as={'span'}>
        {props.children}
      </Text>
    </Link>
  )
})

const ServiceNavigationServiceContainer = forwardRef<
  HTMLDivElement,
  ServiceNavigationServiceContainerProps
>(function ServiceNavigationServiceContainer(props, ref) {
  return (
    <Stack
      ref={ref}
      display={{ base: 'block', md: 'flex' }}
      alignItems={{ md: 'center' }}
      justifyContent="space-between"
      flexShrink={0}
      {...props}
    >
      {props.children}
    </Stack>
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
    { navigationId, openLabel = 'Menu', closedLabel = 'Menu', children, ...props },
    ref
  ) {
    const context = useServiceNavigationContext()
    const resolvedNavigationId = navigationId ?? context?.navigationId
    const isMobileOpen = context?.isMobileOpen ?? false

    return (
      <Box display={{ base: 'block', md: 'none' }} w="full" px={{ base: pxToRem(15), md: 0 }}>
        <Button
          ref={ref}
          variant="plain"
          display={{ base: 'inline-flex', md: 'none' }}
          type="button"
          justifyContent="flex-start"
          color={'primary.500'}
          gap={pxToRem(6)}
          px={0}
          minH="auto"
          h="auto"
          aria-controls={resolvedNavigationId}
          aria-expanded={isMobileOpen}
          onClick={() => context?.setIsMobileOpen((current) => !current)}
          mb={pxToRem(10)}
          borderRadius={2}
          _hover={{ bg: 'transparent' }}
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
        >
          <Text
            as="span"
            fontWeight="700"
            textDecoration="none"
            color={'currentColor'}
            fontSize={19}
          >
            {children ?? (isMobileOpen ? closedLabel : openLabel)}
          </Text>

          <MenuCaretIcon transform={isMobileOpen ? 'rotate(180deg)' : undefined} />
        </Button>
      </Box>
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
        flexWrap={'wrap'}
        py={{ base: pxToRem(8), md: 0 }}
        gap={{ base: 0, md: pxToRem(30) }}
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
        flexShrink={0}
        py={{ base: pxToRem(5), md: pxToRem(18) }}
        _last={{ mr: { md: 0 } }}
        data-current={isCurrent ? 'true' : 'false'}
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          top: { base: 'auto', md: 'auto' },
          height: { base: pxToRem(25), md: pxToRem(4) },
          bottom: { base: '50%', md: 0 },
          right: { base: 0, md: 'auto' },
          width: { base: pxToRem(4), md: '100%' },
          backgroundColor: 'primary.500',
          display: isCurrent ? 'block' : 'none',
          visibility: isCurrent ? 'visible' : 'hidden',
          transform: { base: 'translateY(50%)', md: 'none' },
        }}
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
        w={{ base: 'full', md: 'auto' }}
        ps={{ base: pxToRem(15), md: 0 }}
        textDecoration="none"
        _hover={{
          color: 'primary.800',
          textDecoration: 'underline',
          textDecorationThickness: pxToRem(3),
          textUnderlineOffset: pxToRem(3),
        }}
        {...props}
      >
        <Text as="span" fontSize={19} textDecoration="none" color={'currentColor'}>
          {props.children}
        </Text>
      </Link>
    )
  }
)

export const ServiceNavigation = Object.assign(ServiceNavigationRoot, {
  Root: ServiceNavigationRoot,
  ServiceName: ServiceNavigationServiceName,
  ServiceContainer: ServiceNavigationServiceContainer,
  Nav: ServiceNavigationNav,
  Toggle: ServiceNavigationToggle,
  List: ServiceNavigationList,
  Item: ServiceNavigationItem,
  Link: ServiceNavigationLink,
})

export {
  ServiceNavigationRoot,
  ServiceNavigationServiceName,
  ServiceNavigationServiceContainer,
  ServiceNavigationNav,
  ServiceNavigationToggle,
  ServiceNavigationList,
  ServiceNavigationItem,
  ServiceNavigationLink,
}
