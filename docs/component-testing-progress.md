# Component Testing Plan And Progress

Last updated: 2026-03-26

## Goal

Add reliable automated test coverage for every public component exported from `src/components/index.ts`, using the existing React Testing Library stack and a consistent test harness.

## Current Baseline

- Public exported components: 39
- Components with dedicated component tests: 14
- Completed so far: `Accordion`, `Button`, `Checkbox`, `DateInput`, `ErrorSummary`, `Fieldset`, `FileUpload`, `Link`, `Pagination`, `Radio`, `Select`, `Tabs`, `Textarea`, `Textinput`
- Existing component test file: `src/components/Accordion/Accordion.test.tsx`

## What The Repo Already Has

- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- `vitest`, Storybook Vitest integration, Playwright browser support
- `src/setupTests.ts` with `@testing-library/jest-dom`

## Current Gaps

- Vitest unit tests currently need Node 24 in this environment because the local Node 18 runtime is too old for the active Vite toolchain
- Chakra/Emotion styles still trigger noisy `Could not parse CSS stylesheet` output from jsdom because of unsupported modern CSS features such as `@layer` and `color-mix`

## Delivery Strategy

### Phase 0: Testing Foundation

Status: completed on 2026-03-26

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

| Component | Priority | Status | Notes |
| --- | --- | --- | --- |
| Accordion | P1 | done | Updated to run cleanly under Vitest |
| BackLink | P2 | planned | Link semantics and content rendering |
| Breadcrumbs | P2 | planned | Navigation landmark and current item handling |
| Button | P1 | done | Click handling, disabled state, start button icon |
| Card | P2 | planned | Structure and link/content rendering |
| Checkbox | P1 | done | Checked state, disabled state, group semantics |
| CodeBlock | P1 | planned | Copy action, collapse behavior, title/header rendering |
| CookieBanner | P1 | planned | Visibility, actions, dismiss logic |
| DateInput | P1 | done | Labels, shared descriptions, field entry, page heading legend |
| Details | P2 | planned | Open/close behavior and summary text |
| ErrorSummary | P1 | done | Alert semantics, links, autofocus behavior |
| Fieldset | P1 | done | Group semantics, heading legend, error content |
| FileUpload | P1 | done | Input wiring, file selection, multiple mode, disabled state |
| GOVUKCrest | P3 | planned | SVG render smoke test |
| GOVUKCrown | P3 | planned | SVG render smoke test |
| GOVUKFooter | P2 | planned | Landmark, meta links, content slots |
| GOVUKHeader | P2 | planned | Branding, navigation, menu behavior if present |
| GOVUKOGL | P3 | planned | SVG render smoke test |
| Heading | P3 | planned | Semantic heading level rendering |
| InsetText | P3 | planned | Content rendering and structure |
| Link | P2 | done | Anchor semantics, href, noStyle path |
| NotificationBanner | P2 | planned | Title, role, body content |
| Pagination | P1 | done | Landmark semantics, current page, previous/next links, block mode |
| Panel | P2 | planned | Title/body structure |
| PhaseBanner | P2 | planned | Phase label and message rendering |
| Radio | P1 | done | Selection, disabled state, grouping behavior |
| Select | P1 | done | Labeling, selected option, disabled and error states |
| Separator | P3 | planned | Orientation and role expectations |
| ServiceNavigation | P2 | planned | Navigation structure and active item |
| SkipLink | P2 | planned | Target href and accessible name |
| SummaryList | P2 | planned | Row rendering and action links |
| Table | P2 | planned | Header and cell semantics |
| Tabs | P1 | done | Items API defaults, selection changes, compound API coverage |
| Tag | P3 | planned | Variant render smoke test |
| TaskList | P2 | planned | Rows, statuses, links |
| Text | P3 | planned | Element/variant rendering |
| Textarea | P1 | done | Label wiring, value changes, disabled and error states |
| Textinput | P1 | done | Label wiring, descriptions, value changes, disabled state |
| WarningText | P2 | planned | Warning icon text and accessible content |

## Recommended Order For The Next Sessions

1. Add tests for `CodeBlock` and `CookieBanner`.
2. Add tests for `BackLink`, `Breadcrumbs`, `Details`, and `NotificationBanner`.
3. Continue through the tracker from highest to lowest priority.

## Session Notes

### 2026-03-26

- Audited the component list from `src/components/index.ts`
- Confirmed only `Accordion` currently has a dedicated component test
- Confirmed Vitest dependencies exist, but repo-level unit test configuration is incomplete
- Created this tracker to preserve progress across future sessions

### 2026-03-26, implementation pass

- Added a dedicated Vitest `unit` project in `vite.config.ts`
- Replaced the old `react-scripts test` script with Vitest-based scripts in `package.json`
- Added `src/test/renderWithProvider.tsx`
- Added component tests for `Button`, `Link`, `Select`, `Textarea`, and `Textinput`
- Updated `Accordion` tests so they reflect the current component contract under Vitest
- Fixed `Textinput` and `Textarea` label wiring so tests can assert accessible labeling correctly
- Verified the current unit suite passes: 6 files, 20 tests

### 2026-03-26, second implementation pass

- Added component tests for `Checkbox`, `Radio`, `Fieldset`, and `ErrorSummary`
- Fixed `Checkbox.Group` legend rendering so fieldset naming works correctly in tests and assistive technology
- Verified the current unit suite passes: 10 files, 32 tests

### 2026-03-26, third implementation pass

- Added component tests for `DateInput`, `FileUpload`, `Pagination`, and `Tabs`
- Fixed `DateInput` label and description wiring so each field gets stable IDs and shared hint/error descriptions
- Verified the current unit suite passes: 14 files, 45 tests

## How To Use This File Later

When asking to continue, reference this file and I can:

- update the tracker as components are completed
- move items from `blocked` to `planned` once setup work is done
- keep working through the next recommended batch without re-auditing the repo
