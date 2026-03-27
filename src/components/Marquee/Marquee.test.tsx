import '@/test/mockResizeObserver'
import { renderWithProvider } from '@/test/renderWithProvider'
import { Marquee } from './Marquee'

describe('Marquee', () => {
  it('renders composed marquee content', () => {
    const { container } = renderWithProvider(
      <Marquee.Root autoFill>
        <Marquee.Viewport>
          <Marquee.Content>
            <Marquee.Item px="2rem">Figma</Marquee.Item>
            <Marquee.Item px="2rem">GitLab</Marquee.Item>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    )

    expect(container.textContent).toContain('Figma')
    expect(container.textContent).toContain('GitLab')
  })
})
