import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconButton } from './IconButton'
import { govukButtonIconVariantOptions, selectArgType } from '@/stories/storybookControls'
import { FaCog } from 'react-icons/fa'

const meta: Meta<typeof IconButton> = {
  title: 'Chakra Components/Buttons/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    variant: selectArgType(govukButtonIconVariantOptions),
  },
  render: (args) => (
    <IconButton aria-label="Open settings" {...args}>
      <FaCog />
    </IconButton>
  ),
}
