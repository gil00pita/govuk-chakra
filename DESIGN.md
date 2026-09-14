---
name: GOV.UK Chakra
description: The implemented GOV.UK-flavoured design system for this React and Chakra UI component library.
colors:
  govuk-blue: '#1d70b8'
  govuk-link: '#1a65a6'
  govuk-link-hover: '#0e4d88'
  govuk-link-visited: '#54319f'
  govuk-text: '#0b0c0c'
  govuk-secondary-text: '#484949'
  govuk-border: '#cecece'
  govuk-light-grey: '#f3f3f3'
  govuk-white: '#ffffff'
  common-black: '#000000'
  govuk-focus-yellow: '#ffdd00'
  govuk-green: '#0f7a52'
  green-700: '#105840'
  green-800: '#09442d'
  govuk-red: '#ca3535'
  red-700: '#982828'
  brand-100: '#d2e2f1'
  brand-200: '#8eb8dc'
  brand-900: '#052c53'
  gray-900: '#191b1b'
  gray-800: '#262626'
  gray-600: '#3d3e3e'
typography:
  heading-xl:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(48px, 3rem)'
    fontWeight: 700
    lineHeight: 'max(50px, 3.125rem)'
  heading-l:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(36px, 2.25rem)'
    fontWeight: 700
    lineHeight: 'max(40px, 2.5rem)'
  heading-m:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(24px, 1.5rem)'
    fontWeight: 700
    lineHeight: 'max(30px, 1.875rem)'
  body:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(19px, 1.1875rem)'
    fontWeight: 400
    lineHeight: 'max(25px, 1.5625rem)'
  body-small:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(16px, 1rem)'
    fontWeight: 400
    lineHeight: 'max(20px, 1.25rem)'
  label:
    fontFamily: 'GDS Transport, arial, sans-serif'
    fontSize: 'max(19px, 1.1875rem)'
    fontWeight: 700
    lineHeight: 'max(25px, 1.5625rem)'
  mono:
    fontFamily: 'monospace'
rounded:
  none: '0'
  sm: '0'
  md: '0'
  lg: '0'
  tag: 'max(2px, 0.125rem)'
spacing:
  xs: 'max(4px, 0.25rem)'
  sm: 'max(8px, 0.5rem)'
  md: 'max(16px, 1rem)'
  lg: 'max(24px, 1.5rem)'
  xl: 'max(32px, 2rem)'
  2xl: 'max(48px, 3rem)'
  3xl: 'max(64px, 4rem)'
components:
  button-primary:
    backgroundColor: '{colors.govuk-green}'
    textColor: '{colors.govuk-white}'
    rounded: '{rounded.none}'
    padding: 'max(8px, 0.5rem) max(10px, 0.625rem) max(7px, 0.4375rem)'
  button-primary-hover:
    backgroundColor: '{colors.green-700}'
    textColor: '{colors.govuk-white}'
  button-secondary:
    backgroundColor: '{colors.govuk-light-grey}'
    textColor: '{colors.gray-900}'
    rounded: '{rounded.none}'
  button-error:
    backgroundColor: '{colors.govuk-red}'
    textColor: '{colors.govuk-white}'
    rounded: '{rounded.none}'
  button-focus:
    backgroundColor: '{colors.govuk-focus-yellow}'
    textColor: '{colors.govuk-text}'
  text-input:
    backgroundColor: 'transparent'
    textColor: '{colors.govuk-text}'
    rounded: '{rounded.none}'
    height: 'max(40px, 2.5rem)'
    padding: 'max(5px, 0.3125rem) max(12px, 0.75rem)'
  tag-blue:
    backgroundColor: '{colors.brand-100}'
    textColor: '{colors.brand-900}'
    typography: '{typography.body}'
    rounded: '{rounded.tag}'
    padding: 'max(2px, 0.125rem) max(8px, 0.5rem) max(3px, 0.1875rem)'
  card:
    backgroundColor: '{colors.govuk-white}'
    textColor: '{colors.govuk-text}'
    rounded: '{rounded.md}'
---

# Design System: GOV.UK Chakra

## Overview

