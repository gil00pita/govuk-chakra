import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'

import { GOVUKProvider } from '@/provider'
import { govUKThemeSystem } from '@/theme'

function ProviderWrapper({ children }: { children: ReactNode }) {
  return <GOVUKProvider value={govUKThemeSystem}>{children}</GOVUKProvider>
}

export function renderWithProvider(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    wrapper: ProviderWrapper,
    ...options,
  })
}
