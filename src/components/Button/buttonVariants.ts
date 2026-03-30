import type { SystemStyleObject } from '@chakra-ui/react'

export type ButtonVariant = 'primary' | 'secondary' | 'flat' | 'error' | 'inverse' | 'link'

export const buttonFocusStyles: SystemStyleObject = {
  outline: 'none',
  bgColor: 'yellow.500',
  color: 'grey.950',
}

export const buttonVariantStyles: Record<ButtonVariant, SystemStyleObject> = {
  primary: {
    bgColor: 'green.500',
    color: 'white',
    boxShadow: '0 2px 0 var(--govuk-colors-green-800)',
    _hover: {
      bgColor: 'green.700',
      color: 'white',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
  secondary: {
    color: 'grey.900',
    bgColor: 'grey.50',
    _dark: {
      color: 'grey.50',
      bgColor: 'grey.600',
      _hover: {
        bgColor: 'grey.600',
        _focus: buttonFocusStyles,
        _focusVisible: buttonFocusStyles,
      },
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    boxShadow: '0 2px 0 var(--govuk-colors-grey-200)',
    _hover: {
      bgColor: 'grey.100',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
  error: {
    bgColor: 'border.error',
    color: 'white',
    boxShadow: '0 2px 0 var(--govuk-colors-red-800)',
    _hover: {
      bgColor: 'red.700',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
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
        _focus: buttonFocusStyles,
        _focusVisible: buttonFocusStyles,
      },
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _hover: {
      color: 'blue.700',
      bgColor: 'blue.100',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
  flat: {
    bgColor: 'transparent',
    color: 'fg',
    _dark: {
      _hover: {
        color: 'grey.50',
        bgColor: 'grey.800',
        _focus: buttonFocusStyles,
        _focusVisible: buttonFocusStyles,
      },
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _hover: {
      color: 'grey.700',
      bgColor: 'grey.100',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
  link: {
    bgColor: 'transparent',
    color: 'blue.500',
    textDecoration: 'underline',
    boxShadow: 'none',
    _hover: {
      color: 'blue.700',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
}
