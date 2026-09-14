# Passwords

Help users create, enter and reset secure, memorable passwords without obstructive restrictions or unsafe recovery journeys.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Passwords**
- Story ID: `gov-uk-patterns-ask-users-for--passwords`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--passwords)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use whenever an account requires users to create or enter a password, after confirming an account is necessary.
- Choose password rules proportionate to the service’s assessed security needs.

## When not to use

- Do not add password authentication when a usable service can be provided without an account.
- Do not use extra complexity rules as a substitute for appropriate multi-factor authentication.

## Journey and implementation rules

- Allow pasting and password managers, set a minimum length of at least 8 characters, set no maximum length and block commonly used passwords.
- Explain restrictions consistently wherever users create or enter a password and continue to support existing valid passwords when rules change.
- Design reset tokens to be single-use, time-limited and protected; never send or reveal an existing password.

## Accessibility and service safeguards

- Use the Password input component with correct autocomplete values and a usable show or hide control.
- Make requirements available before entry and report each unmet rule without clearing the user’s other form data.

## Demo and production responsibilities

The show/hide form is a composition of Textinput and Button, not a dedicated PasswordInput export. A production identity service must enforce password policy, compromised-password checks, secure storage and recovery. No passwords are transmitted or persisted here.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/passwords/) when adapting this example for a live service.
