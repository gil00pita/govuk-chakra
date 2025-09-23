import { defineRecipe } from '@chakra-ui/react';

export const radioTheme = defineRecipe({
  className: 'radio',
  base: {
    border: '2px solid',
    borderColor: 'gray.900',
    bg: 'white',
    w: 6,
    h: 6,
    _checked: {
      bg: 'white',
      borderColor: 'gray.900',
      _before: {
        content: '""',
        display: 'inline-block',
        pos: 'relative',
        w: 2,
        h: 2,
        borderRadius: 'full',
        bg: 'gray.900',
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
