# GOV.UK Chakra Skill Plan

## Purpose

Create a restart-safe handoff for building a repo-versioned Codex skill that teaches AI agents how to turn design screens, Figma context, screenshots, or UI requirements into React using `govuk-chakra`.

This file preserves the approved plan and current decisions so another Codex session can continue without needing the original chat history.

## Implementation Status

- Repo skill created at `skills/govuk-chakra-design-system/`.
- Generated catalog script created at `scripts/generate-skill-catalog.mjs`.
- Local install script created at `scripts/install-skill.mjs`.
- Package scripts added: `skill:catalog`, `skill:catalog:check`, and `skill:install`.
- Theme customization guidance added at `skills/govuk-chakra-design-system/references/theme-customization.md`.

## Current Decisions

- Skill source of truth lives in this repo first.
- Missing official GOV.UK components use Chakra fallbacks rather than blocking implementation.
- Component catalog should be generated from local exports, Storybook stories, and TypeScript prop types, then paired with curated guidance.
- Storybook title prefixes are the repo's local classification signal: `GOV.UK/Components/**` means official local GOV.UK surface, and `Chakra Components/**` means Chakra GOV skin surface.
- The skill files now exist; keep `component-catalog.generated.md` generated rather than hand-edited.

## Source Links

- GOV.UK Design System components: https://design-system.service.gov.uk/components/
- Chakra UI component overview: https://chakra-ui.com/docs/components/concepts/overview
- Chakra UI LLM component docs: https://chakra-ui.com/llms-components.txt
- Chakra UI charts docs: https://chakra-ui.com/docs/charts/installation

## Component Classification

The skill should classify local components by Storybook title prefix first, then use the GOV.UK and Chakra docs for usage guidance.

### Official Local GOV.UK Components

These are components with stories titled `GOV.UK/Components/**`. Use them first when a design screen matches the GOV.UK-style component intent:

- `Accordion` maps to GOV.UK Accordion.
- `BackLink` maps to GOV.UK Back link.
- `Breadcrumbs` maps to GOV.UK Breadcrumbs.
- `Button` maps to GOV.UK Button.
- `Checkbox` maps to GOV.UK Checkboxes.
- `CookieBanner` maps to GOV.UK Cookie banner.
- `DateInput` maps to GOV.UK Date input.
- `Details` maps to GOV.UK Details.
- `ErrorSummary` maps to GOV.UK Error summary.
- `Fieldset` maps to GOV.UK Fieldset.
- `FileUpload` maps to GOV.UK File upload.
- `GOVUKFooter` maps to GOV.UK footer.
- `GOVUKHeader` maps to GOV.UK header.
- `InsetText` maps to GOV.UK Inset text.
- `Link` is grouped under `GOV.UK/Components/Link`.
- `NotificationBanner` maps to GOV.UK Notification banner.
- `Pagination` maps to GOV.UK Pagination.
- `Panel` maps to GOV.UK Panel.
- `PhaseBanner` maps to GOV.UK Phase banner.
- `Radio` maps to GOV.UK Radios.
- `Select` maps to GOV.UK Select.
- `Separator` is grouped under `GOV.UK/Components/Separator`.
- `ServiceNavigation` maps to GOV.UK Service navigation.
- `SkipLink` maps to GOV.UK Skip link.
- `SummaryList` maps to GOV.UK Summary list.
- `Table` maps to GOV.UK Table.
- `Tabs` maps to GOV.UK Tabs.
- `Tag` maps to GOV.UK Tag.
- `TaskList` maps to GOV.UK Task list.
- `Textinput` maps to GOV.UK Text input.
- `Textarea` maps to GOV.UK Textarea.
- `WarningText` maps to GOV.UK Warning text.

### GOV.UK Docs Components Not Implemented Yet

Treat these GOV.UK Design System component pages as concepts that need Chakra fallbacks or future wrappers:

- Character count.
- Error message.
- Exit this page.
- Password input.

`ExitThisPage` and `PasswordInput` directories currently exist but contain no implementation files, so the skill should not treat them as available components until they are exported.

### Chakra GOV Skin Components

These are components with stories titled `Chakra Components/**`. They are local Chakra-based wrappers or compositions with the GOV.UK theme applied. Use them for layouts, application UI, dashboards, tools, and interactions that are not covered by the `GOV.UK/Components/**` surface:

- Typography and content: `Code`, `CodeBlock`, `Heading`, `Highlight`, `Kbd`, `RichTextEditor`, `Text`.
- Buttons and forms: `Calendar`, `ColorPicker`, `ColorSwatch`, `DatePicker`, `Editable`, `IconButton`, `PinInput`, `RadioCard`, `Rating`, `SegmentedControl`, `Slider`, `Switch`, `TagsInput`.
- Collections and selection: `Combobox`, `Listbox`, `TreeView`.
- Overlays: `Dialog`, `HoverCard`, `Menu`, `Popover`, `Toast`, `ToggleTip`, `Tooltip`.
- Disclosure and navigation helpers: `Carousel`, `Collapsible`, `Steps`.
- Feedback and status: `Alert`, `EmptyState`, `Progress`, `ProgressCircle`, `Skeleton`, `Spinner`, `Stat`, `Status`.
- Data display and media: `Avatar`, `Card`, `Image`, `Marquee`, `QRCode`, `Timeline`.
- Charts: `AreaChart`, `BarChart`, `BarList`, `BarSegment`, `Chart`, `DonutChart`, `LineChart`, `PieChart`, `RadarChart`, `ScatterChart`, `Sparkline`.

