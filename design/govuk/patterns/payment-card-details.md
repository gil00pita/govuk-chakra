# Payment card details

Collect card details in a familiar order only when an approved payment platform cannot meet the service need.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Payment card details**
- Story ID: `gov-uk-patterns-ask-users-for--payment-card-details`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--payment-card-details)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- First check whether GOV.UK Pay is suitable; use this pattern only when the service must build its own card-payment flow.
- Present card number, expiry date, cardholder name and security code together in the order found on a card.

## When not to use

- Do not build a custom card flow without the required payment-security, fraud, privacy and compliance capability.
- Do not store sensitive authentication data or expose card details in logs, URLs, analytics or error reports.

## Journey and implementation rules

- Accept familiar separators such as spaces and hyphens and normalise them safely.
- Show accepted card types and progressively enhance card-type and security-code guidance; the base form must remain understandable without JavaScript.
- Keep validation specific while avoiding disclosure of sensitive full card values.

## Accessibility and service safeguards

- Use text inputs with appropriate autocomplete and inputmode values, visible labels and associated hints.
- Provide text equivalents for card-type icons and announce dynamic guidance changes without repeatedly interrupting entry.

## Demo and production responsibilities

This is an isolated form demonstration, not a payment integration. Prefer an approved hosted payment platform such as GOV.UK Pay. Production card collection requires the relevant payment-security controls; do not transmit these values to a general application endpoint or retain security codes.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/payment-card-details/) when adapting this example for a live service.
