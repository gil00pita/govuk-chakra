# Phone numbers

Ask for a phone number only when needed, accepting the formats, prefixes and separators people normally use.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Phone numbers**
- Story ID: `gov-uk-patterns-ask-users-for--phone-numbers`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--phone-numbers)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Collect a phone number only when the service genuinely needs it.
- Offer another contact route because not everyone has or can use a phone.

## When not to use

- Do not make a phone number mandatory when the task can be completed or supported through another channel.
- Do not assume all numbers use a UK length or format.

## Journey and implementation rules

- Use a type=tel text input with autocomplete=tel rather than a number input.
- Accept spaces, hyphens, dashes, brackets, country codes and area codes, then validate against the relevant numbering plan.
- Explain how the number will be used and whether calls or messages may be sent.

## Accessibility and service safeguards

- Use a visible label and associate purpose hints and specific errors with the field.
- Do not force a numeric-only value or formatting script that disrupts cursor, paste or assistive-input behaviour.

## Demo and production responsibilities

Formatting acceptance is not proof that a number exists or can receive messages. Use a supported numbering library and server validation for the countries served if those checks are required.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/phone-numbers/) when adapting this example for a live service.
