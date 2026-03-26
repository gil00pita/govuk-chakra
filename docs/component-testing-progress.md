# Component Testing Plan And Progress

Last updated: 2026-03-26

## Goal

Add reliable automated test coverage for every public component exported from `src/components/index.ts`, using the existing React Testing Library stack and a consistent test harness.

## Current Baseline

- Public exported components: 39
- Components with dedicated component tests: 39
- Completed so far: `Accordion`, `BackLink`, `Breadcrumbs`, `Button`, `Card`, `Checkbox`, `CodeBlock`, `CookieBanner`, `DateInput`, `Details`, `ErrorSummary`, `Fieldset`, `FileUpload`, `GOVUKCrest`, `GOVUKCrown`, `GOVUKFooter`, `GOVUKHeader`, `GOVUKOGL`, `Heading`, `InsetText`, `Link`, `NotificationBanner`, `Pagination`, `Panel`, `PhaseBanner`, `Radio`, `Select`, `Separator`, `ServiceNavigation`, `SkipLink`, `SummaryList`, `Table`, `Tabs`, `Tag`, `TaskList`, `Text`, `Textarea`, `Textinput`, `WarningText`
- Existing component test files live alongside components under `src/components/*/*.test.tsx`

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
| BackLink | P2 | done | Default/custom text and anchor semantics |
| Breadcrumbs | P2 | done | Navigation landmark, ancestor links, current item handling |
| Button | P1 | done | Click handling, disabled state, start button icon |
| Card | P2 | done | Region structure, linked card path, group rendering |
| Checkbox | P1 | done | Checked state, disabled state, group semantics |
| CodeBlock | P1 | done | Copy action, collapse behavior, title/header rendering |
| CookieBanner | P1 | done | Visibility, actions, dismiss logic |
| DateInput | P1 | done | Labels, shared descriptions, field entry, page heading legend |
| Details | P2 | done | Summary/content rendering and native open toggle |
| ErrorSummary | P1 | done | Alert semantics, links, autofocus behavior |
| Fieldset | P1 | done | Group semantics, heading legend, error content |
| FileUpload | P1 | done | Input wiring, file selection, multiple mode, disabled state |
| GOVUKCrest | P3 | done | Accessible/decorative SVG render coverage |
| GOVUKCrown | P3 | done | Accessible/decorative SVG render coverage |
| GOVUKFooter | P2 | done | Footer landmark, section links, meta content |
| GOVUKHeader | P2 | done | Header landmark and logo link labeling |
| GOVUKOGL | P3 | done | Accessible/decorative SVG render coverage |
| Heading | P3 | done | Semantic heading level rendering |
| InsetText | P3 | done | Content rendering and nested link support |
| Link | P2 | done | Anchor semantics, href, noStyle path |
| NotificationBanner | P2 | done | Region or alert semantics, title, body content |
| Pagination | P1 | done | Landmark semantics, current page, previous/next links, block mode |
| Panel | P2 | done | Title/body structure and confirmation content |
| PhaseBanner | P2 | done | Default/custom phase label, message, feedback link |
| Radio | P1 | done | Selection, disabled state, grouping behavior |
| Select | P1 | done | Labeling, selected option, disabled and error states |
| Separator | P3 | done | Separator role and vertical orientation semantics |
| ServiceNavigation | P2 | done | Service name, current item, mobile toggle state |
| SkipLink | P2 | done | Default/custom target href and accessible name |
| SummaryList | P2 | done | Row rendering, action links, summary card layout |
| Table | P2 | done | Caption, header, row header, and cell semantics |
| Tabs | P1 | done | Items API defaults, selection changes, compound API coverage |
| Tag | P3 | done | Content rendering, formatting options, custom variants |
| TaskList | P2 | done | Heading, task rows, hints, statuses, items API |
| Text | P3 | done | Default/alternate element rendering and type scale usage |
| Textarea | P1 | done | Label wiring, value changes, disabled and error states |
| Textinput | P1 | done | Label wiring, descriptions, value changes, disabled state |
| WarningText | P2 | done | Note semantics, assistive text, custom icon text |

## Recommended Order For The Next Sessions

1. Investigate whether the noisy jsdom stylesheet warnings can be suppressed or isolated.
2. Review the completed suite for any shallow assertions that should be strengthened.
3. Extend the same testing pattern to non-component areas such as provider behavior, utilities, or integration flows.

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

### 2026-03-26, fourth implementation pass

- Added component tests for `CodeBlock` and `CookieBanner`

### 2026-03-26, fifth implementation pass

- Added component tests for `BackLink`, `Breadcrumbs`, `Details`, and `NotificationBanner`
- Updated the `CodeBlock` copy-button test to match the current accessible name exposed by the component
- Verified the current unit suite passes: 20 files, 60 tests

### 2026-03-26, sixth implementation pass

- Added component tests for `Card`, `GOVUKFooter`, `GOVUKHeader`, and `PhaseBanner`
- Verified the current unit suite passes: 24 files, 69 tests

### 2026-03-26, seventh implementation pass

- Added component tests for `Panel`, `ServiceNavigation`, `SkipLink`, and `SummaryList`
- Verified the focused batch passes: 4 files, 8 tests
- Full-suite verification was re-run, but the command output remained dominated by the known jsdom stylesheet noise during summary capture

### 2026-03-26, eighth implementation pass

- Added component tests for `Table`, `TaskList`, and `WarningText`
- Verified the focused batch passes: 3 files, 6 tests

### 2026-03-26, ninth implementation pass

- Added component tests for `Heading`, `InsetText`, `Separator`, and `Tag`
- Verified the focused batch passes: 4 files, 10 tests

### 2026-03-26, tenth implementation pass

- Added component tests for `Text`, `GOVUKCrest`, `GOVUKCrown`, and `GOVUKOGL`
- Completed dedicated component-test coverage for all 39 public exports from `src/components/index.ts`
- Verified the focused batch passes: 4 files, 9 tests

### 2026-03-26, final verification pass

- Re-ran the full Vitest `unit` project after completing coverage for all public component exports
- Verified the full unit suite passes: 39 files, 102 tests
- The known jsdom stylesheet warnings are still present during the run, but they did not prevent a clean pass summary

## How To Use This File Later

When asking to continue, reference this file and I can:

- update the tracker as components are completed
- move items from `blocked` to `planned` once setup work is done
- keep working through the next recommended batch without re-auditing the repo
