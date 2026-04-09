import { Box, HStack, type BoxProps, type StackProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { Tag, type TagVariant } from '@/components/Tag'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface PhaseBannerProps extends StackProps {
  phase?: 'discovery' | 'alpha' | 'beta' | 'live' | undefined
  children?: ReactNode
}

export type PhaseBannerContentProps = BoxProps

export interface PhaseBannerTagProps extends Omit<React.ComponentProps<typeof Tag>, 'variant'> {
  variant?: TagVariant
}

export type PhaseBannerTextProps = React.ComponentProps<typeof Text>
export type PhaseBannerLinkProps = React.ComponentProps<typeof Link>

function getPhaseBannerStyles(phase: NonNullable<PhaseBannerProps['phase']>): {
  label: string
  tagVariant: TagVariant
} {
  switch (phase) {
    case 'discovery':
      return { label: 'Discovery', tagVariant: 'purple' }
    case 'alpha':
      return { label: 'Alpha', tagVariant: 'grey' }
    case 'live':
      return { label: 'Live', tagVariant: 'green' }
    case 'beta':
    default:
      return { label: 'Beta', tagVariant: 'blue' }
  }
}

const PhaseBannerRoot = forwardRef<HTMLDivElement, PhaseBannerProps>(function PhaseBanner(
  { phase = 'beta', children, ...props },
  ref
) {
  const { label, tagVariant } = getPhaseBannerStyles(phase)

  return (
    <HStack
      className="govuk-phase-banner"
      ref={ref}
      w="full"
      px={{ base: pxToRem(15), md: pxToRem(30) }}
      alignItems="center"
      maxW="1200px"
      {...props}
    >
      <PhaseBannerContent
        maxW="1200px"
        w="full"
        borderBottom="1px solid {colors.border}"
        py={pxToRem(10)}
      >
        <PhaseBannerTag variant={tagVariant}>{label}</PhaseBannerTag>
        {children}
      </PhaseBannerContent>
    </HStack>
  )
})

const PhaseBannerContent = forwardRef<HTMLParagraphElement, PhaseBannerContentProps>(
  function PhaseBannerContent(props, ref) {
    return (
      <Box
        ref={ref}
        as="p"
        display="inline-flex"
        alignItems="center"
        flexWrap="wrap"
        gap={0}
        m={0}
        color="fg"
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(20)}
        {...props}
      />
    )
  }
)

const PhaseBannerTag = forwardRef<HTMLParagraphElement, PhaseBannerTagProps>(
  function PhaseBannerTag({ children, variant = 'blue', ...props }, ref) {
    return (
      <Tag
        ref={ref}
        as="span"
        variant={variant}
        flexShrink={0}
        fontSize={'1rem'}
        fontWeight={500}
        mt={pxToRem(-2)}
        mb={pxToRem(-2)}
        p="4px 8px 2px"
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

const PhaseBannerText = forwardRef<HTMLParagraphElement, PhaseBannerTextProps>(
  function PhaseBannerText(props, ref) {
    return (
      <Text
        ref={ref}
        as="span"
        fontSize={16}
        color="fg"
        mb={0}
        ml={pxToRem(10)}
        alignItems={'center'}
        display="inline-flex"
        {...props}
      />
    )
  }
)

const PhaseBannerLink = forwardRef<HTMLAnchorElement, PhaseBannerLinkProps>(
  function PhaseBannerLink(props, ref) {
    return <Link ref={ref} ml={pxToRem(10)} {...props} />
  }
)

export const PhaseBanner = Object.assign(PhaseBannerRoot, {
  Root: PhaseBannerRoot,
  Content: PhaseBannerContent,
  Tag: PhaseBannerTag,
  Text: PhaseBannerText,
  Link: PhaseBannerLink,
})

export { PhaseBannerRoot, PhaseBannerContent, PhaseBannerTag, PhaseBannerText, PhaseBannerLink }
