# Confirm a phone number

Check that a user currently has access to a mobile number by sending a time-limited security code in a text message.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Confirm a phone number**
- Story ID: `gov-uk-patterns-help-users-to--confirm-a-phone-number`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--confirm-a-phone-number)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when access to a particular mobile number is necessary for a proportionate service or account security need.
- Provide a resend and correction route for delayed messages or an incorrect number.

## When not to use

- Do not treat control of a phone number as proof of a person’s identity.
- Do not make text-message confirmation the only route when users may not have mobile access or reliable signal.

## Journey and implementation rules

- Send a short single-use code, set an expiry and limit attempts and resend abuse without locking legitimate users out indefinitely.
- Use a type=text field with inputmode=numeric, autocomplete=one-time-code and enough width and letter spacing for the code.
- Explain the destination number safely, when the code expires, how to resend it and how to change the number.

## Accessibility and service safeguards

- Do not split the code into one input per character; one labelled field supports paste and assistive input more reliably.
- Announce resend outcomes and errors clearly without starting an inaccessible visual-only countdown.

## Demo and production responsibilities

No SMS is sent. Codes, expiry, attempt limits and resend behaviour are simulations for exploring the journey. Production checks must run on the server with single-use tokens and abuse controls.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/) when adapting this example for a live service.
