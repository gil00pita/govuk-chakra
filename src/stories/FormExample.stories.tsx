import { HStack, Portal, Separator, VStack, createListCollection } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Fieldset } from '@/components/Fieldset'
import { Heading } from '@/components/Heading'
import { Radio } from '@/components/Radio'
import { Select } from '@/components/Select'
import type { SelectItemData } from '@/components/Select'
import { Text } from '@/components/Text'
import { Textinput } from '@/components/Textinput'
import { Textarea } from '@/components/Textarea'
import { ErrorSummary, NotificationBanner } from '@/components'

const meta: Meta = {
  title: 'GOV.UK/Patterns/Form Examples',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const contactOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'Email', value: 'email' },
    { label: 'Post', value: 'post' },
    { label: 'Phone', value: 'phone' },
  ],
})

function ContactMethodRadios() {
  return (
    <VStack align="start" gap={3}>
      <Radio.Item value="england">
        <Radio.ItemHiddenInput />
        <Radio.ItemControl>
          <Radio.ItemIndicator />
        </Radio.ItemControl>
        <Radio.ItemText>England</Radio.ItemText>
      </Radio.Item>
      <Radio.Item value="scotland">
        <Radio.ItemHiddenInput />
        <Radio.ItemControl>
          <Radio.ItemIndicator />
        </Radio.ItemControl>
        <Radio.ItemText>Scotland</Radio.ItemText>
      </Radio.Item>
      <Radio.Item value="wales">
        <Radio.ItemHiddenInput />
        <Radio.ItemControl>
          <Radio.ItemIndicator />
        </Radio.ItemControl>
        <Radio.ItemText>Wales</Radio.ItemText>
      </Radio.Item>
      <Radio.Item value="northern-ireland">
        <Radio.ItemHiddenInput />
        <Radio.ItemControl>
          <Radio.ItemIndicator />
        </Radio.ItemControl>
        <Radio.ItemText>Northern Ireland</Radio.ItemText>
      </Radio.Item>
    </VStack>
  )
}

