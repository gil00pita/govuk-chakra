import { defineRecipe } from '@chakra-ui/react';

export const textTheme = defineRecipe({
  className: 'text',
  base: {
    fontFamily: 'body',
    color: 'gray.900',
    lineHeight: '1.4',
  },
  variants: {
    variant: {
      body: {
        fontSize: 'md',
        mb: 4,
      },
      caption: {
        fontSize: 'sm',
        color: 'gray.600',
      },
      lead: {
        fontSize: 'lg',
        fontWeight: 'normal',
        mb: 6,
      },
      small: {
        fontSize: 'sm',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
