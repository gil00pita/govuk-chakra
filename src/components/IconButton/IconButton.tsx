import {
  IconButton as ChakraIconButton,
  type IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

import { getGovukTypeScale, pxToRem } from '@/utils'
import { buttonVariantStyles, type ButtonVariant } from '@/components/Button/buttonVariants'

export interface IconButtonProps extends Omit<ChakraIconButtonProps, 'variant'> {
  variant?: ButtonVariant
}

const IconButtonRoot = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'primary', fontSize = 16, ...props }, ref) => {
    const scale = getGovukTypeScale(fontSize)

    if (scale) {
      return (
        <ChakraIconButton
          ref={ref}
          borderRadius="0"
          fontSize={{ base: scale.small.fontSize, md: scale.large.fontSize }}
          lineHeight={{ base: scale.small.lineHeight, md: scale.large.lineHeight }}
          fontFamily="body"
          padding={pxToRem(8)}
          minW="unset"
          {...buttonVariantStyles[variant]}
          {...props}
        />
      )
    }
  }
)

IconButtonRoot.displayName = 'IconButton'

export { IconButtonRoot }

export const IconButton = Object.assign(IconButtonRoot, {
  Root: IconButtonRoot,
})
