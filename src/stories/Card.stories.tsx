import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card.Root> = {
  title: 'GOV.UK/Card',
  component: Card.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'elevated'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'outline',
    children: (
      <CardBody>
        <Text>This is a simple card with just body content.</Text>
      </CardBody>
    ),
  },
}

export const WithHeader: Story = {
  render: () => (
    <Card.Root variant="outline" maxW="400px">
      <CardHeader>
        <Heading size="md">Service information</Heading>
      </CardHeader>
      <CardBody>
        <Text>Use this service to apply for a provisional driving licence online.</Text>
      </CardBody>
    </Card.Root>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card.Root variant="outline" maxW="400px">
      <CardHeader>
        <Heading size="md">Apply for a passport</Heading>
      </CardHeader>
      <CardBody>
        <Text>You can apply for or renew a British passport if you're a British citizen.</Text>
      </CardBody>
      <CardFooter>
        <Button colorPalette="primary">Start application</Button>
      </CardFooter>
    </Card.Root>
  ),
}

export const Elevated: Story = {
  render: () => (
    <Card.Root variant="elevated" maxW="400px">
      <CardBody>
        <Heading size="sm" mb={2}>
          Important notice
        </Heading>
        <Text>
          This service will be unavailable from 6pm on Friday 15 March to 8am on Monday 18 March.
        </Text>
      </CardBody>
    </Card.Root>
  ),
}

export const ServiceCards: Story = {
  render: () => (
    <VStack gap={4} width="500px">
      <Card.Root variant="outline">
        <CardHeader>
          <Heading size="md">Register to vote</Heading>
        </CardHeader>
        <CardBody>
          <Text mb={4}>Register to vote in elections and referendums.</Text>
          <HStack>
            <Button colorPalette="primary" size="sm">
              Start now
            </Button>
            <Text fontSize="sm">Takes about 5 minutes</Text>
          </HStack>
        </CardBody>
      </Card.Root>

      <Card.Root variant="outline">
        <CardHeader>
          <Heading size="md">Check your State Pension age</Heading>
        </CardHeader>
        <CardBody>
          <Text mb={4}>
            Check what age you can get your State Pension and when you can start claiming it.
          </Text>
          <HStack>
            <Button colorPalette="primary" size="sm">
              Check now
            </Button>
            <Text fontSize="sm">Takes about 2 minutes</Text>
          </HStack>
        </CardBody>
      </Card.Root>
    </VStack>
  ),
}
