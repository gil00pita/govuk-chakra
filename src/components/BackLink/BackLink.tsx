import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { pxToRem } from '@/utils'

export interface BackLinkProps extends ChakraLinkProps {
  inverse?: boolean
}

export const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ children = 'Back', href = '#', inverse = false, ...props }, ref) => {
    const linkColor = inverse ? 'common.white' : 'brand.500'
    const hoverColor = inverse ? 'common.white' : 'brand.700'

    return (
      <ChakraLink
        ref={ref}
        href={href}
        display="inline-flex"
        alignItems="center"
        gap={pxToRem(8)}
        color={linkColor}
        textDecoration="underline"
        textDecorationThickness="max(1px, 0.0625rem)"
        textUnderlineOffset="0.1578em"
        fontSize={pxToRem(16)}
        lineHeight={1.25}
        _hover={{
          color: hoverColor,
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'grey.950',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          _hover: {
            color: 'grey.950',
          },
        }}
        _visited={{
          color: linkColor,
        }}
        _dark={undefined}
        {...props}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          height={pxToRem(14)}
          width={pxToRem(17)}
          viewBox="0 0 17 14"
          style={{ flexShrink: 0 }}
        >
          <path fill="currentColor" d="M10.5 1-1 7l11.5 6V8h7V6h-7V1z" transform="translate(1 0)" />
        </svg>
        {children}
      </ChakraLink>
    )
  }
)

BackLink.displayName = 'BackLink'
