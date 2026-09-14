# Check answers

Let users review and change the information they provided before they submit a transaction.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Help users to / Check answers**
- Story ID: `gov-uk-patterns-help-users-to--check-answers`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-help-users-to--check-answers)
- [Interactive implementation](../../../src/stories/patterns/HelpUsersTo.tsx)
- [Story and implementation notes](../../../src/stories/patterns/HelpUsersTo.stories.tsx)
- [All patterns](README.md)

## When to use

- Use before a final submission when users need to confirm that collected information is correct.
- Group answers into meaningful sections that match the journey.

## When not to use

- Do not add a check page to a very short, low-risk interaction unless research shows it helps.
- Do not make users restart the journey to correct one answer.

## Journey and implementation rules

- Use Summary list rows for question-and-answer pairs and add a specific change link for every editable answer.
- Change links must return users to the check page after editing and retain other answers.
- Make the final action explicit and explain any declaration, legal effect or next step before the button.

## Accessibility and service safeguards

- Append visually hidden context to repeated change links so each has a unique accessible name.
- Render answers as text rather than disabled form controls and preserve a logical heading hierarchy.

## Demo and production responsibilities

Edits and submission are held in React state. A production service must save changes durably, return to review, and only show confirmation after the server accepts the transaction.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/check-answers/) when adapting this example for a live service.
