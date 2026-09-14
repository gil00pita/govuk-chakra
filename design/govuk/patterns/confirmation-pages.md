# Confirmation pages

Tell users that they have completed a transaction, give them any reference and explain what will happen next.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Confirmation pages**
- Story ID: `gov-uk-patterns-pages--confirmation-pages`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--confirmation-pages)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use immediately after a user successfully completes a transaction.
- Give a reference when users or support staff will need it later.

## When not to use

- Do not use a success page before the service has durably accepted the transaction.
- Do not rely on email or another later message as the only confirmation.

## Journey and implementation rules

- Use a Confirmation panel with a clear completed-action heading and the reference number when applicable.
- Below the panel, explain what happens next, expected timescales, any action the user must take and how confirmation will be delivered.
- Prevent accidental duplicate submissions on refresh and provide a relevant feedback link.

## Accessibility and service safeguards

- Make the success heading the page H1 and present the reference as selectable text rather than only in an image.
- Do not communicate success through the green panel colour alone; the text must state the outcome.

## Demo and production responsibilities

The reference and outcome are illustrative. In production show this page only after durable acceptance, prevent duplicate submission and state actual next steps and timescales.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirmation-pages/) when adapting this example for a live service.
