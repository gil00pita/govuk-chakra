import {
  Button,
  Card,
  Heading,
  Link,
  Separator,
  Table,
  Text,
  Textinput,
  Alert,
  Box,
  Grid,
  HStack,
  VStack,
} from './govuk-chakra'
import { GoAlert } from 'react-icons/go'

function App() {
  return (
    <VStack gap={8} align="stretch" p={8} maxW="1200px" mx="auto">
      <VStack gap={6} align="stretch">
        <Heading size="xl">GOV.UK Design System Overview</Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          <Card.Root>
            <Card.Body>
              <Box bg="grey.900" h="60px" mb={3} borderRadius="md" />
              <Text fontWeight="bold">Grey 900</Text>
              <Text fontSize="sm">Primary text color</Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Box bg="green.600" h="60px" mb={3} borderRadius="md" />
              <Text fontWeight="bold">Green 600</Text>
              <Text fontSize="sm">Primary button color</Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Box bg="blue.600" h="60px" mb={3} borderRadius="md" />
              <Text fontWeight="bold">Blue 600</Text>
              <Text fontSize="sm">Link color</Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Box bg="yellow.400" h="60px" mb={3} borderRadius="md" />
              <Text fontWeight="bold">Yellow 400</Text>
              <Text fontSize="sm">Focus color</Text>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <Box bg="red.600" h="60px" mb={3} borderRadius="md" />
              <Text fontWeight="bold">Red 600</Text>
              <Text fontSize="sm">Error color</Text>
            </Card.Body>
          </Card.Root>
        </Grid>
      </VStack>

      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={8}>
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Buttons
            </Heading>
            <VStack gap={3} align="start">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="warning">Warning Button</Button>
              <Button variant="primary" disabled>
                Disabled Button
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Form Controls
            </Heading>
            <VStack gap={4} align="stretch">
              <Textinput placeholder="Text input" />
              <Box>
                <Text fontWeight="bold" mb={2}>
                  How would you like to be contacted?
                </Text>
                <Text color="fg.muted">Email, post, or phone</Text>
              </Box>

              <HStack gap={3}>
                <Button variant="secondary">Checkbox example</Button>
                <Button variant="link">Radio example</Button>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Typography
            </Heading>
            <VStack gap={3} align="start">
              <Heading size="lg">Large Heading</Heading>
              <Text fontSize="lg">Lead paragraph text</Text>
              <Text fontSize="md">Body text paragraph</Text>
              <Text fontSize="sm">Small text</Text>
              <Link href="#">Standard link</Link>
            </VStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={4}>
              Alerts
            </Heading>
            <VStack gap={3} align="stretch">
              <Alert.Root status="info">
                <GoAlert />
                <Alert.Title>Information</Alert.Title>
                <Alert.Description>Information message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="success">
                <GoAlert />
                <Alert.Title>Success</Alert.Title>
                <Alert.Description>Success message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="warning">
                <GoAlert />
                <Alert.Title>Warning</Alert.Title>
                <Alert.Description>Warning message</Alert.Description>
              </Alert.Root>
              <Alert.Root status="error">
                <GoAlert />
                <Alert.Title>Error</Alert.Title>
                <Alert.Description>Error message</Alert.Description>
              </Alert.Root>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Separator />

      <Box>
        <Heading size="lg" mb={4}>
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

      <VStack gap={6} align="stretch" maxW="800px">
        <Heading size="xl">Accessibility Features</Heading>

        <Text fontSize="lg">
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
              <GoAlert />
              <Alert.Title>Error</Alert.Title>
              <Alert.Description>Enter your full name.</Alert.Description>
            </Alert.Root>
          </Box>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default App
