import { renderWithProvider } from '@/test/renderWithProvider'
import { ColorSwatch } from './ColorSwatch'

describe('ColorSwatch', () => {
  it('renders a swatch and mixed swatches', () => {
    const { container } = renderWithProvider(
      <>
        <ColorSwatch.Root value="#0F766E" boxSize="10" />
        <ColorSwatch.Mix items={['#0F766E', '#2563EB']} boxSize="10" />
      </>
    )

    expect(container.firstChild).not.toBeNull()
    expect(container.childNodes.length).toBeGreaterThan(1)
  })
})
