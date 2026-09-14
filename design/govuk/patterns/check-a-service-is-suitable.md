# Check a service is suitable

Ask a short sequence of simple questions so users can learn early whether a service is suitable, what it costs or what outcome they may receive.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Check a service is suitable**
- Story ID: `gov-uk-patterns-help-users-to--check-a-service-is-suitable`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--check-a-service-is-suitable)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use when eligibility, cost, timescale or likely outcome is too complicated to explain clearly on the start page.
- Help users find out whether the service meets their need before collecting application details.

## When not to use

- Do not build a checker when concise start-page content can explain the criteria.
- Do not disguise policy decisions or deny users a route to understand and challenge an outcome.

## Journey and implementation rules

- Begin with an introduction, ask one simple question per page and calculate the relevant result from the answers.
- End every branch with a clear results page that explains suitability and what the user can do next.
- Put fixed rules such as universal age limits or deadlines on the start page as well as in the checker.

## Accessibility and service safeguards

- Use semantic question pages with visible legends or labels and preserve answers when users go back.
- Write result pages in plain language and provide an accessible alternative when the automated decision cannot cover a user’s situation.

## Demo and production responsibilities

The branching criteria are fictional demonstration rules. Replace them with approved policy and provide a human route for cases the checker cannot resolve.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/) when adapting this example for a live service.
