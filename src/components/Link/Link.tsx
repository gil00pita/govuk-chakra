import { pxToRem } from '@/utils'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { forwardRef } from 'react'

export interface LinkProps extends ChakraLinkProps {
  noStyle?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ noStyle, ...props }, ref) => {
  return (
    <ChakraLink
      ref={ref}
      color={noStyle ? 'inherit' : 'fg.link'}
      textDecoration={noStyle ? 'none' : 'underline'}
      textDecorationThickness={pxToRem(1)}
      textUnderlineOffset="0.1578em"
      textDecorationColor={noStyle ? 'inherit' : 'fg.link'}
      fontWeight="normal"
      fontFamily="body"
      _hover={{
        color: noStyle ? 'inherit' : 'primary.700',
        textDecoration: 'underline',
        textDecorationThickness: pxToRem(3), // Thicker on hover (GOV.UK style)
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'fg',
        textDecoration: 'underline',
        textDecorationThickness: pxToRem(3),
        textDecorationColor: 'common.black',
        _hover: {
          color: noStyle ? 'inherit' : 'fg',
          textDecorationThickness: pxToRem(3),
        },
      }}
      _visited={{
        color: noStyle ? 'inherit' : 'fg.link',
      }}
      _dark={{
        color: noStyle ? 'inherit' : 'fg.link',
        _hover: {
          color: noStyle ? 'inherit' : 'primary.300',
        },
        _focus: {
          color: noStyle ? 'inherit' : 'common.black',
          textDecorationColor: 'common.black',
          _hover: {
            color: noStyle ? 'inherit' : 'common.black',
          },
          _visited: {
            color: noStyle ? 'inherit' : 'common.black',
          },
        },
        _visited: {
          color: noStyle ? 'inherit' : 'fg.link',
        },
      }}
      {...props}
    />
  )
})

Link.displayName = 'Link'
