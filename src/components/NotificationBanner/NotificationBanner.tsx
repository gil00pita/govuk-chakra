import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export type NotificationBannerVariant = 'info' | 'success'

export interface NotificationBannerProps extends BoxProps {
  heading?: ReactNode
  variant?: NotificationBannerVariant
  children?: ReactNode
}

export interface NotificationBannerHeaderProps extends BoxProps {
  variant?: NotificationBannerVariant
}

export interface NotificationBannerTitleProps extends React.ComponentProps<typeof Heading> {}

export interface NotificationBannerContentProps extends BoxProps {}

export interface NotificationBannerHeadingProps extends React.ComponentProps<typeof Heading> {}

export interface NotificationBannerBodyProps extends React.ComponentProps<typeof Text> {}

const variantStyles: Record<NotificationBannerVariant, { borderColor: string; headerBg: string }> =
  {
    info: {
      borderColor: 'brand.500',
      headerBg: 'brand.500',
    },
    success: {
      borderColor: 'green.500',
      headerBg: 'green.500',
    },
  }

const NotificationBannerRoot = forwardRef<HTMLDivElement, NotificationBannerProps>(
  function NotificationBanner(
    { heading = 'Important', variant = 'info', children, ...props },
    ref
  ) {
    const titleId = useId()
    const styles = variantStyles[variant]

    return (
      <Box
        ref={ref}
        role={variant === 'success' ? 'alert' : 'region'}
        aria-labelledby={titleId}
        border="5px solid"
        borderColor={styles.borderColor}
        bg="common.white"
        color="grey.950"
        {...props}
      >
        <NotificationBannerHeader variant={variant}>
          <NotificationBannerTitle id={titleId}>{heading}</NotificationBannerTitle>
        </NotificationBannerHeader>
        <NotificationBannerContent>{children}</NotificationBannerContent>
      </Box>
    )
  }
)

const NotificationBannerHeader = forwardRef<HTMLDivElement, NotificationBannerHeaderProps>(
  function NotificationBannerHeader({ variant = 'info', ...props }, ref) {
    return (
      <Box
        ref={ref}
        bg={variantStyles[variant].headerBg}
        px={pxToRem(15)}
        py={pxToRem(10)}
        {...props}
      />
    )
  }
)

const NotificationBannerTitle = forwardRef<HTMLHeadingElement, NotificationBannerTitleProps>(
  function NotificationBannerTitle(props, ref) {
    return <Heading ref={ref} as="h2" size={24} color="common.white" mb={0} {...props} />
  }
)

const NotificationBannerContent = forwardRef<HTMLDivElement, NotificationBannerContentProps>(
  function NotificationBannerContent(props, ref) {
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

const NotificationBannerHeading = forwardRef<HTMLHeadingElement, NotificationBannerHeadingProps>(
  function NotificationBannerHeading(props, ref) {
    return <Heading ref={ref} as="h3" size={24} color="grey.950" mb={pxToRem(15)} {...props} />
  }
)

const NotificationBannerBody = forwardRef<HTMLParagraphElement, NotificationBannerBodyProps>(
  function NotificationBannerBody(props, ref) {
    return <Text ref={ref} fontSize={19} color="grey.950" mb={0} {...props} />
  }
)

export const NotificationBanner = Object.assign(NotificationBannerRoot, {
  Root: NotificationBannerRoot,
  Header: NotificationBannerHeader,
  Title: NotificationBannerTitle,
  Content: NotificationBannerContent,
  Heading: NotificationBannerHeading,
  Body: NotificationBannerBody,
})

export {
  NotificationBannerRoot,
  NotificationBannerHeader,
  NotificationBannerTitle,
  NotificationBannerContent,
  NotificationBannerHeading,
  NotificationBannerBody,
}
