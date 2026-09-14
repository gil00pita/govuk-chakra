# Dates

Help users provide or select a date using an interaction suited to whether the date is memorable, copied from a document, approximate or selected from known options.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Dates**
- Story ID: `gov-uk-patterns-ask-users-for--dates`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--dates)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use whenever a service asks users to provide or select a date.
- Use Date input for memorable dates such as a date of birth or a date copied from a document.

## When not to use

- Do not use a calendar picker for dates users know or can copy more easily by typing.
- Do not require day-level precision when the service only needs a month, year or approximate date.

## Journey and implementation rules

- State the expected precision and show a relevant example without pre-filling an answer.
- Store and validate the date as separate semantic values or a safe date type, not by assuming the display string is unambiguous.
- Use radios or another simple selection control when users choose from a small known set of dates.

## Accessibility and service safeguards

- Group day, month and year controls with a fieldset, legend and a shared hint.
- Report which part of a date is invalid and preserve all values when re-rendering errors.

## Demo and production responsibilities

Validate actual calendar dates, not just numeric ranges. Use a server-side date representation that does not shift a civil date across time zones.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/dates/) when adapting this example for a live service.
