# Names

Ask for a person’s name only when needed, using the fewest fields and accepting the characters and structures real names require.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Names**
- Story ID: `gov-uk-patterns-ask-users-for--names`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--names)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when a person’s name is necessary to deliver the service.
- Prefer one full-name field unless the service has a proven reason to address or process name parts separately.

## When not to use

- Do not collect titles, middle names, previous names or separate name parts by default.
- Do not use a name as proof of identity or assume it is unique or permanent.

## Journey and implementation rules

- Make fields long enough for the population using the service and support letters, diacritics, numbers, spaces, apostrophes and other needed symbols.
- Use autocomplete=name for a full name, or the appropriate name-part values only when separate fields are justified.
- Avoid over-validating capitalisation, length or word count; store the value without silently rewriting it.

## Accessibility and service safeguards

- Keep the label visible and do not encode assumptions about name order in placeholder text.
- Explain precisely whose name is requested when a user may act for another person.

## Demo and production responsibilities

The example requires a value without restricting name structure, script, punctuation or word count. Do not silently rewrite the submitted name.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/names/) when adapting this example for a live service.
