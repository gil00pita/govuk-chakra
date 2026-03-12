import * as React from 'react'

import {
  AlertRootProps,
  Box,
  BoxProps,
  Alert as ChakraAlert,
  HStack,
  IconProps,
  Text,
} from '@chakra-ui/react'
import { GoAlert, GoCheckCircle } from 'react-icons/go'

import { FiInfo } from 'react-icons/fi'
import { TbAlertHexagon } from 'react-icons/tb'

type Status = 'info' | 'success' | 'warning' | 'error'

interface GovUKAlertRootProps extends Omit<AlertRootProps, 'status'> {
  status?: Status
  /**
   * Optional override icon (replaces default status icon)
   */
  icon?: React.ReactElement<IconProps>
}

const STATUS_STYLES: Record<
  Status,
  { borderColor: string; bg: string; iconColor: string; icon: React.ReactElement }
> = {
  info: {
    borderColor: 'brand.blue',
    bg: 'bg.subtle',
    iconColor: 'brand.blue',
    icon: <FiInfo />,
  },
  success: {
    borderColor: 'green.600',
    bg: 'green.50',
    iconColor: 'green.700',
    icon: <GoCheckCircle />,
  },
  warning: {
    borderColor: 'yellow.500',
    bg: 'yellow.50',
    iconColor: 'yellow.600',
    icon: <TbAlertHexagon />,
  },
  error: {
    borderColor: 'brand.red',
    bg: 'red.50',
    iconColor: 'brand.red',
    icon: <GoAlert />,
  },
}

// Fallbacks in case the namespace object doesn't expose subcomponents (avoids undefined .displayName errors)
const _AlertNS: any = ChakraAlert
const ChakraAlertRootBase = _AlertNS.Root || _AlertNS
const ChakraAlertTitleBase = _AlertNS.Title || ((p: any) => <Text as="h3" {...p} />)
const ChakraAlertDescriptionBase = _AlertNS.Description || ((p: any) => <Text {...p} />)

// Indicator (icon) wrapper
const AlertIndicator = ({ children, ...rest }: BoxProps) => (
  <Box as="span" mt="1px" fontSize="20px" lineHeight="1" aria-hidden="true" {...rest}>
    {children}
  </Box>
)
AlertIndicator.displayName = 'AlertIndicator'

// Root
const AlertRoot = React.forwardRef<HTMLDivElement, GovUKAlertRootProps>((props, ref) => {
  const {
    status = 'info',
    icon,
    children,
    role = status === 'error' ? 'alert' : 'status',
    ...rest
  } = props
  const styles = STATUS_STYLES[status]
  return (
    <ChakraAlertRootBase
      ref={ref}
      role={role}
      data-status={status}
      display="block"
      w="full"
      bg={styles.bg}
      borderLeftWidth="5px"
      borderLeftColor={styles.borderColor}
      borderRadius="0"
      p={4}
      fontSize="16px"
      lineHeight="1.4"
      {...rest}
    >
      <HStack align="flex-start" gap={3}>
        <AlertIndicator color={styles.iconColor}>{icon ?? styles.icon}</AlertIndicator>
        <Box flex="1" minW={0}>
          {children}
        </Box>
      </HStack>
    </ChakraAlertRootBase>
  )
})
AlertRoot.displayName = 'AlertRoot'

// Title
interface GovUKAlertTitleProps {
  children: React.ReactNode
  [k: string]: any
}
const AlertTitle = ({ children, ...rest }: GovUKAlertTitleProps) => (
  <ChakraAlertTitleBase
    as="h3"
    fontSize="19px"
    lineHeight="1.25"
    fontWeight="bold"
    mb={1}
    _last={{ mb: 0 }}
    {...rest}
  >
    {children}
  </ChakraAlertTitleBase>
)
AlertTitle.displayName = 'AlertTitle'

// Description
interface GovUKAlertDescriptionProps {
  children: React.ReactNode
  [k: string]: any
}
const AlertDescription = ({ children, ...rest }: GovUKAlertDescriptionProps) => (
  <ChakraAlertDescriptionBase fontSize="16px" lineHeight="1.45" {...rest}>
    {children}
  </ChakraAlertDescriptionBase>
)
AlertDescription.displayName = 'AlertDescription'

// Inline helper (optional subtle text)
interface GovUKAlertMetaProps {
  children: React.ReactNode
  [k: string]: any
}
const AlertMeta = ({ children, ...rest }: GovUKAlertMetaProps) => (
  <Text mt={2} fontSize="14px" color="fg.muted" {...rest}>
    {children}
  </Text>
)
AlertMeta.displayName = 'AlertMeta'

// Compound export (add Root alias, set displayName once, remove later mutations)
const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Indicator: AlertIndicator,
  Title: AlertTitle,
  Description: AlertDescription,
  Meta: AlertMeta,
})
;(Alert as any).displayName = 'Alert'

// Clean exports
export { Alert, AlertRoot, AlertIndicator, AlertTitle, AlertDescription, AlertMeta }
