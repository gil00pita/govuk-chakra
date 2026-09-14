# Recover from validation errors

Validate only information the service cannot use, then explain what is wrong and how the user can fix it without losing their work.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Recover from validation errors**
- Story ID: `gov-uk-patterns-help-users-to--validation`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--validation)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Validate information that cannot be correct, is too ambiguous to use or is required but missing.
- Minimise avoidable errors by asking clear questions and accepting unambiguous formatting variations.

## When not to use

- Do not use validation to decide eligibility or permission; route to an explanatory outcome page.
- Do not use validation components for missing pages, unexpected system problems or planned service closure.

## Journey and implementation rules

- Add novalidate to forms, keep server-side validation authoritative and render the same accessible errors even when client-side checks are added.
- Show an Error summary at the top, repeat each message beside the field and link summary items to their correction target.
- Preserve all submitted values, focus the summary appropriately and write a specific message for each error state.

## Accessibility and service safeguards

- Associate inline errors through aria-describedby, add error styling to the form group and input, and include visually hidden “Error:” text.
- Do not rely on colour, icons, browser-native bubbles or focus alone to communicate an error.

## Demo and production responsibilities

Client-side errors demonstrate the interaction. Repeat authoritative validation on the server, preserve submitted values and render equivalent errors when JavaScript is unavailable.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/validation/) when adapting this example for a live service.
