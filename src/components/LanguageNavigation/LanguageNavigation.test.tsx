import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { LanguageNavigation } from './LanguageNavigation'

describe('LanguageNavigation', () => {
  it('renders current and alternate languages with the expected semantics', () => {
    renderWithProvider(
      <LanguageNavigation.Root>
        <LanguageNavigation.List>
          <LanguageNavigation.Item>
            <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
          </LanguageNavigation.Item>
          <LanguageNavigation.Item>
            <LanguageNavigation.Link href="/cy" lang="cy">
              Cymraeg
            </LanguageNavigation.Link>
          </LanguageNavigation.Item>
        </LanguageNavigation.List>
      </LanguageNavigation.Root>
    )

    const navigation = screen.getByRole('navigation', { name: 'Language' })
    const current = within(navigation).getByText('English')
    const alternate = within(navigation).getByRole('link', { name: 'Cymraeg' })

    expect(within(navigation).getByRole('list')).toBeVisible()
    expect(current).toHaveAttribute('aria-current', 'true')
    expect(current).toHaveAttribute('lang', 'en')
    expect(alternate).toHaveAttribute('href', '/cy')
    expect(alternate).toHaveAttribute('lang', 'cy')
    expect(alternate).toHaveAttribute('hreflang', 'cy')
    expect(alternate).toHaveAttribute('rel', 'alternate')
  })

  it('supports translated labels, mixed text directions and language descriptions', () => {
    renderWithProvider(
      <LanguageNavigation.Root landmarkLabel="Dewis iaith" lang="cy">
        <LanguageNavigation.List>
          <LanguageNavigation.Item>
            <LanguageNavigation.Current lang="cy" dir="ltr">
              Cymraeg
            </LanguageNavigation.Current>
          </LanguageNavigation.Item>
          <LanguageNavigation.Item>
            <LanguageNavigation.Link
              href="/ar"
              hrefLang="ar-GB"
              lang="ar"
              dir="rtl"
              languageDescriptionText="غيّر اللغة إلى العربية"
            >
              العربية
            </LanguageNavigation.Link>
          </LanguageNavigation.Item>
        </LanguageNavigation.List>
      </LanguageNavigation.Root>
    )

    const navigation = screen.getByRole('navigation', { name: 'Dewis iaith' })
    const alternate = within(navigation).getByRole('link', {
      name: 'العربية غيّر اللغة إلى العربية',
    })

    expect(navigation).toHaveAttribute('lang', 'cy')
    expect(alternate).toHaveAttribute('dir', 'rtl')
    expect(alternate).toHaveAttribute('hreflang', 'ar-GB')
  })

  it('supports the inverse variant and preserves custom class names', () => {
    renderWithProvider(
      <LanguageNavigation.Root inverse className="app-language-navigation">
        <LanguageNavigation.List>
          <LanguageNavigation.Item>
            <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
          </LanguageNavigation.Item>
          <LanguageNavigation.Item>
            <LanguageNavigation.Link href="/cy" lang="cy">
              Cymraeg
            </LanguageNavigation.Link>
          </LanguageNavigation.Item>
        </LanguageNavigation.List>
      </LanguageNavigation.Root>
    )

    const navigation = screen.getByRole('navigation', { name: 'Language' })

    expect(navigation).toHaveClass(
      'govuk-language-navigation',
      'govuk-language-navigation--inverse',
      'app-language-navigation'
    )
    expect(within(navigation).getByRole('link', { name: 'Cymraeg' })).toBeVisible()
  })
})
