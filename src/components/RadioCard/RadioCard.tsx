import { RadioCard as ChakraRadioCard } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type RadioCardProps = ComponentPropsWithoutRef<typeof ChakraRadioCard.Root>

export const RadioCardRoot = ChakraRadioCard.Root

export const RadioCard = Object.assign(ChakraRadioCard.Root, {
  ...ChakraRadioCard,
})
