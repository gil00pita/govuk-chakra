import { createSystem, defaultConfig } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'
import { fonts } from './fonts'

export const govUkTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors,
      fonts,
    },
    recipes: components,
  },
  globalCss: {
    body: {
      fontFamily: 'GDS Transport, helvetica, arial, sans-serif',
      fontSize: '19px',
      lineHeight: '1.31579',
      color: 'gray.900',
      bg: 'white',
    },
  },
})

export * from './govUkSystem'
export { theme } from './theme'
