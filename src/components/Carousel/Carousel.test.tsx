import { Button } from '@chakra-ui/react'
import { screen } from '@testing-library/react'

import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders carousel controls and slide content', () => {
    renderWithProvider(
      <Carousel.Root loop slideCount={3} maxW="md">
        <Carousel.Control gap="4" width="full">
          <Carousel.PrevTrigger asChild>
            <Button size="sm">Previous</Button>
          </Carousel.PrevTrigger>
          <Carousel.ItemGroup width="full">
            {[1, 2, 3].map((item, index) => (
              <Carousel.Item key={item} index={index}>
                <div>{`Slide ${item}`}</div>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.NextTrigger asChild>
            <Button size="sm">Next</Button>
          </Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.ProgressText />
      </Carousel.Root>
    )

    expect(screen.getByRole('region')).toHaveAttribute('aria-roledescription', 'carousel')
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeVisible()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeVisible()
    expect(screen.getByText('Slide 1')).toBeVisible()
    expect(screen.getByText('Slide 2')).toBeVisible()
    expect(screen.getByText('Slide 3')).toBeVisible()
  })
})
