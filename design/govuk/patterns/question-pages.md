# Question pages

Ask one thing per page using the page heading as the form label or legend and a simple continue action.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Question pages**
- Story ID: `gov-uk-patterns-pages--question-pages`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--question-pages)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use for most questions in a transactional service, especially when later questions depend on earlier answers.
- Combine closely related controls only when users understand them as one coherent question.

## When not to use

- Do not put unrelated questions on one page merely to shorten the journey.
- Do not use a generic H1 that fails to identify the field or response group.

## Journey and implementation rules

- Make the label or fieldset legend the page H1, add a caption for section context when needed and use a two-thirds content column.
- Use a form with novalidate, the appropriate GOV.UK input component, one primary Continue button and a working Back link where appropriate.
- Put hints before inputs, preserve answers on return and use the full validation pattern for errors.

## Accessibility and service safeguards

- Use a fieldset and legend for grouped controls and an explicitly associated label for a single control.
- Keep DOM order logical, maintain one descriptive page H1 and move focus appropriately after navigation or validation.

## Demo and production responsibilities

The form demonstrates a single-question transaction. Production needs real back/continue routes, server-side validation and durable answer preservation.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/question-pages/) when adapting this example for a live service.
