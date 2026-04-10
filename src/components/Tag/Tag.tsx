import { type BoxProps, type SystemStyleObject } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { pxToRem } from '@/utils'
import { Text } from '@/components'

export type TagVariant =
  | 'gray'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'magenta'
  | 'red'
  | 'orange'
  | 'yellow'

export type TagVariantStyles = Record<string, SystemStyleObject>

export interface TagProps extends Omit<BoxProps, 'color'> {
  children: ReactNode
  variant?: TagVariant | string
  bold?: boolean
  uppercase?: boolean
  variantStyles?: TagVariantStyles
}

export const defaultTagVariantStyles: Record<TagVariant, SystemStyleObject> = {
  gray: {
    bgColor: 'gray.50',
    color: 'fg',
    _dark: { bgColor: 'gray.700', color: 'common.white' },
  },
  green: {
    bgColor: 'green.100',
    color: 'green.900',
    _dark: { bgColor: 'green.900', color: 'green.100' },
  },
  teal: {
    bgColor: 'teal.100',
    color: 'teal.900',
    _dark: { bgColor: 'teal.900', color: 'teal.100' },
  },
  blue: {
    bgColor: 'primary.100',
    color: 'primary.900',
    _dark: { bgColor: 'primary.900', color: 'primary.100' },
  },
  purple: {
    bgColor: 'purple.100',
    color: 'purple.900',
    _dark: { bgColor: 'purple.900', color: 'purple.100' },
  },
  magenta: {
    bgColor: 'magenta.100',
    color: 'magenta.900',
    _dark: { bgColor: 'magenta.900', color: 'magenta.100' },
  },
  red: { bgColor: 'red.100', color: 'red.900', _dark: { bgColor: 'red.900', color: 'red.100' } },
  orange: {
    bgColor: 'orange.100',
    color: 'orange.900',
    _dark: { bgColor: 'orange.900', color: 'orange.100' },
  },
  yellow: {
    bgColor: 'yellow.200',
    color: 'yellow.950',
    _dark: { bgColor: 'yellow.950', color: 'yellow.200' },
  },
}

export const Tag = forwardRef<HTMLParagraphElement, TagProps>(function Tag(
  { children, bold, uppercase, variant = 'gray', variantStyles, ...props },
  ref
) {
  const normalizedVariant = variant === 'grey' ? 'gray' : variant
  const mergedVariantStyles: TagVariantStyles = {
    ...defaultTagVariantStyles,
    ...variantStyles,
  }

  return (
    <Text
      ref={ref}
      fontSize={19}
      display="inline-flex"
      alignItems="center"
      justifyContent="flex-start"
      px={pxToRem(8)}
      pt={pxToRem(2)}
      pb={pxToRem(3)}
      mt={pxToRem(-2)}
      mb={pxToRem(-3)}
      borderRadius={pxToRem(2)}
      fontWeight={bold ? '700' : '400'}
      textTransform={uppercase ? 'uppercase' : 'none'}
      {...mergedVariantStyles[normalizedVariant]}
      {...props}
    >
      {children}
    </Text>
  )
})
