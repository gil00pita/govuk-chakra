import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

export interface InsetTextProps extends BoxProps {
  children: ReactNode
}

export const InsetText = forwardRef<HTMLDivElement, InsetTextProps>(function InsetText(
  { children, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      borderLeft="10px solid"
      borderLeftColor="grey.100"
      pl={pxToRem(15)}
      py={pxToRem(10)}
      my={{ base: pxToRem(20), md: pxToRem(30) }}
      color="fg"
      _dark={{
        borderLeftColor: 'grey.500',
      }}
      {...props}
    >
      <Text fontSize={19} mb={0}>
        {children}
      </Text>
    </Box>
  )
})
