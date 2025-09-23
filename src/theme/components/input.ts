import { defineRecipe } from '@chakra-ui/react';

export const inputTheme = defineRecipe({
  className: 'input',
  base: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'normal',
    lineHeight: '1.2',
    border: '2px solid',
    borderColor: 'gray.900',
    borderRadius: 0,
    bg: 'white',
    color: 'gray.900',
    px: 4,
    py: 2,
    h: 10,
    _hover: {
      borderColor: 'gray.900',
    },
    _focus: {
      borderColor: 'yellow.400',
      boxShadow: '0 0 0 3px #ffdd00',
      outline: 'none',
    },
    _invalid: {
      borderColor: 'red.600',
      _focus: {
        borderColor: 'red.600',
        boxShadow: '0 0 0 3px #d4351c',
      },
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      bg: 'gray.100',
    },
  },
  variants: {
    variant: {
      outline: {
        border: '2px solid',
        borderColor: 'gray.900',
        bg: 'white',
      },
      error: {
        border: '4px solid',
        borderColor: 'red.600',
        bg: 'white',
      },
    },
    size: {
      sm: {
        fontSize: 'sm',
        px: 3,
        py: 2,
        h: 8,
      },
      md: {
        fontSize: 'md',
        px: 4,
        py: 2,
        h: 10,
      },
      lg: {
        fontSize: 'lg',
        px: 4,
        py: 3,
        h: 12,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
