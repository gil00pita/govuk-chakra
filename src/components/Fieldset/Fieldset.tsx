import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface FieldsetRootProps extends BoxProps {
  children: ReactNode
  invalid?: boolean
}

export interface FieldsetLegendProps extends BoxProps {
  legendAsHeading?: boolean
  children: ReactNode
}

export interface FieldsetHintProps extends React.ComponentProps<typeof Text> {}

export interface FieldsetErrorProps extends React.ComponentProps<typeof Text> {}

export interface FieldsetContentProps extends BoxProps {
  children: ReactNode
}

const FieldsetRoot = forwardRef<HTMLFieldSetElement, FieldsetRootProps>(function FieldsetRoot(
  { children, invalid = false, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      as="fieldset"
      mb={{ base: pxToRem(30), md: pxToRem(20) }}
      border="0px solid transparent"
      padding={0}
      minInlineSize={0}
      paddingLeft={invalid ? pxToRem(15) : 0}
      borderLeftWidth={invalid ? pxToRem(5) : 0}
      borderLeftColor={invalid ? 'danger' : 'transparent'}
      {...props}
    >
      {children}
    </Box>
  )
})

const FieldsetLegend = forwardRef<HTMLLegendElement, FieldsetLegendProps>(function FieldsetLegend(
  { legendAsHeading = false, children, ...props },
  ref
) {
  return (
    <Box ref={ref} as="legend" float="left" width="100%" {...props}>
      {legendAsHeading ? (
        <Heading as="h1" size={36}>
          {children}
        </Heading>
      ) : (
        <Text fontSize={24}>{children}</Text>
      )}
    </Box>
  )
})

const FieldsetHint = forwardRef<HTMLParagraphElement, FieldsetHintProps>(function FieldsetHint(
  props,
  ref
) {
  return <Text ref={ref} fontSize={19} color="fg.muted" mb={3} {...props} />
})

const FieldsetError = forwardRef<HTMLParagraphElement, FieldsetErrorProps>(function FieldsetError(
  props,
  ref
) {
  return <Text ref={ref} fontSize={19} fontWeight="700" color="danger" mb={3} {...props} />
})

const FieldsetContent = forwardRef<HTMLDivElement, FieldsetContentProps>(function FieldsetContent(
  props,
  ref
) {
  return <Box ref={ref} display="flex" flexDirection="column" gap={0} {...props} />
})

export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
  Hint: FieldsetHint,
  Error: FieldsetError,
  Content: FieldsetContent,
}

export { FieldsetRoot, FieldsetLegend, FieldsetHint, FieldsetError, FieldsetContent }
