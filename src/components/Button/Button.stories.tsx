import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'
import { Stack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'

const meta: Meta<typeof Button> = {
  title: 'GOV.UK/Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the button component to help users carry out an action like starting an application or saving their information.\n\n' +
          'The button component has five variants: `primary`, `secondary`, `error`, `inverse`, and `link`. Use `primary` for the main action on a page. Use `secondary` for less important actions, `error` for destructive actions, `inverse` on dark backgrounds, and `link` when the action should appear visually closer to a text link.\n\n' +
          'Choose the variant based on the importance and context of the action so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System button documentation: https://design-system.service.gov.uk/components/button/.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'inverse', 'link'],
    },
    startButton: { control: 'boolean' },
  },
  args: {
    children: 'Start now',
    variant: 'primary',
    startButton: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack gap={4}>
      <Button variant="primary">Primary (GOV.UK style)</Button>
      <Button variant="primary" startButton>
        Start Button
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="error">Error</Button>
      <Button variant="inverse">Inverse</Button>
      <Button variant="link">Link</Button>
    </Stack>
  ),
}

export const StartButton: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use a start button for the main call to action on your service’s Start page.
Start buttons do not usually submit form data, so use a link tag instead of a button tag to avoid confusion for assistive technologies. Use the \`startButton\` prop to apply the start button styling and arrow, which is a common design pattern on GOV.UK. \n\nFor more guidance on start buttons, see the GOV.UK Design System start button documentation: https://design-system.service.gov.uk/components/start-button/.`,
      },
    },
  },
  render: () => (
    <Stack gap={4}>
      <Button variant="primary" startButton>
        Start
      </Button>
    </Stack>
  ),
}

export const DarkBackground: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the \`variant="inverse"\` prop to show white buttons on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds. \n\nMake sure all users can see the button – the white button and background colour must have a contrast ratio of at least 4.5:1 to meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA.`,
      },
    },
  },
  render: () => (
    <Stack gap={4} bgColor="blue.500" p={pxToRem(20)} w="460px" alignItems="center">
      <Button variant="inverse">Inverse</Button>
    </Stack>
  ),
}
