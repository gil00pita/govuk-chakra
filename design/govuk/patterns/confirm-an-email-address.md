# Confirm an email address

Check that a user currently has access to an email account using a carefully designed confirmation link or code loop.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Confirm an email address**
- Story ID: `gov-uk-patterns-help-users-to--confirm-an-email-address`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--confirm-an-email-address)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use only when critical functionality depends on email or a mistyped address could expose sensitive information to someone else.
- Choose a blocking or non-blocking loop according to the risk and the user’s need to continue.

## When not to use

- Do not confirm email by default for low-impact messages or receipts.
- Do not treat a confirmed address as proof of identity; it only proves access at the time of confirmation.

## Journey and implementation rules

- Make confirmation links single-use and time-limited, and expire them when superseded or when the account email changes.
- Let users resend the message and change a mistyped address without losing journey data.
- Explain that the user must switch to email and return, and design the activation landing page for both same-device and cross-device use.

## Accessibility and service safeguards

- Write a clear email subject and link purpose, and do not rely on a long raw URL as the only activation route.
- Provide support or an alternative path for users who cannot access email and make status messages available to assistive technology.

## Demo and production responsibilities

No email is sent. Confirmation is simulated; a real service needs single-use, expiring tokens, cross-device handling, safe destination changes and server-side status.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirm-an-email-address/) when adapting this example for a live service.
