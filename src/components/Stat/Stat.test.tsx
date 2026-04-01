import { screen } from '@testing-library/react'
import { Badge, FormatNumber, HStack } from '@chakra-ui/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import statRecipe from './Stat.recipe'
import { Stat } from './Stat'

describe('Stat', () => {
  it('renders label, value text, and trend information', () => {
    const { container } = renderWithProvider(
      <Stat.Root>
        <Stat.Label>Unique visitors</Stat.Label>
        <HStack>
          <Stat.ValueText>
            <FormatNumber value={8456.4} style="currency" currency="USD" />
          </Stat.ValueText>
          <Badge colorPalette="green" gap="0">
            <Stat.UpIndicator />
            12%
          </Badge>
        </HStack>
        <Stat.HelpText>since last month</Stat.HelpText>
      </Stat.Root>
    )

    expect(screen.getByText('Unique visitors')).toBeVisible()
    expect(screen.getByText('$8,456.40')).toBeVisible()
    expect(screen.getByText('12%')).toBeVisible()
    expect(screen.getByText(/since last month/i)).toBeVisible()

    expect(container.querySelector('dl')).not.toBeInTheDocument()
  })

  it('uses the GOV.UK text scale in the stat recipe', () => {
    expect(statRecipe.defaultVariants?.size).toBe('md')
    expect(statRecipe.base?.label?.fontFamily).toBe('body')
    expect(statRecipe.variants?.size?.lg?.valueText?.fontWeight).toBe(700)
  })

  it('animates numeric values with slot reels while keeping accessible text', () => {
    const { container } = renderWithProvider(
      <Stat.Root>
        <Stat.Label>Total applications</Stat.Label>
        <Stat.ValueText value={28451} />
      </Stat.Root>
    )

    expect(screen.getByText('28,451')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-slot-reel]').length).toBe(5)
    expect(container.querySelector('dl')).not.toBeInTheDocument()
  })
})
