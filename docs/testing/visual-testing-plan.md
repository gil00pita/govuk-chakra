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
