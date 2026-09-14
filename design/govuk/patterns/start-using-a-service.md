# Start using a service

Start a public-facing UK government service from an agreed GOV.UK content page that explains the service and links into it.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Start using a service**
- Story ID: `gov-uk-patterns-help-users-to--start-using-a-service`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--start-using-a-service)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use to prototype and agree the start point for a public-facing government service.
- Work with the GOV.UK content team because the production start page is created in GOV.UK publishing tools, not GOV.UK Frontend.

## When not to use

- Do not launch a public GOV.UK transaction from an unindexed standalone application page.
- Do not overload the start page with information only a minority of users need later.

## Journey and implementation rules

- Explain what the service does, who can use it, cost, likely time, information users need and alternative access routes.
- Use one start-button link with an action-specific label such as “Start now” or “Sign in”; make secondary actions ordinary links.
- Include resume, sign-in or update routes where relevant and align the service name with the user need it solves.

## Accessibility and service safeguards

- Use a real link for the start action and preserve its destination and visible focus state without JavaScript.
- Write content in a clear heading structure and ensure alternative access information is complete and usable.

## Demo and production responsibilities

This is a start-page prototype. Production public GOV.UK start pages require the appropriate content publishing process; the example is not a separately publishable GOV.UK page.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/start-using-a-service/) when adapting this example for a live service.
