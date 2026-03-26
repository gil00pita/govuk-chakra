import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Text } from './Text'

describe('Text', () => {
  it('renders paragraph text by default', () => {
    renderWithProvider(<Text>Application submitted successfully.</Text>)

    expect(screen.getByText(/application submitted successfully/i).tagName).toBe('P')
  })

  it('supports alternate semantic elements', () => {
    renderWithProvider(<Text as="span">Inline status</Text>)

    expect(screen.getByText(/inline status/i).tagName).toBe('SPAN')
  })

  it('supports GOV.UK numeric type scale font sizes without changing content rendering', () => {
    renderWithProvider(<Text fontSize={24}>Important supporting text</Text>)

    expect(screen.getByText(/important supporting text/i)).toBeVisible()
  })
})
