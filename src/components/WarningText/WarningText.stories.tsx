import type { Meta, StoryObj } from '@storybook/react-vite'

import { WarningText } from './WarningText'

const meta: Meta<typeof WarningText> = {
  title: 'GOV.UK/Components/Warning text',
  component: WarningText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <WarningText/> component to display warning messages to users.\n\n' +
          'The <WarningText/> component is useful for highlighting important information or potential issues that users should be aware of.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System warning text documentation: https://design-system.service.gov.uk/components/warning-text/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'You can be fined up to \u00a35,000 if you do not register.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomAssistiveText: Story = {
  args: {
    assistiveText: 'Important',
    children: 'Applications close at midnight on Friday.',
  },
}

export const CustomIcon: Story = {
  args: {
    iconText: 'i',
    children: 'Check your answers before you continue.',
  },
}
