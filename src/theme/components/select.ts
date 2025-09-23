import { defineRecipe } from '@chakra-ui/react';

export const selectTheme = defineRecipe({
  className: 'select',
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
    minH: 10,
    px: 4,
    py: 2,
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
});
