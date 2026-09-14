# There is a problem with the service pages

Tell users about an unexpected service failure, preserve their work where possible and give a useful recovery or contact route.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / There is a problem with the service pages**
- Story ID: `gov-uk-patterns-pages--problem-with-the-service-pages`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--problem-with-the-service-pages)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use the same general page for unexpected service problems while logging and fixing the underlying error.
- Display it only briefly; move to the planned-unavailability pattern if the service cannot return quickly.

## When not to use

- Do not use for form validation, a missing URL or an intentional service closure.
- Do not expose exception messages, stack traces, internal identifiers or personal data.

## Journey and implementation rules

- Use “Sorry, there is a problem with the service” in the title and H1 and tell users to try again later.
- Explain what happened to their answers, preserve recoverable data for a stated reasonable period and offer relevant contact or alternative-service information.
- Do not use breadcrumbs, red warning text, HTTP jargon or vague phrases such as “technical difficulties”.

## Accessibility and service safeguards

- Return a lightweight semantic error page independently of the failed application path and keep support links keyboard accessible.
- Make the user-facing incident message available without JavaScript and do not repeatedly auto-refresh the page.

## Demo and production responsibilities

Storybook does not simulate the HTTP response. Serve a suitable error status and lightweight fallback on the server; log technical details privately and make only accurate claims about saved answers.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/) when adapting this example for a live service.
