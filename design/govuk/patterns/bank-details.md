# Bank details

Ask for bank or building-society account details in familiar separate fields, accepting the formats people normally use.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Bank details**
- Story ID: `gov-uk-patterns-ask-users-for--bank-details`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--bank-details)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when the service must pay money into or collect money from a UK bank or building-society account.
- Collect only the fields needed for the transaction and applicable validation.

## When not to use

- Do not ask for bank details before the user understands why they are needed and how they will be protected.
- Do not confuse bank details with payment-card details.

## Journey and implementation rules

- Use separate fields for name on the account, sort code, account number and an optional building-society roll number.
- Use text inputs with numeric input mode where helpful; do not use number inputs because leading zeroes and spacing matter.
- Accept common separators and normalise input safely rather than demanding one visual format.

## Accessibility and service safeguards

- Keep every label visible and associate format hints and specific errors using aria-describedby.
- Do not prevent pasting, password-manager assistance or assistive input methods.

## Demo and production responsibilities

The form demonstrates input and formatting only. Account checks, transaction authorisation and protected transport belong to the payment service. Never log submitted account details.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/bank-details/) when adapting this example for a live service.
