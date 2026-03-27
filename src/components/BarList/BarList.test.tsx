import { useChart } from '@chakra-ui/charts'
import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { BarList } from './BarList'

function BarListHarness() {
  const chart = useChart({
    data: [
      { name: 'React', value: 82 },
      { name: 'Vue', value: 56 },
      { name: 'Solid', value: 32 },
    ] as Array<{ name: string; value: number; href?: string }>,
    series: [{ name: 'name', color: '#1d70b8' }],
    sort: { by: 'value', direction: 'desc' },
  })

  return (
    <BarList.Root chart={chart} maxW="420px">
      <BarList.Content>
        <BarList.Label title="Framework" flex="1">
          <BarList.Bar />
        </BarList.Label>
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}

describe('BarList', () => {
  it('renders the bar list labels and values', () => {
    renderWithProvider(<BarListHarness />)

    expect(screen.getByText('React')).toBeVisible()
    expect(screen.getByText('82')).toBeVisible()
  })
})
