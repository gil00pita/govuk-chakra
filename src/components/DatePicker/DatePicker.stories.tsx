import { Button, HStack, IconButton, InputGroup, Portal, Stack, Text } from '@chakra-ui/react'
import {
  getLocalTimeZone,
  parseDate,
  parseDateTime,
  today,
  type DateValue,
} from '@internationalized/date'
import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { useState, useSyncExternalStore } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { RiCalendarLine, RiCloseLine } from 'react-icons/ri'

import { DatePicker } from './DatePicker'

type DatePickerStoryArgs = {
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  width?: 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'
}

const meta: Meta<DatePickerStoryArgs> = {
  title: 'Chakra Components/Date & Time/Date picker',
  component: DatePicker.Root as unknown as ComponentType<DatePickerStoryArgs>,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: '30',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const todayValue = today(getLocalTimeZone())

function codeBlock(code: string) {
  return {
    docs: {
      source: {
        code,
      },
    },
  }
}

function DefaultCalendarContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function MonthAndYearSelectContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <Stack gap={4}>
              <HStack align="center" justify="space-between">
                <DatePicker.MonthSelect />
                <DatePicker.YearSelect />
              </HStack>
              <DatePicker.DayTable />
            </Stack>
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function HeaderLayoutContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <Stack gap={4}>
              <HStack justify="space-between" align="center">
                <DatePicker.PrevTrigger />
                <DatePicker.RangeText fontWeight="700" />
                <DatePicker.NextTrigger />
              </HStack>
              <DatePicker.DayTable />
            </Stack>
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function MultipleMonthsContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <Stack gap={4}>
              <DatePicker.Header />
              <HStack align="start" gap={6}>
                <DatePicker.DayTable />
                <DatePicker.DayTable offset={1} />
              </HStack>
            </Stack>
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function PresetsContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <Stack gap={4}>
            <HStack flexWrap="wrap">
              <DatePicker.PresetTrigger value={[todayValue]} asChild>
                <Button size="sm" variant="outline">
                  Today
                </Button>
              </DatePicker.PresetTrigger>
              <DatePicker.PresetTrigger value={[parseDate('2026-04-30')]} asChild>
                <Button size="sm" variant="outline">
                  End of month
                </Button>
              </DatePicker.PresetTrigger>
            </HStack>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </Stack>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function PresetsSidebarContent() {
  return (
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <HStack align="start" gap={6}>
            <Stack minW="140px">
              <DatePicker.PresetTrigger
                value={[parseDate('2026-04-01'), parseDate('2026-04-07')]}
                asChild
              >
                <Button justifyContent="flex-start" size="sm" variant="ghost">
                  This week
                </Button>
              </DatePicker.PresetTrigger>
              <DatePicker.PresetTrigger
                value={[parseDate('2026-04-01'), parseDate('2026-04-30')]}
                asChild
              >
                <Button justifyContent="flex-start" size="sm" variant="ghost">
                  This month
                </Button>
              </DatePicker.PresetTrigger>
            </Stack>
            <Stack gap={4}>
              <DatePicker.View view="day">
                <DatePicker.Header />
                <DatePicker.DayTable />
              </DatePicker.View>
              <DatePicker.View view="month">
                <DatePicker.Header />
                <DatePicker.MonthTable />
              </DatePicker.View>
              <DatePicker.View view="year">
                <DatePicker.Header />
                <DatePicker.YearTable />
              </DatePicker.View>
            </Stack>
          </HStack>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  )
}

function TriggerField(
  props: Partial<ComponentProps<typeof DatePicker.Root>> & {
    label: string
    hint?: string
    placeholder?: string
    children?: ReactNode
  }
) {
  const { label, hint, placeholder = 'Select a date', children, ...rest } = props

  return (
    <DatePicker.Root {...rest}>
      <DatePicker.Label>{label}</DatePicker.Label>
      {hint ? <DatePicker.Hint>{hint}</DatePicker.Hint> : null}
      <DatePicker.Control>
        <DatePicker.Trigger>
          <DatePicker.ValueText placeholder={placeholder} />
        </DatePicker.Trigger>
      </DatePicker.Control>
      {children ?? <DefaultCalendarContent />}
    </DatePicker.Root>
  )
}

type StoreListener = () => void

let storedDates: DateValue[] = [parseDate('2026-04-13')]
const storeListeners = new Set<StoreListener>()

const dateStore = {
  getSnapshot: () => storedDates,
  subscribe: (listener: StoreListener) => {
    storeListeners.add(listener)
    return () => storeListeners.delete(listener)
  },
  setValue: (nextValue: DateValue[]) => {
    storedDates = nextValue
    storeListeners.forEach((listener) => listener())
  },
}

function formatSelection(value: DateValue[]) {
  if (!value.length) {
    return 'No date selected'
  }

  return value
    .map((item) =>
      item.toDate(getLocalTimeZone()).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    )
    .join(', ')
}

function ControlledDatePickerExample(args: DatePickerStoryArgs) {
  const [value, setValue] = useState<DateValue[]>([parseDate('2026-04-13')])

  return (
    <Stack>
      <TriggerField
        {...args}
        label="Start date"
        value={value}
        onValueChange={(details) => setValue(details.value)}
        defaultOpen
      />
      <Text fontSize="sm" color="fg.muted">
        Selected: {formatSelection(value)}
      </Text>
    </Stack>
  )
}

function StoreDatePickerExample(args: DatePickerStoryArgs) {
  const value = useSyncExternalStore(dateStore.subscribe, dateStore.getSnapshot)

  return (
    <Stack>
      <TriggerField
        {...args}
        label="Due date"
        value={value}
        onValueChange={(details) => dateStore.setValue(details.value)}
        defaultOpen
      />
      <Text fontSize="sm" color="fg.muted">
        Store value: {formatSelection(value)}
      </Text>
    </Stack>
  )
}

export const Disabled: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Date of birth"
      defaultValue={[parseDate('2007-03-27')]}
      disabled
    />
  ),
  parameters: codeBlock(`<DatePicker.Root defaultValue={[parseDate('2007-03-27')]} disabled>
  <DatePicker.Label>Date of birth</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const ReadOnly: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Date of birth"
      defaultValue={[parseDate('2007-03-27')]}
      readOnly
    />
  ),
  parameters: codeBlock(`<DatePicker.Root defaultValue={[parseDate('2007-03-27')]} readOnly>
  <DatePicker.Label>Date of birth</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const DefaultView: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Reporting month"
      placeholder="Select a month"
      defaultView="month"
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root defaultView="month" defaultOpen>
  <DatePicker.Label>Reporting month</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a month" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const DefaultValue: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Start date"
      defaultValue={[parseDate('2026-04-13')]}
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root defaultValue={[parseDate('2026-04-13')]} defaultOpen>
  <DatePicker.Label>Start date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const Controlled: Story = {
  render: (args) => <ControlledDatePickerExample {...args} />,
  parameters: codeBlock(`function ControlledExample() {
  const [value, setValue] = useState([parseDate('2026-04-13')])

  return (
    <DatePicker.Root value={value} onValueChange={(details) => setValue(details.value)} defaultOpen>
      <DatePicker.Label>Start date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger>
          <DatePicker.ValueText placeholder="Select a date" />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}`),
}

export const Store: Story = {
  render: (args) => <StoreDatePickerExample {...args} />,
  parameters: codeBlock(`const dateStore = createDateStore([parseDate('2026-04-13')])

function StoreExample() {
  const value = useSyncExternalStore(dateStore.subscribe, dateStore.getSnapshot)

  return (
    <DatePicker.Root
      value={value}
      onValueChange={(details) => dateStore.setValue(details.value)}
      defaultOpen
    >
      <DatePicker.Label>Due date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger>
          <DatePicker.ValueText placeholder="Select a date" />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}`),
}

export const RangeSelection: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Holiday dates"
      placeholder="Select a date range"
      selectionMode="range"
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root selectionMode="range" defaultOpen>
  <DatePicker.Label>Holiday dates</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date range" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MultipleSelection: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Training dates"
      placeholder="Select one or more dates"
      selectionMode="multiple"
      closeOnSelect={false}
      defaultOpen
    />
  ),
  parameters:
    codeBlock(`<DatePicker.Root selectionMode="multiple" closeOnSelect={false} defaultOpen>
  <DatePicker.Label>Training dates</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select one or more dates" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MonthPicker: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Reporting month"
      placeholder="Select a month"
      defaultView="month"
      minView="month"
      maxView="month"
      defaultOpen
    />
  ),
  parameters:
    codeBlock(`<DatePicker.Root defaultView="month" minView="month" maxView="month" defaultOpen>
  <DatePicker.Label>Reporting month</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a month" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MonthRange: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Quarter"
      placeholder="Select a month range"
      selectionMode="range"
      defaultView="month"
      minView="month"
      maxView="month"
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root
  selectionMode="range"
  defaultView="month"
  minView="month"
  maxView="month"
  defaultOpen
>
  <DatePicker.Label>Quarter</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a month range" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const YearPicker: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Tax year"
      placeholder="Select a year"
      defaultView="year"
      minView="year"
      maxView="year"
      defaultOpen
    />
  ),
  parameters:
    codeBlock(`<DatePicker.Root defaultView="year" minView="year" maxView="year" defaultOpen>
  <DatePicker.Label>Tax year</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a year" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const YearRange: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Funding period"
      placeholder="Select a year range"
      selectionMode="range"
      defaultView="year"
      minView="year"
      maxView="year"
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root
  selectionMode="range"
  defaultView="year"
  minView="year"
  maxView="year"
  defaultOpen
>
  <DatePicker.Label>Funding period</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a year range" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MinMax: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Appointment date"
      min={parseDate('2026-04-01')}
      max={parseDate('2026-04-30')}
      hint="Only dates in April 2026 are available."
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root
  min={parseDate('2026-04-01')}
  max={parseDate('2026-04-30')}
  defaultOpen
>
  <DatePicker.Label>Appointment date</DatePicker.Label>
  <DatePicker.Hint>Only dates in April 2026 are available.</DatePicker.Hint>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const UnavailableDates: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Hearing date"
      hint="Weekends are unavailable."
      isDateUnavailable={(date) => {
        const dayOfWeek = date.toDate(getLocalTimeZone()).getDay()
        return dayOfWeek === 0 || dayOfWeek === 6
      }}
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
  }}
  defaultOpen
>
  <DatePicker.Label>Hearing date</DatePicker.Label>
  <DatePicker.Hint>Weekends are unavailable.</DatePicker.Hint>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const FormattingParsing: Story = {
  render: (args) => (
    <DatePicker.Root
      {...args}
      defaultOpen
      openOnClick
      format={(date, details) =>
        date.toDate(details.timeZone).toLocaleDateString(details.locale, {
          weekday: 'short',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      }
      parse={(value) => {
        const parsed = new Date(value)
        if (Number.isNaN(parsed.getTime())) {
          return undefined
        }

        return parseDate(parsed.toISOString().slice(0, 10))
      }}
    >
      <DatePicker.Label>Visit date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input placeholder="Wed, 13 April 2026" />
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root
  defaultOpen
  openOnClick
  format={(date, details) =>
    date.toDate(details.timeZone).toLocaleDateString(details.locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }
  parse={(value) => {
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return undefined
    return parseDate(parsed.toISOString().slice(0, 10))
  }}
>
  <DatePicker.Label>Visit date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input placeholder="Wed, 13 April 2026" />
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const Localization: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Date de debut"
      placeholder="Selectionnez une date"
      locale="fr-FR"
      defaultValue={[parseDate('2026-04-13')]}
      defaultOpen
    />
  ),
  parameters:
    codeBlock(`<DatePicker.Root locale="fr-FR" defaultValue={[parseDate('2026-04-13')]} defaultOpen>
  <DatePicker.Label>Date de debut</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Selectionnez une date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const ButtonTrigger: Story = {
  render: (args) => (
    <DatePicker.Root {...args} defaultOpen>
      <DatePicker.Label>Publish date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger asChild>
          <Button justifyContent="space-between" variant="outline" width="100%">
            <DatePicker.ValueText placeholder="Choose a publish date" />
            <RiCalendarLine />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen>
  <DatePicker.Label>Publish date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger asChild>
      <Button justifyContent="space-between" variant="outline" width="100%">
        <DatePicker.ValueText placeholder="Choose a publish date" />
        <RiCalendarLine />
      </Button>
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const OutsideIcon: Story = {
  render: (args) => (
    <DatePicker.Root {...args} defaultOpen openOnClick>
      <DatePicker.Label>Submission date</DatePicker.Label>
      <DatePicker.Control>
        <HStack align="stretch" gap={2}>
          <DatePicker.Input placeholder="DD/MM/YYYY" />
          <DatePicker.Trigger asChild>
            <IconButton aria-label="Open calendar" variant="outline">
              <RiCalendarLine />
            </IconButton>
          </DatePicker.Trigger>
        </HStack>
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen openOnClick>
  <DatePicker.Label>Submission date</DatePicker.Label>
  <DatePicker.Control>
    <HStack align="stretch" gap={2}>
      <DatePicker.Input placeholder="DD/MM/YYYY" />
      <DatePicker.Trigger asChild>
        <IconButton aria-label="Open calendar" variant="outline">
          <RiCalendarLine />
        </IconButton>
      </DatePicker.Trigger>
    </HStack>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const InputGroupExample: Story = {
  name: 'Input Group',
  render: (args) => (
    <DatePicker.Root {...args} defaultOpen openOnClick>
      <DatePicker.Label>Arrival date</DatePicker.Label>
      <DatePicker.Control>
        <InputGroup
          endElement={
            <DatePicker.Trigger asChild>
              <IconButton aria-label="Open calendar" size="sm" variant="ghost">
                <RiCalendarLine />
              </IconButton>
            </DatePicker.Trigger>
          }
        >
          <DatePicker.Input placeholder="DD/MM/YYYY" />
        </InputGroup>
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen openOnClick>
  <DatePicker.Label>Arrival date</DatePicker.Label>
  <DatePicker.Control>
    <InputGroup
      endElement={
        <DatePicker.Trigger asChild>
          <IconButton aria-label="Open calendar" size="sm" variant="ghost">
            <RiCalendarLine />
          </IconButton>
        </DatePicker.Trigger>
      }
    >
      <DatePicker.Input placeholder="DD/MM/YYYY" />
    </InputGroup>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const ClearIcon: Story = {
  render: (args) => (
    <DatePicker.Root {...args} defaultValue={[parseDate('2026-04-13')]} defaultOpen>
      <DatePicker.Label>Review date</DatePicker.Label>
      <DatePicker.Control>
        <HStack align="stretch" gap={2}>
          <DatePicker.Trigger>
            <DatePicker.ValueText placeholder="Select a date" />
          </DatePicker.Trigger>
          <DatePicker.ClearTrigger asChild>
            <IconButton aria-label="Clear selected date" variant="outline">
              <RiCloseLine />
            </IconButton>
          </DatePicker.ClearTrigger>
        </HStack>
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultValue={[parseDate('2026-04-13')]} defaultOpen>
  <DatePicker.Label>Review date</DatePicker.Label>
  <DatePicker.Control>
    <HStack align="stretch" gap={2}>
      <DatePicker.Trigger>
        <DatePicker.ValueText placeholder="Select a date" />
      </DatePicker.Trigger>
      <DatePicker.ClearTrigger asChild>
        <IconButton aria-label="Clear selected date" variant="outline">
          <RiCloseLine />
        </IconButton>
      </DatePicker.ClearTrigger>
    </HStack>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const Placement: Story = {
  render: (args) => (
    <TriggerField
      {...args}
      label="Reminder date"
      positioning={{ placement: 'bottom-end' }}
      defaultOpen
    />
  ),
  parameters: codeBlock(`<DatePicker.Root positioning={{ placement: 'bottom-end' }} defaultOpen>
  <DatePicker.Label>Reminder date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const HeaderLayout: Story = {
  render: (args) => (
    <TriggerField {...args} label="Published on" defaultOpen>
      <HeaderLayoutContent />
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen>
  <DatePicker.Label>Published on</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <Stack gap={4}>
            <HStack justify="space-between" align="center">
              <DatePicker.PrevTrigger />
              <DatePicker.RangeText fontWeight="700" />
              <DatePicker.NextTrigger />
            </HStack>
            <DatePicker.DayTable />
          </Stack>
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MonthAndYearSelect: Story = {
  render: (args) => (
    <TriggerField {...args} label="Meeting date" defaultOpen>
      <MonthAndYearSelectContent />
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen>
  <DatePicker.Label>Meeting date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <Stack gap={4}>
            <HStack align="center" justify="space-between">
              <DatePicker.MonthSelect />
              <DatePicker.YearSelect />
            </HStack>
            <DatePicker.DayTable />
          </Stack>
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const MultipleMonths: Story = {
  render: (args) => (
    <TriggerField {...args} label="Travel dates" numOfMonths={2} selectionMode="range" defaultOpen>
      <MultipleMonthsContent />
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root numOfMonths={2} selectionMode="range" defaultOpen>
  <DatePicker.Label>Travel dates</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <Stack gap={4}>
            <DatePicker.Header />
            <HStack align="start" gap={6}>
              <DatePicker.DayTable />
              <DatePicker.DayTable offset={1} />
            </HStack>
          </Stack>
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const Presets: Story = {
  render: (args) => (
    <TriggerField {...args} label="Quick range" defaultOpen>
      <PresetsContent />
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen>
  <DatePicker.Label>Quick range</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <Stack gap={4}>
          <HStack flexWrap="wrap">
            <DatePicker.PresetTrigger value={[today(getLocalTimeZone())]} asChild>
              <Button size="sm" variant="outline">
                Today
              </Button>
            </DatePicker.PresetTrigger>
            <DatePicker.PresetTrigger value={[parseDate('2026-04-30')]} asChild>
              <Button size="sm" variant="outline">
                End of month
              </Button>
            </DatePicker.PresetTrigger>
          </HStack>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </Stack>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const PresetsSidebar: Story = {
  render: (args) => (
    <TriggerField {...args} label="Reporting period" selectionMode="range" defaultOpen>
      <PresetsSidebarContent />
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root selectionMode="range" defaultOpen>
  <DatePicker.Label>Reporting period</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date range" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <HStack align="start" gap={6}>
          <Stack minW="140px">
            <DatePicker.PresetTrigger
              value={[parseDate('2026-04-01'), parseDate('2026-04-07')]}
              asChild
            >
              <Button justifyContent="flex-start" size="sm" variant="ghost">
                This week
              </Button>
            </DatePicker.PresetTrigger>
            <DatePicker.PresetTrigger
              value={[parseDate('2026-04-01'), parseDate('2026-04-30')]}
              asChild
            >
              <Button justifyContent="flex-start" size="sm" variant="ghost">
                This month
              </Button>
            </DatePicker.PresetTrigger>
          </Stack>
          <Stack gap={4}>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </Stack>
        </HStack>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const TodayButton: Story = {
  render: (args) => (
    <TriggerField {...args} label="Selected date" defaultOpen>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <Stack gap={4}>
              <DatePicker.View view="day">
                <DatePicker.Header />
                <DatePicker.DayTable />
              </DatePicker.View>
              <DatePicker.PresetTrigger value={[todayValue]} asChild>
                <Button alignSelf="flex-start" size="sm" variant="outline">
                  Use today
                </Button>
              </DatePicker.PresetTrigger>
              <DatePicker.View view="month">
                <DatePicker.Header />
                <DatePicker.MonthTable />
              </DatePicker.View>
              <DatePicker.View view="year">
                <DatePicker.Header />
                <DatePicker.YearTable />
              </DatePicker.View>
            </Stack>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </TriggerField>
  ),
  parameters: codeBlock(`<DatePicker.Root defaultOpen>
  <DatePicker.Label>Selected date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Trigger>
      <DatePicker.ValueText placeholder="Select a date" />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <Stack gap={4}>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.PresetTrigger value={[today(getLocalTimeZone())]} asChild>
            <Button alignSelf="flex-start" size="sm" variant="outline">
              Use today
            </Button>
          </DatePicker.PresetTrigger>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </Stack>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}

export const WithTime: Story = {
  render: (args) => (
    <DatePicker.Root
      {...args}
      defaultOpen
      openOnClick
      defaultValue={[parseDateTime('2026-04-13T14:30:00')]}
      format={(date, details) =>
        date.toDate(details.timeZone).toLocaleString(details.locale, {
          dateStyle: 'medium',
          timeStyle: 'short',
        })
      }
    >
      <DatePicker.Label>Appointment</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input placeholder="13 Apr 2026, 2:30 PM" />
      </DatePicker.Control>
      <DefaultCalendarContent />
    </DatePicker.Root>
  ),
  parameters: codeBlock(`<DatePicker.Root
  defaultOpen
  openOnClick
  defaultValue={[parseDateTime('2026-04-13T14:30:00')]}
  format={(date, details) =>
    date.toDate(details.timeZone).toLocaleString(details.locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }
>
  <DatePicker.Label>Appointment</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input placeholder="13 Apr 2026, 2:30 PM" />
  </DatePicker.Control>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>`),
}
