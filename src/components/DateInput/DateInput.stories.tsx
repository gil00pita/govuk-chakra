import { DateInput as ChakraDateInput, HStack, Stack } from '@chakra-ui/react'
import { DateFormatter, parseDate, parseDateTime } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraSizeOptions, selectArgType } from '@/utils/storybookControls'
import { DateInput } from './DateInput'
import type { DateInputRootProps } from './DateInput'

const chakraDateInputVariantOptions = ['outline', 'subtle', 'flushed'] as const
const chakraDateInputLocaleOptions = ['en-GB', 'en-US', 'de-DE', 'ar-EG'] as const
const chakraDateInputGranularityOptions = ['day', 'hour', 'minute', 'second'] as const
const defaultSegmentedDate = parseDate('2026-01-26')
const defaultSegmentedDateTime = parseDateTime('2026-01-26T09:30')

interface DateInputStoryArgs extends DateInputRootProps {
  asPageHeading: boolean
  hideLegend: boolean
  showHint: boolean
  invalid: boolean
  chakraSize: (typeof chakraSizeOptions)[number]
  chakraVariant: (typeof chakraDateInputVariantOptions)[number]
  disabled: boolean
  readOnly: boolean
  locale: (typeof chakraDateInputLocaleOptions)[number]
  granularity: (typeof chakraDateInputGranularityOptions)[number]
  shouldForceLeadingZeros: boolean
}

const meta: Meta<DateInputStoryArgs> = {
  title: 'GOV.UK/Components/Date input',
  component: DateInput.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the date input component to allow users to enter a date.\n\n' +
          'The date input component is useful for forms that require a date input, such as birth dates or passport issue dates.\n\n' +
          'Chakra UI also provides a segmented DateInput for typing dates without opening a calendar. Use the segmented stories to review that API alongside the GOV.UK three-field pattern.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System date input documentation: https://design-system.service.gov.uk/components/date-input/.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    asPageHeading: { control: 'boolean', description: 'Render the legend as a page heading (h1)' },
    hideLegend: { control: 'boolean', description: 'Toggle DateInput.Legend' },
    showHint: { control: 'boolean', description: 'Toggle DateInput.Hint' },
    invalid: { control: 'boolean', description: 'Toggle DateInput.Error' },
    chakraSize: selectArgType(chakraSizeOptions, 'The Chakra segmented DateInput size.'),
    chakraVariant: selectArgType(
      chakraDateInputVariantOptions,
      'The Chakra segmented DateInput visual variant.'
    ),
    disabled: {
      control: 'boolean',
      description: 'Disable the Chakra segmented DateInput.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Make the Chakra segmented DateInput read only.',
    },
    locale: selectArgType(
      chakraDateInputLocaleOptions,
      'The locale used to order and format the segments.'
    ),
    granularity: selectArgType(
      chakraDateInputGranularityOptions,
      'The smallest date or time unit shown by the segmented DateInput.'
    ),
    shouldForceLeadingZeros: {
      control: 'boolean',
      description: 'Always render two-digit day and month segments.',
    },
  },
  args: {
    asPageHeading: true,
    hideLegend: true,
    showHint: true,
    invalid: false,
    chakraSize: 'md',
    chakraVariant: 'outline',
    disabled: false,
    readOnly: false,
    locale: 'en-GB',
    granularity: 'day',
    shouldForceLeadingZeros: false,
  },
}

export default meta
type Story = StoryObj<DateInputStoryArgs>

function SegmentedDateInput({
  label,
  name,
  args,
  defaultValue,
}: {
  label: string
  name: string
  args: DateInputStoryArgs
  defaultValue?: Parameters<typeof ChakraDateInput.Root>[0]['defaultValue']
}) {
  const resolvedDefaultValue = defaultValue ?? [
    args.granularity === 'day' ? defaultSegmentedDate : defaultSegmentedDateTime,
  ]

  return (
    <ChakraDateInput.Root
      defaultValue={resolvedDefaultValue}
      disabled={args.disabled}
      granularity={args.granularity}
      invalid={args.invalid}
      locale={args.locale}
      name={name}
      readOnly={args.readOnly}
      shouldForceLeadingZeros={args.shouldForceLeadingZeros}
      size={args.chakraSize}
      variant={args.chakraVariant}
      width="320px"
    >
      <ChakraDateInput.Label>{label}</ChakraDateInput.Label>
      <ChakraDateInput.Control>
        <ChakraDateInput.Segments />
      </ChakraDateInput.Control>
      <ChakraDateInput.HiddenInput />
    </ChakraDateInput.Root>
  )
}

export const Default: Story = {
  render: (args) => (
    <DateInput.Root
      width="720px"
      invalid={args.invalid}
      showHint={args.showHint}
      hideLegend={args.hideLegend}
      asPageHeading={args.asPageHeading}
    >
      <DateInput.Legend>What is your date of birth?</DateInput.Legend>
      <DateInput.Hint>For example, 27 3 2007</DateInput.Hint>
      <DateInput.Error>Enter a real date</DateInput.Error>
      <DateInput.Container>
        <DateInput.Field>
          <DateInput.Label>Day</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Month</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Year</DateInput.Label>
          <DateInput.Input inputWidth="4" />
        </DateInput.Field>
      </DateInput.Container>
    </DateInput.Root>
  ),
}

