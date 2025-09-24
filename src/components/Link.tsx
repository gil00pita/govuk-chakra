import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { forwardRef } from 'react'

export type LinkProps = ChakraLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return (
    <ChakraLink
      ref={ref}
      color="brand.500"
      textDecoration="underline"
      textDecorationThickness="max(1px, 0.0625rem)"
      textUnderlineOffset="0.1578em"
      fontWeight="normal"
      _hover={{
        color: 'brand.700',
        textDecorationThickness: 'max(3px, 0.1875rem)', // Thicker on hover (GOV.UK style)
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'black',
        textDecoration: 'none',
      }}
      _visited={{
        color: 'govuk.darkGrey',
      }}
      {...props}
    />
  )
})

Link.displayName = 'Link'
