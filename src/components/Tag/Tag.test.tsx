import { screen } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Tag } from './Tag'

describe('Tag', () => {
  it('renders tag content', () => {
    renderWithProvider(<Tag variant="green">Active</Tag>)

    expect(screen.getByText('Active')).toBeVisible()
  })

  it('supports uppercase and bold text options', () => {
    renderWithProvider(
      <Tag uppercase bold>
        Completed
      </Tag>
    )

    expect(screen.getByText('Completed')).toBeVisible()
  })

  it('supports custom variant styles', () => {
    renderWithProvider(
      <Tag
        variant="pink"
        variantStyles={{
          pink: {
            bg: 'pink.100',
            color: 'pink.900',
          },
        }}
      >
        Custom status
      </Tag>
    )

    expect(screen.getByText(/custom status/i)).toBeVisible()
  })
})
