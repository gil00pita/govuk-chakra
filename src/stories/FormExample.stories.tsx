import { Alert, HStack, Separator, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Fieldset } from '@/components/Fieldset'
import { GoAlert } from 'react-icons/go'
import { Heading } from '@/components/Heading'
import { Radio } from '@/components/Radio'
import { Select } from '@/components/Select'
import { Text } from '@/components/Text'
import { Textinput } from '@/components/Textinput'
import { Textarea } from '@/components/Textarea'

const meta: Meta = {
  title: 'GOV.UK/Patterns/Form Examples',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

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

      <Alert.Root status="info">
        <GoAlert />
        <Alert.Title>Error</Alert.Title>
        <Alert.Description>
          You must be at least 15 years and 9 months old to apply.
        </Alert.Description>
      </Alert.Root>

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

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>Where do you live?</Fieldset.Legend>
          <Fieldset.Content>
            <Radio.Root defaultValue="england">
              <ContactMethodRadios />
            </Radio.Root>
          </Fieldset.Content>
        </Fieldset.Root>

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>What do you want to drive?</Fieldset.Legend>
          <VStack align="start" gap={3}>
            <Checkbox.Root required>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Car</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root required>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Motorcycle</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root required>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Moped or light quad bike</Checkbox.Label>
            </Checkbox.Root>
          </VStack>
        </Fieldset.Root>

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
          <Select placeholder="Choose an option" defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            <option value="email">Email</option>
            <option value="post">Post</option>
            <option value="phone">Phone</option>
          </Select>
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
      <Alert.Root status="error" variant="subtle">
        <GoAlert />
        <Alert.Title>You must fix the errors on this page</Alert.Title>
        <Alert.Description>
          <VStack align="start" gap={1} mt={2}>
            <Text>• Enter your full name</Text>
            <Text>• Enter a valid email address</Text>
            <Text>• Select where you live</Text>
          </VStack>
        </Alert.Description>
      </Alert.Root>
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

      <Fieldset.Root>
        <Fieldset.Legend mb={3}>Where do you live?</Fieldset.Legend>
        <Fieldset.Content>
          <Radio.Root defaultValue="england">
            <VStack align="start" gap={3}>
              <Radio.Item value={'england'}>
                <Radio.ItemHiddenInput />
                <Radio.ItemControl>
                  <Radio.ItemIndicator />
                </Radio.ItemControl>
                <Radio.ItemText>England</Radio.ItemText>
              </Radio.Item>
              <Radio.Item value={'scotland'}>
                <Radio.ItemHiddenInput />
                <Radio.ItemControl>
                  <Radio.ItemIndicator />
                </Radio.ItemControl>
                <Radio.ItemText>Scotland</Radio.ItemText>
              </Radio.Item>
              <Radio.Item value={'wales'}>
                <Radio.ItemHiddenInput />
                <Radio.ItemControl>
                  <Radio.ItemIndicator />
                </Radio.ItemControl>
                <Radio.ItemText>Wales</Radio.ItemText>
              </Radio.Item>
              <Radio.Item value={'northern-ireland'}>
                <Radio.ItemHiddenInput />
                <Radio.ItemControl>
                  <Radio.ItemIndicator />
                </Radio.ItemControl>
                <Radio.ItemText>Northern Ireland</Radio.ItemText>
              </Radio.Item>
            </VStack>
          </Radio.Root>
        </Fieldset.Content>
      </Fieldset.Root>

      <Button variant="primary">Continue</Button>
    </VStack>
  ),
}
