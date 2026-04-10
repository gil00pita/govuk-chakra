import { ChakraProvider, type ChakraProviderProps } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

export type GOVUKProviderProps = Omit<ChakraProviderProps, 'theme'> & PropsWithChildren

export function GOVUKProvider({ children, ...props }: GOVUKProviderProps) {
  return <ChakraProvider {...props}>{children}</ChakraProvider>
}
