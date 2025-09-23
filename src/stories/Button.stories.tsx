import { Button, Stack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'GOV.UK/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Start now',
    bg: 'brand.blue',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '0',
    _hover: { bg: 'brand.blueDark' },
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={4}>
      <Button
        bg="brand.blue"
        color="white"
        fontWeight="bold"
        borderRadius="0"
        _hover={{ bg: 'brand.blueDark' }}
      >
        Primary (GOV.UK style)
      </Button>
      <Button
        bg="white"
        color="brand.blue"
        borderWidth="2px"
        borderColor="brand.blue"
        fontWeight="bold"
        borderRadius="0"
        _hover={{ bg: 'brand.lightGrey' }}
      >
        Secondary
      </Button>
      <Button
        bg="brand.red"
        color="white"
        fontWeight="bold"
        borderRadius="0"
        _hover={{ bg: '#aa2a14' }}
      >
        Warning
      </Button>
    </Stack>
  ),
}
