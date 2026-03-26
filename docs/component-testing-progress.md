# Component Testing Plan And Progress

Last updated: 2026-03-26

## Goal

Add reliable automated test coverage for every public component exported from `src/components/index.ts`, using the existing React Testing Library stack and a consistent test harness.

## Current Baseline

- Public exported components: 39
- Components with dedicated component tests: 1
- Completed so far: `Accordion`
- Existing component test file: `src/components/Accordion/Accordion.test.tsx`

## What The Repo Already Has

- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- `vitest`, Storybook Vitest integration, Playwright browser support
- `src/setupTests.ts` with `@testing-library/jest-dom`

## Gaps To Fix Before Scaling Coverage

- The `test` script in `package.json` still points to `react-scripts test`
- `vite.config.ts` currently defines a Storybook/browser test project, but not a dedicated unit/component `jsdom` project
- There is no shared `renderWithProvider` helper yet, even though most components will need `GOVUKProvider`
- There is no saved component coverage tracker, which this file now provides

## Delivery Strategy

### Phase 0: Testing Foundation

1. Add a dedicated Vitest unit test project for component tests.
2. Switch package scripts from `react-scripts test` to Vitest-based commands.
3. Add a shared test utility, likely under `src/test/` or `src/testing/`, to wrap components with `GOVUKProvider`.
4. Add a small convention for file naming: `ComponentName.test.tsx` next to the component.
5. Add a repeatable coverage command so progress can be measured.

### Phase 1: High-Value Interactive Components

These should be done first because they carry the highest behavior risk.

- `Button`
- `Checkbox`
- `CodeBlock`
- `CookieBanner`
- `DateInput`
- `ErrorSummary`
- `Fieldset`
- `FileUpload`
- `Pagination`
- `Radio`
- `Select`
- `Tabs`
- `Textarea`
- `Textinput`

### Phase 2: Composite Navigation And Data Components

- `BackLink`
- `Breadcrumbs`
- `Card`
- `Details`
- `GOVUKFooter`
- `GOVUKHeader`
- `Link`
- `NotificationBanner`
- `Panel`
- `PhaseBanner`
- `ServiceNavigation`
- `SkipLink`
- `SummaryList`
- `Table`
- `TaskList`
- `WarningText`

### Phase 3: Presentational And Low-Behavior Components

- `GOVUKCrest`
- `GOVUKCrown`
- `GOVUKOGL`
- `Heading`
- `InsetText`
- `Separator`
- `Tag`
- `Text`

## Minimum Test Expectations Per Component

- Renders without crashing inside `GOVUKProvider` when required
- Applies the expected accessible role or semantics
- Supports core props or variants that materially change behavior
- Covers user interaction for any expandable, dismissible, selectable, or copy-to-clipboard behavior
- Covers at least one realistic usage path instead of only snapshot-style assertions

## Component Tracker

Status legend:

- `done`: component test file exists and covers core behavior
- `planned`: included in rollout, not started yet
- `blocked`: should wait for Phase 0 foundation work

| Component | Priority | Status | Notes |
| --- | --- | --- | --- |
| Accordion | P1 | done | Existing baseline test coverage |
| BackLink | P2 | planned | Link semantics and content rendering |
| Breadcrumbs | P2 | planned | Navigation landmark and current item handling |
| Button | P1 | blocked | Needs shared provider test helper |
| Card | P2 | planned | Structure and link/content rendering |
| Checkbox | P1 | blocked | Interaction, checked state, disabled state |
| CodeBlock | P1 | blocked | Copy action, collapse behavior, title/header rendering |
| CookieBanner | P1 | blocked | Visibility, actions, dismiss logic |
| DateInput | P1 | blocked | Day/month/year fields, error state, labels |
| Details | P2 | planned | Open/close behavior and summary text |
| ErrorSummary | P1 | blocked | Heading, list items, link targets |
| Fieldset | P1 | blocked | Legend, hint, error messaging composition |
| FileUpload | P1 | blocked | Input wiring, accept/multiple props |
| GOVUKCrest | P3 | planned | SVG render smoke test |
| GOVUKCrown | P3 | planned | SVG render smoke test |
| GOVUKFooter | P2 | planned | Landmark, meta links, content slots |
| GOVUKHeader | P2 | planned | Branding, navigation, menu behavior if present |
| GOVUKOGL | P3 | planned | SVG render smoke test |
| Heading | P3 | planned | Semantic heading level rendering |
| InsetText | P3 | planned | Content rendering and structure |
| Link | P2 | planned | Anchor semantics and variant props |
| NotificationBanner | P2 | planned | Title, role, body content |
| Pagination | P1 | blocked | Current page, previous/next actions |
| Panel | P2 | planned | Title/body structure |
| PhaseBanner | P2 | planned | Phase label and message rendering |
| Radio | P1 | blocked | Selection, disabled state, grouping behavior |
| Select | P1 | blocked | Labeling, selected option, disabled/error states |
| Separator | P3 | planned | Orientation and role expectations |
| ServiceNavigation | P2 | planned | Navigation structure and active item |
| SkipLink | P2 | planned | Target href and accessible name |
| SummaryList | P2 | planned | Row rendering and action links |
| Table | P2 | planned | Header and cell semantics |
| Tabs | P1 | blocked | Tab selection and panel visibility |
| Tag | P3 | planned | Variant render smoke test |
| TaskList | P2 | planned | Rows, statuses, links |
| Text | P3 | planned | Element/variant rendering |
| Textarea | P1 | blocked | Value changes, disabled/error states |
| Textinput | P1 | blocked | Value changes, disabled/error states |
| WarningText | P2 | planned | Warning icon text and accessible content |

## Recommended Order For The Next Sessions

1. Finish Phase 0 foundation work.
2. Add tests for `Button`, `Link`, `Textinput`, `Textarea`, and `Select`.
3. Add tests for `Checkbox`, `Radio`, `Fieldset`, and `ErrorSummary`.
4. Add tests for `DateInput`, `FileUpload`, `Pagination`, and `Tabs`.
5. Continue through the tracker from highest to lowest priority.

## Session Notes

### 2026-03-26

- Audited the component list from `src/components/index.ts`
- Confirmed only `Accordion` currently has a dedicated component test
- Confirmed Vitest dependencies exist, but repo-level unit test configuration is incomplete
- Created this tracker to preserve progress across future sessions

## How To Use This File Later

When asking to continue, reference this file and I can:

- update the tracker as components are completed
- move items from `blocked` to `planned` once setup work is done
- keep working through the next recommended batch without re-auditing the repo
