import { defineRecipe } from '@chakra-ui/react';

export const headingTheme = defineRecipe({
  className: 'heading',
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    color: 'gray.900',
    lineHeight: '1.2',
    mb: 4,
  },
  variants: {
    size: {
      xl: {
        fontSize: '3xl',
        lineHeight: '1.1',
      },
      lg: {
        fontSize: '2xl',
        lineHeight: '1.2',
      },
      md: {
        fontSize: 'xl',
        lineHeight: '1.3',
      },
      sm: {
        fontSize: 'lg',
        lineHeight: '1.4',
      },
      xs: {
        fontSize: 'md',
        lineHeight: '1.4',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
