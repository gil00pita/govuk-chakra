import { defineRecipe } from '@chakra-ui/react';

export const linkTheme = defineRecipe({
  className: 'link',
  base: {
    color: 'blue.600',
    textDecoration: 'underline',
    fontFamily: 'body',
    fontWeight: 'normal',
    _hover: {
      color: 'blue.800',
      textDecoration: 'underline',
    },
    _focus: {
      outline: '3px solid',
      outlineColor: 'yellow.400',
      outlineOffset: 0,
      bg: 'yellow.400',
      color: 'gray.900',
      textDecoration: 'none',
    },
    _visited: {
      color: 'purple.600',
    },
  },
  variants: {
    variant: {
      default: {
        color: 'blue.600',
      },
      inverse: {
        color: 'white',
        _hover: {
          color: 'gray.200',
        },
        _focus: {
          color: 'gray.900',
        },
      },
      muted: {
        color: 'gray.600',
        textDecoration: 'none',
        _hover: {
          color: 'gray.900',
          textDecoration: 'underline',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
