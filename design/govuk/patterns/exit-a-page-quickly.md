# Exit a page quickly

Provide a rapid exit action, an accessible secondary route and supporting safety content for sensitive services where discovery could put a user at risk.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Exit a page quickly**
- Story ID: `gov-uk-patterns-help-users-to--exit-a-page-quickly`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--exit-a-page-quickly)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when service information could expose a user to abuse, retaliation, stalking or another credible safety risk.
- Design the component together with an interruption page and online-safety content.

## When not to use

- Do not present the pattern as a guarantee that browser history, network activity or device monitoring is hidden.
- For a standalone content page, follow the current component guidance to decide whether the Exit this page component alone is more appropriate.

## Journey and implementation rules

- Choose a fast neutral external destination, use the Exit this page component and add its secondary hidden link for assistive-technology users.
- Provide the documented loading overlay and ordinary-link fallback, and consider clearing sensitive service session data before redirecting.
- Create an interruption page explaining the exit and a separate safety page; test both with people who face the identified risk.

## Accessibility and service safeguards

- Place the control predictably near the start of service pages and make every activation route keyboard and screen-reader operable.
- Do not delay navigation with confirmation, animation or analytics and do not depend on JavaScript for the basic exit.

## Demo and production responsibilities

There is no exported ExitThisPage component. This composition uses existing links and buttons; it is not a complete replacement for the official component. Review loading behaviour, hidden link, keyboard routes and session clearing with specialist user research. Navigation does not erase browser history, network records or device monitoring.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/) when adapting this example for a live service.
