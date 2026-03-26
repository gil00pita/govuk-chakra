import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { GOVUKFooter } from './GOVUKFooter'

describe('GOVUKFooter', () => {
  it('renders a footer landmark with navigation sections and links', () => {
    renderWithProvider(
      <GOVUKFooter>
        <GOVUKFooter.Container>
          <GOVUKFooter.Navigation>
            <GOVUKFooter.Section>
              <GOVUKFooter.SectionTitle>Services and information</GOVUKFooter.SectionTitle>
              <GOVUKFooter.List>
                <GOVUKFooter.ListItem>
                  <GOVUKFooter.Link href="/benefits">Benefits</GOVUKFooter.Link>
                </GOVUKFooter.ListItem>
                <GOVUKFooter.ListItem>
                  <GOVUKFooter.Link href="/business">Business and self-employed</GOVUKFooter.Link>
                </GOVUKFooter.ListItem>
              </GOVUKFooter.List>
            </GOVUKFooter.Section>
          </GOVUKFooter.Navigation>
        </GOVUKFooter.Container>
      </GOVUKFooter>
    )

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('heading', { level: 2, name: /services and information/i })).toBeVisible()
    expect(within(footer).getByRole('list')).toBeVisible()
    expect(within(footer).getByRole('link', { name: /benefits/i })).toHaveAttribute(
      'href',
      '/benefits'
    )
  })

  it('renders meta links and meta text content', () => {
    renderWithProvider(
      <GOVUKFooter>
        <GOVUKFooter.Container>
          <GOVUKFooter.Meta>
            <GOVUKFooter.MetaItem>
              <GOVUKFooter.Link href="/help">Help</GOVUKFooter.Link>
              <GOVUKFooter.Link href="/cookies">Cookies</GOVUKFooter.Link>
            </GOVUKFooter.MetaItem>
            <GOVUKFooter.MetaText>Built by the Government Digital Service</GOVUKFooter.MetaText>
          </GOVUKFooter.Meta>
        </GOVUKFooter.Container>
      </GOVUKFooter>
    )

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('link', { name: /help/i })).toHaveAttribute('href', '/help')
    expect(within(footer).getByRole('link', { name: /cookies/i })).toHaveAttribute(
      'href',
      '/cookies'
    )
    expect(within(footer).getByText(/built by the government digital service/i)).toBeVisible()
  })
})
