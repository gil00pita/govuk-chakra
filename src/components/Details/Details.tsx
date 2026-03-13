import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface DetailsProps extends BoxProps {
  summary: ReactNode
  children: ReactNode
}

export interface DetailsSummaryProps extends BoxProps {
  children: ReactNode
}

export interface DetailsTextProps extends React.ComponentProps<typeof Text> {}

const DetailsRoot = forwardRef<HTMLDetailsElement, DetailsProps>(function Details(
  { summary, children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="details" mb={pxToRem(20)} {...props}>
      <DetailsSummary>{summary}</DetailsSummary>
      <Box mt={pxToRem(15)} pl={pxToRem(20)} borderLeft="5px solid" borderLeftColor="fg.muted">
        {children}
      </Box>
    </Box>
  )
})

const DetailsSummary = forwardRef<HTMLElement, DetailsSummaryProps>(function DetailsSummary(
  { children, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      as="summary"
      display="inline-flex"
      alignItems="center"
      gap={pxToRem(8)}
      cursor="pointer"
      color="brand.500"
      textDecoration="underline"
      textDecorationThickness="max(1px, 0.0625rem)"
      textUnderlineOffset="0.1578em"
      fontSize={pxToRem(19)}
      lineHeight={pxToRem(25)}
      _hover={{
        color: 'brand.700',
        textDecorationThickness: 'max(3px, 0.1875rem)',
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'common.black',
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)',
      }}
      css={{
        '&::-webkit-details-marker': {
          display: 'none',
        },
      }}
      {...props}
    >
      <Box
        as="span"
        aria-hidden="true"
        width={0}
        height={0}
        borderTop={`${pxToRem(6)} solid transparent`}
        borderBottom={`${pxToRem(6)} solid transparent`}
        borderLeft={`${pxToRem(10)} solid currentColor`}
        transform="rotate(0deg)"
        transition="transform 0.1s ease"
        css={{
          'details[open] &': {
            transform: 'rotate(90deg)',
          },
        }}
      />
      {children}
    </Box>
  )
})

const DetailsText = forwardRef<HTMLParagraphElement, DetailsTextProps>(
  function DetailsText(props, ref) {
    return <Text ref={ref} fontSize={19} color="fg" mb={0} {...props} />
  }
)

export const Details = Object.assign(DetailsRoot, {
  Root: DetailsRoot,
  Summary: DetailsSummary,
  Text: DetailsText,
})

export { DetailsRoot, DetailsSummary, DetailsText }
