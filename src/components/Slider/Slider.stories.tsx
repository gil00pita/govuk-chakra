import { useState } from 'react'
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Code, For, HStack, Stack, Text, VStack, useSlider } from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Slider } from './Slider'

type SliderStoryArgs = {
  defaultValue?: number[]
  colorPalette?: (typeof chakraColorPaletteOptions)[number]
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'solid'
}

const meta: Meta<SliderStoryArgs> = {
  title: 'Chakra Components/Forms/Slider',
  component: Slider.Root as unknown as ComponentType<SliderStoryArgs>,
  tags: ['autodocs'],
  args: {
    defaultValue: [40],
    colorPalette: 'blue',
    orientation: 'horizontal',
    size: 'lg',
    variant: 'outline',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    orientation: selectArgType(['horizontal', 'vertical'], 'The orientation of the component.'),
    size: selectArgType(['sm', 'md', 'lg'], 'The size of the component.'),
    variant: selectArgType(['outline', 'solid'], 'The variant of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const marks = [
  { value: 0, label: '0%' },
  { value: 50, label: '50%' },
  { value: 100, label: '100%' },
]

const paletteExamples: SliderStoryArgs['colorPalette'][] = ['gray', 'blue', 'red', 'green', 'pink']

function BasicSlider(
  props: ComponentPropsWithoutRef<typeof Slider.Root> & {
    label?: ReactNode
    marks?: Array<number | { value: number; label: ReactNode }>
    maxW?: string
    showValueText?: boolean
  }
) {
  const { h, label, marks: marksProp, maxW = '320px', orientation, showValueText, ...rest } = props

  return (
    <Slider.Root
      h={orientation === 'vertical' ? (h ?? '240px') : undefined}
      maxW={orientation === 'vertical' ? undefined : maxW}
      min={0}
      max={100}
      {...rest}
    >
      {label && !showValueText ? <Slider.Label>{label}</Slider.Label> : null}
      {label && showValueText ? (
        <HStack justify="space-between">
          <Slider.Label>{label}</Slider.Label>
          <Slider.ValueText />
        </HStack>
      ) : null}
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        {marksProp ? <Slider.Marks marks={marksProp} /> : null}
      </Slider.Control>
    </Slider.Root>
  )
}

export const Default: Story = {
  render: (args) => <BasicSlider {...args} label="Volume" showValueText />,
}

export const Sizes: Story = {
  render: () => (
    <Stack width="320px" gap="6">
      <For each={['sm', 'md', 'lg'] as const}>
        {(size) => (
          <BasicSlider key={size} defaultValue={[40]} label={`Slider - ${size}`} size={size} />
        )}
      </For>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack width="320px" gap="6">
      <For each={['outline', 'solid'] as const}>
        {(variant) => (
          <BasicSlider
            key={variant}
            defaultValue={[40]}
            label={`Slider - ${variant}`}
            variant={variant}
          />
        )}
      </For>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack gap="4" align="flex-start">
      <For each={paletteExamples}>
        {(colorPalette) => (
          <BasicSlider
            key={colorPalette}
            colorPalette={colorPalette}
            defaultValue={[40]}
            label={colorPalette}
            maxW="240px"
          />
        )}
      </For>
    </Stack>
  ),
}

export const Label: Story = {
  render: () => <BasicSlider defaultValue={[40]} label="Quantity" maxW="240px" />,
}

export const RangeSlider: Story = {
  render: () => <BasicSlider defaultValue={[30, 60]} maxW="240px" />,
}

export const PreventOverlap: Story = {
  render: () => <BasicSlider defaultValue={[20, 60]} maxW="320px" minStepsBetweenThumbs={8} />,
}

export const CollisionBehavior: Story = {
  render: () => (
    <Stack gap="4" width="320px">
      <BasicSlider
        defaultValue={[30, 70]}
        label="Price Range"
        thumbCollisionBehavior="push"
        maxW="320px"
      />
      <Text color="fg.muted" textStyle="sm">
        Try dragging the thumbs together to see them push each other
      </Text>
    </Stack>
  ),
}

export const Customization: Story = {
  render: () => (
    <Slider.Root defaultValue={[30]} maxW="240px">
      <Slider.Control>
        <Slider.Track bg="red.100">
          <Slider.Range bg="orange.500" />
        </Slider.Track>
        <Slider.Thumb index={0} boxSize={6} borderColor="orange.500">
          <Box as={MdGraphicEq} color="orange.500" />
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  ),
}

export const ValueText: Story = {
  render: () => (
    <BasicSlider defaultValue={[40]} label="Volume" maxW="sm" showValueText size="sm" />
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState([40])

    return (
      <Slider.Root maxW="240px" value={value} onValueChange={(event) => setValue(event.value)}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    )
  },
}

export const Store: Story = {
  render: () => {
    const slider = useSlider({
      defaultValue: [40],
      thumbAlignment: 'center',
    })

    return (
      <Stack align="flex-start">
        <Code>current: {slider.value.join(', ')}</Code>
        <Slider.RootProvider value={slider} maxW="240px">
          <Slider.Label>Slider</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.RootProvider>
      </Stack>
    )
  },
}

export const Disabled: Story = {
  render: () => <BasicSlider defaultValue={[40]} disabled maxW="240px" />,
}

export const ChangeEnd: Story = {
  render: () => {
    const initialValue = [50]
    const [value, setValue] = useState(initialValue)
    const [endValue, setEndValue] = useState(initialValue)

    return (
      <Box maxW="240px">
        <Slider.Root
          value={value}
          onValueChange={(event) => setValue(event.value)}
          onValueChangeEnd={(event) => setEndValue(event.value)}
        >
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>

        <Stack mt="3" gap="1">
          <Code>
            onChange: <b>{value.join(', ')}</b>
          </Code>
          <Code>
            onChangeEnd: <b>{endValue.join(', ')}</b>
          </Code>
        </Stack>
      </Box>
    )
  },
}

export const Steps: Story = {
  render: () => <BasicSlider defaultValue={[40]} maxW="240px" step={10} />,
}

export const ThumbAlignment: Story = {
  render: () => (
    <Stack maxW="240px" gap="6">
      <Slider.Root
        thumbAlignment="contain"
        thumbSize={{ width: 16, height: 16 }}
        defaultValue={[40]}
      >
        <Slider.Label>Slider (contain)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>

      <Slider.Root thumbAlignment="center" defaultValue={[40]}>
        <Slider.Label>Slider (center)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  ),
}

export const Marks: Story = {
  render: () => (
    <Stack gap="8">
      <For each={['sm', 'md', 'lg'] as const}>
        {(size) => (
          <VStack key={size} align="flex-start">
            <BasicSlider defaultValue={[40]} marks={[0, 50, 100]} maxW="240px" size={size} />
            <Text>size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  ),
}

export const MarksWithLabel: Story = {
  render: () => <BasicSlider colorPalette="pink" defaultValue={[40]} marks={marks} maxW="240px" />,
}

export const Vertical: Story = {
  render: () => <BasicSlider defaultValue={[40]} h="200px" orientation="vertical" />,
}

export const VerticalWithMarks: Story = {
  render: () => (
    <BasicSlider
      colorPalette="pink"
      defaultValue={[40]}
      h="200px"
      marks={marks}
      orientation="vertical"
    />
  ),
}

export const DraggingIndicator: Story = {
  render: () => (
    <Slider.Root defaultValue={[40]} maxW="240px">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.DraggingIndicator top="6" rounded="sm" px="1.5">
            <Slider.ValueText />
          </Slider.DraggingIndicator>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  ),
}
