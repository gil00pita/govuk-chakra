import type { SystemStyleObject } from '@chakra-ui/react'

export type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'error' | 'inverse' | 'link'

export const buttonFocusStyles: SystemStyleObject = {
  outline: 'none',
  bgColor: 'yellow.500',
  color: 'gray.950',
}

export const buttonVariantStyles: Record<ButtonVariant, SystemStyleObject> = {
  primary: {
    bgColor: 'green.500',
    color: 'white',
    boxShadow: '0 2px 0 {colors.green.800}',
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
    color: 'gray.900',
    bgColor: 'gray.50',
    _dark: {
      color: 'gray.50',
      bgColor: 'gray.600',
      _hover: {
        bgColor: 'gray.600',
        _focus: buttonFocusStyles,
        _focusVisible: buttonFocusStyles,
      },
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    boxShadow: '0 2px 0 {colors.gray.200}',
    _hover: {
      bgColor: 'gray.100',
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _focus: buttonFocusStyles,
    _focusVisible: buttonFocusStyles,
  },
  error: {
    bgColor: 'border.error',
    color: 'white',
    boxShadow: '0 2px 0 {colors.red.800}',
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
    boxShadow: '0 2px 0 {colors.blue.700}',
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
  plain: {
    bgColor: 'transparent',
    color: 'fg',
    _dark: {
      _hover: {
        color: 'gray.50',
        bgColor: 'gray.800',
        _focus: buttonFocusStyles,
        _focusVisible: buttonFocusStyles,
      },
      _focus: buttonFocusStyles,
      _focusVisible: buttonFocusStyles,
    },
    _hover: {
      color: 'gray.700',
      bgColor: 'gray.100',
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
