# Step by step navigation

Prototype an end-to-end GOV.UK content journey as ordered expandable steps linking to the guidance and transactions needed to complete it.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Pages / Step by step navigation**
- Story ID: `gov-uk-patterns-pages--step-by-step-navigation`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-pages--step-by-step-navigation)
- [Interactive implementation](../../../src/stories/patterns/Pages.tsx)
- [Story and implementation notes](../../../src/stories/patterns/Pages.stories.tsx)
- [All patterns](README.md)

## When to use

- Use for a GOV.UK journey with a specific start and end, several pieces of guidance or transactions and a helpful task order.
- Use this repository guidance for prototyping and work with departmental and GOV.UK content teams for production.

## When not to use

- Do not use when most journey content is outside GOV.UK, no user action is needed or there is no helpful order.
- Do not use inside a transactional service; use Complete multiple tasks and the Task list component.

## Journey and implementation rules

- Do not self-publish a custom step-by-step journey on live GOV.UK; the production pattern is created with GDS and content teams and is not provided by govuk-frontend.
- Write a short introduction, group user tasks into numbered expandable steps and order them according to user need and dependency.
- Prototype both the standalone page and the related-page sidebar/link presentation without customising the established design.

## Accessibility and service safeguards

- Make every step operable by keyboard with an exposed expanded state and keep task links available when enhancement fails.
- Do not put information needed to complete a task only in the introduction because the sidebar does not show it.

## Demo and production responsibilities

This is a content-journey prototype composed from existing disclosure and layout components. It is not the official publishing implementation or a transaction progress tracker. Work with the GOV.UK content team for production.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/step-by-step-navigation/) when adapting this example for a live service.
