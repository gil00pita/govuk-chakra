import type { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Calendar } from './Calendar'

type CalendarStoryArgs = {
  colorPalette?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
  size?: 'sm' | 'md' | 'lg'
}

const meta: Meta<CalendarStoryArgs> = {
  title: 'Chakra Components/Date & Time/Calendar',
  component: Calendar.Root as unknown as ComponentType<CalendarStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'blue',
    size: 'md',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Calendar.Root inline width="fit-content" {...args}>
      <Calendar.Content>
        <Calendar.View view="day">
          <Calendar.Header />
          <Calendar.DayTable />
        </Calendar.View>
        <Calendar.View view="month">
          <Calendar.Header />
          <Calendar.MonthTable />
        </Calendar.View>
        <Calendar.View view="year">
          <Calendar.Header />
          <Calendar.YearTable />
        </Calendar.View>
      </Calendar.Content>
    </Calendar.Root>
  ),
}
