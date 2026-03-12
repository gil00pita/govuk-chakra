import { Box, VisuallyHidden, type BoxProps, type HTMLChakraProps } from '@chakra-ui/react'
import { forwardRef, type ComponentProps, type ReactNode } from 'react'

import { Heading } from '../Heading/Heading'
import { Link } from '../Link/Link'
import { pxToRem } from '../../utils'

export interface SummaryListRootProps extends BoxProps {}

export interface SummaryListRowProps extends BoxProps {}

export interface SummaryListKeyProps extends HTMLChakraProps<'dt'> {}

export interface SummaryListValueProps extends HTMLChakraProps<'dd'> {}

export interface SummaryListActionsProps extends HTMLChakraProps<'dd'> {}

export interface SummaryListActionsListProps extends BoxProps {}

export interface SummaryListActionsListItemProps extends BoxProps {}

export interface SummaryListActionLinkProps extends ComponentProps<typeof Link> {
  visuallyHiddenText?: ReactNode
}

export interface SummaryCardProps extends BoxProps {}

export interface SummaryCardHeaderProps extends BoxProps {}

export interface SummaryCardTitleProps extends ComponentProps<typeof Heading> {}

export interface SummaryCardActionsProps extends BoxProps {}

export interface SummaryCardContentProps extends BoxProps {}

const rowBorderColor = 'grey.100'

const SummaryListRoot = forwardRef<HTMLDListElement, SummaryListRootProps>(
  function SummaryListRoot(props, ref) {
    return (
      <Box
        ref={ref}
        as="dl"
        width="100%"
        m={0}
        color="grey.950"
        fontSize={19}
        lineHeight={1.3157894737}
        {...props}
      />
    )
  }
)

const SummaryListRow = forwardRef<HTMLDivElement, SummaryListRowProps>(
  function SummaryListRow(props, ref) {
    return (
      <Box
        ref={ref}
        as="div"
        py={{ base: pxToRem(15), md: pxToRem(20) }}
        borderBottom="1px solid"
        borderColor={rowBorderColor}
        display={{ base: 'block', md: 'grid' }}
        gridTemplateColumns={{ md: 'minmax(0, 30%) minmax(0, 1fr) auto' }}
        columnGap={{ md: pxToRem(20) }}
        rowGap={{ base: pxToRem(6), md: 0 }}
        alignItems="start"
        _first={{ borderTop: '1px solid', borderColor: rowBorderColor }}
        {...props}
      />
    )
  }
)

const SummaryListKey = forwardRef<HTMLElement, SummaryListKeyProps>(
  function SummaryListKey(props, ref) {
    return (
      <Box
        ref={ref}
        as="dt"
        m={0}
        fontWeight="700"
        color="grey.950"
        pr={{ md: pxToRem(20) }}
        {...props}
      />
    )
  }
)

const SummaryListValue = forwardRef<HTMLElement, SummaryListValueProps>(
  function SummaryListValue(props, ref) {
    return <Box ref={ref} as="dd" m={0} color="grey.950" overflowWrap="break-word" {...props} />
  }
)

const SummaryListActions = forwardRef<HTMLElement, SummaryListActionsProps>(
  function SummaryListActions(props, ref) {
    return (
      <Box
        ref={ref}
        as="dd"
        m={0}
        mt={{ base: pxToRem(6), md: 0 }}
        textAlign={{ md: 'right' }}
        whiteSpace={{ md: 'nowrap' }}
        color="grey.950"
        {...props}
      />
    )
  }
)

const SummaryListActionsList = forwardRef<HTMLDivElement, SummaryListActionsListProps>(
  function SummaryListActionsList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        justifyContent={{ md: 'flex-end' }}
        gap={pxToRem(10)}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const SummaryListActionsListItem = forwardRef<HTMLDivElement, SummaryListActionsListItemProps>(
  function SummaryListActionsListItem(props, ref) {
    return <Box ref={ref} as="li" m={0} p={0} {...props} />
  }
)

const SummaryListActionLink = forwardRef<HTMLAnchorElement, SummaryListActionLinkProps>(
  function SummaryListActionLink({ children, visuallyHiddenText, ...props }, ref) {
    return (
      <Link ref={ref} {...props}>
        {children}
        {visuallyHiddenText ? <VisuallyHidden>{` ${visuallyHiddenText}`}</VisuallyHidden> : null}
      </Link>
    )
  }
)

const SummaryCard = forwardRef<HTMLDivElement, SummaryCardProps>(function SummaryCard(props, ref) {
  return (
    <Box
      ref={ref}
      border="1px solid"
      borderColor={rowBorderColor}
      width="100%"
      mb={pxToRem(20)}
      {...props}
    />
  )
})

const SummaryCardHeader = forwardRef<HTMLDivElement, SummaryCardHeaderProps>(
  function SummaryCardHeader(props, ref) {
    return (
      <Box
        ref={ref}
        px={{ base: pxToRem(15), md: pxToRem(20) }}
        py={pxToRem(15)}
        bg="grey.50"
        borderBottom="1px solid"
        borderColor={rowBorderColor}
        display={{ base: 'block', md: 'flex' }}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
        gap={pxToRem(15)}
        {...props}
      />
    )
  }
)

const SummaryCardTitle = forwardRef<HTMLHeadingElement, SummaryCardTitleProps>(
  function SummaryCardTitle(props, ref) {
    return <Heading ref={ref} as="h2" size={24} mb={0} {...props} />
  }
)

const SummaryCardActions = forwardRef<HTMLDivElement, SummaryCardActionsProps>(
  function SummaryCardActions(props, ref) {
    return (
      <Box ref={ref} mt={{ base: pxToRem(10), md: 0 }} textAlign={{ md: 'right' }} {...props} />
    )
  }
)

const SummaryCardContent = forwardRef<HTMLDivElement, SummaryCardContentProps>(
  function SummaryCardContent(props, ref) {
    return (
      <Box
        ref={ref}
        px={{ base: pxToRem(15), md: pxToRem(20) }}
        py={0}
        css={{
          '& > dl > div:first-of-type': {
            borderTop: 'none',
          },
        }}
        {...props}
      />
    )
  }
)

export const SummaryList = Object.assign(SummaryListRoot, {
  Root: SummaryListRoot,
  Row: SummaryListRow,
  Key: SummaryListKey,
  Value: SummaryListValue,
  Actions: SummaryListActions,
  ActionsList: SummaryListActionsList,
  ActionsListItem: SummaryListActionsListItem,
  ActionLink: SummaryListActionLink,
  Card: SummaryCard,
  CardHeader: SummaryCardHeader,
  CardTitle: SummaryCardTitle,
  CardActions: SummaryCardActions,
  CardContent: SummaryCardContent,
})

export {
  SummaryListRoot,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
  SummaryListActions,
  SummaryListActionsList,
  SummaryListActionsListItem,
  SummaryListActionLink,
  SummaryCard,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardActions,
  SummaryCardContent,
}
