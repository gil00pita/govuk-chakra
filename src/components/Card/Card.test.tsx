import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Card, CardGroup } from './Card'

describe('Card', () => {
  it('renders a region with heading, body, and footer content', () => {
    renderWithProvider(
      <Card.Root aria-label="Passport service">
        <Card.Header>Apply for a passport</Card.Header>
        <Card.Body>Renew or replace a British passport.</Card.Body>
        <Card.Footer>Start now</Card.Footer>
      </Card.Root>
    )

    const card = screen.getByRole('region', { name: /passport service/i })

    expect(within(card).getByRole('heading', { level: 2, name: /apply for a passport/i })).toBeVisible()
    expect(within(card).getByText(/renew or replace a british passport/i)).toBeVisible()
    expect(within(card).getByRole('contentinfo')).toHaveTextContent(/start now/i)
  })

  it('renders the whole card as a link when href is provided', () => {
    renderWithProvider(
      <Card.Root href="/apply" aria-label="Apply for a passport">
        <Card.Header>Apply for a passport</Card.Header>
        <Card.Body>Renew or replace a British passport.</Card.Body>
      </Card.Root>
    )

    expect(screen.getByRole('region', { name: /apply for a passport/i })).toHaveAttribute(
      'href',
      '/apply'
    )
  })

  it('renders a grid of cards from data with descriptions and metadata', () => {
    renderWithProvider(
      <CardGroup
        cards={[
          {
            title: 'Register to vote',
            href: '/vote',
            description: 'Register to vote in elections and referendums.',
            meta: 'Takes about 5 minutes',
          },
          {
            title: 'Apply for a passport',
            href: '/passport',
            description: 'Apply for or renew a British passport.',
            meta: 'Takes about 10 minutes',
          },
        ]}
      />
    )

    const cards = screen.getAllByRole('region')

    expect(cards).toHaveLength(2)
    expect(within(cards[0]).getByRole('heading', { name: /register to vote/i })).toBeVisible()
    expect(within(cards[0]).getByText(/takes about 5 minutes/i)).toBeVisible()
    expect(
      within(cards[1]).getByText(/apply for or renew a british passport/i)
    ).toBeVisible()
  })
})
