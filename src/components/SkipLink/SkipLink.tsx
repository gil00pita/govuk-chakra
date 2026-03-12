import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { pxToRem } from '@/utils'

export interface SkipLinkProps extends ChakraLinkProps {}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ children = 'Skip to main content', href = '#content', ...props }, ref) => {
    const focusStyles = {
      clip: 'auto',
      clipPath: 'none',
      h: 'auto',
      overflow: 'visible',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      w: 'auto',
      zIndex: 1000,
      p: `${pxToRem(10)} ${pxToRem(15)}`,
      bg: 'yellow.500',
      color: 'grey.950',
      outline: '3px solid',
      outlineColor: 'yellow.500',
      outlineOffset: 0,
    }

    return (
      <ChakraLink
        ref={ref}
        href={href}
        position="absolute"
        top={0}
        left={0}
        clip="rect(0 0 0 0)"
        clipPath="inset(50%)"
        h="1px"
        w="1px"
        overflow="hidden"
        whiteSpace="nowrap"
        color="link"
        textDecoration="underline"
        textDecorationThickness="max(1px, 0.0625rem)"
        textUnderlineOffset="0.1578em"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        _hover={{
          color: 'link.hover',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _focus={focusStyles}
        _focusVisible={focusStyles}
        {...props}
      >
        {children}
      </ChakraLink>
    )
  }
)

SkipLink.displayName = 'SkipLink'
