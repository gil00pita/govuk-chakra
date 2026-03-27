import { Tooltip as ChakraTooltip } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TooltipProps = ComponentPropsWithoutRef<typeof ChakraTooltip.Root>

export const TooltipRoot = ChakraTooltip.Root

export const Tooltip = Object.assign(ChakraTooltip.Root, {
  ...ChakraTooltip,
})
