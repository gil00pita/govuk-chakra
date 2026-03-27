import { Code as ChakraCode } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CodeProps = ComponentPropsWithoutRef<typeof ChakraCode>

export const CodeRoot = ChakraCode

export const Code = Object.assign(ChakraCode, {
  Root: ChakraCode,
})
