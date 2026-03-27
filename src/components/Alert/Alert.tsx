import { Box, type BoxProps } from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export type AlertStatus = 'info' | 'warning' | 'success' | 'error' | 'neutral'
export type AlertVariant = 'subtle' | 'surface' | 'outline' | 'solid'

type AlertContextValue = {
  status: AlertStatus
  titleId: string
}

const AlertContext = createContext<AlertContextValue | null>(null)

function useAlertContext(componentName: string) {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error(`${componentName} must be used within Alert.Root`)
  }

  return context
}

const statusStyles: Record<
  AlertStatus,
  {
    borderColor: string
    headerBg: string
    label: string
    role: 'alert' | 'region'
  }
> = {
  info: {
    borderColor: 'primary.500',
    headerBg: 'primary.500',
    label: 'Important',
    role: 'region',
  },
  warning: {
    borderColor: 'orange.600',
    headerBg: 'orange.600',
    label: 'Important',
    role: 'region',
  },
  success: {
    borderColor: 'green.500',
    headerBg: 'green.500',
    label: 'Success',
    role: 'alert',
  },
  error: {
    borderColor: 'red.500',
    headerBg: 'red.500',
    label: 'Error',
    role: 'alert',
  },
  neutral: {
    borderColor: 'grey.700',
    headerBg: 'grey.700',
    label: 'Important',
    role: 'region',
  },
}

export interface AlertProps extends Omit<BoxProps, 'title'> {
  children?: ReactNode
  status?: AlertStatus
  variant?: AlertVariant
}

export type AlertContentProps = BoxProps

export type AlertTitleProps = ComponentPropsWithoutRef<typeof Heading>

export type AlertDescriptionProps = ComponentPropsWithoutRef<typeof Text>

export type AlertIndicatorProps = HTMLAttributes<HTMLSpanElement>

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(function AlertRoot(
  { children, status = 'info', variant, ...props },
  ref
) {
  const titleId = useId()
  const styles = statusStyles[status]

  void variant

  return (
    <AlertContext.Provider value={{ status, titleId }}>
      <Box
        ref={ref}
        role={styles.role}
        aria-labelledby={titleId}
        border="5px solid"
        borderColor={styles.borderColor}
        bg="common.white"
        color="fg"
        {...props}
      >
        <Box bg={styles.headerBg} px={pxToRem(15)} py={pxToRem(10)}>
          <Heading as="h2" id={titleId} size={24} color="common.white" mb={0}>
            {styles.label}
          </Heading>
        </Box>
        {children}
      </Box>
    </AlertContext.Provider>
  )
})

AlertRoot.displayName = 'Alert'

const AlertContent = forwardRef<HTMLDivElement, AlertContentProps>(
  function AlertContent(props, ref) {
    return (
      <Box
        ref={ref}
        px={{ base: pxToRem(15), md: pxToRem(20) }}
        py={{ base: pxToRem(15), md: pxToRem(20) }}
        {...props}
      />
    )
  }
)

AlertContent.displayName = 'AlertContent'

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(function AlertTitle(
  { as = 'h3', color = 'fg', mb = pxToRem(15), size = 24, ...props },
  ref
) {
  useAlertContext('Alert.Title')

  return <Heading ref={ref} as={as} color={color} mb={mb} size={size} {...props} />
})

AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  function AlertDescription({ color = 'fg', fontSize = 19, mb = 0, ...props }, ref) {
    useAlertContext('Alert.Description')

    return <Text ref={ref} color={color} fontSize={fontSize} mb={mb} {...props} />
  }
)

AlertDescription.displayName = 'AlertDescription'

const AlertIndicator = forwardRef<HTMLSpanElement, AlertIndicatorProps>(
  function AlertIndicator(props, ref) {
    return <Box ref={ref} as="span" display="none" aria-hidden="true" {...props} />
  }
)

AlertIndicator.displayName = 'AlertIndicator'

export { AlertRoot, AlertContent, AlertTitle, AlertDescription, AlertIndicator }

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
  Indicator: AlertIndicator,
})
