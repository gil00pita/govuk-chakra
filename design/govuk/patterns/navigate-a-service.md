# Navigate a service

Use the GOV.UK header and Service navigation together when repeat users need to move among persistent areas of a non-linear service.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Navigate a service**
- Story ID: `gov-uk-patterns-help-users-to--navigate-a-service`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--navigate-a-service)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use navigation links for services used repeatedly, with multiple tasks and no single end-to-end order.
- Simplify the service structure first and include only destinations that meet a persistent user need.

## When not to use

- Avoid service navigation for a clear linear transaction.
- Use a Task list instead when users need to understand tasks, their order and completion status.

## Journey and implementation rules

- Use the official GOV.UK header only when identity eligibility applies and place Service navigation directly beneath it.
- Put the service name and its primary links in Service navigation; keep GOV.UK-wide identity and tools in the header.
- Mark the current page and keep responsive menu enhancement usable without JavaScript.

## Accessibility and service safeguards

- Give each navigation landmark a distinct accessible name and expose current-page state programmatically.
- Keep the service name, links and responsive control usable at high zoom and with keyboard navigation.

## Demo and production responsibilities

This example demonstrates navigation with the local header and ServiceNavigation wrappers. Production routes, current-page state, identity eligibility and a usable non-JavaScript navigation response remain application responsibilities.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/navigate-a-service/) when adapting this example for a live service.
