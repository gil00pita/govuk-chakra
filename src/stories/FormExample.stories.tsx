import {
  Alert,
  Button,
  Checkbox,
  Fieldset,
  HStack,
  Heading,
  Input,
  RadioGroup,
  Select,
  Separator,
  Text,
  Textarea,
  VStack,
  createListCollection,
} from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { GoAlert } from 'react-icons/go'

const meta: Meta = {
  title: 'GOV.UK/Patterns/Form Examples',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const contactOptions = createListCollection({
  items: ['option1', 'option2', 'option3'],
  itemToString: (item) => item,
  itemToValue: (item) => item,
})

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
          <Fieldset.Legend>Full name</Fieldset.Legend>
          <Input placeholder="Enter your full name as it appears on your passport" required />
          <Fieldset.HelperText>
            This must match the name on your identity documents
          </Fieldset.HelperText>
        </Fieldset.Root>

        <HStack gap={4}>
          <Fieldset.Root>
            <Fieldset.Legend>Date of birth</Fieldset.Legend>
            <Input type="date" required />
          </Fieldset.Root>

          <Fieldset.Root>
            <Fieldset.Legend>Postcode</Fieldset.Legend>
            <Input placeholder="SW1A 1AA" required />
          </Fieldset.Root>
        </HStack>

        <Fieldset.Root>
          <Fieldset.Legend>Where do you live?</Fieldset.Legend>
          <RadioGroup.Root defaultValue="england">
            <VStack align="start" gap={3}>
              <RadioGroup.Item value="england">England</RadioGroup.Item>
              <RadioGroup.Item value="scotland">Scotland</RadioGroup.Item>
              <RadioGroup.Item value="wales">Wales</RadioGroup.Item>
              <RadioGroup.Item value="northern-ireland">Northern Ireland</RadioGroup.Item>
            </VStack>
          </RadioGroup.Root>
        </Fieldset.Root>

        <Fieldset.Root>
          <Fieldset.Legend>What do you want to drive?</Fieldset.Legend>
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
          <Fieldset.Legend>Additional information</Fieldset.Legend>
          <Textarea
            placeholder="Tell us about any medical conditions that might affect your driving"
            rows={4}
          />
          <Fieldset.HelperText>
            Do not include personal information like your National Insurance number
          </Fieldset.HelperText>
        </Fieldset.Root>

        <Separator />

        <Heading size="lg">Contact preferences</Heading>

        <Fieldset.Root>
          <Fieldset.Legend>How would you like to be contacted?</Fieldset.Legend>

          <Select.Root collection={contactOptions}>
            <Select.Trigger>
              <Select.ValueText placeholder="Choose an option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item item="option1">Email</Select.Item>
              <Select.Item item="option2">Post</Select.Item>
              <Select.Item item="option3">Phone</Select.Item>
            </Select.Content>
          </Select.Root>
        </Fieldset.Root>

        <Fieldset.Root>
          <Fieldset.Legend>Email address</Fieldset.Legend>
          <Input type="email" placeholder="name@example.com" required />
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
          <Button colorPalette="primary" size="lg">
            Continue
          </Button>
          <Button colorPalette="secondary">Save and continue later</Button>
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
        <Fieldset.Legend>Full name</Fieldset.Legend>
        <Input variant="subtle" required />
        <Fieldset.ErrorText>Enter your full name</Fieldset.ErrorText>
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend>Email address</Fieldset.Legend>
        <Input variant="subtle" type="email" value="invalid-email" />
        <Fieldset.ErrorText>Enter a valid email address</Fieldset.ErrorText>
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend>Where do you live?</Fieldset.Legend>
        <RadioGroup.Root defaultValue="england">
          <VStack align="start" gap={3}>
            <RadioGroup.Item value="england">England</RadioGroup.Item>
            <RadioGroup.Item value="scotland">Scotland</RadioGroup.Item>
            <RadioGroup.Item value="wales">Wales</RadioGroup.Item>
            <RadioGroup.Item value="northern-ireland">Northern Ireland</RadioGroup.Item>
          </VStack>
        </RadioGroup.Root>
        <Fieldset.ErrorText>Select where you live.</Fieldset.ErrorText>
      </Fieldset.Root>

      <Fieldset.Root>
        <RadioGroup.Root defaultValue="1">
          <VStack align="start" gap={3}>
            <RadioGroup.Item value={'england'}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>England</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value={'scotland'}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Scotland</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value={'wales'}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Wales</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value={'northern-ireland'}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Northern Ireland</RadioGroup.ItemText>
            </RadioGroup.Item>
          </VStack>
        </RadioGroup.Root>
      </Fieldset.Root>

      <Button variant="plain">Continue</Button>
    </VStack>
  ),
}
