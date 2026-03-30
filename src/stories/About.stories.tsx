import { Box, Card, Grid, HStack, Image, Separator, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, Link, Text } from '@/components'

const meta: Meta = {
  title: 'GOV.UK/About',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
    interactions: {
      disable: true,
    },
    bottomPanelHeight: 0,
    addons: {
      backgrounds: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const installCommand = `yarn add govuk-chakra @emotion/react @emotion/styled framer-motion react react-dom`

const providerExample = `import { GOVUKProvider } from 'govuk-chakra'

export function AppRoot() {
  return (
    <GOVUKProvider>
      <App />
    </GOVUKProvider>
  )
}`

const importExample = `import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  Table,
  GOVUKHeader,
  GOVUKFooter,
  Textinput,
  Separator,
} from 'govuk-chakra'`

const usageExample = `import { Box, Heading, Button, Text, GOVUKHeader } from 'govuk-chakra'

export function ExamplePage() {
  return (
    <Box>
      <GOVUKHeader />
      <Heading size={48}>Service title</Heading>
      <Text fontSize={19}>
        This page uses Chakra layout primitives and GOV.UK-styled wrappers
        from the same package.
      </Text>
      <Button>Continue</Button>
    </Box>
  )
}`

function CodeSample({ children }: { children: string }) {
  return (
    <Box
      as="pre"
      bg="bg.subtle"
      borderWidth="1px"
      borderColor="border.subtle"
      borderRadius="md"
      overflowX="auto"
      p={4}
      width="full"
      whiteSpace="pre-wrap"
      fontSize="sm"
      lineHeight="tall"
      fontFamily="mono"
    >
      {children}
    </Box>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <VStack as="ul" align="start" gap={2} pl={5} style={{ listStyleType: 'disc' }}>
      {items.map((item) => (
        <Text as="li" key={item}>
          {item}
        </Text>
      ))}
    </VStack>
  )
}

export const Overview: Story = {
  render: () => (
    <Box px={{ base: 6, md: 10 }} py={{ base: 8, md: 12 }}>
      <VStack align="stretch" gap={10} maxW="1100px" mx="auto">
        <VStack align="start" gap={4}>
          <Heading fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
            GOV.UK Chakra
          </Heading>
          <Heading size="md">A GOV.UK-flavoured skin for Chakra UI</Heading>
          <HStack gap={4} wrap="wrap">
            <Link href="https://gov-uk-gds-react-chakra.vercel.app">
              <Image
                src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg"
                title="Live Demo Storybook"
              />
            </Link>
            <Image
              src="https://vercelbadge.vercel.app/api/gil00pita/govuk-chakra"
              title="Build Status"
            />
            <Image src="https://img.shields.io/npm/v/govuk-chakra" title="NPM Version" />
            <Image src="https://img.shields.io/npm/dm/govuk-chakra" title="NPM Downloads" />
            <Image
              src="https://img.shields.io/npm/last-update/govuk-chakra"
              title="NPM Last Update"
            />
            <Image src="https://img.shields.io/npm/l/govuk-chakra" title="NPM License" />
          </HStack>
          <Text fontSize="lg" maxW="4xl">
            <Box as="span" fontFamily="mono">
              govuk-chakra
            </Box>{' '}
            is a React component library that applies a GOV.UK-style skin on top of Chakra UI. It
            keeps Chakra&apos;s composability, theme system, and React ergonomics while shipping a
            more GOV.UK-aligned visual language.
          </Text>
          <HStack gap={4} wrap="wrap">
            <Link href="https://gov-uk-gds-react-chakra.vercel.app">Live demo</Link>
            <Link href="https://github.com/gil00pita/govuk-chakra">GitHub repository</Link>
            <Link href="https://www.npmjs.com/package/govuk-chakra">Npm Page</Link>
            <Link href="https://www.figma.com/community/file/1550623138170727031/gov-uk-design-system-2025">
              GOV.UK Design System Figma File in Community
            </Link>
            <Link href="https://design-system.service.gov.uk/get-started/">
              GOV.UK Design System
            </Link>
          </HStack>
        </VStack>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <Card.Root>
            <Card.Body>
              <VStack align="start" gap={4}>
                <Heading size="md">What this project is</Heading>
                <BulletList
                  items={[
                    'A Chakra-based design skin for React applications',
                    'A set of GOV.UK-flavoured components such as GOVUKHeader, GOVUKFooter, CookieBanner, TaskList, SummaryList, and form primitives',
                    'A reusable Chakra system theme exported as govUkTheme',
                    'A package that can be published and consumed as a library',
                  ]}
                />
              </VStack>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <VStack align="start" gap={4}>
                <Heading size="md">What this project is not</Heading>
                <BulletList
                  items={[
                    'An official GOV.UK Design System package',
                    'A drop-in clone of govuk-frontend',
                    'A full application framework',
                    'A replacement for the GOV.UK Prototype Kit',
                  ]}
                />
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>

        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={4}>
              <Heading size="lg">Why build it this way</Heading>
              <BulletList
                items={[
                  'Chakra already solves composition, theming, tokens, accessibility primitives, and styling ergonomics well.',
                  'GOV.UK provides a strong visual language and interaction baseline that many public sector products want.',
                  'Combining both gives teams a React-first developer experience without moving back to macro-driven or prototype-first workflows.',
                ]}
              />
            </VStack>
          </Card.Body>
        </Card.Root>

        <Separator />

        <Grid templateColumns={{ base: '1fr', xl: '1.2fr 0.8fr' }} gap={8} alignItems="start">
          <VStack align="stretch" gap={6}>
            <Box>
              <Heading size="lg" mb={3}>
                Installation
              </Heading>
              <CodeSample>{installCommand}</CodeSample>
            </Box>

            <Box>
              <Heading size="lg" mb={3}>
                Wrap your app with the provider
              </Heading>
              <CodeSample>{providerExample}</CodeSample>
            </Box>

            <Box>
              <Heading size="lg" mb={3}>
                Importing components
              </Heading>
              <Text mb={3}>
                Import everything from the main package entry. Chakra primitives and local GOV.UK
                wrappers share the same import surface.
              </Text>
              <CodeSample>{importExample}</CodeSample>
            </Box>

            <Box>
              <Heading size="lg" mb={3}>
                Example usage
              </Heading>
              <CodeSample>{usageExample}</CodeSample>
            </Box>
          </VStack>

          <VStack align="stretch" gap={6}>
            <Card.Root>
              <Card.Body>
                <VStack align="start" gap={4}>
                  <Heading size="md">How exports work</Heading>
                  <Text>
                    The main package re-exports all Chakra UI components and then overlays local
                    GOV.UK-styled wrapper components with the same names.
                  </Text>
                  <BulletList
                    items={[
                      'If a local wrapper exists, consumers receive the wrapper.',
                      'If no wrapper exists, the Chakra UI export is used as-is.',
                      'This keeps the import model simple while allowing local overrides.',
                    ]}
                  />
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root>
              <Card.Body>
                <VStack align="start" gap={4}>
                  <Heading size="md">Entry points</Heading>
                  <Box>
                    <Text fontWeight="bold">govuk-chakra</Text>
                    <Text>
                      Combined barrel with Chakra exports plus local GOV.UK-styled overrides
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">govuk-chakra/chakra</Text>
                    <Text>
                      Raw Chakra UI passthrough when you want the unmodified export surface
                    </Text>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root>
              <Card.Body>
                <VStack align="start" gap={4}>
                  <Heading size="md">Publishing</Heading>
                  <BulletList
                    items={[
                      'ESM bundle: dist/index.mjs',
                      'CommonJS bundle: dist/index.cjs',
                      'Chakra passthrough bundle: dist/chakra.mjs',
                      'Type declarations: dist/types',
                    ]}
                  />
                  <CodeSample>{`yarn build
yarn pack --dry-run
yarn publish`}</CodeSample>
                </VStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Grid>

        <Separator />

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <Card.Root>
            <Card.Body>
              <VStack align="start" gap={4}>
                <Heading size="lg">Compared with GOV.UK Prototype Kit</Heading>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Pros
                  </Text>
                  <BulletList
                    items={[
                      'Better fit for production React apps',
                      'Native TypeScript support across the component surface',
                      'Chakra theming and composition remain available',
                      'Easier to integrate with modern React app architectures',
                      'A more natural path for design-system ownership inside a React codebase',
                    ]}
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Cons
                  </Text>
                  <BulletList
                    items={[
                      'Less batteries-included than the Prototype Kit',
                      'You do not get the same ready-made templates or workflow conventions',
                      'Teams must make more application architecture decisions',
                      'Visual parity with GOV.UK needs ongoing maintenance',
                    ]}
                  />
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <VStack align="start" gap={4}>
                <Heading size="lg">When to use it</Heading>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Use this project when
                  </Text>
                  <BulletList
                    items={[
                      'You are building a React product, not just a prototype',
                      'Your team already uses Chakra UI or wants a component-driven front-end stack',
                      'You want GOV.UK visual language without adopting the full Prototype Kit workflow',
                      'You need a publishable internal or public package',
                    ]}
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Use the Prototype Kit when
                  </Text>
                  <BulletList
                    items={[
                      'The primary goal is fast service prototyping',
                      'Your team is working in the standard GOV.UK prototype workflow',
                      'You want the shortest path to testing service flows with minimal front-end setup',
                    ]}
                  />
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>

        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Heading size="md">Status</Heading>
              <Text>
                This project should be treated as a custom design-system layer built on Chakra UI.
                That is useful, but consumers should expect to maintain alignment with both Chakra
                and the GOV.UK Design System over time.
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  ),
}
