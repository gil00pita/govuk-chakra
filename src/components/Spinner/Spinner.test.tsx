import { renderWithProvider } from '@/test/renderWithProvider'
import spinnerRecipe from './Spinner.recipe'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders a status element for loading state', () => {
    const { container } = renderWithProvider(<Spinner.Root aria-label="Loading content" />)

    expect(container.firstChild).not.toBeNull()
  })

  it('uses the color palette tokens for the spinner arc and track', () => {
    expect(spinnerRecipe.base?.color).toBe('colorPalette.solid')
    expect(spinnerRecipe.base?.['--spinner-track-color']).toEqual({
      base: 'colors.grey.50',
      _dark: 'colors.grey.800',
    })
  })

  it('uses grey.500 for the gray spinner in dark mode', () => {
    expect(spinnerRecipe.compoundVariants).toContainEqual({
      colorPalette: 'gray',
      css: {
        color: {
          _dark: 'grey.500',
        },
      },
    })
  })
})
