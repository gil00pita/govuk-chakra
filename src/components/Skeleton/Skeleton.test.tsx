import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders a visible skeleton placeholder', () => {
    const { container } = renderWithProvider(
      <Skeleton.Root height="5" width="120px" variant="pulse" />
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('renders children when loading is false', () => {
    renderWithProvider(<Skeleton.Root loading={false}>Loaded content</Skeleton.Root>)

    expect(screen.getByText('Loaded content')).toBeVisible()
  })
})
