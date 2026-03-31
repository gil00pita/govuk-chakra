import { Code as ChakraCode } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

type CodeVariant = 'solid' | 'subtle' | 'surface' | 'outline' | 'plain'
type CodeColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink'

export interface CodeProps extends ComponentPropsWithoutRef<typeof ChakraCode> {
  variant?: CodeVariant
  colorPalette?: CodeColorPalette
}

export function CodeRoot({ ...props }: CodeProps) {
  return <ChakraCode {...props} />
}

export const Code = Object.assign(CodeRoot, {
  Root: CodeRoot,
})
