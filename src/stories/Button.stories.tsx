import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'
import { Stack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'

const meta: Meta<typeof Button> = {
  title: 'GOV.UK/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    colorPalette: {
      control: { type: 'select' },
      options: ['brand', 'secondary', 'error', 'inverse', 'link'],
    },
    showArrow: { control: 'boolean' },
  },
  args: {
    children: 'Start now',
    colorPalette: 'brand',
    showArrow: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack gap={4}>
      <Button colorPalette="brand">Primary (GOV.UK style)</Button>
      <Button colorPalette="secondary">Secondary</Button>
      <Button colorPalette="error">Error</Button>
      <Button colorPalette="inverse">Inverse</Button>
      <Button colorPalette="link">Link</Button>
    </Stack>
  ),
}