export const WithError: Story = {
  render: () => (
    <DateInput.Root width="720px">
      <DateInput.Legend>What is your passport issue date?</DateInput.Legend>
      <DateInput.Error>Enter a real date</DateInput.Error>
      <DateInput.Container>
        <DateInput.Field>
          <DateInput.Label>Day</DateInput.Label>
          <DateInput.Input inputWidth="2" defaultValue="31" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Month</DateInput.Label>
          <DateInput.Input inputWidth="2" defaultValue="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Year</DateInput.Label>
          <DateInput.Input inputWidth="4" defaultValue="2024" />
        </DateInput.Field>
      </DateInput.Container>
    </DateInput.Root>
  ),
}

export const AsPageHeading: Story = {
  render: () => (
    <DateInput.Root width="720px" asPageHeading>
      <DateInput.Legend>When did you arrive in the UK?</DateInput.Legend>
      <DateInput.Hint>For example, 5 9 2023</DateInput.Hint>
      <DateInput.Container>
        <DateInput.Field>
          <DateInput.Label>Day</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Month</DateInput.Label>
          <DateInput.Input inputWidth="2" />
        </DateInput.Field>
        <DateInput.Field>
          <DateInput.Label>Year</DateInput.Label>
          <DateInput.Input inputWidth="4" />
        </DateInput.Field>
      </DateInput.Container>
    </DateInput.Root>
  ),
}

export const SegmentedField: Story = {
  name: 'Segmented field',
  args: {
    hideLegend: false,
    granularity: 'day',
  },
  render: (args) => <SegmentedDateInput label="Date of birth" name="date-of-birth" args={args} />,
}

export const SegmentedWithTime: Story = {
  name: 'Segmented with time',
  args: {
    granularity: 'minute',
    shouldForceLeadingZeros: true,
  },
  render: (args) => (
    <SegmentedDateInput
      label="Appointment"
      name="appointment"
      args={args}
      defaultValue={[defaultSegmentedDateTime]}
    />
  ),
}

export const SegmentedTimeOnly: Story = {
  name: 'Segmented time only',
  args: {
    granularity: 'minute',
    shouldForceLeadingZeros: true,
  },
  render: (args) => (
    <ChakraDateInput.Root
      defaultValue={[defaultSegmentedDateTime]}
      disabled={args.disabled}
      formatter={
        new DateFormatter(args.locale, {
          hour: '2-digit',
          minute: '2-digit',
        })
      }
      granularity="minute"
      invalid={args.invalid}
      locale={args.locale}
      name="appointment-time"
      readOnly={args.readOnly}
      shouldForceLeadingZeros={args.shouldForceLeadingZeros}
      size={args.chakraSize}
      variant={args.chakraVariant}
      width="240px"
    >
      <ChakraDateInput.Label>Appointment time</ChakraDateInput.Label>
      <ChakraDateInput.Control>
        <ChakraDateInput.Segments />
      </ChakraDateInput.Control>
      <ChakraDateInput.HiddenInput />
    </ChakraDateInput.Root>
  ),
}

export const SegmentedMinMax: Story = {
  name: 'Segmented min and max',
  render: (args) => (
    <ChakraDateInput.Root
      defaultValue={[parseDate('2026-06-15')]}
      disabled={args.disabled}
      invalid={args.invalid}
      locale={args.locale}
      max={parseDate('2026-12-31')}
      min={parseDate('2026-01-01')}
      name="appointment-date"
      readOnly={args.readOnly}
      shouldForceLeadingZeros={args.shouldForceLeadingZeros}
      size={args.chakraSize}
      variant={args.chakraVariant}
      width="320px"
    >
      <ChakraDateInput.Label>Appointment date (2026 only)</ChakraDateInput.Label>
      <ChakraDateInput.Control>
        <ChakraDateInput.Segments />
      </ChakraDateInput.Control>
      <ChakraDateInput.HiddenInput />
    </ChakraDateInput.Root>
  ),
}

export const SegmentedRange: Story = {
  name: 'Segmented range',
  render: (args) => (
    <ChakraDateInput.Root
      defaultValue={[parseDate('2026-08-03'), parseDate('2026-08-07')]}
      disabled={args.disabled}
      invalid={args.invalid}
      locale={args.locale}
      name="trip-duration"
      readOnly={args.readOnly}
      selectionMode="range"
      shouldForceLeadingZeros={args.shouldForceLeadingZeros}
      size={args.chakraSize}
      variant={args.chakraVariant}
    >
      <ChakraDateInput.Label>Trip duration</ChakraDateInput.Label>
      <ChakraDateInput.Control>
        <Stack gap={2}>
          <HStack align="center" gap={3}>
            <ChakraDateInput.Segments index={0} />
            <ChakraDateInput.HiddenInput index={0} />
          </HStack>
          <HStack align="center" gap={3}>
            <ChakraDateInput.Segments index={1} />
            <ChakraDateInput.HiddenInput index={1} />
          </HStack>
        </Stack>
      </ChakraDateInput.Control>
    </ChakraDateInput.Root>
  ),
}
