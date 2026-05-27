# Chakra Fallbacks

Use this reference when an official GOV.UK Design System concept is not implemented locally, or when the screen needs a Chakra component that is not part of GOV.UK.

## Missing GOV.UK Components

These GOV.UK Design System components do not currently have exported local wrappers:

| GOV.UK concept | Local status | Fallback approach |
| --- | --- | --- |
| Character count | Missing | Compose `Textinput` or `Textarea` with helper text showing the count. Use accessible live text when the count updates. |
| Error message | Missing standalone wrapper | Prefer field-level error props on local form components. If needed, compose GOV.UK-styled `Text` near the field and connect it with `aria-describedby`. |
| Exit this page | Empty local folder, not exported | Compose a prominent `Button` or `Link` with the GOV.UK docs behavior in mind. Do not pretend an `ExitThisPage` export exists. |
| Password input | Empty local folder, not exported | Compose `Textinput` with `type="password"` and, if required, a GOV.UK-styled show/hide `Button`. Do not pretend a `PasswordInput` export exists. |

When using one of these fallbacks, mention in implementation notes or comments that it is a fallback for a missing local wrapper if that context helps the user.

## Chakra GOV Skin Surface

Storybook titles starting `Chakra Components/**` are supported local wrappers but not official GOV.UK component pages. They are appropriate for product UI, admin workflows, dashboards, interactive tools, and richer application controls.

Use these import surfaces:

- `govuk-chakra` for normal Chakra GOV skin wrappers such as `Card`, `Dialog`, `Combobox`, `Progress`, `Status`, `Text`, and `Heading`.
- `govuk-chakra/charts` for `AreaChart`, `BarChart`, `BarList`, `BarSegment`, `Chart`, `DonutChart`, `LineChart`, `PieChart`, `RadarChart`, `ScatterChart`, and `Sparkline`.
- `govuk-chakra/editor` for `CodeBlock` and `RichTextEditor`.

## Fallback Composition Rules

- Keep the GOV.UK visual language restrained and service-focused.
- Prefer native form semantics and labels over decorative approximations.
- Use Chakra primitives from `govuk-chakra` for layout instead of importing `@chakra-ui/react` directly.
- Use `govuk-chakra/chakra` only when a raw Chakra export is deliberately required.
- Check `component-catalog.generated.md` before claiming a component is missing.
