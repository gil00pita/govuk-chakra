import { useId, useState } from 'react'
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Code, For, HStack, Icon, Portal, Stack, Text } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { HiCheck, HiX } from 'react-icons/hi'

import { chakraColorPaletteOptions, selectArgType } from '@/utils/storybookControls'
import { Tooltip } from '@/components/Tooltip'
import { Switch } from './Switch'

type SwitchStoryArgs = {
  colorPalette?: (typeof chakraColorPaletteOptions)[number]
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'raised'
}

const meta: Meta<SwitchStoryArgs> = {
  title: 'Chakra Components/Forms/Switch',
  component: Switch.Root as unknown as ComponentType<SwitchStoryArgs>,
  tags: ['autodocs'],
  args: {
    colorPalette: 'blue',
    size: 'md',
    variant: 'solid',
  },
  argTypes: {
    colorPalette: selectArgType(chakraColorPaletteOptions, 'The color palette of the component.'),
    size: selectArgType(['xs', 'sm', 'md', 'lg'], 'The size of the component.'),
    variant: selectArgType(['solid', 'raised'], 'The variant of the component.'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

function BasicSwitch(
  props: ComponentPropsWithoutRef<typeof Switch.Root> & {
    label?: ReactNode
    controlChildren?: ReactNode
  }
) {
  const { label = 'Enable notifications', controlChildren, ...rest } = props

  return (
    <Switch.Root {...rest}>
      <Switch.HiddenInput />
      <Switch.Control>{controlChildren}</Switch.Control>
      <Switch.Label>{label}</Switch.Label>
    </Switch.Root>
  )
}

export const Default: Story = {
  render: (args) => <BasicSwitch {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <HStack gap="8" align="flex-start">
      <For each={['xs', 'sm', 'md', 'lg'] as const}>
        {(size) => <BasicSwitch key={size} label={size} size={size} />}
      </For>
    </HStack>
  ),
}

export const Variants: Story = {
  render: () => (
    <HStack gap="8" align="flex-start">
      <For each={['raised', 'solid'] as const}>
        {(variant) => <BasicSwitch key={variant} label={variant} variant={variant} />}
      </For>
    </HStack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack gap="2" align="flex-start">
      <For each={['gray', 'blue', 'red', 'green', 'pink'] as const}>
        {(colorPalette) => (
          <Stack key={colorPalette} align="center" direction="row" gap="10" px="4">
            <Text minW="8ch">{colorPalette}</Text>

            <Switch.Root colorPalette={colorPalette}>
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label />
            </Switch.Root>

            <Switch.Root colorPalette={colorPalette} defaultChecked>
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label />
            </Switch.Root>
          </Stack>
        )}
      </For>
    </Stack>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <Stack align="flex-start" gap="3">
        <Switch.Root checked={checked} onCheckedChange={(event) => setChecked(event.checked)}>
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>{checked ? 'Enabled' : 'Disabled'}</Switch.Label>
        </Switch.Root>
        <Code>checked: {String(checked)}</Code>
      </Stack>
    )
  },
}

export const Disabled: Story = {
  render: () => <BasicSwitch disabled label="Activate Chakra" />,
}

export const Invalid: Story = {
  render: () => <BasicSwitch invalid label="Activate Chakra" />,
}

export const ThumbIndicator: Story = {
  render: () => (
    <Switch.Root size="lg">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb>
          <Switch.ThumbIndicator fallback={<HiX color="black" />}>
            <HiCheck />
          </Switch.ThumbIndicator>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Label>Switch me</Switch.Label>
    </Switch.Root>
  ),
}

export const TrackIndicator: Story = {
  render: () => (
    <Switch.Root colorPalette="blue" size="lg">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label>Switch me</Switch.Label>
    </Switch.Root>
  ),
}

export const WithTooltip: Story = {
  render: () => {
    const id = useId()

    return (
      <Tooltip.Root ids={{ trigger: id }} openDelay={200} closeDelay={100}>
        <Tooltip.Trigger asChild>
          <Switch.Root ids={{ root: id }}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Switch with tooltip</Switch.Label>
          </Switch.Root>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              This is a tooltip
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    )
  },
}
