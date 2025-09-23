import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { RecipeVariantProps } from '@chakra-ui/react'

// import { linkTheme } from "../theme/components/link"

interface LinkProps extends Omit<ChakraLinkProps, 'variant'>, RecipeVariantProps<any> {}

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <ChakraLink
      className={className}
      _hover={{
        textDecoration: 'underline',
        color: 'black',
        bgColor: 'gray.100',
      }}
      {...props}
    />
  )
}
