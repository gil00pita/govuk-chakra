import { Box, HStack, type BoxProps, type StackProps, VisuallyHidden } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export interface WarningTextProps extends StackProps {
  children: ReactNode
  assistiveText?: string
  iconText?: string
  iconProps?: BoxProps
}

export const WarningText = forwardRef<HTMLDivElement, WarningTextProps>(function WarningText(
  { children, assistiveText = 'Warning', iconText = '!', iconProps, ...props },
  ref
) {
  return (
    <HStack ref={ref} role="note" align="center" gap={pxToRem(15)} w="full" {...props}>
      <Box
        as="span"
        flexShrink={0}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={pxToRem(35)}
        h={pxToRem(35)}
        borderRadius="full"
        bg="fg"
        color="fg.inverted"
        fontSize={pxToRem(30)}
        fontWeight="700"
        lineHeight="1"
        mt={pxToRem(-2)}
        aria-hidden="true"
        {...iconProps}
      >
        {iconText}
      </Box>

      <Text as="p" fontSize={19} color="fg" mb={0}>
        <VisuallyHidden>{`${assistiveText}: `}</VisuallyHidden>
        {children}
      </Text>
    </HStack>
  )
})
