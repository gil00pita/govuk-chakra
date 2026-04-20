# Playwright Visual Testing Plan

## Summary

This repo uses Storybook as the source of truth for component visuals and Playwright for screenshot-based regression testing.

The v1 rollout covers all component stories, stores baselines in the repo, and runs in CI as a required regression check.

## Architecture

- Storybook stories are the visual fixtures.
- `yarn visual:build` builds static Storybook output into `storybook-static`.
- Playwright reads `storybook-static/index.json`, enumerates component stories, and visits each story iframe directly.
- Screenshots are stored under `tests/visual/__screenshots__`.
- CI runs the Playwright visual suite on Node 24 in Chromium.

## Story Conventions

- Only stories with `type === "story"` are included.
- Docs pages are excluded automatically.
- The initial scope targets stories under `GOV.UK/Components/*`.
- Stories can opt out with:

```ts
parameters: {
  visual: {
    disable: true,
  },
}
```

## Commands

- `yarn visual:build`
  - Builds Storybook. Use Node 24 when running locally in this repo.
- `yarn visual:test`
  - Builds Storybook and runs Playwright screenshot assertions.
- `yarn visual:update`
  - Builds Storybook and updates screenshot baselines.
- `npx playwright install --with-deps chromium`
  - Downloads the Chromium binary needed for local visual test runs.

## How To Use It

### 1. Install the browser once

Run this before your first local visual test run:

```sh
npx playwright install --with-deps chromium
```

### 2. Run the visual regression suite

Use this when you want to verify that your component changes did not alter existing visuals unexpectedly:

```sh
yarn visual:test
```

This command:

- builds Storybook
- serves the static Storybook build
- runs Playwright against the generated component stories
- compares screenshots with the committed baselines

### 3. Update baselines intentionally

If a visual change is expected and correct, refresh the snapshots with:

```sh
yarn visual:update
```

After updating:

- review the changed files under `tests/visual/__screenshots__`
- confirm the new screenshots match the intended design change
- commit the updated baselines with the component change

### 4. Add visual coverage for a new component

When adding a new component:

1. Create or update its Storybook stories under `src/components/...`.
2. Make sure the story lives under `GOV.UK/Components/*`.
3. Keep the story deterministic:
   - avoid random values
   - avoid time-dependent output unless fixed in the story
   - avoid animations that change captured state
4. Run `yarn visual:update` to generate the first baseline.

### 5. Skip a story when needed

If a story is intentionally unstable or not suitable for screenshot comparison, opt it out with:

```ts
parameters: {
  visual: {
    disable: true,
  },
}
```

Use this sparingly. Prefer making stories stable where possible.

### 6. What to do when tests fail

If `yarn visual:test` fails:

1. Open the Playwright diff output and inspect the changed screenshot.
2. Decide whether the change is:
   - an unintended regression
   - an expected UI update
3. If it is unintended, fix the component or story and rerun `yarn visual:test`.
4. If it is intended, run `yarn visual:update` and commit the new baselines.

## Snapshot Rules

- Browser: Chromium only in v1.
- Theme: Storybook default theme.
- Viewport: fixed in Playwright config for stable output.
- Animations and transitions are disabled during capture.
- Screenshot names are derived from story title and story name.
- Baselines are committed to the repo intentionally.

## CI Flow

- Install dependencies with Yarn.
- Install Playwright Chromium.
- Run `yarn visual:test`.
- Upload `playwright-report` and `test-results` on failure for debugging.

## Troubleshooting

- If local runs fail with `Executable doesn't exist`, install the browser with `npx playwright install --with-deps chromium`.
- If Storybook changes visually on purpose, run `yarn visual:update` and review the updated screenshots.
- If a story is unstable or intentionally non-deterministic, opt it out with `parameters.visual.disable = true`.
- If local runs fail due to Storybook CLI compatibility, use Node 24.

## Future Expansion

- Add multi-browser coverage after Chromium is stable.
- Support per-story viewport overrides through `parameters.visual`.
- Add targeted component-only commands for faster local iteration.
