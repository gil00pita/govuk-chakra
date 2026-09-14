# Create a username

Help users create or use a memorable unique username only after establishing that the service needs accounts.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Create a username**
- Story ID: `gov-uk-patterns-help-users-to--create-a-username`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--create-a-username)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Prefer an email address as the username when users have one and the service already needs it.
- Use a custom username only where user-generated content needs a public attribution that can protect the person’s identity.

## When not to use

- Do not ask users to invent a username merely because an account system supports one.
- Do not exclude users without email; research and provide a supported alternative.

## Journey and implementation rules

- Check uniqueness, suggest an available alternative when useful and ignore letter case during sign-in.
- Let users retrieve or reset a forgotten username and change their email address or username later.
- Explain any permitted characters before entry and avoid arbitrary rules that make a username difficult to remember.

## Accessibility and service safeguards

- Use one visible labelled text field and announce availability results without relying on colour or client-side JavaScript.
- Keep suggestions understandable and editable instead of silently assigning an identifier.

## Demo and production responsibilities

Availability checks in the demo do not reserve an identifier. The identity service must enforce uniqueness, case-insensitive sign-in, recovery and safe identifier changes.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/create-a-username/) when adapting this example for a live service.
