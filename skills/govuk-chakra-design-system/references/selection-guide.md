# Component Selection Guide

Use this guide with `component-catalog.generated.md`. The catalog tells you what exists; this guide tells you how to choose.

## Sources

- GOV.UK Design System components: https://design-system.service.gov.uk/components/
- Chakra UI components: https://chakra-ui.com/docs/components/concepts/overview
- Chakra UI LLM component docs: https://chakra-ui.com/llms-components.txt
- Chakra UI charts docs: https://chakra-ui.com/docs/charts/installation

## Priority Order

1. If the UI matches a `GOV.UK/Components/**` story, use that official local component.
2. If there is no GOV.UK match, use a `Chakra Components/**` local wrapper.
3. If neither exists, compose from Chakra primitives exported by `govuk-chakra`.
4. If the target is a GOV.UK Design System page but no local wrapper exists, use the fallback guidance in `chakra-fallbacks.md` and call it a fallback.

## Common GOV.UK Choices

- Page chrome: `GOVUKHeader`, `GOVUKFooter`, `SkipLink`, `ServiceNavigation`.
- Navigation within content: `BackLink`, `Breadcrumbs`, `Pagination`, `Tabs`.
- Forms: `Fieldset`, `Textinput`, `Textarea`, `Select`, `DateInput`, `Checkbox`, `Radio`, `FileUpload`.
- Form errors: `ErrorSummary` at the top, plus field-level error props or fallback text near the field.
- Informational blocks: `InsetText`, `WarningText`, `NotificationBanner`, `PhaseBanner`, `Details`.
- Confirmation or success: `Panel`.
- Review/check answers: `SummaryList`.
- Task progress: `TaskList`.
- Data: `Table`; use chart wrappers only when the design explicitly needs data visualization.
- Labels and status text: `Tag`.
- Basic text and links: `Heading`, `Text`, `Link`, `Separator`, with their Storybook classification respected.

## Chakra-Skinned Choices

- Application cards and dashboard units: `Card`, `Stat`, `Status`, `Timeline`.
- Loading and empty states: `Skeleton`, `Spinner`, `Progress`, `ProgressCircle`, `EmptyState`.
- Dialog-like interactions: `Dialog`, `Popover`, `Menu`, `Tooltip`, `ToggleTip`, `HoverCard`, `Toast`.
- Rich/non-GOV.UK inputs: `Combobox`, `Listbox`, `TreeView`, `Slider`, `Switch`, `TagsInput`, `PinInput`, `ColorPicker`, `DatePicker`.
- Charts: import from `govuk-chakra/charts`, not the main package.
- Rich text and code blocks: import from `govuk-chakra/editor`.

## Implementation Notes

- Prefer one import from `govuk-chakra` for normal screens.
- Keep GOV.UK-named wrappers in their local names: `Textinput`, `GOVUKHeader`, `GOVUKFooter`.
- Use Chakra primitives such as `Box`, `Stack`, `Grid`, `Flex`, and `Container` for layout.
- If the catalog entrypoint is only `internal component barrel`, do not import it in a consuming app until it has a public package entrypoint.
- When translating Figma, map the visual to semantic intent before choosing a component.
- Check the component story for composition patterns before guessing subcomponent names.
