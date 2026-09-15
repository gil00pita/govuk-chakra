import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Accordion } from '@/components/Accordion'
import { pxToRem } from '@/utils'

export interface StepByStepItem {
  /** Unique, stable identifier for this step. */
  id: string
  title: string
  content: ReactNode
}

export interface StepByStepProps extends Omit<BoxProps, 'children' | 'defaultValue' | 'onChange'> {
  items: StepByStepItem[]
  /** IDs of expanded steps, for controlled usage. */
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (details: { value: string[] }) => void
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  showAllLabel?: string
  hideAllLabel?: string
  showLabel?: string
  hideLabel?: string
}

/** Ordered, expandable guidance for a content journey. */
export const StepByStep = forwardRef<HTMLDivElement, StepByStepProps>(function StepByStep(
  {
    items,
    value,
    defaultValue = [],
    onValueChange,
    headingLevel = 'h2',
    showAllLabel = 'Show all steps',
    hideAllLabel = 'Hide all steps',
    showLabel = 'Show',
    hideLabel = 'Hide',
    ...props
  },
  ref
) {
  return (
    <Accordion.Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      {items.length > 0 && (
        <Accordion.Actions>
          <Accordion.ToggleAll openLabel={showAllLabel} closeLabel={hideAllLabel} />
        </Accordion.Actions>
      )}
      <Accordion.Items>
        <Box as="ol" role="list" listStyleType="none" m={0} p={0}>
          {items.map((item, index) => (
            <Accordion.Item key={item.id} value={item.id} asChild>
              <li>
                <Box position="relative" pl={{ base: pxToRem(45), md: pxToRem(60) }}>
                  <Box
                    as="span"
                    aria-hidden="true"
                    position="absolute"
                    left={0}
                    top={pxToRem(10)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minWidth={pxToRem(30)}
                    height={pxToRem(30)}
                    border="2px solid"
                    borderColor="border"
                    borderRadius="full"
                    bg="bg"
                    color="fg"
                    fontSize={pxToRem(19)}
                    fontWeight="bold"
                    lineHeight={1}
                  >
                    {index + 1}
                  </Box>
                  <Accordion.Trigger showLabel={showLabel} hideLabel={hideLabel}>
                    <Box
                      as={headingLevel}
                      m={0}
                      fontSize="inherit"
                      fontWeight="inherit"
                      lineHeight="inherit"
                    >
                      {item.title}
                    </Box>
                  </Accordion.Trigger>
                  <Accordion.Content>{item.content}</Accordion.Content>
                </Box>
              </li>
            </Accordion.Item>
          ))}
        </Box>
      </Accordion.Items>
    </Accordion.Root>
  )
})
