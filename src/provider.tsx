import { ChakraProvider, type ChakraProviderProps } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

import { govUkTheme } from './theme'

export type GovUKProviderProps = Omit<ChakraProviderProps, 'value'> & PropsWithChildren

export function GovUKProvider({ children, ...props }: GovUKProviderProps) {
  return (
    <ChakraProvider value={govUkTheme} {...props}>
      {children}
    </ChakraProvider>
  )
}
