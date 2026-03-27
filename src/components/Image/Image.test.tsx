import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Image } from './Image'

describe('Image', () => {
  it('renders an image with alt text', () => {
    renderWithProvider(<Image.Root src="https://example.com/sample.jpg" alt="Example graphic" />)

    expect(screen.getByRole('img', { name: /example graphic/i })).toBeVisible()
  })
})
