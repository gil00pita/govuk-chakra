# Service unavailable pages

Tell users when a service has been deliberately closed temporarily or permanently and explain when it returns or what they can do instead.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Service unavailable pages**
- Story ID: `gov-uk-patterns-pages--service-unavailable-pages`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--service-unavailable-pages)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when the service is intentionally closed for a known period or permanently.
- Prepare a general version in advance, then add a precise return date and time as soon as known.

## When not to use

- Do not use for an unexpected failure; use the problem-with-the-service page and fix the incident.
- Do not leave a planned-closure page in place after the service is available.

## Journey and implementation rules

- Use “Sorry, the service is unavailable” in the title and H1 and state when it returns or what permanent alternative applies.
- Explain what happened to saved answers and provide useful contact or alternative-service information.
- Do not use breadcrumbs, red warning text or vague explanations such as “maintenance” and “improvements”.

## Accessibility and service safeguards

- Serve a simple semantic page even when the main application bundle or JavaScript is unavailable.
- Write dates and times unambiguously, include the time zone when needed and make alternatives ordinary descriptive links.

## Demo and production responsibilities

Availability and return times are illustrative. A production closure response must work independently of the application bundle, state accurate timing, and explain actual saved-data handling.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/service-unavailable-pages/) when adapting this example for a live service.
