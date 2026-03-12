import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { pxToRem } from '@/utils'
import { Text } from '../Text'

export type TagVariant =
  | 'grey'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'magenta'
  | 'red'
  | 'orange'
  | 'yellow'

export interface TagProps extends Omit<BoxProps, 'color'> {
  children: ReactNode
  variant?: TagVariant
  bold?: boolean
  uppercase?: boolean
}

const variantStyles: Record<TagVariant, Pick<BoxProps, 'bg' | 'color'>> = {
  grey: { bg: 'grey.100', color: 'grey.950', _dark: { bg: 'grey.950', color: 'grey.100' } },
  green: { bg: 'green.100', color: 'green.900', _dark: { bg: 'green.900', color: 'green.100' } },
  teal: { bg: 'teal.100', color: 'teal.900', _dark: { bg: 'teal.900', color: 'teal.100' } },
  blue: { bg: 'brand.100', color: 'brand.900', _dark: { bg: 'brand.900', color: 'brand.100' } },
  purple: {
    bg: 'purple.100',
    color: 'purple.900',
    _dark: { bg: 'purple.900', color: 'purple.100' },
  },
  magenta: {
    bg: 'magenta.100',
    color: 'magenta.900',
    _dark: { bg: 'magenta.900', color: 'magenta.100' },
  },
  red: { bg: 'red.100', color: 'red.900', _dark: { bg: 'red.900', color: 'red.100' } },
  orange: {
    bg: 'orange.100',
    color: 'orange.900',
    _dark: { bg: 'orange.900', color: 'orange.100' },
  },
  yellow: {
    bg: 'yellow.200',
    color: 'yellow.950',
    _dark: { bg: 'yellow.950', color: 'yellow.200' },
  },
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { children, bold, uppercase, variant = 'grey', ...props },
  ref
) {
  return (
    <Text
      ref={ref}
      fontSize={19}
      display="inline-block"
      pt={pxToRem(2)}
      px={pxToRem(8)}
      pb={pxToRem(3)}
      borderRadius="1px"
      borderRadius={pxToRem(2)}
      fontWeight={bold ? '700' : '400'}
      letterSpacing={pxToRem(0.5)}
      textTransform={uppercase ? 'uppercase' : 'none'}
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </Text>
  )
})
