import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { Tag, type TagVariant } from '@/components/Tag'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface PhaseBannerProps extends BoxProps {
  phase?: ReactNode
  phaseVariant?: TagVariant
  children?: ReactNode
}

export type PhaseBannerContentProps = BoxProps

export interface PhaseBannerTagProps extends Omit<React.ComponentProps<typeof Tag>, 'variant'> {
  variant?: TagVariant
}

export type PhaseBannerTextProps = React.ComponentProps<typeof Text>

export type PhaseBannerLinkProps = React.ComponentProps<typeof Link>

const PhaseBannerRoot = forwardRef<HTMLDivElement, PhaseBannerProps>(function PhaseBanner(
  { phase = 'Beta', phaseVariant = 'blue', children, ...props },
  ref
) {
  return (
    <Box ref={ref} borderBottom="1px solid" borderColor="grey.100" py={pxToRem(10)} {...props}>
      <PhaseBannerContent>
        <PhaseBannerTag variant={phaseVariant}>{phase}</PhaseBannerTag>
        {children}
      </PhaseBannerContent>
    </Box>
  )
})

const PhaseBannerContent = forwardRef<HTMLParagraphElement, PhaseBannerContentProps>(
  function PhaseBannerContent(props, ref) {
    return (
      <Box
        ref={ref}
        as="p"
        display="flex"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={pxToRem(10)}
        m={0}
        color="grey.950"
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
      <Tag ref={ref} as="strong" variant={variant} flexShrink={0} mt={pxToRem(-1)} {...props}>
        {children}
      </Tag>
    )
  }
)

const PhaseBannerText = forwardRef<HTMLParagraphElement, PhaseBannerTextProps>(
  function PhaseBannerText(props, ref) {
    return <Text ref={ref} as="span" fontSize={16} color="grey.950" mb={0} {...props} />
  }
)

const PhaseBannerLink = forwardRef<HTMLAnchorElement, PhaseBannerLinkProps>(
  function PhaseBannerLink(props, ref) {
    return <Link ref={ref} {...props} />
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
