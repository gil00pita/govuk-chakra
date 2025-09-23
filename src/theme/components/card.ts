import { defineRecipe } from '@chakra-ui/react';

export const cardTheme = defineRecipe({
  className: 'card',
  base: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.300',
    borderRadius: 0,
    boxShadow: 'none',
    fontFamily: 'body',
    p: 6,
  },
  variants: {
    variant: {
      outline: {
        border: '2px solid',
        borderColor: 'gray.900',
      },
      elevated: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});
