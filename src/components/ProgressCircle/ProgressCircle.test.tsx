import { screen } from '@testing-library/react'
import { Center } from '@chakra-ui/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { ProgressCircle } from './ProgressCircle'

describe('ProgressCircle', () => {
  it('renders circular progress with value text', () => {
    renderWithProvider(
      <ProgressCircle.Root value={72} size="xl">
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
        <Center inset="0" position="absolute">
          <ProgressCircle.ValueText />
        </Center>
      </ProgressCircle.Root>
    )

    expect(screen.getByText('72%')).toBeVisible()
  })
})
