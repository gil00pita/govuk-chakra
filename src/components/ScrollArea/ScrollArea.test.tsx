import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { pxToRem } from '@/utils'
import '@/test/mockResizeObserver'
import scrollAreaRecipe from './ScrollArea.recipe'
import { ScrollArea } from './ScrollArea'

describe('ScrollArea', () => {
  it('uses the expected recipe defaults', () => {
    expect(scrollAreaRecipe.defaultVariants?.size).toBe('md')
    expect(scrollAreaRecipe.defaultVariants?.variant).toBe('always')
    expect(scrollAreaRecipe.base?.root).toMatchObject({
      borderColor: 'border.input',
      borderStyle: 'solid',
      bg: 'bg',
    })
    expect(scrollAreaRecipe.base?.thumb).toMatchObject({
      bg: 'var(--thumb-bg)',
      minHeight: pxToRem(24),
      minWidth: pxToRem(24),
    })
  })

  it('renders scrollable content and scrollbars', () => {
    renderWithProvider(
      <ScrollArea.Root height="120px" width="240px">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <p>Application decision notice</p>
            <p>Supporting evidence</p>
            <p>Case notes</p>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
        <ScrollArea.Scrollbar orientation="horizontal" />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    )

    expect(screen.getByText('Application decision notice')).toBeTruthy()
    expect(screen.getByText('Supporting evidence')).toBeTruthy()
    expect(screen.getByText('Case notes')).toBeTruthy()
  })
})
