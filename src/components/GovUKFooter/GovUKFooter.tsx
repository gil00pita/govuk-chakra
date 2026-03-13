import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface GovUKFooterProps extends BoxProps {}

export interface GovUKFooterContainerProps extends BoxProps {}

export interface GovUKFooterNavigationProps extends BoxProps {}

export interface GovUKFooterSectionProps extends BoxProps {}

export interface GovUKFooterSectionTitleProps extends React.ComponentProps<typeof Heading> {}

export interface GovUKFooterListProps extends BoxProps {}

export interface GovUKFooterListItemProps extends BoxProps {}

export interface GovUKFooterLinkProps extends React.ComponentProps<typeof Link> {}

export interface GovUKFooterMetaProps extends BoxProps {}

export interface GovUKFooterMetaItemProps extends BoxProps {}

export interface GovUKFooterMetaTextProps extends React.ComponentProps<typeof Text> {}

const GovUKFooterRoot = forwardRef<HTMLElement, GovUKFooterProps>(function GovUKFooter(props, ref) {
  return (
    <Box
      ref={ref}
      as="footer"
      borderTop="1px solid"
      borderColor="grey.300"
      bg="grey.50"
      color="grey.950"
      mt={pxToRem(60)}
      py={{ base: pxToRem(30), md: pxToRem(40) }}
      {...props}
    />
  )
})

const GovUKFooterContainer = forwardRef<HTMLDivElement, GovUKFooterContainerProps>(
  function GovUKFooterContainer(props, ref) {
    return (
      <Box
        ref={ref}
        maxW="1200px"
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        {...props}
      />
    )
  }
)

const GovUKFooterNavigation = forwardRef<HTMLDivElement, GovUKFooterNavigationProps>(
  function GovUKFooterNavigation(props, ref) {
    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        gap={{ base: pxToRem(30), md: pxToRem(40) }}
        pb={pxToRem(30)}
        mb={pxToRem(30)}
        borderBottom="1px solid"
        borderColor="grey.300"
        {...props}
      />
    )
  }
)

const GovUKFooterSection = forwardRef<HTMLDivElement, GovUKFooterSectionProps>(
  function GovUKFooterSection(props, ref) {
    return <Box ref={ref} {...props} />
  }
)

const GovUKFooterSectionTitle = forwardRef<HTMLHeadingElement, GovUKFooterSectionTitleProps>(
  function GovUKFooterSectionTitle(props, ref) {
    return <Heading ref={ref} as="h2" size={24} color="grey.950" mb={pxToRem(15)} {...props} />
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
        gap={pxToRem(10)}
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
    return <Link ref={ref} color="grey.950" _visited={{ color: 'grey.950' }} {...props} />
  }
)

const GovUKFooterMeta = forwardRef<HTMLDivElement, GovUKFooterMetaProps>(
  function GovUKFooterMeta(props, ref) {
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ md: 'center' }}
        justifyContent="space-between"
        gap={pxToRem(20)}
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
        gap={pxToRem(15)}
        alignItems="center"
        {...props}
      />
    )
  }
)

const GovUKFooterMetaText = forwardRef<HTMLParagraphElement, GovUKFooterMetaTextProps>(
  function GovUKFooterMetaText(props, ref) {
    return <Text ref={ref} fontSize={16} color="grey.950" mb={0} {...props} />
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
