import { defineRecipe } from '@chakra-ui/react';

export const checkboxTheme = defineRecipe({
  className: 'checkbox',
  base: {
    borderRadius: 0,
    border: '2px solid',
    borderColor: 'gray.900',
    bg: 'white',
    w: 6,
    h: 6,
    _checked: {
      bg: 'gray.900',
      borderColor: 'gray.900',
      color: 'white',
      _hover: {
        bg: 'gray.900',
        borderColor: 'gray.900',
      },
    },
    _focus: {
      boxShadow: '0 0 0 3px #ffdd00',
      outline: 'none',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});
