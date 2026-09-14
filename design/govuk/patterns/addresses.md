# Addresses

Help users provide an address using separate fields, an address lookup with a manual fallback, or a textarea chosen for the service’s data needs.

## Example in this repository

- Storybook: **GOV.UK / Patterns / Ask users for / Addresses**
- Story ID: `gov-uk-patterns-ask-users-for--addresses`
- [Open in local Storybook](http://localhost:6006/?path=/story/gov-uk-patterns-ask-users-for--addresses)
- [Interactive implementation](../../../src/stories/patterns/AskUsersFor.tsx)
- [Story and implementation notes](../../../src/stories/patterns/AskUsersFor.stories.tsx)
- [All patterns](README.md)

## When to use

- Use whenever an address is genuinely required to deliver the service.
- Choose the input approach according to the countries covered and whether the service needs structured address parts.

## When not to use

- Do not force international addresses into a UK-only structure or lookup.
- Do not collect county or other address parts unless the service uses them.

## Journey and implementation rules

- Use separate fields when supported countries share a workable structure; keep address line 2 and county optional unless there is a proven need.
- For a UK address lookup, accept flexible postcode formatting and always provide a clear manual-entry route.
- Use a textarea with autocomplete=street-address only when free-form addresses are usable and structured parts are unnecessary.

## Accessibility and service safeguards

- Apply the correct autocomplete purpose to each address field and associate every hint and error with its input.
- Make lookup results and the manual alternative keyboard and screen-reader accessible, including when JavaScript fails.

## Demo and production responsibilities

The example uses manual entry. Connect a production lookup only if appropriate for the countries served; retain manual entry if lookup fails.

## Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/addresses/) when adapting this example for a live service.