### Brand Helpers And Non-Component Exports

Do not classify these as GOV.UK Design System components or Chakra components:

- Brand/logo helpers: `GOVUKCrest`, `GOVUKCrown`, `GOVUKLogo`, `GOVUKOGL`.
- Provider, theme, and utility exports.

### Classification Rules For The Generated Catalog

- Mark stories with `title: 'GOV.UK/Components/...` as `official-govuk`.
- Mark stories with `title: 'Chakra Components/...` as `chakra-gov-skin`.
- Mark logo/licence helpers as `brand-helper`.
- Mark GOV.UK Design System component pages without exported implementations as `missing-official`.
- Record whether each component is available from the main `govuk-chakra` package barrel, because some local component folders may exist before they are exported.

## Approved Implementation Plan

### Summary

Create a repo-versioned Codex skill at `skills/govuk-chakra-design-system/` that teaches AI agents how to turn design screens, Figma context, screenshots, or UI requirements into React using `govuk-chakra`.

The skill will use:

- GOV.UK Design System components as the official source for GOV.UK component names, intent, and usage guidance.
- Chakra UI component docs and Chakra LLM component docs for Chakra GOV skin passthrough/fallback components.
- This repo's exports, Storybook stories, and TypeScript prop types as the source of truth for what actually exists.

### Key Changes

- Add a skill folder:
  - `skills/govuk-chakra-design-system/SKILL.md`
  - `skills/govuk-chakra-design-system/agents/openai.yaml`
  - `skills/govuk-chakra-design-system/references/component-catalog.generated.md`
  - `skills/govuk-chakra-design-system/references/selection-guide.md`
  - `skills/govuk-chakra-design-system/references/chakra-fallbacks.md`
  - `skills/govuk-chakra-design-system/references/theme-customization.md`
- Add `scripts/generate-skill-catalog.mjs` to build the generated catalog from:
  - `src/govuk-chakra.ts`
  - `src/components/index.ts`
  - component `*.tsx` prop exports
  - Storybook titles such as `GOV.UK/Components/...` and `Chakra Components/...`
- Add package scripts:
  - `yarn skill:catalog` regenerates the catalog.
  - `yarn skill:catalog:check` verifies the generated catalog is current.
  - `yarn skill:install` copies the repo skill into `${CODEX_HOME:-~/.codex}/skills/govuk-chakra-design-system`.

### Skill Behaviour

- Prefer official local GOV.UK wrappers from `govuk-chakra` when a design screen matches an implemented GOV.UK component.
- Use Chakra primitives from `govuk-chakra` for layout and composition: `Box`, `Stack`, `Grid`, `Flex`, `Container`, etc.
- Treat missing GOV.UK components as allowed Chakra fallbacks, not as implemented wrappers.
- Missing official GOV.UK components to document as fallbacks:
  - Character count
  - Error message
  - Exit this page
  - Password input
- Use `govuk-chakra/chakra` only when the raw unwrapped Chakra export is deliberately needed.
- For Figma/design-screen work, first extract the semantic UI intent, then map to components; visual similarity alone should not override GOV.UK usage guidance.

### Public Interfaces

- No runtime component API changes.
- New repo-maintained skill artifact under `skills/`.
- New maintenance scripts in `package.json`.
- Skill metadata name: `govuk-chakra-design-system`.
- Skill trigger description should mention GOV.UK, GDS, Chakra UI, `govuk-chakra`, React screen implementation, Figma/design-to-code, component selection, and Chakra fallbacks.

### Test Plan

- Run `yarn skill:catalog:check` to confirm all local exports are represented and classified.
- Run `yarn lint` to verify new scripts and metadata formatting.
- Dry-run the skill against these prompts:
  - "Build a form asking for date of birth with validation errors."
  - "Implement a confirmation page after submitting an application."
  - "Convert this design with breadcrumbs and a password field."
  - "Build a task progress page with statuses."
  - "Create a dashboard card layout that is GOV.UK styled but not an official GOV.UK pattern."
- Expected results:
  - Official wrappers are chosen first.
  - Missing GOV.UK components use documented Chakra fallbacks.
  - Imports come from `govuk-chakra` unless raw Chakra is explicitly required.
  - The AI mentions fallback status in its response when no local wrapper exists.

### Assumptions

- The skill source of truth lives in this repo first, then can be installed locally.
- Missing official GOV.UK components should use Chakra fallbacks rather than blocking implementation or planning new wrappers.
- The skill should not copy full GOV.UK or Chakra docs into the repo; it should keep compact guidance, source links, and generated local API facts.
- `Card` and broader Chakra components are treated as Chakra GOV skin options.

## Resume Checklist

- Keep this file as the planning reference.
- Do not create runtime component API changes while implementing the skill.
- Start by creating `skills/govuk-chakra-design-system/SKILL.md` and the reference files listed above.
- Generate the component catalog from repo truth rather than hand-copying component names.
- Validate the completed skill with `yarn skill:catalog:check`, `yarn lint`, and the dry-run prompts.