This document records the existing implementation in `govuk-chakra`, a React component library built on Chakra UI v3. Its visual character is practical and restrained: strong headings, readable text, underlined links, square controls, visible borders, and explicit feedback for actions and errors. Colour primarily communicates identity, interaction, and status.

This is a repository-derived reference, not a statement that every component exactly reproduces the official GOV.UK Design System. Use the implemented theme and wrappers as the authority when extending this library. The YAML records selected reusable primitives, desktop typography, and light-mode component values; responsive and dark-mode behaviour is documented below. YAML names are portable documentation keys, not additional Chakra tokens.

**Key characteristics:**

- GDS Transport with Arial fallback for headings and body text.
- Blue identity and links; green primary actions; yellow focus treatment.
- Predominantly flat surfaces and square corners, with explicit component exceptions.
- Responsive type, labelled form controls, and readable status feedback.
- Semantic colour tokens with light and dark variants.

Primary sources: [theme configuration](src/theme/govUKTheme.ts), [palette](src/theme/colors.ts), [fonts](src/theme/fonts.ts), [type and spacing utilities](src/utils/px-to-rem.ts), and [components](src/components). Storybook stories beside each component illustrate supported compositions. Values here were inspected in source; this document does not certify rendered accessibility or visual parity.

## Colors

### Identity and interaction

| Chakra token                           | Role                                                                                   |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| `govuk.blue` / `primary.500`           | Brand blue; header, information emphasis, and selected surfaces.                       |
| `fg.link` / `link`                     | Normal text links; light mode resolves to `primary.600`.                               |
| `link.hover`                           | Semantic hover colour; individual wrappers may specify palette values directly.        |
| `link.visited`                         | Available visited-link colour; not automatically applied by every link component.      |
| `focus` / `border.focus`               | Yellow keyboard focus treatment.                                                       |
| `focus.text`                           | Dark foreground on yellow focus backgrounds in both modes.                             |
| `success` / `govuk.green`              | Success feedback; `green.500` also supplies the primary button and confirmation panel. |
| `danger` / `fg.error` / `border.error` | Error messaging and destructive-action emphasis, with distinct dark mappings.          |

**The Action Colour Rule.** The theme's semantic `primary` is blue, but the `Button` component's `primary` variant is green. Preserve this distinction.

### Neutrals and dark mode

Use semantic names in application surfaces so the existing theme can adapt. Do not replace them with light-mode hex values copied from the frontmatter.

| Semantic token             | Light-mode source     | Dark-mode source |
| -------------------------- | --------------------- | ---------------- |
| `primary`                  | `govuk.blue`          | `govuk.darkBlue` |
| `bg`                       | `govuk.white`         | `gray.900`       |
| `bg.muted`, `bg.subtle`    | `gray.50`             | `gray.800`       |
| `bg.panel`                 | `common.white`        | `gray.800`       |
| `fg`                       | `govuk.text`          | `gray.50`        |
| `fg.muted`                 | `govuk.secondaryText` | `gray.100/80`    |
| `border`                   | `govuk.border`        | `gray.600`       |
| `border.input`             | `common.black`        | `common.white`   |
| `fg.link`, `link`          | `primary.600`         | `primary.200`    |
| `fg.error`, `border.error` | `red.500`             | `red.400`        |
| `danger`                   | `govuk.red`           | `red.300`        |
| `success`                  | `govuk.green`         | `green.300`      |
| `focus`, `border.focus`    | `yellow.500`          | `yellow.500`     |

The palette includes brand, brown, yellow, teal, red, green, gray, orange, magenta, purple, and voodoo ramps (50–950), plus three `dot` colours. `brand`, `blue`, and `primary` share a ramp; `gray` and `grey` are aliases. Use the [palette source](src/theme/colors.ts) for the full scales, especially tag and chart variants.

Dark-mode tokens exist, but wrappers also contain fixed palette colours and local overrides. Review the actual component states when changing contrast-sensitive combinations.

## Typography

Heading and body stacks are `GDS Transport, arial, sans-serif`; the theme's code stack is `monospace`. The app stylesheet has a separate expanded monospace fallback stack. No `@font-face` declaration was found in the inspected source: naming GDS Transport does not load it, so a consuming app must supply the font if it needs that face.

