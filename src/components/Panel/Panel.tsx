import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface PanelProps extends BoxProps {
  heading?: ReactNode
  children?: ReactNode
}

export interface PanelTitleProps extends React.ComponentProps<typeof Heading> {}

export interface PanelBodyProps extends React.ComponentProps<typeof Text> {}

const PanelRoot = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  { heading, children, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      bg="green.500"
      color="common.white"
      textAlign="center"
      py={{ base: pxToRem(24), md: pxToRem(36) }}
      px={{ base: pxToRem(16), md: pxToRem(24) }}
      mb={pxToRem(30)}
      {...props}
    >
      {heading ? <PanelTitle>{heading}</PanelTitle> : null}
      {children ? <PanelBody>{children}</PanelBody> : null}
    </Box>
  )
})

const PanelTitle = forwardRef<HTMLHeadingElement, PanelTitleProps>(function PanelTitle(props, ref) {
  return (
    <Heading
      ref={ref}
      as="h1"
      size={36}
      color="common.white"
      mb={pxToRem(12)}
      textAlign="center"
      {...props}
    />
  )
})

const PanelBody = forwardRef<HTMLParagraphElement, PanelBodyProps>(function PanelBody(props, ref) {
  return (
    <Text
      ref={ref}
      as="div"
      fontSize={24}
      lineHeight={pxToRem(32)}
      color="common.white"
      mb={0}
      textAlign="center"
      css={{
        '& strong': {
          display: 'block',
          fontWeight: '700',
          marginTop: pxToRem(5),
        },
      }}
      {...props}
    />
  )
})

export const Panel = Object.assign(PanelRoot, {
  Root: PanelRoot,
  Title: PanelTitle,
  Body: PanelBody,
})

export { PanelRoot, PanelTitle, PanelBody }
