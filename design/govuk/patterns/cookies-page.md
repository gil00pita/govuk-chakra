# Cookies page

Explain every cookie the service sets and let users review and change consent for categories of non-essential cookies.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Cookies page**
- Story ID: `gov-uk-patterns-pages--cookies-page`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--cookies-page)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Provide a cookies page whenever the service stores cookies or similar data on a user’s device.
- Let users change optional-cookie preferences after responding to the Cookie banner.

## When not to use

- Do not present strictly necessary cookies as optional or set non-essential cookies before a valid consent choice.
- Do not use generic copied cookie lists that differ from what the deployed service actually sets.

## Journey and implementation rules

- Explain what cookies are, why the service uses each category and that essential cookies do not require consent.
- For each cookie list its name, purpose and expiry, and keep the page synchronised with production behaviour and third parties.
- Provide equivalent accept and reject controls for optional categories, store the choice and confirm when it changes.

## Accessibility and service safeguards

- Use properly captioned tables with scoped headers and real form controls with a fieldset and legend for each choice group.
- Make saving preferences work without JavaScript and expose the outcome in a clear notification.

## Demo and production responsibilities

Preferences in this example do not configure trackers or set cookies. Production must describe its actual cookie inventory, store the preference, gate optional scripts before consent, and support changing preferences without JavaScript.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/cookies-page/) when adapting this example for a live service.
