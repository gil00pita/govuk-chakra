# User-centred patterns

Patterns describe service decisions and multi-component journeys. These examples preserve their intent and safeguards using this repository’s component surface.

Run `yarn storybook`, then open **GOV.UK → Patterns**. All 30 examples are grouped below. The existing Form Examples remain available.

## Example boundaries

To run just these examples and their interaction checks:

```bash
yarn test:storybook src/stories/patterns
```

These are interactive, in-memory demonstrations. Use fictional data. They do not send messages, create accounts, process payments, submit applications or configure tracking. Storybook runs JavaScript; a production service must implement its own server routes, validation, persistence and non-JavaScript responses. Each pattern page lists the specific integration requirements.

UI imports use the local `src/govuk-chakra.ts` public barrel. Layout primitives are already exported by this repo; no new component library or stylesheet is introduced. Password, quick-exit, interruption and step-by-step examples are explicitly documented compositions where a dedicated local component is absent.

## Ask users for

- [Addresses](addresses.md)
- [Bank details](bank-details.md)
- [Dates](dates.md)
- [Email addresses](email-addresses.md)
- [Equality information](equality-information.md)
- [Names](names.md)
- [National Insurance numbers](national-insurance-numbers.md)
- [Passwords](passwords.md)
- [Payment card details](payment-card-details.md)
- [Phone numbers](phone-numbers.md)

## Help users to

- [Check a service is suitable](check-a-service-is-suitable.md)
- [Check answers](check-answers.md)
- [Complete multiple tasks](complete-multiple-tasks.md)
- [Confirm a phone number](confirm-a-phone-number.md)
- [Confirm an email address](confirm-an-email-address.md)
- [Contact a department or service team](contact-a-department-or-service-team.md)
- [Create a username](create-a-username.md)
- [Create accounts](create-accounts.md)
- [Exit a page quickly](exit-a-page-quickly.md)
- [Navigate a service](navigate-a-service.md)
- [Recover from validation errors](validation.md)
- [Start using a service](start-using-a-service.md)

## Pages

- [Confirmation pages](confirmation-pages.md)
- [Cookies page](cookies-page.md)
- [Interruption pages](interruption-pages.md)
- [Page not found pages](page-not-found-pages.md)
- [Question pages](question-pages.md)
- [Service unavailable pages](service-unavailable-pages.md)
- [Step by step navigation](step-by-step-navigation.md)
- [There is a problem with the service pages](problem-with-the-service-pages.md)
