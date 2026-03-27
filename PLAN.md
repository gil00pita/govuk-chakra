# Chakra Wrapper Expansion Plan

## Summary

Create one local wrapper module per requested Chakra UI component, using the existing `CodeBlock` approach as the standard: a typed wrapper in `src/components/<Component>/<Component>.tsx`, a Storybook file with root props exposed as `args`, a focused unit test, a local `index.ts`, and an export from `src/components/index.ts`.

Use Chakra’s official examples as the source for each story’s rendered example, but adapt them to this repo’s wrapper names and conventions. Keep the public API as close to Chakra as possible, and only add “closed component” helpers where Chakra itself documents that pattern.

## Public API And Naming Decisions

- Use `Object.assign` namespaces for every component module so the API is consistent with `CodeBlock`.
- For multipart components, export `Component.Root` plus Chakra-equivalent subcomponents only; do not invent extra parts.
- For single-part primitives, export `Component` and `Component.Root` as the same wrapper so stories can use the same pattern consistently.
- `Calendar` will be a local wrapper over Chakra `DatePicker` in inline calendar mode. Expose `Calendar.Root`, `Calendar.Content`, `Calendar.View`, `Calendar.Header`, `Calendar.DayTable`, `Calendar.MonthTable`, `Calendar.YearTable`, and the related navigation parts.
- `IconButton` will wrap Chakra `IconButton` directly, but still expose `IconButton.Root`.
- `SegmentedControl` will be a closed wrapper over `SegmentGroup`, following Chakra’s documented composition pattern.
- `Rating` will be a closed wrapper over `RatingGroup`, following Chakra’s documented composition pattern.
- `ToggleTip` will be implemented as a local closed component based on Chakra’s official composition example, since it is documented as a composed helper rather than a first-class primitive export.
- `Toast` will ship as a local toast module that exposes the renderable toast parts plus the app-level toaster helper needed to trigger examples.
- `RichTextEditor` will follow Chakra’s documented Tiptap composition, including `RichTextEditor.Root`, `Toolbar`, `ControlGroup`, `Content`, `Footer`, and a `Control` namespace for editor controls.
- Chart components will be thin wrappers around the Chakra charts pattern, backed by `@chakra-ui/charts` and `recharts`, while keeping the requested public names: `AreaChart`, `BarChart`, `BarList`, `BarSegment`, `DonutChart`, `LineChart`, `PieChart`, `RadarChart`, `ScatterChart`, `Sparkline`.

## Implementation Changes

- Add wrappers for all requested components in batches:
  - Primitives/display: `Code`, `Highlight`, `Kbd`, `IconButton`, `ColorSwatch`, `Status`, `Avatar`, `Image`, `Marquee`, `QRCode`, `Stat`, `Timeline`, `Alert`, `EmptyState`, `ProgressCircle`, `Progress`, `Skeleton`, `Spinner`.
  - Inputs/selection: `Calendar`, `ColorPicker`, `Editable`, `PinInput`, `RadioCard`, `Rating`, `SegmentedControl`, `Switch`, `Slider`, `TagsInput`, `Combobox`, `Listbox`, `TreeView`.
  - Overlay/disclosure: `Dialog`, `HoverCard`, `Menu`, `Popover`, `ToggleTip`, `Tooltip`, `Carousel`, `Collapsible`, `Steps`.
  - Advanced/editor: `RichTextEditor`.
  - Charts: `AreaChart`, `BarChart`, `BarList`, `BarSegment`, `DonutChart`, `LineChart`, `PieChart`, `RadarChart`, `ScatterChart`, `Sparkline`.
- Keep stories in the `CodeBlock` style:
  - define a `<Component>StoryArgs` type from root props
  - expose root props as Storybook controls
  - pass `args` directly into `<Component.Root {...args}>`
  - include 2-4 official-doc examples per component, adapted to local wrapper names
- Add small shared internal story helpers for repeated example data:
  - list collections for `Combobox`, `Listbox`, `TreeView`
  - chart sample datasets and chart decorator helpers
  - rich text starter content and toolbar presets
- Add required dependencies before implementation:
  - `@chakra-ui/charts`, `recharts`
  - `@tiptap/react`, `@tiptap/starter-kit`
  - only add extra optional deps if a chosen story actually needs them
- Keep story scope disciplined:
  - choose doc examples that rely on core Chakra/Tiptap APIs already needed for the component
  - skip examples that require unrelated optional libraries unless they are necessary to demonstrate the component’s primary behavior

## Test Plan

- Add one unit test per component module with at least:
  - render smoke test
  - primary interaction test for interactive components
  - multipart composition test for compound wrappers
- Required interaction coverage:
  - `Calendar` date selection
  - `Editable` edit/submit flow
  - `PinInput` typing across fields
  - `RadioCard`, `SegmentedControl`, `Switch`, `Slider`, `TagsInput`, `Combobox`, `Listbox` value changes
  - `Dialog`, `HoverCard`, `Menu`, `Popover`, `Tooltip`, `ToggleTip`, `Collapsible`, `Carousel`, `Steps` open/close or navigation behavior
  - `Toast` trigger path and rendered message
  - `RichTextEditor` toolbar action toggling editor state
- Add chart smoke tests that verify each chart wrapper mounts with sample data without runtime errors.
- Run `vitest` for unit coverage and Storybook test pass for the new stories after implementation.

## Assumptions And Defaults

- The wrapper surface should stay Chakra-first, not GOV.UK-reimagined; styling will use the repo’s existing tokens and wrapper conventions, but examples will remain visually close to Chakra docs.
- The implementation will not reproduce every Chakra doc example; each component gets a curated set of representative examples sourced from the docs.
- Story args will expose stable root props such as `size`, `variant`, `colorPalette`, orientation, selection mode, and similar scalar props, but not callback props.
- For simple components with no official multipart anatomy, the “same pattern” requirement is satisfied by exposing `Component.Root` as an alias of the default wrapper.
- The repo is allowed to add the minimum new dependencies needed for `RichTextEditor` and charts.
