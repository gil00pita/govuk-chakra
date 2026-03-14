import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface DetailsRootProps extends BoxProps {
  children: ReactNode
}

export interface DetailsSummaryProps extends BoxProps {
  children: ReactNode
}

export interface DetailsContentProps extends BoxProps {
  children: ReactNode
}

export type DetailsTextProps = React.ComponentProps<typeof Text>

const DetailsRoot = forwardRef<HTMLDetailsElement, DetailsRootProps>(function DetailsRoot(
  { children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="details" mb={pxToRem(20)} {...props}>
      {children}
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
      borderRadius={2}
      textDecoration="underline"
      textDecorationThickness="max(1px, 0.0625rem)"
      textUnderlineOffset="0.1578em"
      _hover={{
        color: 'brand.500',
        textDecorationThickness: 'max(3px, 0.1875rem)',
        '&:focus': {
          color: 'black',
        },
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'fg',
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)',
      }}
      _dark={{
        _hover: {
          color: 'brand.200',
          '&:focus': {
            color: 'black',
          },
        },
        _focus: {
          color: 'black',
        },
      }}
      css={{
        '&::-webkit-details-marker': {
          display: 'none',
        },
        'details[open] > &:hover': {
          color: 'fg',
          textDecorationThickness: 'max(3px, 0.1875rem)',
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

const DetailsContent = forwardRef<HTMLDivElement, DetailsContentProps>(function DetailsContent(
  { children, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      mt={pxToRem(15)}
      pl={pxToRem(20)}
      borderLeft="5px solid"
      borderColor="border"
      {...props}
    >
      {children}
    </Box>
  )
})

const DetailsText = forwardRef<HTMLParagraphElement, DetailsTextProps>(
  function DetailsText(props, ref) {
    return <Text ref={ref} fontSize={19} color="fg" mb={0} {...props} />
  }
)

export const Details = {
  Root: DetailsRoot,
  Summary: DetailsSummary,
  Content: DetailsContent,
  Text: DetailsText,
}

export { DetailsRoot, DetailsSummary, DetailsContent, DetailsText }
