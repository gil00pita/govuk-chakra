import { Button as ChakraButton, type ButtonProps, type SystemStyleObject } from '@chakra-ui/react'

import { forwardRef } from 'react'
import { pxToRem } from '@/utils'

export interface GovUKButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'error' | 'inverse' | 'link'
  startButton?: boolean
}

export const Button = forwardRef<HTMLButtonElement, GovUKButtonProps>(
  ({ variant = 'primary', children, startButton, ...props }, ref) => {
    const focusStyles: SystemStyleObject = {
      outline: 'none',
      bgColor: 'yellow.500',
      color: 'grey.950',
    }

    const variantStyles: Record<NonNullable<GovUKButtonProps['variant']>, SystemStyleObject> = {
      primary: {
        bgColor: 'green.500',
        color: 'white',
        boxShadow: '0 2px 0 var(--govuk-colors-green-800)',
        _hover: {
          bgColor: 'green.700',
          color: 'white',
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _focus: focusStyles,
        _focusVisible: focusStyles,
      },
      secondary: {
        color: 'grey.900',
        bgColor: 'grey.50',
        _dark: {
          color: 'grey.50',
          bgColor: 'grey.600',
          _hover: {
            bgColor: 'grey.600',
            _focus: focusStyles,
            _focusVisible: focusStyles,
          },
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        boxShadow: '0 2px 0 var(--govuk-colors-grey-200)',
        _hover: {
          bgColor: 'grey.100',
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _focus: focusStyles,
        _focusVisible: focusStyles,
      },
      error: {
        bgColor: 'border.error',
        color: 'white',
        boxShadow: '0 2px 0 var(--govuk-colors-red-800)',
        _hover: {
          bgColor: 'red.700',
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _focus: focusStyles,
        _focusVisible: focusStyles,
      },
      inverse: {
        bgColor: 'bg',
        color: 'blue.500',
        boxShadow: '0 2px 0 var(--govuk-colors-blue-700)',
        _dark: {
          bgColor: 'blue.900',
          color: 'blue.50',
          _hover: {
            color: 'blue.50',
            bgColor: 'blue.800',
            _focus: focusStyles,
            _focusVisible: focusStyles,
          },
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _hover: {
          color: 'blue.700',
          bgColor: 'blue.100',
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _focus: focusStyles,
        _focusVisible: focusStyles,
      },
      link: {
        bgColor: 'transparent',
        color: 'blue.500',
        textDecoration: 'underline',
        boxShadow: 'none',
        _hover: {
          color: 'blue.700',
          _focus: focusStyles,
          _focusVisible: focusStyles,
        },
        _focus: focusStyles,
        _focusVisible: focusStyles,
      },
    }

    return (
      <ChakraButton
        ref={ref}
        borderRadius="0"
        fontSize="1.1875rem"
        bg="green.500"
        color="white"
        boxShadow="0 2px 0 var(--govuk-colors-green-900)"
        fontWeight={startButton ? 'bold' : 'normal'}
        padding={`${pxToRem(8)} ${pxToRem(10)} ${pxToRem(7)}`}
        {...variantStyles[variant]}
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