Use numeric GOV.UK sizes through the library's `Heading` and `Text` wrappers. Numeric headings use weight 700; text defaults to 400. Select semantic HTML independently from visual size, for example `<Heading as="h1" size={48}>`.

| Numeric scale point | Below `md`: size / line height | From `md`: size / line height | Typical role                       |
| ------------------- | ------------------------------ | ----------------------------- | ---------------------------------- |
| 80                  | 53 / 55                        | 80 / 80                       | Exceptional display text           |
| 48                  | 32 / 35                        | 48 / 50                       | Largest page heading               |
| 36                  | 27 / 30                        | 36 / 40                       | Large heading                      |
| 27                  | 21 / 25                        | 27 / 30                       | Intermediate heading; dialog title |
| 24                  | 21 / 25                        | 24 / 30                       | Section heading or large body text |
| 19                  | 19 / 25                        | 19 / 25                       | Standard body, hints, labels, tags |
| 16                  | 16 / 20                        | 16 / 20                       | Small body and default input text  |

Table measurements are nominal pixels. The source uses `pxToRem(n)`, which returns `max(npx, n/16rem)` to preserve the pixel minimum while allowing larger root-font settings. The font-size utility also exposes 14, but 14 is not a numeric responsive scale point supported by these wrappers.

**Implementation distinction:** `Heading` and `Text` switch at `md` (640px). The separate `govukFont()` helper currently switches at `sm` (480px), despite its surrounding comment referring to 640px. Labels using this helper can therefore resize earlier. String sizes such as `"md"` use Chakra sizing rather than the numeric GOV.UK scale. The body's global font size is 19 through the utility; it does not independently set the full responsive body line-height pair.

## Layout

Compose with Chakra layout primitives and the existing component containers. Header and footer containers have a maximum width of 1200px, centred horizontally, with nominal 15px side padding below `md` and 30px from `md`. The header band is nominally 60px high. These are shell conventions, not a universal width enforced on every component or page.

| Breakpoint | Minimum width |
| ---------- | ------------- |
| `sm`       | 480px         |
| `md`       | 640px         |
| `lg`       | 1024px        |
| `xl`       | 1280px        |
| `2xl`      | 1536px        |

`CardGroup` defaults to one column, two from `md`, and Chakra `gap={4}`. Service navigation changes from a mobile composition to a horizontal arrangement at `md`. Summary-list rows use nominal 15px vertical padding on smaller screens and 20px from `md`.

The exported `govukSpacing` utility provides the seven values in the frontmatter. It is a JavaScript utility object, not a replacement for Chakra's spacing token scale. The system merges Chakra `defaultConfig`, so numeric style props such as `gap={4}` still use Chakra tokens. Existing components also use deliberate 5, 10, 12, 15, 20, and 30px dimensions through `pxToRem`; do not round these away to force every detail onto the utility scale.

Use content-driven widths for form fields. `Textinput` defaults to full width and supports character-oriented width variants: `30`, `20`, `10`, `5`, `4`, `3`, and `2`, mapped to maximum widths of 59ex, 41ex, 23ex, 10.8ex, 9ex, 7.2ex, and 5.4ex respectively.

## Elevation & Depth

Most everyday surfaces are defined by solid fills and borders. Buttons use a short lower-edge shadow to suggest an actionable control. Overlay components may use Chakra elevation tokens; the design is not universally shadow-free.

| Treatment                   | Implemented value or token                                    |
| --------------------------- | ------------------------------------------------------------- |
| Primary button lower edge   | `0 2px 0 {colors.green.800}`                                  |
| Secondary button lower edge | `0 2px 0 {colors.gray.200}`                                   |
| Error button lower edge     | `0 2px 0 {colors.red.800}`                                    |
| Inverse button lower edge   | `0 2px 0 {colors.blue.700}`                                   |
| Standard field focus        | `0 0 0 3px {colors.border.input}` plus a yellow outline       |
| Inset control focus         | `inset 0 0 0 2px {colors.border.input}` plus a yellow outline |
| Dialog                      | Chakra `xl` shadow and `blackAlpha.600` backdrop              |

Focus shadows communicate interaction state, not decorative elevation. Dialog motion uses inherited Chakra tokens: backdrop opening `slow`, backdrop closing `moderate`, content opening `moderate`, and content closing `faster`. No independent global motion scale is defined in the GOV.UK theme; preserve recipe-specific behaviour rather than inventing timing values.

