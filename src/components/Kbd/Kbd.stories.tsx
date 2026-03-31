import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Kbd } from './Kbd'

const kbdVariantOptions = ['raised', 'outline', 'subtle', 'plain'] as const

const meta: Meta<typeof Kbd.Root> = {
  title: 'Chakra Components/Typography/Kbd',
  component: Kbd.Root,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    variant: selectArgType(kbdVariantOptions),
    colorPalette: selectArgType(chakraColorPaletteOptions),
    children: { control: 'text' },
  },
  args: {
    children: 'Ctrl',
    variant: 'raised',
    colorPalette: 'gray',
  },
}
