import type { Meta, StoryObj } from '@storybook/react-vite'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Highlight } from './Highlight'

type HighlightStoryArgs = {
  query: string[] | string
  children: string
  variant?: 'subtle' | 'solid' | 'outline' | 'plain'
  colorPalette?: (typeof chakraColorPaletteOptions)[number]
}

const meta: Meta<HighlightStoryArgs> = {
  title: 'Chakra Components/Typography/Highlight',
  component: Highlight.Root,
  tags: ['autodocs'],
  args: {
    query: 'fast',
    children: 'Building accessible components with chakra ui is fast.',
    variant: 'subtle',
    colorPalette: 'blue',
  },
  argTypes: {
    query: { control: 'text' },
    variant: selectArgType(['subtle', 'solid', 'outline', 'plain']),
    colorPalette: selectArgType(chakraColorPaletteOptions),
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Highlight.Root {...args}>{args.children}</Highlight.Root>,
}
