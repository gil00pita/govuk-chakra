import { useChart } from '@chakra-ui/charts'
import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { BarSegment } from './BarSegment'

function BarSegmentHarness() {
  const chart = useChart({
    data: [
      { name: 'Desktop', value: 55, color: 'teal.solid' },
      { name: 'Mobile', value: 30, color: 'blue.solid' },
      { name: 'Tablet', value: 15, color: 'orange.solid' },
    ],
  })

  return (
    <BarSegment.Root chart={chart} maxW="420px">
      <BarSegment.Content>
        <BarSegment.Value />
        <BarSegment.Bar />
        <BarSegment.Label />
      </BarSegment.Content>
    </BarSegment.Root>
  )
}

describe('BarSegment', () => {
  it('renders segmented bar labels and aggregate values', () => {
    renderWithProvider(<BarSegmentHarness />)

    expect(screen.getByText('Desktop')).toBeVisible()
    expect(screen.getByText('55')).toBeVisible()
  })
})
