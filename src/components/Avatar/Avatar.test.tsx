import { renderWithProvider } from '@/test/renderWithProvider'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders the avatar image and fallback content', () => {
    const { container } = renderWithProvider(
      <Avatar.Root>
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
    )

    expect(container.querySelector('img')).not.toBeNull()
    expect(container.textContent).toContain('SA')
  })
})
