import { defineRecipe } from '@chakra-ui/react';

export const tableTheme = defineRecipe({
  className: 'table',
  base: {
    fontFamily: 'body',
    borderCollapse: 'collapse',
    width: 'full',
    '& th': {
      fontWeight: 'bold',
      textTransform: 'none',
      letterSpacing: 'normal',
      textAlign: 'left',
      borderBottom: '2px solid',
      borderColor: 'gray.900',
      px: 4,
      py: 3,
      fontSize: 'md',
      bg: 'gray.50',
    },
    '& td': {
      borderBottom: '1px solid',
      borderColor: 'gray.300',
      px: 4,
      py: 3,
      fontSize: 'md',
    },
    '& tr:nth-of-type(even)': {
      bg: 'gray.25',
    },
    '& tr:hover': {
      bg: 'gray.100',
    },
  },
  variants: {
    variant: {
      simple: {
        '& th': {
          borderBottom: '1px solid',
          borderColor: 'gray.300',
        },
      },
      striped: {
        '& tr:nth-of-type(even)': {
          bg: 'gray.50',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'simple',
  },
});
