import { Stat as ChakraStat } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type StatProps = ComponentPropsWithoutRef<typeof ChakraStat.Root>
type StatComponent = typeof ChakraStat.Root & typeof ChakraStat

export const StatRoot = ChakraStat.Root

export const Stat: StatComponent = Object.assign(ChakraStat.Root, {
  ...ChakraStat,
})
