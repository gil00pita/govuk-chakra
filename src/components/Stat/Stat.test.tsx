import { screen } from '@testing-library/react'
import { Badge, FormatNumber, HStack } from '@chakra-ui/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Stat } from './Stat'

describe('Stat', () => {
  it('renders label, value text, and trend information', () => {
    renderWithProvider(
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
  })
})
