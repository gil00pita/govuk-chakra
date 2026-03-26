import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export type GOVUKFooterProps = BoxProps

export type GOVUKFooterContainerProps = BoxProps

export type GOVUKFooterNavigationProps = BoxProps

export type GOVUKFooterSectionProps = BoxProps

export type GOVUKFooterSectionTitleProps = React.ComponentProps<typeof Heading>

export type GOVUKFooterListProps = BoxProps

export type GOVUKFooterListItemProps = BoxProps

export type GOVUKFooterLinkProps = React.ComponentProps<typeof Link>

export type GOVUKFooterMetaProps = BoxProps

export type GOVUKFooterMetaItemProps = BoxProps

export type GOVUKFooterMetaTextProps = React.ComponentProps<typeof Text>

const GOVUKFooterRoot = forwardRef<HTMLElement, GOVUKFooterProps>(function GOVUKFooter(props, ref) {
  return (
    <Box
      ref={ref}
      as="footer"
      borderTop="10px solid"
      borderColor="primary.500"
      bgColor="primary.50"
      color="fg"
      w={'full'}
      mt={pxToRem(60)}
      pt={{ base: pxToRem(40), md: pxToRem(48) }}
      pb={{ base: pxToRem(24), md: pxToRem(32) }}
      _dark={{
        bgColor: 'primary.950',
      }}
      {...props}
    />
  )
})

const GOVUKFooterContainer = forwardRef<HTMLDivElement, GOVUKFooterContainerProps>(
  function GOVUKFooterContainer(props, ref) {
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

const GOVUKFooterNavigation = forwardRef<HTMLDivElement, GOVUKFooterNavigationProps>(
  function GOVUKFooterNavigation(props, ref) {
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
        borderColor="primary.200"
        {...props}
      />
    )
  }
)

const GOVUKFooterSection = forwardRef<HTMLDivElement, GOVUKFooterSectionProps>(
  function GOVUKFooterSection(props, ref) {
    return <Box ref={ref} className="footer-column" {...props} />
  }
)

const GOVUKFooterSectionTitle = forwardRef<HTMLHeadingElement, GOVUKFooterSectionTitleProps>(
  function GOVUKFooterSectionTitle(props, ref) {
    return (
      <Heading
        ref={ref}
        as="h2"
        size={24}
        color="fg"
        mb={{ base: pxToRem(16), md: pxToRem(20) }}
        {...props}
      />
    )
  }
)

const GOVUKFooterList = forwardRef<HTMLUListElement, GOVUKFooterListProps>(
  function GOVUKFooterList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="grid"
        gap={{ base: pxToRem(12), md: pxToRem(20) }}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const GOVUKFooterListItem = forwardRef<HTMLLIElement, GOVUKFooterListItemProps>(
  function GOVUKFooterListItem(props, ref) {
    return <Box ref={ref} as="li" m={0} p={0} {...props} />
  }
)

const GOVUKFooterLink = forwardRef<HTMLAnchorElement, GOVUKFooterLinkProps>(
  function GOVUKFooterLink(props, ref) {
    return (
      <Link ref={ref} {...props}>
        <Text as={'span'} fontSize={19}>
          {props.children}
        </Text>
      </Link>
    )
  }
)

const GOVUKFooterMeta = forwardRef<HTMLDivElement, GOVUKFooterMetaProps>(
  function GOVUKFooterMeta(props, ref) {
    return (
      <Box
        ref={ref}
        className="meta"
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

const GOVUKFooterMetaItem = forwardRef<HTMLDivElement, GOVUKFooterMetaItemProps>(
  function GOVUKFooterMetaItem(props, ref) {
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

const GOVUKFooterMetaText = forwardRef<HTMLParagraphElement, GOVUKFooterMetaTextProps>(
  function GOVUKFooterMetaText(props, ref) {
    return (
      <Text
        ref={ref}
        className="text"
        fontSize={16}
        color="fg"
        mb={0}
        justifySelf={{ md: 'end' }}
        textAlign={{ md: 'right' }}
        {...props}
      />
    )
  }
)

export const GOVUKFooter = Object.assign(GOVUKFooterRoot, {
  Root: GOVUKFooterRoot,
  Container: GOVUKFooterContainer,
  Navigation: GOVUKFooterNavigation,
  Section: GOVUKFooterSection,
  SectionTitle: GOVUKFooterSectionTitle,
  List: GOVUKFooterList,
  ListItem: GOVUKFooterListItem,
  Link: GOVUKFooterLink,
  Meta: GOVUKFooterMeta,
  MetaItem: GOVUKFooterMetaItem,
  MetaText: GOVUKFooterMetaText,
})

export {
  GOVUKFooterRoot,
  GOVUKFooterContainer,
  GOVUKFooterNavigation,
  GOVUKFooterSection,
  GOVUKFooterSectionTitle,
  GOVUKFooterList,
  GOVUKFooterListItem,
  GOVUKFooterLink,
  GOVUKFooterMeta,
  GOVUKFooterMetaItem,
  GOVUKFooterMetaText,
}
