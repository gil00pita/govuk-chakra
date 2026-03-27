import { DatePicker as ChakraCalendar } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type CalendarProps = ComponentPropsWithoutRef<typeof ChakraCalendar.Root>

export const CalendarRoot = ChakraCalendar.Root

export const Calendar = Object.assign(ChakraCalendar.Root, {
  ...ChakraCalendar,
})
