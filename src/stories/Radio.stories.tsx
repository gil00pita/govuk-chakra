import * as React from 'react'

// Radio.stories.tsx
import { Field, RadioGroup, Stack, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// Extend component props with story-only controls
type StoryControls = React.ComponentProps<typeof RadioGroup.Root> & {
  fieldInvalid?: boolean
  fieldRequired?: boolean
  itemDisabled?: boolean
  itemGap?: number
}

const OPTIONS = [
  { value: 'england', label: 'England' },
  { value: 'scotland', label: 'Scotland' },
  { value: 'wales', label: 'Wales' },
  { value: 'ni', label: 'Northern Ireland' },
]

const meta: Meta<StoryControls> = {
  title: 'GOV.UK/Radio',
  component: RadioGroup.Root,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },

  // Controls for both the group and items
  argTypes: {
    // Group-level state
    disabled: { control: 'boolean' },
    fieldRequired: { control: 'boolean', name: 'required' },
    fieldInvalid: { control: 'boolean', name: 'invalid' },
    readOnly: { control: 'boolean' },

    // Group wiring
    name: { control: 'text' },
    defaultValue: { control: 'text' },
    value: { control: 'text', description: 'Leave empty to use defaultValue (uncontrolled)' },

    // Layout
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    itemGap: { control: { type: 'number', min: 0, step: 1 }, name: 'gap' },

    // Item-level
    itemDisabled: { control: 'boolean', name: 'first item: disabled' },
  },

  args: {
    name: 'where',
    defaultValue: 'england',
    value: '',
    disabled: false,
    fieldRequired: false,
    fieldInvalid: false,
    readOnly: false,
    orientation: 'vertical',
    itemGap: 3,
    itemDisabled: false,
  },

  render: (args: StoryControls) => {
    // Controlled vs uncontrolled: if args.value is a non-empty string, treat as controlled.
    const [controlled, setControlled] = React.useState<string>(args.value || '')
    const isControlled = Boolean(args.value && args.value.length)

    React.useEffect(() => {
      if (args.value !== undefined) {
        setControlled(args.value ?? '')
      }
    }, [args.value])

    const groupProps = {
      name: args.name,
      disabled: args.disabled,
      readOnly: args.readOnly,
      ...(isControlled
        ? {
            value: controlled,
            onValueChange: ({ value }: { value: string | null }) => {
              setControlled(value ?? '')
            },
          }
        : { defaultValue: args.defaultValue }),
    }

    const Items = (
      <>
        {OPTIONS.map((opt, idx) => (
          <RadioGroup.Item
            key={opt.value}
            value={opt.value}
            disabled={idx === 0 && args.itemDisabled}
          >
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </>
    )

    return (
      <Field.Root required={args.fieldRequired} invalid={args.fieldInvalid}>
        <Field.Label>Where do you live?</Field.Label>
        <RadioGroup.Root
          {...groupProps}
          aria-invalid={args.fieldInvalid || undefined}
          aria-required={args.fieldRequired || undefined}
          // visual cue that brand tokens are active (uses resolved token)
          style={{
            padding: '8px 12px',
            border: '1px solid',
            // rely on CSS var generated for brand.blue through style prop
            borderColor: 'var(--colors-brand-blue)',
            borderRadius: '0',
          }}
        >
          {args.orientation === 'vertical' ? (
            <VStack align="start" gap={args.itemGap}>
              {Items}
            </VStack>
          ) : (
            <Stack direction="row" align="center" gap={args.itemGap}>
              {Items}
            </Stack>
          )}
        </RadioGroup.Root>
        {!args.fieldInvalid && <Field.HelperText>Select one option.</Field.HelperText>}
        {args.fieldInvalid && <Field.ErrorText>Please select your country.</Field.ErrorText>}
      </Field.Root>
    )
  },
}

export default meta
type Story = StoryObj<StoryControls>

// A minimal single-radio example (matches your original “Default”)
export const Single: Story = {
  args: { name: 'yesno', defaultValue: '', orientation: 'vertical' },
  render: () => (
    <RadioGroup.Root defaultValue="yes" name="yesno">
      <RadioGroup.Item value="yes">
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  ),
}

// The one you’ll mostly use: tweak props via controls
export const Playground: Story = {}

// Quick presets you asked for
export const Checked: Story = {
  args: { defaultValue: 'england' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