export const CompleteForm: Story = {
  render: () => (
    <VStack gap={8} align="stretch" width="600px" p={6}>
      <Heading size="xl">Apply for a provisional driving licence</Heading>

      <Text fontSize="lg">You can apply for a provisional driving licence online.</Text>

      <NotificationBanner.Root variant="info">
        <NotificationBanner.Heading>Info</NotificationBanner.Heading>
        <NotificationBanner.Body>
          You must be at least 15 years and 9 months old to apply.
        </NotificationBanner.Body>
      </NotificationBanner.Root>

      <Separator />

      <VStack gap={6} align="stretch">
        <Heading size="lg">Personal details</Heading>

        <Fieldset.Root>
          <Fieldset.Legend mb={1}>Full name</Fieldset.Legend>
          <Fieldset.Hint>This must match the name on your identity documents</Fieldset.Hint>
          <Textinput.Input
            placeholder="Enter your full name as it appears on your passport"
            required
          />
        </Fieldset.Root>

        <HStack gap={4}>
          <Fieldset.Root>
            <Fieldset.Legend mb={3}>Date of birth</Fieldset.Legend>
            <Textinput.Input type="date" required />
          </Fieldset.Root>

          <Fieldset.Root>
            <Fieldset.Legend mb={3}>Postcode</Fieldset.Legend>
            <Textinput.Input placeholder="SW1A 1AA" required />
          </Fieldset.Root>
        </HStack>

        <Radio.Group legend="Where do you live?" hint="Select one option" legendAsHeading>
          <Radio.Root defaultValue="england" name="where-do-you-live">
            <Radio.Item value="england">
              <Radio.ItemHiddenInput />
              <Radio.ItemControl>
                <Radio.ItemIndicator />
              </Radio.ItemControl>
              <Radio.ItemText>England</Radio.ItemText>
            </Radio.Item>

            <Radio.Item value="scotland">
              <Radio.ItemHiddenInput />
              <Radio.ItemControl>
                <Radio.ItemIndicator />
              </Radio.ItemControl>
              <Radio.ItemText>Scotland</Radio.ItemText>
            </Radio.Item>

            <Radio.Item value="wales">
              <Radio.ItemHiddenInput />
              <Radio.ItemControl>
                <Radio.ItemIndicator />
              </Radio.ItemControl>
              <Radio.ItemText>Wales</Radio.ItemText>
            </Radio.Item>

            <Radio.Item value="northern-ireland">
              <Radio.ItemHiddenInput />
              <Radio.ItemControl>
                <Radio.ItemIndicator />
              </Radio.ItemControl>
              <Radio.ItemText>Northern Ireland</Radio.ItemText>
            </Radio.Item>
          </Radio.Root>
        </Radio.Group>

        <Checkbox.Group
          legendAsHeading
          legend="Which types of waste do you transport?"
          hint="Select all that apply."
        >
          <Checkbox.Root value="waste-animal">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
              <Checkbox.Hint>Including abattoir waste and dead animals</Checkbox.Hint>
            </VStack>
          </Checkbox.Root>
          <Checkbox.Root value="waste-mines">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
              <Checkbox.Hint>Ite waste and ite tailings</Checkbox.Hint>
            </VStack>
          </Checkbox.Root>
          <Checkbox.Root value="waste-farm">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
              <Checkbox.Hint>For example, slurry</Checkbox.Hint>
            </VStack>
          </Checkbox.Root>
        </Checkbox.Group>

        <Fieldset.Root>
          <Fieldset.Legend mb={1}>Additional information</Fieldset.Legend>
          <Fieldset.Hint>
            Do not include personal information like your National Insurance number
          </Fieldset.Hint>
          <Textarea.Input
            placeholder="Tell us about any medical conditions that might affect your driving"
            rows={4}
          />
        </Fieldset.Root>

        <Separator />

        <Heading size="lg">Contact preferences</Heading>

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>How would you like to be contacted?</Fieldset.Legend>
          <Select.Root collection={contactOptions}>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Choose an option" />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {contactOptions.items.map((item) => (
                    <Select.Item key={item.value} item={item} />
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Fieldset.Root>

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>Email address</Fieldset.Legend>
          <Textinput.Input type="email" placeholder="name@example.com" required />
        </Fieldset.Root>

        <Separator />

        <VStack align="start" gap={4}>
          <Checkbox.Root required>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              I confirm that the information I have provided is true and complete
            </Checkbox.Label>
          </Checkbox.Root>

          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              I would like to receive updates about driving licence services
            </Checkbox.Label>
          </Checkbox.Root>
        </VStack>

        <HStack gap={4}>
          <Button variant="primary" size="lg">
            Continue
          </Button>
          <Button variant="secondary">Save and continue later</Button>
        </HStack>
      </VStack>
    </VStack>
  ),
}

export const ErrorForm: Story = {
  render: () => (
    <VStack gap={6} align="stretch" width="600px" p={6}>
      <Heading size="xl">There is a problem</Heading>
      <ErrorSummary.Root>
        <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
        <ErrorSummary.Description>
          Fix the following errors before continuing:
        </ErrorSummary.Description>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#full-name">Enter your full name</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#national-insurance-number">
              Enter a valid email address
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#where-do-you-live">Select where you live</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#waste-types">
              Which types of waste do you transport
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Root>
      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Full name</Fieldset.Legend>
        <Fieldset.Error>Enter your full name</Fieldset.Error>
        <Textinput.Input variant="subtle" required />
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Email address</Fieldset.Legend>
        <Fieldset.Error>Enter a valid email address</Fieldset.Error>
        <Textinput.Input variant="subtle" type="email" value="invalid-email" />
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Where do you live?</Fieldset.Legend>
        <Fieldset.Error>Select where you live</Fieldset.Error>
        <Fieldset.Content>
          <Radio.Root defaultValue="england">
            <ContactMethodRadios />
          </Radio.Root>
        </Fieldset.Content>
      </Fieldset.Root>

      <Checkbox.Group
        legend="Which types of waste do you transport?"
        hint="Select all that apply."
        error="Select the types of waste you transport"
        legendAsHeading
      >
        <Checkbox.Root value="waste-animal">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-mines">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-farm">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <Button variant="primary">Continue</Button>
    </VStack>
  ),
}
