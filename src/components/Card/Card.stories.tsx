import { HStack, VStack } from '@chakra-ui/react'
import { Card, CardGroup } from '@/components/Card/Card'
import { Button } from '@/components/Button/Button'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/components'
import type { CardRootProps } from '@/components/Card/Card'

interface CardStoryArgs extends CardRootProps {
  showHeader: boolean
  showBody: boolean
  showFooter: boolean
  showImage: boolean
}

const meta: Meta<CardStoryArgs> = {
  title: 'GOV.UK/Card',
  component: Card.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    href: { control: 'text' },
    headingType: { control: 'text' },
    openInNewTab: { control: 'boolean' },
    linkCard: { control: 'boolean' },
    showHeader: { control: 'boolean', description: 'Toggle Card.Header' },
    showBody: { control: 'boolean', description: 'Toggle Card.Body' },
    showFooter: { control: 'boolean', description: 'Toggle Card.Footer' },
    showImage: { control: 'boolean', description: 'Toggle image' },
  },
  args: {
    showHeader: true,
    showBody: true,
    showFooter: false,
    showImage: false,
    imageSrc: 'https://placehold.co/400x200',
    imageAlt: 'Placeholder image',
    href: 'https://www.gov.uk',
    headingType: 'h3',
    openInNewTab: false,
    linkCard: true,
  },
}

export default meta
type Story = StoryObj<CardStoryArgs>

/** Basic card with body content only */
export const Default: Story = {
  render: (args) => (
    <Card.Root
      maxW="400px"
      href={args.href}
      openInNewTab={args.openInNewTab}
      linkCard={args.linkCard}
      imageSrc={args.showImage ? args.imageSrc : undefined}
      imageAlt={args.showImage ? args.imageAlt : undefined}
    >
      {args.showHeader && <Card.Header>Card title</Card.Header>}
      {args.showBody && <Card.Body>Card body content goes here.</Card.Body>}
      {args.showFooter && (
        <Card.Footer>
          <Button colorPalette="primary">Action</Button>
        </Card.Footer>
      )}
    </Card.Root>
  ),
}

/** Card with a header title (no link) */
export const WithHeader: Story = {
  render: () => (
    <Card.Root maxW="400px">
      <Card.Header>Service information</Card.Header>
      <Card.Body>Use this service to apply for a provisional driving licence online.</Card.Body>
    </Card.Root>
  ),
}

/** Card.Header with `href` renders a clickable link card */
export const WithLink: Story = {
  render: () => (
    <Card.Root maxW="400px" href="https://www.gov.uk/apply-renew-passport">
      <Card.Header>Apply for a passport</Card.Header>
      <Card.Body>
        You can apply for or renew a British passport if you're a British citizen.
      </Card.Body>
    </Card.Root>
  ),
}

/** Card.Header with `openInNewTab` opens link in a new tab */
export const LinkOpenInNewTab: Story = {
  render: () => (
    <Card.Root maxW="400px" href="https://www.gov.uk/apply-renew-passport">
      <Card.Header openInNewTab>GOV.UK homepage</Card.Header>
      <Card.Body>Opens in a new tab with noopener noreferrer.</Card.Body>
    </Card.Root>
  ),
}

/** Card.Header with `linkCard={false}` renders plain text even with href */
export const NonLinkCard: Story = {
  render: () => (
    <Card.Root maxW="400px" href="https://www.gov.uk">
      <Card.Header linkCard={false}>Not a clickable card</Card.Header>
      <Card.Body>The header has an href but linkCard is false, so no link overlay.</Card.Body>
    </Card.Root>
  ),
}

/** Card.Header with custom `headingType` to change the HTML heading element */
export const CustomHeadingType: Story = {
  render: () => (
    <VStack gap={4} width="400px">
      <Card.Root>
        <Card.Header headingType="h2">Heading as h2</Card.Header>
        <Card.Body>headingType=&quot;h2&quot;</Card.Body>
      </Card.Root>
      <Card.Root>
        <Card.Header headingType="h3">Heading as h3</Card.Header>
        <Card.Body>headingType=&quot;h3&quot; (default)</Card.Body>
      </Card.Root>
      <Card.Root>
        <Card.Header headingType="h4">Heading as h4</Card.Header>
        <Card.Body>headingType=&quot;h4&quot;</Card.Body>
      </Card.Root>
    </VStack>
  ),
}

/** Card with header, body and footer */
export const WithFooter: Story = {
  render: () => (
    <Card.Root maxW="400px" href="https://www.gov.uk/apply-renew-passport">
      <Card.Header>Apply for a passport</Card.Header>
      <Card.Body>
        You can apply for or renew a British passport if you're a British citizen.
      </Card.Body>
      <Card.Footer>
        <Button colorPalette="primary">Start application</Button>
      </Card.Footer>
    </Card.Root>
  ),
}

/** Card.Root with `imageSrc` displays an image at the top */
export const WithImage: Story = {
  render: () => (
    <Card.Root
      maxW="400px"
      href="https://www.gov.uk"
      imageSrc="https://placehold.co/400x200"
      imageAlt="Placeholder image"
    >
      <Card.Header>GOV.UK service</Card.Header>
      <Card.Body>A card with an image displayed above the content.</Card.Body>
    </Card.Root>
  ),
}

/** Multiple service cards in a stack */
export const ServiceCards: Story = {
  render: () => (
    <VStack gap={4} width="500px">
      <Card.Root>
        <Card.Header href="https://www.gov.uk/register-to-vote">Register to vote</Card.Header>
        <Card.Body>
          <Text mb={4}>Register to vote in elections and referendums.</Text>
          <HStack>
            <Button colorPalette="primary" size="sm">
              Start now
            </Button>
            <Text fontSize="sm">Takes about 5 minutes</Text>
          </HStack>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header href="https://www.gov.uk/state-pension-age">
          Check your State Pension age
        </Card.Header>
        <Card.Body>
          <Text mb={4}>
            Check what age you can get your State Pension and when you can start claiming it.
          </Text>
          <HStack>
            <Button colorPalette="primary" size="sm">
              Check now
            </Button>
            <Text fontSize="sm">Takes about 2 minutes</Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </VStack>
  ),
}

/** CardGroup renders a grid of cards from a data array */
export const GroupFromData: Story = {
  render: () => (
    <CardGroup
      cards={[
        {
          title: 'Register to vote',
          href: 'https://www.gov.uk/register-to-vote',
          description: 'Register to vote in elections and referendums.',
          meta: 'Takes about 5 minutes',
        },
        {
          title: 'Apply for a passport',
          href: 'https://www.gov.uk/apply-renew-passport',
          description: 'Apply for or renew a British passport.',
          meta: 'Takes about 10 minutes',
        },
        {
          title: 'Check your State Pension age',
          href: 'https://www.gov.uk/state-pension-age',
          description: 'Check what age you can get your State Pension.',
          meta: 'Takes about 2 minutes',
        },
        {
          title: 'Report a lost driving licence',
          href: 'https://www.gov.uk/report-driving-licence-lost-stolen',
          description: 'Report and apply for a replacement driving licence.',
          meta: 'Takes about 15 minutes',
        },
      ]}
      columns={{ base: 1, md: 2 }}
      maxW="800px"
    />
  ),
}
