import { Box, HStack, Stack, type BoxProps } from '@chakra-ui/react'
import { useState } from 'react'

import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { Link } from '@/components/Link/Link'
import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export type CookieDecision = 'accepted' | 'rejected' | null

export interface CookieBannerProps extends BoxProps {
  serviceName?: string
  heading?: string
  essentialCookiesText?: string
  analyticsCookiesText?: string
  acceptButtonText?: string
  rejectButtonText?: string
  hideButtonText?: string
  viewCookiesHref?: string
  viewCookiesText?: string
  acceptedConfirmationText?: string
  rejectedConfirmationText?: string
  defaultDecision?: CookieDecision
  decision?: CookieDecision
  onDecisionChange?: (decision: Exclude<CookieDecision, null>) => void
  onHide?: () => void
}

export function CookieBanner({
  serviceName = 'name of service',
  heading,
  essentialCookiesText = 'We use some essential cookies to make this service work.',
  analyticsCookiesText = "We'd also like to use analytics cookies so we can understand how you use the service and make improvements.",
  acceptButtonText = 'Accept analytics cookies',
  rejectButtonText = 'Reject analytics cookies',
  hideButtonText = 'Hide cookie message',
  viewCookiesHref = '#',
  viewCookiesText = 'View cookies',
  acceptedConfirmationText = "You've accepted analytics cookies. You can change your cookie settings at any time.",
  rejectedConfirmationText = "You've rejected analytics cookies. You can change your cookie settings at any time.",
  defaultDecision = null,
  decision: controlledDecision,
  onDecisionChange,
  onHide,
  ...props
}: CookieBannerProps) {
  const [internalDecision, setInternalDecision] = useState<CookieDecision>(() => defaultDecision)
  const [isVisible, setIsVisible] = useState(true)

  const decision = controlledDecision ?? internalDecision
  const hasDecision = decision !== null
  const computedHeading = heading ?? `Cookies on ${serviceName}`

  const handleDecision = (nextDecision: Exclude<CookieDecision, null>) => {
    if (controlledDecision === undefined) {
      setInternalDecision(nextDecision)
    }
    onDecisionChange?.(nextDecision)
  }

  const handleHide = () => {
    setIsVisible(false)
    onHide?.()
  }

  if (!isVisible) {
    return null
  }

  return (
    <Box
      width="100%"
      bg="primary.50"
      borderBottom="1px solid"
      borderColor="gray.100"
      role="region"
      aria-label={computedHeading}
      _dark={{
        bgColor: 'primary.950',
        borderColor: 'gray.900',
      }}
      {...props}
    >
      <Box maxW="960px" mx="auto" px={{ base: pxToRem(15), md: pxToRem(30) }} py={pxToRem(20)}>
        {!hasDecision ? (
          <Stack gap={pxToRem(15)} alignItems="flex-start">
            <Heading as="h2" size={24} color="fg" mb={0}>
              {computedHeading}
            </Heading>

            <Text fontSize={19} color="fg" mb={0}>
              {essentialCookiesText}
            </Text>

            <Text fontSize={19} color="fg" mb={0}>
              {analyticsCookiesText}
            </Text>

            <HStack wrap="wrap" align="center" gap={pxToRem(12)}>
              <Button onClick={() => handleDecision('accepted')}>{acceptButtonText}</Button>
              <Button variant="primary" onClick={() => handleDecision('rejected')}>
                {rejectButtonText}
              </Button>
              <Link href={viewCookiesHref}>{viewCookiesText}</Link>
            </HStack>
          </Stack>
        ) : (
          <Stack
            gap={pxToRem(12)}
            alignItems="flex-start"
            role="alert"
            tabIndex={-1}
            ref={(node) => {
              if (node) {
                node.focus()
              }
            }}
            _focusVisible={{ outline: 'none' }}
          >
            <Text fontSize={19} color="fg" mb={0}>
              {decision === 'accepted' ? acceptedConfirmationText : rejectedConfirmationText}
            </Text>

            <HStack wrap="wrap" align="center" gap={pxToRem(12)}>
              <Button variant="primary" onClick={handleHide}>
                {hideButtonText}
              </Button>
              <Link href={viewCookiesHref}>{viewCookiesText}</Link>
            </HStack>
          </Stack>
        )}
      </Box>
    </Box>
  )
}
