import { RadioCard as ChakraRadioCard } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type RadioCardProps = ComponentPropsWithoutRef<typeof ChakraRadioCard.Root>
type RadioCardComponent = typeof ChakraRadioCard.Root & typeof ChakraRadioCard

export const RadioCardRoot = ChakraRadioCard.Root

export const RadioCard: RadioCardComponent = Object.assign(ChakraRadioCard.Root, {
  ...ChakraRadioCard,
})
