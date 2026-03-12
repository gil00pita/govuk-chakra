import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { pxToRem } from '@/utils'

export type TagVariant =
  | 'grey'
  | 'green'
  | 'turquoise'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'

export interface TagProps extends Omit<BoxProps, 'color'> {
  children: ReactNode
  variant?: TagVariant
}

const variantStyles: Record<TagVariant, Pick<BoxProps, 'bg' | 'color'>> = {
  grey: { bg: 'grey.100', color: 'grey.950' },
  green: { bg: 'green.100', color: 'green.900' },
  turquoise: { bg: 'teal.100', color: 'teal.900' },
  blue: { bg: 'brand.100', color: 'brand.900' },
  purple: { bg: 'purple.100', color: 'purple.900' },
  pink: { bg: 'magenta.100', color: 'magenta.900' },
  red: { bg: 'red.100', color: 'red.900' },
  orange: { bg: 'orange.100', color: 'orange.900' },
  yellow: { bg: 'yellow.100', color: 'yellow.900' },
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { children, variant = 'grey', ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      as="strong"
      display="inline-block"
      px={pxToRem(8)}
      py={pxToRem(5)}
      borderRadius={pxToRem(2)}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(20)}
      fontWeight="700"
      letterSpacing={pxToRem(0.5)}
      textTransform="uppercase"
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </Box>
  )
})
