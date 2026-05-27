---
name: govuk-chakra-design-system
description: Use when building React screens, components, pages, or design-to-code output with govuk-chakra; maps GOV.UK/Components Storybook stories to official GOV.UK-style local components, Chakra Components stories to Chakra GOV skin components, and guides Chakra fallbacks for missing GOV.UK Design System components.
metadata:
  short-description: Build GOV.UK Chakra React UI
---

# GOV.UK Chakra Design System

Use this skill to choose and compose `govuk-chakra` components for React screens, Figma/design-screen implementation, screenshots, forms, service pages, dashboards, and GOV.UK-style UI.

## Start Here

1. Read `references/component-catalog.generated.md` when choosing components. It is generated from Storybook title prefixes, exports, and local prop types.
2. Read `references/selection-guide.md` for component-choice rules and GOV.UK page/form patterns.
3. Read `references/chakra-fallbacks.md` when a GOV.UK component is missing or the design calls for a non-GOV.UK Chakra component.

## Classification Rules

- Storybook titles starting `GOV.UK/Components/` are the official local GOV.UK surface. Prefer these when their semantic intent matches the screen.
- Storybook titles starting `Chakra Components/` are Chakra GOV skin components. Use them for UI that is outside the GOV.UK component set.
- Brand helpers such as `GOVUKCrest`, `GOVUKCrown`, `GOVUKLogo`, and `GOVUKOGL` are not GOV.UK Design System components.
- Empty or unexported component folders are not available implementation targets.

## Import Rules

- Default import surface: import implemented GOV.UK wrappers, most Chakra GOV skin wrappers, and Chakra primitives from `govuk-chakra`.
- Charts: import chart wrappers from `govuk-chakra/charts`.
- Editor/code helpers: import `CodeBlock` and `RichTextEditor` from `govuk-chakra/editor`.
- Raw Chakra: use `govuk-chakra/chakra` only when you deliberately need unwrapped Chakra behavior.

## Design-Screen Workflow

1. Identify semantic intent before visual similarity: service navigation, warning, confirmation panel, task status, form field, summary list, data table, chart, dialog, etc.
2. Prefer an official local GOV.UK component when the intent matches.
3. Use Chakra primitives from `govuk-chakra` for spacing and layout around those components.
4. If an official GOV.UK concept is missing locally, compose a Chakra fallback and state that it is a fallback.
5. Keep imports exact. This library uses `Textinput`, `GOVUKHeader`, and `GOVUKFooter` naming.
6. Check nearby stories or source when props are uncertain.

## Guardrails

- Do not claim this package is official GOV.UK Frontend or a drop-in replacement for `govuk-frontend`.
- Do not invent local components that are not exported.
- Do not copy full GOV.UK or Chakra docs into responses; use them for guidance and cite links when helpful.
- Preserve GOV.UK interaction guidance for official components, especially form errors, radios, checkboxes, summaries, navigation, warning text, and confirmation panels.
