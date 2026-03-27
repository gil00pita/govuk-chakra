import { Stat as ChakraStat } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StatProps = ComponentPropsWithoutRef<typeof ChakraStat.Root>

export const StatRoot = ChakraStat.Root

export const Stat = Object.assign(ChakraStat.Root, {
  ...ChakraStat,
})
