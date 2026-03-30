import { Box, type BoxProps } from '@chakra-ui/react'
import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdInformationCircle, IoMdWarning } from 'react-icons/io'
import { MdOutlineError } from 'react-icons/md'

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

const statusIcons: Record<AlertStatus, ReactNode> = {
  info: <IoMdInformationCircle />,
  warning: <IoMdWarning />,
  success: <FaCircleCheck />,
  error: <MdOutlineError />,
  neutral: <IoMdInformationCircle />,
}

export interface AlertProps extends Omit<BoxProps, 'title'> {
  children?: ReactNode
  showIndicator?: boolean
  status?: AlertStatus
  variant?: AlertVariant
}

export type AlertTitleProps = ComponentPropsWithoutRef<typeof Heading>

export type AlertDescriptionProps = ComponentPropsWithoutRef<typeof Text>

export type AlertIndicatorProps = HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode
}

const AlertIndicator = forwardRef<HTMLSpanElement, AlertIndicatorProps>(function AlertIndicator(
  { children, ...props },
  ref
) {
  const { status } = useAlertContext('Alert.Indicator')

  return (
    <Box
      ref={ref}
      as="span"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      fontSize={pxToRem(24)}
      lineHeight="1"
      color="common.white"
      aria-hidden="true"
      {...props}
    >
      {children ?? statusIcons[status]}
    </Box>
  )
})

AlertIndicator.displayName = 'AlertIndicator'

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(function AlertRoot(
  { children, showIndicator = true, status = 'info', variant, ...props },
  ref
) {
  const titleId = useId()
  const styles = statusStyles[status]
  const childArray = Children.toArray(children)
  const indicatorChild = childArray.find(
    (child) => isValidElement(child) && child.type === AlertIndicator
  )
  const bodyChildren = childArray.filter((child) => child !== indicatorChild)

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
        <Box
          bg={styles.headerBg}
          px={pxToRem(15)}
          py={pxToRem(10)}
          display="flex"
          alignItems="center"
          gap={pxToRem(10)}
        >
          {showIndicator ? (
            isValidElement(indicatorChild) ? (
              indicatorChild
            ) : (
              <AlertIndicator />
            )
          ) : null}
          <Heading as="h2" id={titleId} size={24} color="common.white" mb={0}>
            {styles.label}
          </Heading>
        </Box>
        <Box
          px={{ base: pxToRem(15), md: pxToRem(20) }}
          py={{ base: pxToRem(15), md: pxToRem(20) }}
        >
          {bodyChildren}
        </Box>
      </Box>
    </AlertContext.Provider>
  )
})

AlertRoot.displayName = 'Alert'

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

export { AlertRoot, AlertTitle, AlertDescription, AlertIndicator }

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
  Indicator: AlertIndicator,
})
