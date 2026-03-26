import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'

import { GOVUKProvider } from '@/provider'

function ProviderWrapper({ children }: { children: ReactNode }) {
  return <GOVUKProvider>{children}</GOVUKProvider>
}

export function renderWithProvider(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    wrapper: ProviderWrapper,
    ...options,
  })
}
