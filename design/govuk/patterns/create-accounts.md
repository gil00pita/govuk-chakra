# Create accounts

Create an account only when users need recurring access to their service data, and defer account creation until it becomes necessary.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Create accounts**
- Story ID: `gov-uk-patterns-help-users-to--create-accounts`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--create-accounts)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when users need to regularly access, manage or update information held by the service.
- Let users complete as much of the journey as possible before requiring the account.

## When not to use

- Do not create accounts when a usable one-off service can work without them.
- Do not use an account merely to let users check one transaction when a safely delivered reference can meet the need.

## Journey and implementation rules

- Call the action “Create an account” and clearly separate account creation from sign-in.
- Use action labels such as “Create a username” and “Create a password” so users know they are setting new credentials.
- Design recovery, email or phone changes, account closure, data retention and fraud controls as part of the journey.

## Accessibility and service safeguards

- Do not make account recovery depend on one inaccessible channel and allow password managers and paste.
- Preserve entered journey data if account creation interrupts an in-progress service.

## Demo and production responsibilities

The account flow is a prototype, not authentication. Integrate an identity service, save interrupted journey data, and implement recovery, closure and retention before deployment.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/create-accounts/) when adapting this example for a live service.
