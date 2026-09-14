# National Insurance numbers

Ask for a National Insurance number in one short text field, helping users find it and accepting common spacing and letter case.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / National Insurance numbers**
- Story ID: `gov-uk-patterns-ask-users-for--national-insurance-numbers`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--national-insurance-numbers)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use whenever the service has a legitimate need for a National Insurance number.
- Tell users where they can find it and give a non-personal example of the expected structure.

## When not to use

- Never use a National Insurance number to verify a person’s identity.
- Do not collect or retain it when the service can meet the need without it.

## Journey and implementation rules

- Use a type=text input with spellcheck disabled, extra letter spacing and a width that reflects the expected value.
- Accept upper or lower case and common spacing; normalise for processing without forcing the user to reformat it.
- Protect the number as sensitive personal data and avoid exposing it in URLs, logs or analytics.

## Accessibility and service safeguards

- Associate the location hint and specific validation message with the input.
- Do not use a number input or numeric-only keyboard because the value contains letters.

## Demo and production responsibilities

Formatting checks are not identity or entitlement checks. Keep the number out of URLs, analytics, logs and general-purpose persisted browser storage.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/national-insurance-numbers/) when adapting this example for a live service.
