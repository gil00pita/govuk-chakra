import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Code } from './Code'

describe('Code', () => {
  it('renders inline code content', () => {
    renderWithProvider(<Code.Root>{'const message = "Hello world"'}</Code.Root>)

    expect(screen.getByText(/const message = "hello world"/i)).toBeVisible()
  })
})
