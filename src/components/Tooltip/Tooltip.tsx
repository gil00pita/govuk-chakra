import { Tooltip as ChakraTooltip } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TooltipProps = ComponentPropsWithoutRef<typeof ChakraTooltip.Root>
type TooltipComponent = typeof ChakraTooltip.Root & typeof ChakraTooltip

export const TooltipRoot = ChakraTooltip.Root

export const Tooltip: TooltipComponent = Object.assign(ChakraTooltip.Root, {
  ...ChakraTooltip,
})
