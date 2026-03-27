import { renderWithProvider } from '@/test/renderWithProvider'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders a status element for loading state', () => {
    const { container } = renderWithProvider(<Spinner.Root aria-label="Loading content" />)

    expect(container.firstChild).not.toBeNull()
  })
})
