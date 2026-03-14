import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export type GovUKFooterProps = BoxProps

export type GovUKFooterContainerProps = BoxProps

export type GovUKFooterNavigationProps = BoxProps

export type GovUKFooterSectionProps = BoxProps

export type GovUKFooterSectionTitleProps = React.ComponentProps<typeof Heading>

export type GovUKFooterListProps = BoxProps

export type GovUKFooterListItemProps = BoxProps

export type GovUKFooterLinkProps = React.ComponentProps<typeof Link>

export type GovUKFooterMetaProps = BoxProps

export type GovUKFooterMetaItemProps = BoxProps

export type GovUKFooterMetaTextProps = React.ComponentProps<typeof Text>

const GovUKFooterRoot = forwardRef<HTMLElement, GovUKFooterProps>(function GovUKFooter(props, ref) {
  return (
    <Box
      ref={ref}
      as="footer"
      borderTop="10px solid"
      borderColor="brand.500"
      bg="primary.50"
      color="fg"
      mt={pxToRem(60)}
      pt={{ base: pxToRem(40), md: pxToRem(48) }}
      pb={{ base: pxToRem(24), md: pxToRem(32) }}
      {...props}
    />
  )
})

const GovUKFooterContainer = forwardRef<HTMLDivElement, GovUKFooterContainerProps>(
  function GovUKFooterContainer(props, ref) {
    return (
      <Box
        ref={ref}
        className="footer-container"
        maxW="1200px"
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        {...props}
      >
        {props.children}
      </Box>
    )
  }
)

const GovUKFooterNavigation = forwardRef<HTMLDivElement, GovUKFooterNavigationProps>(
  function GovUKFooterNavigation(props, ref) {
    return (
      <Box
        ref={ref}
        className="footer-navigation"
        display="grid"
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, minmax(0, 1fr))',
          xl: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
        columnGap={{ base: pxToRem(24), md: pxToRem(30) }}
        rowGap={{ base: pxToRem(24), md: pxToRem(32) }}
        pb={{ base: pxToRem(24), md: pxToRem(32) }}
        mb={{ base: pxToRem(20), md: pxToRem(24) }}
        borderBottom="1px solid"
        borderColor="grey.300"
        {...props}
      />
    )
  }
)

const GovUKFooterSection = forwardRef<HTMLDivElement, GovUKFooterSectionProps>(
  function GovUKFooterSection(props, ref) {
    return <Box ref={ref} className="footer-column" {...props} />
  }
)

const GovUKFooterSectionTitle = forwardRef<HTMLHeadingElement, GovUKFooterSectionTitleProps>(
  function GovUKFooterSectionTitle(props, ref) {
    return (
      <Heading
        ref={ref}
        as="h2"
        size={24}
        color="grey.950"
        mb={{ base: pxToRem(16), md: pxToRem(20) }}
        {...props}
      />
    )
  }
)

const GovUKFooterList = forwardRef<HTMLUListElement, GovUKFooterListProps>(
  function GovUKFooterList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="grid"
        gap={{ base: pxToRem(12), md: pxToRem(14) }}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const GovUKFooterListItem = forwardRef<HTMLLIElement, GovUKFooterListItemProps>(
  function GovUKFooterListItem(props, ref) {
    return <Box ref={ref} as="li" m={0} p={0} {...props} />
  }
)

const GovUKFooterLink = forwardRef<HTMLAnchorElement, GovUKFooterLinkProps>(
  function GovUKFooterLink(props, ref) {
    return <Link ref={ref} fontSize={16} color="grey.950" lineHeight={pxToRem(20)} {...props} />
  }
)

const GovUKFooterMeta = forwardRef<HTMLDivElement, GovUKFooterMetaProps>(
  function GovUKFooterMeta(props, ref) {
    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'minmax(0, 1fr) auto' }}
        alignItems="start"
        justifyContent="space-between"
        columnGap={{ base: pxToRem(20), md: pxToRem(30) }}
        rowGap={{ base: pxToRem(16), md: pxToRem(20) }}
        {...props}
      />
    )
  }
)

const GovUKFooterMetaItem = forwardRef<HTMLDivElement, GovUKFooterMetaItemProps>(
  function GovUKFooterMetaItem(props, ref) {
    return (
      <Box
        ref={ref}
        display="flex"
        flexWrap="wrap"
        columnGap={pxToRem(16)}
        rowGap={pxToRem(8)}
        alignItems="center"
        fontSize={16}
        lineHeight={pxToRem(20)}
        {...props}
      />
    )
  }
)

const GovUKFooterMetaText = forwardRef<HTMLParagraphElement, GovUKFooterMetaTextProps>(
  function GovUKFooterMetaText(props, ref) {
    return (
      <Text
        ref={ref}
        fontSize={16}
        color="grey.950"
        lineHeight={pxToRem(20)}
        mb={0}
        justifySelf={{ md: 'end' }}
        textAlign={{ md: 'right' }}
        {...props}
      />
    )
  }
)

export const GovUKFooter = Object.assign(GovUKFooterRoot, {
  Root: GovUKFooterRoot,
  Container: GovUKFooterContainer,
  Navigation: GovUKFooterNavigation,
  Section: GovUKFooterSection,
  SectionTitle: GovUKFooterSectionTitle,
  List: GovUKFooterList,
  ListItem: GovUKFooterListItem,
  Link: GovUKFooterLink,
  Meta: GovUKFooterMeta,
  MetaItem: GovUKFooterMetaItem,
  MetaText: GovUKFooterMetaText,
})

export {
  GovUKFooterRoot,
  GovUKFooterContainer,
  GovUKFooterNavigation,
  GovUKFooterSection,
  GovUKFooterSectionTitle,
  GovUKFooterList,
  GovUKFooterListItem,
  GovUKFooterLink,
  GovUKFooterMeta,
  GovUKFooterMetaItem,
  GovUKFooterMetaText,
}
