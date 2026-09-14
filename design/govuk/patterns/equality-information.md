# Equality information

Collect optional equality information consistently for monitoring and public-sector equality work, separately from operational questions.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Equality information**
- Story ID: `gov-uk-patterns-ask-users-for--equality-information`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--equality-information)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use the harmonised standards when collecting equality information to monitor access, representation or outcomes.
- Explain why the questions are separate, how answers will be used and that answering is optional.

## When not to use

- Do not use this monitoring pattern for operational decisions or where legislation requires information to be asked differently.
- Do not make equality questions a condition of completing the service.

## Journey and implementation rules

- For a one-off service, place the optional questions after check answers and before confirmation, preceded by an explanation page.
- Use the current harmonised question wording and response options; review the official page rather than recreating categories from memory.
- Protect sensitive responses, minimise access and define retention and analysis purposes before collection.

## Accessibility and service safeguards

- Use fieldsets and legends for every response group and include inclusive options such as a preference not to answer where guidance specifies it.
- Test language and response options with affected groups and ensure conditional follow-up controls work without excluding assistive-technology users.

## Demo and production responsibilities

This example covers an optional introduction, an optional date-of-birth question and skip routes. Blank answers are accepted; partially entered dates receive specific errors. It does not invent monitoring categories. Add only the current harmonised questions relevant to the agreed monitoring purpose, with appropriate handling of sensitive answers.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/equality-information/) when adapting this example for a live service.
