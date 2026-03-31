import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

import { forwardRef } from 'react'
import { pxToRem } from '@/utils'
import { buttonVariantStyles, type ButtonVariant } from './buttonVariants'

export interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant?: ButtonVariant
  startButton?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, startButton, ...props }, ref) => {
    return (
      <ChakraButton
        ref={ref}
        borderRadius="0"
        fontSize="1.1875rem"
        bg="green.500"
        color="white"
        boxShadow="0 2px 0 {colors.green.900}"
        fontFamily="body"
        fontWeight={startButton ? 'bold' : 'normal'}
        padding={`${pxToRem(8)} ${pxToRem(10)} ${pxToRem(7)}`}
        {...buttonVariantStyles[variant]}
        {...props}
      >
        {children}
        {startButton && (
          <svg
            className="govuk-button__start-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="19"
            viewBox="0 0 33 40"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
          </svg>
        )}
      </ChakraButton>
    )
  }
)

Button.displayName = 'Button'
