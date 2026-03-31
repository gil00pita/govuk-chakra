import { useEffect, useState, type ComponentType } from 'react'
import { HStack, Portal, parseColor } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { selectArgType, chakraSizeOptions } from '@/utils/storybookControls'
import { ColorPicker } from './ColorPicker'

type ColorPickerStoryArgs = {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'outline' | 'subtle'
  disabled?: boolean
  title?: string
  value?: string
}

const swatches = ['#000000', '#4A5568', '#F56565', '#9F7AEA', '#4299E1', '#48BB78']

const meta: Meta<ColorPickerStoryArgs> = {
  title: 'Chakra Components/Forms/Color Picker',
  component: ColorPicker.Root as unknown as ComponentType<ColorPickerStoryArgs>,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'outline',
    disabled: false,
    title: 'Color',
    value: '#eb5e41',
  },
  argTypes: {
    size: selectArgType(chakraSizeOptions, 'The size of the component.'),
    variant: selectArgType(['outline', 'subtle'], 'The variant of the component.'),
    title: {
      control: 'text',
      description: 'The label shown above the input.',
    },
    value: {
      control: 'text',
      description: 'The selected color value as a hex string.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ColorPickerPreview {...args} />,
}

export const Inline: Story = {
  render: () => (
    <ColorPicker.Root open defaultValue={parseColor('#000')}>
      <ColorPicker.HiddenInput />
      <ColorPicker.Content animation="none" shadow="none" padding="0">
        <ColorPicker.Area />
        <HStack>
          <ColorPicker.EyeDropper size="xs" variant="outline" />
          <ColorPicker.Sliders />
          <ColorPicker.ValueSwatch />
        </HStack>
      </ColorPicker.Content>
    </ColorPicker.Root>
  ),
}

export const WithSwatches: Story = {
  render: () => <WithSwatchesPreview />,
}

function WithSwatchesPreview() {
  const [value, setValue] = useState(() => parseColor('#eb5e41'))

  return (
    <ColorPicker.Root
      defaultValue={value}
      maxW="200px"
      onValueChange={(event) => setValue(event.value)}
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
            <ColorPicker.SwatchGroup>
              {swatches.map((item) => (
                <ColorPicker.SwatchTrigger key={item} value={item}>
                  <ColorPicker.Swatch boxSize="4.5" value={item} />
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}

function ColorPickerPreview({ title = 'Color', value = '#eb5e41', ...args }: ColorPickerStoryArgs) {
  const [selectedColor, setSelectedColor] = useState(() => parseColor(value))

  useEffect(() => {
    setSelectedColor(parseColor(value))
  }, [value])

  return (
    <ColorPicker.Root
      {...args}
      value={selectedColor}
      maxW="200px"
      onValueChange={(event) => setSelectedColor(event.value)}
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>{title}</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
