import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { WarningText } from './WarningText'

describe('WarningText', () => {
  it('renders warning text with note semantics and the default assistive prefix', () => {
    renderWithProvider(
      <WarningText>You can be fined up to £5,000 if you do not register.</WarningText>
    )

    const warning = screen.getByRole('note')

    expect(warning).toHaveTextContent(/you can be fined up to £5,000 if you do not register/i)
    expect(warning).toHaveTextContent(/^!warning:/i)
  })

  it('supports custom assistive text and icon text', () => {
    renderWithProvider(
      <WarningText assistiveText="Important" iconText="i">
        Applications close at midnight on Friday.
      </WarningText>
    )

    const warning = screen.getByRole('note')

    expect(warning).toHaveTextContent(/^iimportant:/i)
    expect(warning).toHaveTextContent(/applications close at midnight on friday/i)
  })
})
