# Page not found pages

Return a clear page when a requested URL does not exist and help users recover without blaming them or exposing technical jargon.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Page not found pages**
- Story ID: `gov-uk-patterns-pages--page-not-found-pages`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--page-not-found-pages)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use for a request to a page that does not exist, whether the address was mistyped, copied incorrectly or linked incorrectly.
- Return the page with the correct not-found HTTP status while keeping the standard service page structure.

## When not to use

- Do not use for an unexpected service failure or planned closure.
- Do not redirect every unknown URL to the homepage because that hides the error and removes useful context.

## Journey and implementation rules

- Use “Page not found” in the page title and as the H1, then suggest checking typed or pasted addresses.
- Offer specific contact information only when it meets a user need and fix or redirect known broken service links.
- Do not use breadcrumbs, red warning text, humour or jargon such as “404” or “bad request” in the visible content.

## Accessibility and service safeguards

- Return semantic HTML even when application rendering fails and keep the H1 as the first meaningful content in main.
- Ensure recovery and contact links have descriptive destinations and the document title identifies the service.

## Demo and production responsibilities

Storybook cannot return the HTTP status for this simulated page. The production route must return 404 and render useful semantic content independently of client-side application routing.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/page-not-found-pages/) when adapting this example for a live service.
