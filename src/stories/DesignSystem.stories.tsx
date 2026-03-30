import {
  Box,
  Alert,
  Button,
  Card,
  Checkbox,
  Fieldset,
  Heading,
  Textinput,
  Link,
  Radio,
  Select,
  Separator,
  Table,
  Text,
  Grid,
  HStack,
  VStack,
} from '../govuk-chakra'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Portal, createListCollection } from '@chakra-ui/react'
import type { SelectItemData } from '@/components/Select'

import { GoAlert, GoCheck, GoInfo } from 'react-icons/go'

const meta: Meta = {
  title: 'GOV.UK/Styles/Design System Overview',
  parameters: {
    layout: 'fullscreen',
  },
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

const coreColourCards = [
  {
    bg: 'govuk.blue',
    description: 'Brand blue used for key actions and branded elements.',
    hex: '#1D70B8',
    name: 'Brand blue',
    token: 'colors.govuk.blue',
  },
] as const

const functionalColourCards = [
  {
    bg: 'fg',
    hex: '#0B0C0C',
    name: 'Text',
    swatchBorderColor: 'border.subtle',
    textColor: 'common.white',
    token: 'fg',
  },
  {
    bg: 'fg.muted',
    hex: '#484949',
    name: 'Secondary text',
    textColor: 'common.white',
    token: 'fg.muted',
  },
  {
    bg: 'link',
    hex: '#1A65A6',
    name: 'Link',
    token: 'link',
  },
  {
    bg: 'link.hover',
    hex: '#0F385C',
    name: 'Link hover',
    textColor: 'common.white',
    token: 'link.hover',
  },
  {
    bg: 'link.visited',
    hex: '#54319F',
    name: 'Link visited',
    textColor: 'common.white',
    token: 'link.visited',
  },
  {
    bg: 'link.active',
    hex: '#0B0C0C',
    name: 'Link active',
    swatchBorderColor: 'border.subtle',
    textColor: 'common.white',
    token: 'link.active',
  },
  {
    bg: 'border',
    hex: '#CECECE',
    name: 'Border',
    token: 'border',
  },
  {
    bg: 'border.input',
    hex: '#000000',
    name: 'Input border',
    swatchBorderColor: 'border.subtle',
    textColor: 'common.white',
    token: 'border.input',
  },
  {
    bg: 'brand.50',
    hex: '#F4F8FB',
    name: 'Template background',
    token: 'colors.brand.50',
  },
  {
    bg: 'bg',
    hex: '#FFFFFF',
    name: 'Body background',
    token: 'bg',
  },
  {
    bg: 'focus',
    hex: '#FFDD00',
    name: 'Focus',
    token: 'focus',
  },
  {
    bg: 'focus.text',
    hex: '#0B0C0C',
    name: 'Focus text',
    swatchBorderColor: 'border.subtle',
    textColor: 'common.white',
    token: 'focus.text',
  },
  {
    bg: 'danger',
    hex: '#CA3535',
    name: 'Error',
    token: 'danger',
  },
  {
    bg: 'success',
    hex: '#0F7A52',
    name: 'Success',
    token: 'success',
  },
  {
    bg: 'border',
    hex: '#CECECE',
    name: 'Hover',
    token: 'border',
  },
  {
    bg: 'brand.50',
    hex: '#F4F8FB',
    name: 'Surface background',
    token: 'colors.brand.50',
  },
  {
    bg: 'fg',
    hex: '#0B0C0C',
    name: 'Surface text',
    swatchBorderColor: 'border.subtle',
    textColor: 'common.white',
    token: 'fg',
  },
  {
    bg: 'brand.200',
    hex: '#8EB8DC',
    name: 'Surface border',
    token: 'colors.brand.200',
  },
] as const

const chakraPaletteScales = [
  {
    family: 'brand',
    shades: [
      ['50', '#F4F8FB'],
      ['100', '#D2E2F1'],
      ['200', '#8EB8DC'],
      ['300', '#5694CA'],
      ['400', '#3D7EBC'],
      ['500', '#1D70B8'],
      ['600', '#1A65A6'],
      ['700', '#0E4D88'],
      ['800', '#0F385C'],
      ['900', '#052C53'],
      ['950', '#021C37'],
    ],
  },
  {
    family: 'brown',
    shades: [
      ['50', '#FAF8F6'],
      ['100', '#E7DDD3'],
      ['200', '#CCB8A5'],
      ['300', '#C4A78B'],
      ['400', '#B39477'],
      ['500', '#99704A'],
      ['600', '#8F6845'],
      ['700', '#84603F'],
      ['800', '#6A4C31'],
      ['900', '#563D27'],
      ['950', '#442F1D'],
    ],
  },
  {
    family: 'yellow',
    shades: [
      ['50', '#FFFDF2'],
      ['100', '#FFF8CC'],
      ['200', '#FFEE80'],
      ['300', '#FFE640'],
      ['400', '#FFE22C'],
      ['500', '#FFDD00'],
      ['600', '#C7AB00'],
      ['700', '#AA9200'],
      ['800', '#8D7900'],
      ['900', '#695A00'],
      ['950', '#534700'],
    ],
  },
  {
    family: 'teal',
    shades: [
      ['50', '#F3F9F9'],
      ['100', '#D0E6E7'],
      ['200', '#8AC0C3'],
      ['300', '#50A1A5'],
      ['400', '#3B9297'],
      ['500', '#158187'],
      ['600', '#137278'],
      ['700', '#106165'],
      ['800', '#0B4144'],
      ['900', '#073437'],
      ['950', '#04282A'],
    ],
  },
  {
    family: 'red',
    shades: [
      ['50', '#FCF5F5'],
      ['100', '#F4D7D7'],
      ['200', '#E59A9A'],
      ['300', '#D76868'],
      ['400', '#D15353'],
      ['500', '#CA3535'],
      ['600', '#B32F2F'],
      ['700', '#982828'],
      ['800', '#651B1B'],
      ['900', '#521414'],
      ['950', '#400E0E'],
    ],
  },
  {
    family: 'green',
    shades: [
      ['50', '#F3F9F7'],
      ['100', '#CFE7DE'],
      ['200', '#88C3AD'],
      ['300', '#4DA583'],
      ['400', '#389771'],
      ['500', '#0F7A52'],
      ['600', '#0F7850'],
      ['700', '#105840'],
      ['800', '#09442D'],
      ['900', '#063723'],
      ['950', '#042A1A'],
    ],
  },
  {
    family: 'grey',
    shades: [
      ['50', '#F3F3F3'],
      ['100', '#CECECE'],
      ['200', '#858686'],
      ['300', '#6C6D6D'],
      ['400', '#484949'],
      ['500', '#434444'],
      ['600', '#3D3E3E'],
      ['700', '#303030'],
      ['800', '#262626'],
      ['900', '#191B1B'],
      ['950', '#0B0C0C'],
    ],
  },
  {
    family: 'orange',
    shades: [
      ['50', '#FCF0F2'],
      ['100', '#FDE4D7'],
      ['200', '#FABB9C'],
      ['300', '#F7996A'],
      ['400', '#F68955'],
      ['500', '#F47738'],
      ['600', '#F35A10'],
      ['700', '#D14909'],
      ['800', '#AB3906'],
      ['900', '#842B04'],
      ['950', '#752503'],
    ],
  },
  {
    family: 'magenta',
    shades: [
      ['50', '#FCF5F8'],
      ['100', '#F4D7E5'],
      ['200', '#E59ABE'],
      ['300', '#D7689D'],
      ['400', '#D1538E'],
      ['500', '#CA357C'],
      ['600', '#B32F6E'],
      ['700', '#98285D'],
      ['800', '#651B3E'],
      ['900', '#521432'],
      ['950', '#400E26'],
    ],
  },
  {
    family: 'purple',
    shades: [
      ['50', '#F6F5FA'],
      ['100', '#DDD6EC'],
      ['200', '#AA98CF'],
      ['300', '#7F65B7'],
      ['400', '#6C50AC'],
      ['500', '#54319F'],
      ['600', '#4A2B8D'],
      ['700', '#3F2577'],
      ['800', '#2A1950'],
      ['900', '#211341'],
      ['950', '#180D32'],
    ],
  },
  {
    family: 'voodoo',
    shades: [
      ['50', '#F7F2F6'],
      ['100', '#E5D5E1'],
      ['200', '#C4A9C0'],
      ['300', '#9E7A98'],
      ['400', '#77516F'],
      ['500', '#532A45'],
      ['600', '#47223B'],
      ['700', '#391A2E'],
      ['800', '#2A1221'],
      ['900', '#1C0B15'],
      ['950', '#12060D'],
    ],
  },
] as const

function ColorCard({
  bg,
  compact = false,
  description,
  hex,
  name,
  swatchBorderColor = 'transparent',
  textColor = 'fg',
  token,
}: {
  bg: string
  compact?: boolean
  description?: string
  hex: string
  name: string
  swatchBorderColor?: string
  textColor?: string
  token: string
}) {
  return (
    <Card.Root>
      <Card.Body>
        <Box
          bg={bg}
          h={compact ? '48px' : '72px'}
          mb={3}
          border="1px solid"
          borderColor={swatchBorderColor}
        />
        <Text fontWeight="bold" fontSize={compact ? 'sm' : undefined}>
          {name}
        </Text>
        {description ? <Text fontSize="sm">{description}</Text> : null}
        <Text fontSize="sm" color={textColor} mt={2}>
          {hex}
        </Text>
        <Text fontSize="sm" fontFamily="mono">
          {token}
        </Text>
      </Card.Body>
    </Card.Root>
  )
}

function PaletteScaleCard({
  family,
  shades,
}: {
  family: string
  shades: readonly (readonly [string, string])[]
}) {
  return (
    <Card.Root>
      <Card.Body p={3}>
        <Text fontWeight="bold" textTransform="capitalize" mb={3}>
          {family}
        </Text>
        <Box border="1px solid" borderColor="border.subtle">
          {shades.map(([shade, hex]) => {
            const isLightShade = ['50', '100', '200', '300', '400'].includes(shade)

            return (
              <Grid
                key={`${family}-${shade}`}
                templateColumns="1fr"
                alignItems="stretch"
                minH="40px"
              >
                <Box
                  bg={`${family}.${shade}`}
                  px={3}
                  py={2}
                  borderBottom="1px solid"
                  borderColor={isLightShade ? 'border.subtle' : 'transparent'}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={3}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color={isLightShade ? 'fg' : 'common.white'}
                  >
                    {shade}
                  </Text>
                  <Text
                    fontSize="xs"
                    fontFamily="mono"
                    color={isLightShade ? 'fg' : 'common.white'}
                  >
                    {hex}
                  </Text>
                </Box>
              </Grid>
            )
          })}
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export const ColorPalette: Story = {
  render: () => (
    <VStack gap={6} align="stretch" p={8}>
      <VStack gap={3} align="stretch">
        <Heading size={27}>Core GOV.UK colours</Heading>
        <Text>
          These are the main GOV.UK colours exposed directly through this theme as Chakra tokens.
        </Text>
      </VStack>

      <Grid templateColumns="repeat(auto-fit, minmax(220px, 1fr))" gap={4}>
        {coreColourCards.map((card) => (
          <ColorCard key={card.name} {...card} />
        ))}
      </Grid>

      <VStack gap={3} align="stretch">
        <Heading size={27}>Functional colours</Heading>
        <Text>
          These match the GOV.UK Design System functional colour roles and show both the hex value
          and the Chakra theme token used in this library.
        </Text>
      </VStack>

      <Grid templateColumns="repeat(auto-fit, minmax(220px, 1fr))" gap={4}>
        {functionalColourCards.map((card) => (
          <ColorCard key={card.name} {...card} />
        ))}
      </Grid>

      <VStack gap={3} align="stretch">
        <Heading size={27}>Chakra palette colours</Heading>
        <Text>
          These show the full Chakra theme scales available in this library from `50` to `950`.
        </Text>
      </VStack>

      <Grid templateColumns="repeat(auto-fit, minmax(220px, 1fr))" gap={4}>
        {chakraPaletteScales.map((palette) => (
          <PaletteScaleCard key={palette.family} family={palette.family} shades={palette.shades} />
        ))}
      </Grid>
    </VStack>
  ),
}

export const ComponentShowcase: Story = {
  render: () => (
    <VStack gap={8} align="stretch" p={8} maxW="1200px" mx="auto">
      <Heading size="xl">GOV.UK Design System Components</Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={8}>
        {/* Buttons */}
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Buttons
            </Heading>
            <VStack gap={3} align="start">
              <Button colorPalette="primary">Primary Button</Button>
              <Button colorPalette="secondary">Secondary Button</Button>
              <Button colorPalette="warning">Warning Button</Button>
              <Button colorPalette="primary" disabled>
                Disabled Button
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Form Controls */}
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Form Controls
            </Heading>
            <VStack gap={4} align="stretch">
              <Textinput placeholder="Text input" />
              <Fieldset.Root>
                <Fieldset.Legend>How would you like to be contacted?</Fieldset.Legend>
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

              <HStack>
                <Checkbox.Root>Checkbox</Checkbox.Root>
                <Radio.Root defaultValue="england">
                  <Radio.Item value="england">
                    <Radio.ItemHiddenInput />
                    <Radio.ItemControl>
                      <Radio.ItemIndicator />
                    </Radio.ItemControl>
                    <Radio.ItemText>Radio</Radio.ItemText>
                  </Radio.Item>
                </Radio.Root>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Typography */}
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Typography
            </Heading>
            <VStack gap={3} align="start">
              <Heading size={48}>Large Heading</Heading>
              <Text fontSize={24}>Lead paragraph text</Text>
              <Text fontSize={19}>Body text paragraph</Text>
              <Text fontSize={16}>Small text</Text>
              <Link href="#">Standard link</Link>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Alerts */}
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Alerts
            </Heading>
            <VStack gap={3} align="stretch">
              <Alert.Root status="info">
                <Alert.Indicator>
                  <GoInfo />
                </Alert.Indicator>
                <Alert.Title>Information</Alert.Title>
                <Alert.Description>Information message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="success">
                <Alert.Indicator>
                  <GoCheck />
                </Alert.Indicator>
                <Alert.Title>Success</Alert.Title>
                <Alert.Description>Success message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="warning">
                <Alert.Indicator>
                  <GoAlert />
                </Alert.Indicator>
                <Alert.Title>Warning</Alert.Title>
                <Alert.Description>Warning message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="error">
                <Alert.Indicator>
                  <GoAlert />
                </Alert.Indicator>
                <Alert.Title>Error</Alert.Title>
                <Alert.Description>Error message</Alert.Description>
              </Alert.Root>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Separator />

      {/* Data Table */}
      <Box>
        <Heading size={27} mb={4}>
          Data Table
        </Heading>

        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Service</Table.ColumnHeader>
              <Table.ColumnHeader>Department</Table.ColumnHeader>
              <Table.ColumnHeader>Users per month</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Register to vote</Table.Cell>
              <Table.Cell>Cabinet Office</Table.Cell>
              <Table.Cell>500,000</Table.Cell>
              <Table.Cell textAlign="end">Live</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Apply for passport</Table.Cell>
              <Table.Cell>Home Office</Table.Cell>
              <Table.Cell>300,000</Table.Cell>
              <Table.Cell textAlign="end">Live</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>File company accounts</Table.Cell>
              <Table.Cell>Companies House</Table.Cell>
              <Table.Cell>150,000</Table.Cell>
              <Table.Cell textAlign="end">Beta</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </VStack>
  ),
}

