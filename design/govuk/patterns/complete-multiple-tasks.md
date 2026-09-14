# Complete multiple tasks

Use a task-list journey to show which tasks are required, their helpful order and each task’s current status.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Complete multiple tasks**
- Story ID: `gov-uk-patterns-help-users-to--complete-multiple-tasks`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--complete-multiple-tasks)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use for transactions with several tasks that users may complete over more than one session or in a flexible order.
- Use statuses when users need to understand what is complete, incomplete or not yet available.

## When not to use

- Do not use for a short linear service where a series of question pages is clearer.
- Do not use the GOV.UK content-site Step by step navigation pattern inside a transaction.

## Journey and implementation rules

- Group tasks under meaningful headings and order them according to dependencies and user needs.
- Use links only for tasks the user can currently act on and show accurate, consistently worded status text.
- Return to the task list after completing a task and derive status from saved service data rather than presentation state.

## Accessibility and service safeguards

- Connect every task link to its status with the component’s described-by relationship.
- Do not rely on tag colour to communicate status and ensure non-link tasks explain why they are unavailable.

## Demo and production responsibilities

Task state is held in memory for this example. Production statuses must come from saved answers and dependency rules, not from clicks or hard-coded visual labels.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) when adapting this example for a live service.