## Shapes

The theme overrides radii `none`, `sm`, `md`, and `lg` to zero. Buttons, text inputs, and dialogs explicitly use square corners. This does not remove every radius inherited from Chakra or every local exception: `Tag`, for example, deliberately uses a nominal 2px radius, while circular controls and indicators retain their own geometry.

Borders distinguish hierarchy: cards and table separators use 1px strokes, text inputs and dialogs use nominal 2px strokes, and error summaries and notification banners use 5px strokes. Standard field focus uses a nominal 3px yellow outline with a 3px offset; inset focus uses zero offset. Keep these outlines visible outside containing surfaces.

## Components

### Integration and source precedence

`govUKThemeSystem` is the constructed Chakra system; `govUKTheme` is the configuration object. The system merges `defaultConfig`, registers the local recipes, and uses the `--govuk-` CSS variable prefix. Values not overridden here may come from Chakra defaults.

Within this repository, the established provider composition is:

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import { govUKThemeSystem } from '@/theme'
import { Button, Heading, Text } from '@/components'

export function Example() {
  return (
    <ChakraProvider value={govUKThemeSystem}>
      <main>
        <Heading as="h1" size={48}>
          Apply for a service
        </Heading>
        <Text fontSize={19}>Check what you need before you start.</Text>
        <Button startButton>Start now</Button>
      </main>
    </ChakraProvider>
  )
}
```

`GOVUKProvider` is a thin wrapper around `ChakraProvider` and forwards its props; it does not inject a system automatically. Pass `value={govUKThemeSystem}` when using it. Configure the colour-mode provider separately when required, following [Storybook's setup](.storybook/preview.tsx). For published usage, the package exposes `govuk-chakra`, `/theme`, `/provider`, `/utils`, `/charts`, and `/editor` entries; local `@/` imports above are repository aliases.

### Buttons

Use the library `Button`, whose default variant is `primary`. Text is 1.1875rem, normal weight; `startButton` makes it bold and appends the existing decorative SVG chevron. Preserve the asymmetric vertical padding recorded in the frontmatter.

| Variant     | Default treatment                                 | Hover treatment                                             |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| `primary`   | Green fill, white text, green lower edge          | `green.700` fill                                            |
| `secondary` | Light-gray fill, dark text, gray lower edge       | `gray.100`; separate dark override                          |
| `error`     | `border.error` fill, white text, red lower edge   | `red.700` fill                                              |
| `inverse`   | `bg` fill, `blue.500` text, blue lower edge       | `blue.100` fill and `blue.700` text; separate dark override |
| `plain`     | Transparent fill, `fg` text                       | Gray fill and text; separate dark override                  |
| `link`      | Transparent fill, blue underlined text, no shadow | Darker blue text                                            |

All variants apply yellow fill and dark text on focus, including hover-plus-focus. Disabled behaviour otherwise comes from Chakra and any consumer props; this wrapper does not define a separate disabled variant.

### Links and navigation

`Link` is underlined by default with a nominal 1px line and a 0.1578em underline offset. Hover thickens the underline to nominal 3px. Focus adds a yellow background and 3px yellow outline with zero offset. `noStyle` changes the resting colour and decoration but retains interactive styling.

The generic `Link` deliberately keeps visited links at `fg.link`, even though `link.visited` exists. Linked cards can use the visited token. Do not infer state behaviour from token names alone.

Use `GOVUKHeader`, `GOVUKFooter`, `ServiceNavigation`, `Breadcrumbs`, `BackLink`, `SkipLink`, and `Pagination` for their established roles. The header is blue in this implementation. Reuse the supplied GOV.UK logo, crown, crest, and OGL components where those identity elements are required. Keep navigation semantics, accessible labels, current-page indicators, and mobile toggle behaviour supplied by the wrappers.

### Inputs and forms

`Textinput` provides a visible bold label, optional muted hint, optional bold error text prefixed with `Error:`, and a transparent square input. Input text defaults to scale point 16, with a nominal 40px height, 2px border, 12px horizontal padding, and 5px vertical padding. Field parts have nominal 8px gaps.

Errors set the invalid state and error border; disabled inputs use `fg.disabled` and `bg.disabled` at full opacity with a not-allowed cursor. IDs connect label, hint, error, and input, including `aria-describedby`. Preserve these relationships when using the compound API.

Reuse `getFieldFocusStyles()` or `getInsetFocusStyles()` for matching controls. Use existing `Textarea`, `Select`, `Checkbox`, `Radio`, `Fieldset`, `DateInput`, `DatePicker`, and upload components for their supported behaviours rather than treating every control as a restyled text input.

### Cards and structured data

`Card.Root` uses `bg`, a 1px semantic border, and hidden overflow. `Card.Header` uses numeric heading size 24 with a local line-height override of 1.35. Body text uses Chakra's string `"md"` size, not numeric GOV.UK 19. Padding is inherited from Chakra card slots unless overridden.

A root with `href` and `linkCard` becomes a link surface: hover uses the semantic primary fill with white content; focus combines a dark-blue surface and yellow header highlight. Do not add interactive descendants inside a whole-card link. The current `CardGroup` helper passes link props to `Card.Header` rather than `Card.Root`; use an explicit linked `Card.Root` when whole-card navigation is required.

`Table` defaults to numeric text size 16 with bold headers and horizontal separators; size and striped options alter cell padding. `SummaryList` supplies labelled key/value rows and actions, including a bordered summary-card composition. Use these structures for comparable data and review screens.

### Tags and feedback

`Tag` is an inline status label at numeric size 19 with a small corner radius. It defaults to normal weight and preserved case; `bold` and `uppercase` are explicit options. Variants are gray, green, teal, blue, purple, magenta, red, orange, and yellow (`grey` aliases gray). Most coloured variants pair ramp 100 backgrounds with 900 text and reverse them in dark mode; yellow uses 200/950. Retain text labels so colour is not the only status cue.

`ErrorSummary` uses a 5px error border and linked error messages; pair it with field-level errors. `NotificationBanner` has a 5px border and coloured header, with blue, green, and red treatments for its variants. `Panel` provides centred white text on green for confirmations, with a size-36 title and size-24 body. Mobile padding is nominally 24px vertically and 16px horizontally, increasing to 36px and 24px from `md`.

Additional service patterns include `PhaseBanner`, `CookieBanner`, `WarningText`, `InsetText`, and `TaskList`. Prefer their supplied compositions over approximations built from generic alerts.

### Overlays and extended controls

`Dialog` uses a square `bg.panel` surface, a nominal 2px `border.input` stroke, inherited elevation, and 24px horizontal content padding. Title typography uses point 27, body 19, and description 16. Its recipe supports placement, scrolling, and size variants. Preserve Chakra's interaction primitives when composing dialogs and other overlays.

The library also registers recipes for menus, popovers, tooltips, comboboxes, calendars, switches, sliders, tabs-related controls, progress, skeletons, and other extended components. Charts and the rich-text editor have dedicated package entries. Consult each recipe and story for its states; do not assume all extended controls share the button's colours or geometry.

## Do's and Don'ts

### Do

- **Do** use the local wrappers and registered recipes before constructing replacements.
- **Do** use semantic colours for text, surfaces, borders, and errors, checking component overrides in both modes.
- **Do** keep primary buttons green and identity/navigation blue.
- **Do** use numeric GOV.UK typography props when the responsive scale is intended.
- **Do** preserve yellow focus treatments, visible labels, error descriptions, and semantic HTML.
- **Do** retain the repo's precise spacing and small component-specific shape exceptions.
- **Do** check source and adjacent stories when an implementation detail is not specified here.

### Don'ts

- **Don't** assume the config object is the constructed Chakra system or that the provider selects it automatically.
- **Don't** assume naming GDS Transport loads the font.
- **Don't** equate Chakra string sizes with numeric GOV.UK scale points.
- **Don't** apply rounded cards, pill buttons, or decorative shadows as a new default.
- **Don't** remove link underlines, focus indicators, or textual status and error cues.
- **Don't** assume every component uses the semantic visited colour or identical dark-mode state mappings.
- **Don't** describe this source extraction as proof of accessibility conformance or exact official GOV.UK parity.
