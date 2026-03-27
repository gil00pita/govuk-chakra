import { screen } from '@testing-library/react'
import { LuShoppingCart } from 'react-icons/lu'

import { renderWithProvider } from '@/test/renderWithProvider'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders the empty state title and description', () => {
    renderWithProvider(
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuShoppingCart />
          </EmptyState.Indicator>
          <EmptyState.Title>Your cart is empty</EmptyState.Title>
          <EmptyState.Description>
            Explore our products and add items to your cart
          </EmptyState.Description>
        </EmptyState.Content>
      </EmptyState.Root>
    )

    expect(screen.getByText('Your cart is empty')).toBeVisible()
    expect(screen.getByText(/explore our products/i)).toBeVisible()
  })
})
