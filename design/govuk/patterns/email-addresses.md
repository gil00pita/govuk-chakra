# Email addresses

Ask for an email address in one field, explain why it is needed and accept the broad range of valid addresses users may have.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Email addresses**
- Story ID: `gov-uk-patterns-ask-users-for--email-addresses`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--email-addresses)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use whenever the service genuinely needs to capture an email address.
- Explain the purpose, especially when it will be used for receipts, updates or account recovery.

## When not to use

- Do not assume every user has reliable access to email when another channel can meet the need.
- Do not add a confirmation loop unless the separate Confirm an email address pattern’s high-impact conditions apply.

## Journey and implementation rules

- Use a single type=email text input with autocomplete=email and spellcheck disabled.
- Accept valid address characters and avoid validation rules that reject uncommon but valid domains or formats.
- Let users paste and correct the address; do not ask them to type it twice.

## Accessibility and service safeguards

- Use a visible label and connect the purpose hint and any specific error to the input.
- Do not rely on browser-native validation messages; use the service’s accessible validation flow.

## Demo and production responsibilities

Client-side checks are illustrative and deliberately permissive. Production validation must accept valid unusual addresses and offer another channel when possible.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/email-addresses/) when adapting this example for a live service.
