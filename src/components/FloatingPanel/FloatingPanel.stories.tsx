import { Button, Box, HStack, Stack, Text } from '@/govuk-chakra'
import { useRef, useState, type ComponentProps, type ComponentType, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuMaximize2, LuMinus, LuPanelTopOpen, LuRotateCcw, LuX } from 'react-icons/lu'

import { FloatingPanel } from './FloatingPanel'
import { pxToRem } from '@/utils'

type FloatingPanelStoryArgs = {
  allowOverflow?: boolean
  defaultOpen?: boolean
  draggable?: boolean
  resizable?: boolean
}

const meta: Meta<FloatingPanelStoryArgs> = {
  title: 'Chakra Components/Overlays/Floating Panel',
  component: FloatingPanel.Root as unknown as ComponentType<FloatingPanelStoryArgs>,
  tags: ['autodocs'],
  args: {
    allowOverflow: true,
    defaultOpen: true,
    draggable: true,
    resizable: true,
  },
  argTypes: {
    allowOverflow: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    draggable: { control: 'boolean' },
    resizable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function PanelControls() {
  return (
    <FloatingPanel.Control>
      <FloatingPanel.StageTrigger stage="minimized" aria-label="Minimize panel">
        <LuMinus />
      </FloatingPanel.StageTrigger>
      <FloatingPanel.StageTrigger stage="maximized" aria-label="Maximize panel">
        <LuMaximize2 />
      </FloatingPanel.StageTrigger>
      <FloatingPanel.StageTrigger stage="default" aria-label="Restore panel">
        <LuRotateCcw />
      </FloatingPanel.StageTrigger>
      <FloatingPanel.CloseTrigger aria-label="Close panel">
        <LuX />
      </FloatingPanel.CloseTrigger>
    </FloatingPanel.Control>
  )
}

function CasePanel({
  title = 'Case notes',
  children,
  resizeAxes,
}: {
  title?: string
  children?: ReactNode
  resizeAxes?: ComponentProps<typeof FloatingPanel.ResizeTriggers>['axes']
}) {
  return (
    <FloatingPanel.Content>
      <FloatingPanel.Header>
        <FloatingPanel.DragTrigger>
          <LuPanelTopOpen />
          <FloatingPanel.Title>{title}</FloatingPanel.Title>
        </FloatingPanel.DragTrigger>
        <PanelControls />
      </FloatingPanel.Header>
      <FloatingPanel.Body>
        {children ?? (
          <Stack gap={3}>
            <Text fontWeight="700" mb={0}>
              Application 4927
            </Text>
            <Text mb={0}>Eligibility check completed. Evidence review due by 5 July.</Text>
            <HStack gap={3} flexWrap="wrap">
              <Button size="sm">Approve</Button>
              <Button size="sm" variant="secondary">
                Request evidence
              </Button>
            </HStack>
          </Stack>
        )}
      </FloatingPanel.Body>
      <FloatingPanel.ResizeTriggers axes={resizeAxes} />
    </FloatingPanel.Content>
  )
}

export const Default: Story = {
  render: (args) => (
    <Box minH={pxToRem(520)} position="relative">
      <FloatingPanel.Root
        {...args}
        defaultPosition={{ x: 32, y: 92 }}
        defaultSize={{ width: 380, height: 300 }}
      >
        <FloatingPanel.Trigger asChild>
          <Button variant="secondary">Open panel</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Positioner>
          <CasePanel />
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </Box>
  ),
}

function ControlledOpenExample() {
  const [open, setOpen] = useState(true)

  return (
    <Box minH={pxToRem(520)} position="relative">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open panel
      </Button>
      <FloatingPanel.Root
        open={open}
        onOpenChange={(details) => setOpen(details.open)}
        defaultPosition={{ x: 32, y: 92 }}
        defaultSize={{ width: 380, height: 300 }}
      >
        <FloatingPanel.Positioner>
          <CasePanel title="Controlled panel" />
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </Box>
  )
}

export const ControlledOpen: Story = {
  render: () => <ControlledOpenExample />,
}

export const ResizeAxes: Story = {
  render: (args) => (
    <Box minH={pxToRem(520)} position="relative">
      <FloatingPanel.Root
        {...args}
        defaultPosition={{ x: 32, y: 92 }}
        defaultSize={{ width: 380, height: 300 }}
      >
        <FloatingPanel.Trigger asChild>
          <Button variant="secondary">Open panel</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Positioner>
          <CasePanel title="Resize from bottom right" resizeAxes={['s', 'e', 'se']} />
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </Box>
  ),
}

function BoundaryExample() {
  const boundaryRef = useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={boundaryRef}
      minH={pxToRem(520)}
      position="relative"
      borderWidth={pxToRem(2)}
      borderStyle="dashed"
      borderColor="border.input"
      p={4}
      overflow="hidden"
    >
      <FloatingPanel.Root
        defaultOpen
        allowOverflow={false}
        getBoundaryEl={() => boundaryRef.current}
        defaultPosition={{ x: 40, y: 92 }}
        defaultSize={{ width: 360, height: 280 }}
      >
        <FloatingPanel.Trigger asChild>
          <Button variant="secondary">Open panel</Button>
        </FloatingPanel.Trigger>
        <FloatingPanel.Positioner>
          <CasePanel title="Bounded panel">
            <Text mb={0}>This panel stays inside the dashed area while it is dragged.</Text>
          </CasePanel>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </Box>
  )
}

export const Boundary: Story = {
  render: () => <BoundaryExample />,
}

export const Multiple: Story = {
  render: () => (
    <Box minH={pxToRem(560)} position="relative">
      <FloatingPanel.Root
        defaultOpen
        defaultPosition={{ x: 32, y: 72 }}
        defaultSize={{ width: 320, height: 240 }}
      >
        <FloatingPanel.Positioner>
          <CasePanel title="Notes">
            <Text mb={0}>Applicant asked for correspondence by email.</Text>
          </CasePanel>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
      <FloatingPanel.Root
        defaultOpen
        defaultPosition={{ x: 390, y: 136 }}
        defaultSize={{ width: 320, height: 240 }}
      >
        <FloatingPanel.Positioner>
          <CasePanel title="Tasks">
            <Stack as="ul" gap={2} ps={4} mb={0}>
              <Text as="li" mb={0}>
                Confirm address
              </Text>
              <Text as="li" mb={0}>
                Review uploaded evidence
              </Text>
            </Stack>
          </CasePanel>
        </FloatingPanel.Positioner>
      </FloatingPanel.Root>
    </Box>
  ),
}
