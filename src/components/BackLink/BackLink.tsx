import { Link, LinkProps } from '../Link'

import { forwardRef } from 'react'
import { pxToRem } from '@/utils'

export interface BackLinkProps extends LinkProps {
  inverse?: boolean
}

export const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ children = 'Back', href = '#', inverse = false, ...props }, ref) => {
    const linkColor = inverse ? 'common.white' : 'fg'
    const hoverColor = inverse ? 'common.white' : 'fg'

    return (
      <Link
        noStyle
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
        pl={pxToRem(14)}
        position={'relative'}
        _hover={{
          color: hoverColor,
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'underline',
          textDecorationThickness: 'max(3px, 0.1875rem)',
          _hover: {
            color: 'common.black',
          },
        }}
        _visited={{
          color: linkColor,
        }}
        {...props}
        _after={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          fontSize: pxToRem(16),
          width: pxToRem(7),
          height: pxToRem(7),
          transform: 'translateY(-50%) rotate(135deg)',
          borderRight: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'currentColor',
        }}
      >
        {children}
      </Link>
    )
  }
)

BackLink.displayName = 'BackLink'
