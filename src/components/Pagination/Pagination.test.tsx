import { screen, within } from '@testing-library/react'

import { Pagination } from './Pagination'
import { renderWithProvider } from '@/test/renderWithProvider'

describe('Pagination', () => {
  it('renders the pagination landmark with current page semantics', () => {
    renderWithProvider(
      <Pagination landmarkLabel="Results pages">
        <Pagination.Previous href="/page/1">Previous</Pagination.Previous>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Link href="/page/1" visuallyHiddenText="Page 1">
              1
            </Pagination.Link>
          </Pagination.Item>
          <Pagination.Item current>
            <Pagination.Link href="/page/2" current visuallyHiddenText="Page 2">
              2
            </Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="/page/3" visuallyHiddenText="Page 3">
              3
            </Pagination.Link>
          </Pagination.Item>
        </Pagination.List>
        <Pagination.Next href="/page/3">Next</Pagination.Next>
      </Pagination>
    )

    const nav = screen.getByRole('navigation', { name: /results pages/i })

    expect(within(nav).getByRole('link', { name: /page 1/i })).toHaveAttribute('href', '/page/1')
    expect(within(nav).getByRole('link', { name: /page 2/i })).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(within(nav).getByRole('link', { name: 'Previous' })).toHaveAttribute('rel', 'prev')
    expect(within(nav).getByRole('link', { name: 'Next' })).toHaveAttribute('rel', 'next')
  })

  it('renders ellipsis items without a page link', () => {
    renderWithProvider(
      <Pagination>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Link href="/page/1" visuallyHiddenText="Page 1">
              1
            </Pagination.Link>
          </Pagination.Item>
          <Pagination.Item ellipsis />
          <Pagination.Item>
            <Pagination.Link href="/page/10" visuallyHiddenText="Page 10">
              10
            </Pagination.Link>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    )

    expect(screen.getByText('...')).toBeVisible()
    expect(screen.queryByRole('link', { name: '...' })).not.toBeInTheDocument()
  })

  it('renders block navigation labels', () => {
    renderWithProvider(
      <Pagination block>
        <Pagination.Previous
          href="/previous"
          label="Applying for a provisional lorry or bus licence"
        >
          Previous
        </Pagination.Previous>
        <Pagination.Next href="/next" label="Driver CPC part 1 test: theory">
          Next
        </Pagination.Next>
      </Pagination>
    )

    expect(screen.getByText(/applying for a provisional lorry or bus licence/i)).toBeVisible()
    expect(screen.getByText(/driver cpc part 1 test: theory/i)).toBeVisible()
  })

  it('keeps literal px sizing for previous and next titles', () => {
    renderWithProvider(
      <Pagination block>
        <Pagination.Previous href="/previous" label="Previous step label">
          Previous
        </Pagination.Previous>
        <Pagination.Next href="/next" label="Next step label">
          Next
        </Pagination.Next>
      </Pagination>
    )

    expect(screen.getByText('Previous')).toHaveStyle({ fontSize: '27px' })
    expect(screen.getByText('Next')).toHaveStyle({ fontSize: '27px' })
  })
})
