import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

import { forwardRef } from 'react'
import { pxToRem } from '@/utils'

export interface GovUKButtonProps extends Omit<ButtonProps, 'colorPalette'> {
  colorPalette?: 'brand' | 'secondary' | 'error' | 'inverse' | 'link'
  showArrow?: boolean
}

export const Button = forwardRef<HTMLButtonElement, GovUKButtonProps>(
  ({ colorPalette = 'brand', children, showArrow, ...props }, ref) => {
    const variantStyles: Record<NonNullable<GovUKButtonProps['colorPalette']>, ButtonProps> = {
      brand: {
        bgColor: 'green.500',
        color: 'white',
        boxShadow: '0 2px 0 var(--chakra-colors-green-800)',
        _hover: { bgColor: 'green.700' },
      },
      secondary: {
        color: 'gray.900',
        bgColor: 'gray.200',
        boxShadow: '0 2px 0 var(--chakra-colors-gray-600)',
        _hover: { bgColor: 'gray.300' },
      },
      error: {
        bgColor: 'red.500',
        color: 'white',
        boxShadow: '0 2px 0 var(--chakra-colors-red-800)',
        _hover: { bgColor: 'red.700' },
      },
      inverse: {
        bgColor: 'bg',
        color: 'blue.500',
        boxShadow: '0 2px 0 var(--chakra-colors-blue-700)',
        _hover: { color: 'blue.700', bgColor: 'blue.100' },
      },
      link: {
        bgColor: 'transparent',
        color: 'blue.500',
        textDecoration: 'underline',
        boxShadow: 'none',
        _hover: { color: 'blue.700' },
      },
    }

    return (
      <ChakraButton
        ref={ref}
        borderRadius="0"
        fontSize="1.1875rem"
        bg="green.500"
        color="white"
        boxShadow="0 2px 0 var(--chakra-colors-green-900)"
        fontWeight={showArrow ? 'bold' : 'normal'}
        padding={`${pxToRem(8)} ${pxToRem(10)} ${pxToRem(7)}`}
        _hover={{
          bgColor: 'green.700',
        }}
        _focus={{
          color: 'black',
          bgColor: 'yellow.500',
          outlineColor: 'transparent',
        }}
        {...variantStyles[colorPalette]}
        {...props}
      >
        {children}
        {showArrow && (
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
