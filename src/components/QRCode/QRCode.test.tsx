import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { QRCode } from './QRCode'

describe('QRCode', () => {
  it('renders a qr code frame with overlay content', () => {
    const { container } = renderWithProvider(
      <QRCode.Root value="https://www.google.com">
        <QRCode.Frame>
          <QRCode.Pattern />
        </QRCode.Frame>
        <QRCode.Overlay>
          <span>Logo</span>
        </QRCode.Overlay>
      </QRCode.Root>
    )

    expect(container.querySelector('svg')).not.toBeNull()
    expect(screen.getByText('Logo')).toBeVisible()
  })
})
