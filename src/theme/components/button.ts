import { defineRecipe } from '@chakra-ui/react';

export const buttonTheme = defineRecipe({
  className: 'button',
  base: {
    fontFamily: 'body',
    fontWeight: '400',
    fontSize: '19px',
    lineHeight: '1',
    textDecoration: 'none',
    display: 'inline-block',
    position: 'relative',
    width: 'auto',
    margin: '0 0 22px 0',
    padding: '8px 10px 7px',
    border: '2px solid transparent',
    borderRadius: '0',
    color: 'white',
    backgroundColor: 'green.600',
    boxShadow: '0 2px 0 #002d18',
    textAlign: 'center',
    verticalAlign: 'top',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'green.700',
      textDecoration: 'none',
    },
    _focus: {
      outline: '3px solid yellow.400',
      outlineOffset: '0',
      boxShadow: 'inset 0 0 0 2px',
    },
    _active: {
      top: '2px',
      boxShadow: 'none',
    },
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'green.600',
        boxShadow: '0 2px 0 #002d18',
        _hover: {
          backgroundColor: 'green.700',
        },
      },
      secondary: {
        backgroundColor: 'gray.100',
        color: 'gray.900',
        boxShadow: '0 2px 0 #929191',
        _hover: {
          backgroundColor: 'gray.200',
        },
      },
      warning: {
        backgroundColor: 'yellow.400',
        color: 'gray.900',
        boxShadow: '0 2px 0 #594d00',
        _hover: {
          backgroundColor: 'yellow.500',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