export const AccessibilityFeatures: Story = {
  render: () => (
    <VStack gap={6} align="stretch" p={8} maxW="800px">
      <Heading size="xl">Accessibility Features</Heading>

      <Text fontSize={27}>
        All components follow GOV.UK accessibility standards and WCAG 2.1 AA guidelines.
      </Text>

      <VStack gap={4} align="start">
        <Box>
          <Heading size="md" mb={2}>
            High Contrast Colors
          </Heading>
          <Text>All text meets minimum contrast ratios for readability.</Text>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Focus Indicators
          </Heading>
          <Text>Clear yellow focus rings help keyboard users navigate.</Text>
          <HStack mt={2}>
            <Button colorPalette="primary">Tab to focus</Button>
            <Textinput placeholder="Focus this input" />
          </HStack>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Screen Reader Support
          </Heading>
          <Text>Proper ARIA labels and semantic HTML structure.</Text>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Error Handling
          </Heading>
          <Text>Clear error messages with visual and text indicators.</Text>

          <Alert.Root status="error">
            <Alert.Indicator>
              <GoAlert />
            </Alert.Indicator>
            <Alert.Title>Error</Alert.Title>
            <Alert.Description>Enter your full name.</Alert.Description>
          </Alert.Root>
        </Box>
      </VStack>
    </VStack>
  ),
}
