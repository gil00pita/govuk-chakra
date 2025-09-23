import { defineRecipe } from '@chakra-ui/react';

export const alertTheme = defineRecipe({
  className: 'alert',
  base: {
    borderRadius: 0,
    border: '5px solid',
    px: 4,
    py: 4,
    fontFamily: 'body',
  },
  variants: {
    variant: {
      info: {
        bg: 'blue.50',
        borderColor: 'blue.600',
        color: 'blue.900',
      },
      warning: {
        bg: 'yellow.50',
        borderColor: 'yellow.600',
        color: 'yellow.900',
      },
      success: {
        bg: 'green.50',
        borderColor: 'green.600',
        color: 'green.900',
      },
      error: {
        bg: 'red.50',
        borderColor: 'red.600',
        color: 'red.900',
      },
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});
