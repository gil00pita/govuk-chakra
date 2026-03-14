import type { Meta, StoryObj } from '@storybook/react'

import { DateInput } from './DateInput'
import type { DateInputRootProps } from './DateInput'

interface DateInputStoryArgs extends DateInputRootProps {
  asPageHeading: boolean
  hideLegend: boolean
  showHint: boolean
  invalid: boolean
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
  },
  args: {
    asPageHeading: true,
    hideLegend: true,
    showHint: true,
    invalid: false,
  },
}

export default meta
type Story = StoryObj<DateInputStoryArgs>

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
