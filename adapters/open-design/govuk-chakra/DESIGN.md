---
category: Government & Public Services
surface: web
name: GOV.UK Chakra
description: The implemented GOV.UK-flavoured design system for this React and Chakra UI component library.
colors:
  page-background: '#ffffff'
  foreground: '#0b0c0c'
  primary-brand: '#1d70b8'
  border: '#cecece'
  surface: '#ffffff'
  muted: '#484949'
  success: '#0f7a52'
  danger: '#ca3535'
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

Primary sources: [theme configuration](https://github.com/gil00pita/govuk-chakra/blob/main/src/theme/govUKTheme.ts), [palette](https://github.com/gil00pita/govuk-chakra/blob/main/src/theme/colors.ts), [fonts](https://github.com/gil00pita/govuk-chakra/blob/main/src/theme/fonts.ts), [type and spacing utilities](https://github.com/gil00pita/govuk-chakra/blob/main/src/utils/px-to-rem.ts), and [components](https://github.com/gil00pita/govuk-chakra/blob/main/src/components). Storybook stories beside each component illustrate supported compositions. Values here were inspected in source; this document does not certify rendered accessibility or visual parity.

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

The palette includes brand, brown, yellow, teal, red, green, gray, orange, magenta, purple, and voodoo ramps (50–950), plus three `dot` colours. `brand`, `blue`, and `primary` share a ramp; `gray` and `grey` are aliases. Use the [palette source](https://github.com/gil00pita/govuk-chakra/blob/main/src/theme/colors.ts) for the full scales, especially tag and chart variants.

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
import { govUKThemeSystem } from 'govuk-chakra/theme'
import { Button, Heading, Text } from 'govuk-chakra'

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

`GOVUKProvider` is a thin wrapper around `ChakraProvider` and forwards its props; it does not inject a system automatically. Pass `value={govUKThemeSystem}` when using it. Configure the colour-mode provider separately when required, following [Storybook's setup](https://github.com/gil00pita/govuk-chakra/blob/main/.storybook/preview.tsx). For published usage, the package exposes `govuk-chakra`, `/theme`, `/provider`, `/utils`, `/charts`, and `/editor` entries; the example above uses published package imports.

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

## Open Design integration

This is a generated, self-contained export of the repository DESIGN.md and its 30 user-centred patterns. Import this entire document as DESIGN.md content. Importing Markdown supplies design guidance; it does not install React dependencies or implement backend services.

Use the existing govuk-chakra components with govUKThemeSystem. Do not replace them with Open Design's default components or a new UI kit. Preserve the validation, accessibility and service safeguards below. Install the package and its required peers in the generated project; use the integration example above.

The companion tokens.css provides Open Design semantic aliases for previews. The React theme and component recipes remain authoritative. Blue is the brand accent; primary action buttons are green. Do not recolour primary buttons blue merely because --accent is blue. Links, focus treatments and dark mode must follow the original recipes. CSS aliases alone cannot reproduce the component system.

The adapter uses square radii and flat surfaces. Its section spacing aliases use the existing 48/32/24px spacing steps. --radius-pill is reserved for circular controls. Motion aliases use Chakra's inherited fast/moderate durations and ease-out easing; respect reduced motion. Do not apply tokens.css globally over the Chakra theme. GDS Transport font files are not bundled by this export; retain the documented font fallback and licensing requirements.

## User-centred patterns

Patterns describe service decisions and multi-component journeys. Preserve their intent and safeguards instead of treating them as visual templates. The examples use local demo state; production integration responsibilities are recorded for each pattern.

### Addresses

Help users provide an address using separate fields, an address lookup with a manual fallback, or a textarea chosen for the service’s data needs.


#### When to use

- Use whenever an address is genuinely required to deliver the service.
- Choose the input approach according to the countries covered and whether the service needs structured address parts.

#### When not to use

- Do not force international addresses into a UK-only structure or lookup.
- Do not collect county or other address parts unless the service uses them.

#### Journey and implementation rules

- Use separate fields when supported countries share a workable structure; keep address line 2 and county optional unless there is a proven need.
- For a UK address lookup, accept flexible postcode formatting and always provide a clear manual-entry route.
- Use a textarea with autocomplete=street-address only when free-form addresses are usable and structured parts are unnecessary.

#### Accessibility and service safeguards

- Apply the correct autocomplete purpose to each address field and associate every hint and error with its input.
- Make lookup results and the manual alternative keyboard and screen-reader accessible, including when JavaScript fails.

#### Demo and production responsibilities

The example uses manual entry. Connect a production lookup only if appropriate for the countries served; retain manual entry if lookup fails.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/addresses/) when adapting this example for a live service.

### Bank details

Ask for bank or building-society account details in familiar separate fields, accepting the formats people normally use.


#### When to use

- Use when the service must pay money into or collect money from a UK bank or building-society account.
- Collect only the fields needed for the transaction and applicable validation.

#### When not to use

- Do not ask for bank details before the user understands why they are needed and how they will be protected.
- Do not confuse bank details with payment-card details.

#### Journey and implementation rules

- Use separate fields for name on the account, sort code, account number and an optional building-society roll number.
- Use text inputs with numeric input mode where helpful; do not use number inputs because leading zeroes and spacing matter.
- Accept common separators and normalise input safely rather than demanding one visual format.

#### Accessibility and service safeguards

- Keep every label visible and associate format hints and specific errors using aria-describedby.
- Do not prevent pasting, password-manager assistance or assistive input methods.

#### Demo and production responsibilities

The form demonstrates input and formatting only. Account checks, transaction authorisation and protected transport belong to the payment service. Never log submitted account details.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/bank-details/) when adapting this example for a live service.

### Check a service is suitable

Ask a short sequence of simple questions so users can learn early whether a service is suitable, what it costs or what outcome they may receive.


#### When to use

- Use when eligibility, cost, timescale or likely outcome is too complicated to explain clearly on the start page.
- Help users find out whether the service meets their need before collecting application details.

#### When not to use

- Do not build a checker when concise start-page content can explain the criteria.
- Do not disguise policy decisions or deny users a route to understand and challenge an outcome.

#### Journey and implementation rules

- Begin with an introduction, ask one simple question per page and calculate the relevant result from the answers.
- End every branch with a clear results page that explains suitability and what the user can do next.
- Put fixed rules such as universal age limits or deadlines on the start page as well as in the checker.

#### Accessibility and service safeguards

- Use semantic question pages with visible legends or labels and preserve answers when users go back.
- Write result pages in plain language and provide an accessible alternative when the automated decision cannot cover a user’s situation.

#### Demo and production responsibilities

The branching criteria are fictional demonstration rules. Replace them with approved policy and provide a human route for cases the checker cannot resolve.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/) when adapting this example for a live service.

### Check answers

Let users review and change the information they provided before they submit a transaction.


#### When to use

- Use before a final submission when users need to confirm that collected information is correct.
- Group answers into meaningful sections that match the journey.

#### When not to use

- Do not add a check page to a very short, low-risk interaction unless research shows it helps.
- Do not make users restart the journey to correct one answer.

#### Journey and implementation rules

- Use Summary list rows for question-and-answer pairs and add a specific change link for every editable answer.
- Change links must return users to the check page after editing and retain other answers.
- Make the final action explicit and explain any declaration, legal effect or next step before the button.

#### Accessibility and service safeguards

- Append visually hidden context to repeated change links so each has a unique accessible name.
- Render answers as text rather than disabled form controls and preserve a logical heading hierarchy.

#### Demo and production responsibilities

Edits and submission are held in React state. A production service must save changes durably, return to review, and only show confirmation after the server accepts the transaction.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/check-answers/) when adapting this example for a live service.

### Complete multiple tasks

Use a task-list journey to show which tasks are required, their helpful order and each task’s current status.


#### When to use

- Use for transactions with several tasks that users may complete over more than one session or in a flexible order.
- Use statuses when users need to understand what is complete, incomplete or not yet available.

#### When not to use

- Do not use for a short linear service where a series of question pages is clearer.
- Do not use the GOV.UK content-site Step by step navigation pattern inside a transaction.

#### Journey and implementation rules

- Group tasks under meaningful headings and order them according to dependencies and user needs.
- Use links only for tasks the user can currently act on and show accurate, consistently worded status text.
- Return to the task list after completing a task and derive status from saved service data rather than presentation state.

#### Accessibility and service safeguards

- Connect every task link to its status with the component’s described-by relationship.
- Do not rely on tag colour to communicate status and ensure non-link tasks explain why they are unavailable.

#### Demo and production responsibilities

Task state is held in memory for this example. Production statuses must come from saved answers and dependency rules, not from clicks or hard-coded visual labels.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) when adapting this example for a live service.

### Confirm a phone number

Check that a user currently has access to a mobile number by sending a time-limited security code in a text message.


#### When to use

- Use when access to a particular mobile number is necessary for a proportionate service or account security need.
- Provide a resend and correction route for delayed messages or an incorrect number.

#### When not to use

- Do not treat control of a phone number as proof of a person’s identity.
- Do not make text-message confirmation the only route when users may not have mobile access or reliable signal.

#### Journey and implementation rules

- Send a short single-use code, set an expiry and limit attempts and resend abuse without locking legitimate users out indefinitely.
- Use a type=text field with inputmode=numeric, autocomplete=one-time-code and enough width and letter spacing for the code.
- Explain the destination number safely, when the code expires, how to resend it and how to change the number.

#### Accessibility and service safeguards

- Do not split the code into one input per character; one labelled field supports paste and assistive input more reliably.
- Announce resend outcomes and errors clearly without starting an inaccessible visual-only countdown.

#### Demo and production responsibilities

No SMS is sent. Codes, expiry, attempt limits and resend behaviour are simulations for exploring the journey. Production checks must run on the server with single-use tokens and abuse controls.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/) when adapting this example for a live service.

### Confirm an email address

Check that a user currently has access to an email account using a carefully designed confirmation link or code loop.


#### When to use

- Use only when critical functionality depends on email or a mistyped address could expose sensitive information to someone else.
- Choose a blocking or non-blocking loop according to the risk and the user’s need to continue.

#### When not to use

- Do not confirm email by default for low-impact messages or receipts.
- Do not treat a confirmed address as proof of identity; it only proves access at the time of confirmation.

#### Journey and implementation rules

- Make confirmation links single-use and time-limited, and expire them when superseded or when the account email changes.
- Let users resend the message and change a mistyped address without losing journey data.
- Explain that the user must switch to email and return, and design the activation landing page for both same-device and cross-device use.

#### Accessibility and service safeguards

- Write a clear email subject and link purpose, and do not rely on a long raw URL as the only activation route.
- Provide support or an alternative path for users who cannot access email and make status messages available to assistive technology.

#### Demo and production responsibilities

No email is sent. Confirmation is simulated; a real service needs single-use, expiring tokens, cross-device handling, safe destination changes and server-side status.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirm-an-email-address/) when adapting this example for a live service.

### Confirmation pages

Tell users that they have completed a transaction, give them any reference and explain what will happen next.


#### When to use

- Use immediately after a user successfully completes a transaction.
- Give a reference when users or support staff will need it later.

#### When not to use

- Do not use a success page before the service has durably accepted the transaction.
- Do not rely on email or another later message as the only confirmation.

#### Journey and implementation rules

- Use a Confirmation panel with a clear completed-action heading and the reference number when applicable.
- Below the panel, explain what happens next, expected timescales, any action the user must take and how confirmation will be delivered.
- Prevent accidental duplicate submissions on refresh and provide a relevant feedback link.

#### Accessibility and service safeguards

- Make the success heading the page H1 and present the reference as selectable text rather than only in an image.
- Do not communicate success through the green panel colour alone; the text must state the outcome.

#### Demo and production responsibilities

The reference and outcome are illustrative. In production show this page only after durable acceptance, prevent duplicate submission and state actual next steps and timescales.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/confirmation-pages/) when adapting this example for a live service.

### Contact a department or service team

Give users complete, contextual contact information at the point they are likely to need help.


#### When to use

- Use wherever research shows users need to contact the responsible team during or after a service journey.
- Offer the contact channels the team can reliably support.

#### When not to use

- Do not hide essential contact routes behind vague help links or a channel users may not be able to access.
- Do not publish contact details without ownership, opening-hours and maintenance arrangements.

#### Journey and implementation rules

- For phone support, include the number, opening times, closures, any textphone or Welsh-language route and a call-charges link where relevant.
- For email or webchat, state expected response or availability and what information users should prepare.
- Use a specific heading such as “Get help with your application” and keep the information close to the task context.

#### Accessibility and service safeguards

- Provide more than one usable channel where possible and explain relay, textphone or other accessibility support.
- Use readable text and descriptive links rather than presenting contact details only in images, scripts or icons.

#### Demo and production responsibilities

Contact details and service times are illustrative. Confirm ownership, staffed hours, accessible alternatives and response expectations before publishing real contact information.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/) when adapting this example for a live service.

### Cookies page

Explain every cookie the service sets and let users review and change consent for categories of non-essential cookies.


#### When to use

- Provide a cookies page whenever the service stores cookies or similar data on a user’s device.
- Let users change optional-cookie preferences after responding to the Cookie banner.

#### When not to use

- Do not present strictly necessary cookies as optional or set non-essential cookies before a valid consent choice.
- Do not use generic copied cookie lists that differ from what the deployed service actually sets.

#### Journey and implementation rules

- Explain what cookies are, why the service uses each category and that essential cookies do not require consent.
- For each cookie list its name, purpose and expiry, and keep the page synchronised with production behaviour and third parties.
- Provide equivalent accept and reject controls for optional categories, store the choice and confirm when it changes.

#### Accessibility and service safeguards

- Use properly captioned tables with scoped headers and real form controls with a fieldset and legend for each choice group.
- Make saving preferences work without JavaScript and expose the outcome in a clear notification.

#### Demo and production responsibilities

Preferences in this example do not configure trackers or set cookies. Production must describe its actual cookie inventory, store the preference, gate optional scripts before consent, and support changing preferences without JavaScript.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/cookies-page/) when adapting this example for a live service.

### Create a username

Help users create or use a memorable unique username only after establishing that the service needs accounts.


#### When to use

- Prefer an email address as the username when users have one and the service already needs it.
- Use a custom username only where user-generated content needs a public attribution that can protect the person’s identity.

#### When not to use

- Do not ask users to invent a username merely because an account system supports one.
- Do not exclude users without email; research and provide a supported alternative.

#### Journey and implementation rules

- Check uniqueness, suggest an available alternative when useful and ignore letter case during sign-in.
- Let users retrieve or reset a forgotten username and change their email address or username later.
- Explain any permitted characters before entry and avoid arbitrary rules that make a username difficult to remember.

#### Accessibility and service safeguards

- Use one visible labelled text field and announce availability results without relying on colour or client-side JavaScript.
- Keep suggestions understandable and editable instead of silently assigning an identifier.

#### Demo and production responsibilities

Availability checks in the demo do not reserve an identifier. The identity service must enforce uniqueness, case-insensitive sign-in, recovery and safe identifier changes.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/create-a-username/) when adapting this example for a live service.

### Create accounts

Create an account only when users need recurring access to their service data, and defer account creation until it becomes necessary.


#### When to use

- Use when users need to regularly access, manage or update information held by the service.
- Let users complete as much of the journey as possible before requiring the account.

#### When not to use

- Do not create accounts when a usable one-off service can work without them.
- Do not use an account merely to let users check one transaction when a safely delivered reference can meet the need.

#### Journey and implementation rules

- Call the action “Create an account” and clearly separate account creation from sign-in.
- Use action labels such as “Create a username” and “Create a password” so users know they are setting new credentials.
- Design recovery, email or phone changes, account closure, data retention and fraud controls as part of the journey.

#### Accessibility and service safeguards

- Do not make account recovery depend on one inaccessible channel and allow password managers and paste.
- Preserve entered journey data if account creation interrupts an in-progress service.

#### Demo and production responsibilities

The account flow is a prototype, not authentication. Integrate an identity service, save interrupted journey data, and implement recovery, closure and retention before deployment.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/create-accounts/) when adapting this example for a live service.

### Dates

Help users provide or select a date using an interaction suited to whether the date is memorable, copied from a document, approximate or selected from known options.


#### When to use

- Use whenever a service asks users to provide or select a date.
- Use Date input for memorable dates such as a date of birth or a date copied from a document.

#### When not to use

- Do not use a calendar picker for dates users know or can copy more easily by typing.
- Do not require day-level precision when the service only needs a month, year or approximate date.

#### Journey and implementation rules

- State the expected precision and show a relevant example without pre-filling an answer.
- Store and validate the date as separate semantic values or a safe date type, not by assuming the display string is unambiguous.
- Use radios or another simple selection control when users choose from a small known set of dates.

#### Accessibility and service safeguards

- Group day, month and year controls with a fieldset, legend and a shared hint.
- Report which part of a date is invalid and preserve all values when re-rendering errors.

#### Demo and production responsibilities

Validate actual calendar dates, not just numeric ranges. Use a server-side date representation that does not shift a civil date across time zones.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/dates/) when adapting this example for a live service.

### Email addresses

Ask for an email address in one field, explain why it is needed and accept the broad range of valid addresses users may have.


#### When to use

- Use whenever the service genuinely needs to capture an email address.
- Explain the purpose, especially when it will be used for receipts, updates or account recovery.

#### When not to use

- Do not assume every user has reliable access to email when another channel can meet the need.
- Do not add a confirmation loop unless the separate Confirm an email address pattern’s high-impact conditions apply.

#### Journey and implementation rules

- Use a single type=email text input with autocomplete=email and spellcheck disabled.
- Accept valid address characters and avoid validation rules that reject uncommon but valid domains or formats.
- Let users paste and correct the address; do not ask them to type it twice.

#### Accessibility and service safeguards

- Use a visible label and connect the purpose hint and any specific error to the input.
- Do not rely on browser-native validation messages; use the service’s accessible validation flow.

#### Demo and production responsibilities

Client-side checks are illustrative and deliberately permissive. Production validation must accept valid unusual addresses and offer another channel when possible.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/email-addresses/) when adapting this example for a live service.

### Equality information

Collect optional equality information consistently for monitoring and public-sector equality work, separately from operational questions.


#### When to use

- Use the harmonised standards when collecting equality information to monitor access, representation or outcomes.
- Explain why the questions are separate, how answers will be used and that answering is optional.

#### When not to use

- Do not use this monitoring pattern for operational decisions or where legislation requires information to be asked differently.
- Do not make equality questions a condition of completing the service.

#### Journey and implementation rules

- For a one-off service, place the optional questions after check answers and before confirmation, preceded by an explanation page.
- Use the current harmonised question wording and response options; review the official page rather than recreating categories from memory.
- Protect sensitive responses, minimise access and define retention and analysis purposes before collection.

#### Accessibility and service safeguards

- Use fieldsets and legends for every response group and include inclusive options such as a preference not to answer where guidance specifies it.
- Test language and response options with affected groups and ensure conditional follow-up controls work without excluding assistive-technology users.

#### Demo and production responsibilities

This example covers an optional introduction, an optional date-of-birth question and skip routes. Blank answers are accepted; partially entered dates receive specific errors. It does not invent monitoring categories. Add only the current harmonised questions relevant to the agreed monitoring purpose, with appropriate handling of sensitive answers.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/equality-information/) when adapting this example for a live service.

### Exit a page quickly

Provide a rapid exit action, an accessible secondary route and supporting safety content for sensitive services where discovery could put a user at risk.


#### When to use

- Use when service information could expose a user to abuse, retaliation, stalking or another credible safety risk.
- Design the component together with an interruption page and online-safety content.

#### When not to use

- Do not present the pattern as a guarantee that browser history, network activity or device monitoring is hidden.
- For a standalone content page, follow the current component guidance to decide whether the Exit this page component alone is more appropriate.

#### Journey and implementation rules

- Choose a fast neutral external destination, use the Exit this page component and add its secondary hidden link for assistive-technology users.
- Provide the documented loading overlay and ordinary-link fallback, and consider clearing sensitive service session data before redirecting.
- Create an interruption page explaining the exit and a separate safety page; test both with people who face the identified risk.

#### Accessibility and service safeguards

- Place the control predictably near the start of service pages and make every activation route keyboard and screen-reader operable.
- Do not delay navigation with confirmation, animation or analytics and do not depend on JavaScript for the basic exit.

#### Demo and production responsibilities

There is no exported ExitThisPage component. This composition uses existing links and buttons; it is not a complete replacement for the official component. Review loading behaviour, hidden link, keyboard routes and session clearing with specialist user research. Navigation does not erase browser history, network records or device monitoring.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/) when adapting this example for a live service.

### Interruption pages

Pause a journey only when users must understand unusually important information or confirm a significant consequence before continuing.


#### When to use

- Use when the user must notice information that materially changes whether or how they continue.
- Use when a potentially surprising answer needs an explicit confirmation before a high-impact action.

#### When not to use

- Do not interrupt routine journeys for ordinary guidance, marketing, reassurance or information that can appear at the point of need.
- Do not use interruption styling as a generic visual emphasis treatment.

#### Journey and implementation rules

- State the issue as the page heading, show the relevant value or consequence and provide one clear primary continuation action.
- Offer a plainly worded secondary route to go back or correct the information.
- Use the official interruption Panel variant and inverse controls without inventing new colours or urgency levels.

#### Accessibility and service safeguards

- Keep both decisions keyboard accessible with descriptive labels that state their consequences.
- Do not rely on the panel colour to communicate importance and do not trap focus or block the browser back action.

#### Demo and production responsibilities

The local Panel has no dedicated interruption variant. The example composes its existing colour props with inverse controls. Confirm the consequence warrants an interruption and use tested production copy.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/interruption-pages/) when adapting this example for a live service.

### Names

Ask for a person’s name only when needed, using the fewest fields and accepting the characters and structures real names require.


#### When to use

- Use when a person’s name is necessary to deliver the service.
- Prefer one full-name field unless the service has a proven reason to address or process name parts separately.

#### When not to use

- Do not collect titles, middle names, previous names or separate name parts by default.
- Do not use a name as proof of identity or assume it is unique or permanent.

#### Journey and implementation rules

- Make fields long enough for the population using the service and support letters, diacritics, numbers, spaces, apostrophes and other needed symbols.
- Use autocomplete=name for a full name, or the appropriate name-part values only when separate fields are justified.
- Avoid over-validating capitalisation, length or word count; store the value without silently rewriting it.

#### Accessibility and service safeguards

- Keep the label visible and do not encode assumptions about name order in placeholder text.
- Explain precisely whose name is requested when a user may act for another person.

#### Demo and production responsibilities

The example requires a value without restricting name structure, script, punctuation or word count. Do not silently rewrite the submitted name.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/names/) when adapting this example for a live service.

### National Insurance numbers

Ask for a National Insurance number in one short text field, helping users find it and accepting common spacing and letter case.


#### When to use

- Use whenever the service has a legitimate need for a National Insurance number.
- Tell users where they can find it and give a non-personal example of the expected structure.

#### When not to use

- Never use a National Insurance number to verify a person’s identity.
- Do not collect or retain it when the service can meet the need without it.

#### Journey and implementation rules

- Use a type=text input with spellcheck disabled, extra letter spacing and a width that reflects the expected value.
- Accept upper or lower case and common spacing; normalise for processing without forcing the user to reformat it.
- Protect the number as sensitive personal data and avoid exposing it in URLs, logs or analytics.

#### Accessibility and service safeguards

- Associate the location hint and specific validation message with the input.
- Do not use a number input or numeric-only keyboard because the value contains letters.

#### Demo and production responsibilities

Formatting checks are not identity or entitlement checks. Keep the number out of URLs, analytics, logs and general-purpose persisted browser storage.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/national-insurance-numbers/) when adapting this example for a live service.

### Navigate a service

Use the GOV.UK header and Service navigation together when repeat users need to move among persistent areas of a non-linear service.


#### When to use

- Use navigation links for services used repeatedly, with multiple tasks and no single end-to-end order.
- Simplify the service structure first and include only destinations that meet a persistent user need.

#### When not to use

- Avoid service navigation for a clear linear transaction.
- Use a Task list instead when users need to understand tasks, their order and completion status.

#### Journey and implementation rules

- Use the official GOV.UK header only when identity eligibility applies and place Service navigation directly beneath it.
- Put the service name and its primary links in Service navigation; keep GOV.UK-wide identity and tools in the header.
- Mark the current page and keep responsive menu enhancement usable without JavaScript.

#### Accessibility and service safeguards

- Give each navigation landmark a distinct accessible name and expose current-page state programmatically.
- Keep the service name, links and responsive control usable at high zoom and with keyboard navigation.

#### Demo and production responsibilities

This example demonstrates navigation with the local header and ServiceNavigation wrappers. Production routes, current-page state, identity eligibility and a usable non-JavaScript navigation response remain application responsibilities.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/navigate-a-service/) when adapting this example for a live service.

### Page not found pages

Return a clear page when a requested URL does not exist and help users recover without blaming them or exposing technical jargon.


#### When to use

- Use for a request to a page that does not exist, whether the address was mistyped, copied incorrectly or linked incorrectly.
- Return the page with the correct not-found HTTP status while keeping the standard service page structure.

#### When not to use

- Do not use for an unexpected service failure or planned closure.
- Do not redirect every unknown URL to the homepage because that hides the error and removes useful context.

#### Journey and implementation rules

- Use “Page not found” in the page title and as the H1, then suggest checking typed or pasted addresses.
- Offer specific contact information only when it meets a user need and fix or redirect known broken service links.
- Do not use breadcrumbs, red warning text, humour or jargon such as “404” or “bad request” in the visible content.

#### Accessibility and service safeguards

- Return semantic HTML even when application rendering fails and keep the H1 as the first meaningful content in main.
- Ensure recovery and contact links have descriptive destinations and the document title identifies the service.

#### Demo and production responsibilities

Storybook cannot return the HTTP status for this simulated page. The production route must return 404 and render useful semantic content independently of client-side application routing.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/page-not-found-pages/) when adapting this example for a live service.

### Passwords

Help users create, enter and reset secure, memorable passwords without obstructive restrictions or unsafe recovery journeys.


#### When to use

- Use whenever an account requires users to create or enter a password, after confirming an account is necessary.
- Choose password rules proportionate to the service’s assessed security needs.

#### When not to use

- Do not add password authentication when a usable service can be provided without an account.
- Do not use extra complexity rules as a substitute for appropriate multi-factor authentication.

#### Journey and implementation rules

- Allow pasting and password managers, set a minimum length of at least 8 characters, set no maximum length and block commonly used passwords.
- Explain restrictions consistently wherever users create or enter a password and continue to support existing valid passwords when rules change.
- Design reset tokens to be single-use, time-limited and protected; never send or reveal an existing password.

#### Accessibility and service safeguards

- Use the Password input component with correct autocomplete values and a usable show or hide control.
- Make requirements available before entry and report each unmet rule without clearing the user’s other form data.

#### Demo and production responsibilities

The show/hide form is a composition of Textinput and Button, not a dedicated PasswordInput export. A production identity service must enforce password policy, compromised-password checks, secure storage and recovery. No passwords are transmitted or persisted here.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/passwords/) when adapting this example for a live service.

### Payment card details

Collect card details in a familiar order only when an approved payment platform cannot meet the service need.


#### When to use

- First check whether GOV.UK Pay is suitable; use this pattern only when the service must build its own card-payment flow.
- Present card number, expiry date, cardholder name and security code together in the order found on a card.

#### When not to use

- Do not build a custom card flow without the required payment-security, fraud, privacy and compliance capability.
- Do not store sensitive authentication data or expose card details in logs, URLs, analytics or error reports.

#### Journey and implementation rules

- Accept familiar separators such as spaces and hyphens and normalise them safely.
- Show accepted card types and progressively enhance card-type and security-code guidance; the base form must remain understandable without JavaScript.
- Keep validation specific while avoiding disclosure of sensitive full card values.

#### Accessibility and service safeguards

- Use text inputs with appropriate autocomplete and inputmode values, visible labels and associated hints.
- Provide text equivalents for card-type icons and announce dynamic guidance changes without repeatedly interrupting entry.

#### Demo and production responsibilities

This is an isolated form demonstration, not a payment integration. Prefer an approved hosted payment platform such as GOV.UK Pay. Production card collection requires the relevant payment-security controls; do not transmit these values to a general application endpoint or retain security codes.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/payment-card-details/) when adapting this example for a live service.

### Phone numbers

Ask for a phone number only when needed, accepting the formats, prefixes and separators people normally use.


#### When to use

- Collect a phone number only when the service genuinely needs it.
- Offer another contact route because not everyone has or can use a phone.

#### When not to use

- Do not make a phone number mandatory when the task can be completed or supported through another channel.
- Do not assume all numbers use a UK length or format.

#### Journey and implementation rules

- Use a type=tel text input with autocomplete=tel rather than a number input.
- Accept spaces, hyphens, dashes, brackets, country codes and area codes, then validate against the relevant numbering plan.
- Explain how the number will be used and whether calls or messages may be sent.

#### Accessibility and service safeguards

- Use a visible label and associate purpose hints and specific errors with the field.
- Do not force a numeric-only value or formatting script that disrupts cursor, paste or assistive-input behaviour.

#### Demo and production responsibilities

Formatting acceptance is not proof that a number exists or can receive messages. Use a supported numbering library and server validation for the countries served if those checks are required.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/phone-numbers/) when adapting this example for a live service.

### There is a problem with the service pages

Tell users about an unexpected service failure, preserve their work where possible and give a useful recovery or contact route.


#### When to use

- Use the same general page for unexpected service problems while logging and fixing the underlying error.
- Display it only briefly; move to the planned-unavailability pattern if the service cannot return quickly.

#### When not to use

- Do not use for form validation, a missing URL or an intentional service closure.
- Do not expose exception messages, stack traces, internal identifiers or personal data.

#### Journey and implementation rules

- Use “Sorry, there is a problem with the service” in the title and H1 and tell users to try again later.
- Explain what happened to their answers, preserve recoverable data for a stated reasonable period and offer relevant contact or alternative-service information.
- Do not use breadcrumbs, red warning text, HTTP jargon or vague phrases such as “technical difficulties”.

#### Accessibility and service safeguards

- Return a lightweight semantic error page independently of the failed application path and keep support links keyboard accessible.
- Make the user-facing incident message available without JavaScript and do not repeatedly auto-refresh the page.

#### Demo and production responsibilities

Storybook does not simulate the HTTP response. Serve a suitable error status and lightweight fallback on the server; log technical details privately and make only accurate claims about saved answers.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/) when adapting this example for a live service.

### Question pages

Ask one thing per page using the page heading as the form label or legend and a simple continue action.


#### When to use

- Use for most questions in a transactional service, especially when later questions depend on earlier answers.
- Combine closely related controls only when users understand them as one coherent question.

#### When not to use

- Do not put unrelated questions on one page merely to shorten the journey.
- Do not use a generic H1 that fails to identify the field or response group.

#### Journey and implementation rules

- Make the label or fieldset legend the page H1, add a caption for section context when needed and use a two-thirds content column.
- Use a form with novalidate, the appropriate GOV.UK input component, one primary Continue button and a working Back link where appropriate.
- Put hints before inputs, preserve answers on return and use the full validation pattern for errors.

#### Accessibility and service safeguards

- Use a fieldset and legend for grouped controls and an explicitly associated label for a single control.
- Keep DOM order logical, maintain one descriptive page H1 and move focus appropriately after navigation or validation.

#### Demo and production responsibilities

The form demonstrates a single-question transaction. Production needs real back/continue routes, server-side validation and durable answer preservation.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/question-pages/) when adapting this example for a live service.

### Service unavailable pages

Tell users when a service has been deliberately closed temporarily or permanently and explain when it returns or what they can do instead.


#### When to use

- Use when the service is intentionally closed for a known period or permanently.
- Prepare a general version in advance, then add a precise return date and time as soon as known.

#### When not to use

- Do not use for an unexpected failure; use the problem-with-the-service page and fix the incident.
- Do not leave a planned-closure page in place after the service is available.

#### Journey and implementation rules

- Use “Sorry, the service is unavailable” in the title and H1 and state when it returns or what permanent alternative applies.
- Explain what happened to saved answers and provide useful contact or alternative-service information.
- Do not use breadcrumbs, red warning text or vague explanations such as “maintenance” and “improvements”.

#### Accessibility and service safeguards

- Serve a simple semantic page even when the main application bundle or JavaScript is unavailable.
- Write dates and times unambiguously, include the time zone when needed and make alternatives ordinary descriptive links.

#### Demo and production responsibilities

Availability and return times are illustrative. A production closure response must work independently of the application bundle, state accurate timing, and explain actual saved-data handling.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/service-unavailable-pages/) when adapting this example for a live service.

### Start using a service

Start a public-facing UK government service from an agreed GOV.UK content page that explains the service and links into it.


#### When to use

- Use to prototype and agree the start point for a public-facing government service.
- Work with the GOV.UK content team because the production start page is created in GOV.UK publishing tools, not GOV.UK Frontend.

#### When not to use

- Do not launch a public GOV.UK transaction from an unindexed standalone application page.
- Do not overload the start page with information only a minority of users need later.

#### Journey and implementation rules

- Explain what the service does, who can use it, cost, likely time, information users need and alternative access routes.
- Use one start-button link with an action-specific label such as “Start now” or “Sign in”; make secondary actions ordinary links.
- Include resume, sign-in or update routes where relevant and align the service name with the user need it solves.

#### Accessibility and service safeguards

- Use a real link for the start action and preserve its destination and visible focus state without JavaScript.
- Write content in a clear heading structure and ensure alternative access information is complete and usable.

#### Demo and production responsibilities

This is a start-page prototype. Production public GOV.UK start pages require the appropriate content publishing process; the example is not a separately publishable GOV.UK page.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/start-using-a-service/) when adapting this example for a live service.

### Step by step navigation

Prototype an end-to-end GOV.UK content journey as ordered expandable steps linking to the guidance and transactions needed to complete it.


#### Reusable component

Use `StepByStep` for numbered, expandable guidance with rich content and links. Each step has an individual Show/Hide control; Show all steps/Hide all steps expands or collapses the whole journey.

- Storybook: **GOV.UK / Components / Step by Step**
- [Component implementation](https://github.com/gil00pita/govuk-chakra/blob/main/src/components/StepByStep/StepByStep.tsx)
- [Stories](https://github.com/gil00pita/govuk-chakra/blob/main/src/components/StepByStep/StepByStep.stories.tsx): default, first step expanded, all expanded, narrow and controlled.

```tsx
import { StepByStep } from 'govuk-chakra'

;<StepByStep
  items={[
    {
      id: 'prepare',
      title: 'Prepare your application',
      content: <p>Check what information you need before applying.</p>,
    },
    {
      id: 'apply',
      title: 'Apply for support',
      content: <p>Complete your application and check your answers.</p>,
    },
  ]}
  defaultValue={['prepare']}
/>
```

Give each item a unique, stable `id`, a `title` and React `content`. Steps start collapsed unless their IDs appear in `defaultValue`. For controlled state, pass `value` and update it from `onValueChange={({ value }) => setValue(value)}`; this handles both individual and bulk controls.

Set `headingLevel` to fit the surrounding page hierarchy (defaults to `h2`, supports `h2`–`h6`). Override `showLabel`, `hideLabel`, `showAllLabel` and `hideAllLabel` when different control wording is needed. The component composes `Accordion.Root`, `Accordion.Actions`, `Accordion.ToggleAll`, `Accordion.Items`, `Accordion.Item`, `Accordion.Trigger` and `Accordion.Content`, preserving their typography, spacing, borders, chevrons, focus styles and disclosure behavior. An ordered list adds numbered markers in a left gutter.

#### When to use

- Use for a GOV.UK journey with a specific start and end, several pieces of guidance or transactions and a helpful task order.
- Use this repository guidance for prototyping and work with departmental and GOV.UK content teams for production.

#### When not to use

- Do not use when most journey content is outside GOV.UK, no user action is needed or there is no helpful order.
- Do not use inside a transactional service; use Complete multiple tasks and the Task list component.

#### Journey and implementation rules

- Do not self-publish a custom step-by-step journey on live GOV.UK; the production pattern is created with GDS and content teams and is not provided by govuk-frontend.
- Write a short introduction, group user tasks into numbered expandable steps and order them according to user need and dependency.
- Prototype both the standalone page and the related-page sidebar/link presentation without customising the established design.

#### Accessibility and service safeguards

- Make every step operable by keyboard with an exposed expanded state and keep task links available when enhancement fails.
- Do not put information needed to complete a task only in the introduction because the sidebar does not show it.

#### Demo and production responsibilities

This is a content-journey prototype composed from existing disclosure and layout components. It is not the official publishing implementation or a transaction progress tracker. Work with the GOV.UK content team for production.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/step-by-step-navigation/) when adapting this example for a live service.

### Recover from validation errors

Validate only information the service cannot use, then explain what is wrong and how the user can fix it without losing their work.


#### When to use

- Validate information that cannot be correct, is too ambiguous to use or is required but missing.
- Minimise avoidable errors by asking clear questions and accepting unambiguous formatting variations.

#### When not to use

- Do not use validation to decide eligibility or permission; route to an explanatory outcome page.
- Do not use validation components for missing pages, unexpected system problems or planned service closure.

#### Journey and implementation rules

- Add novalidate to forms, keep server-side validation authoritative and render the same accessible errors even when client-side checks are added.
- Show an Error summary at the top, repeat each message beside the field and link summary items to their correction target.
- Preserve all submitted values, focus the summary appropriately and write a specific message for each error state.

#### Accessibility and service safeguards

- Associate inline errors through aria-describedby, add error styling to the form group and input, and include visually hidden “Error:” text.
- Do not rely on colour, icons, browser-native bubbles or focus alone to communicate an error.

#### Demo and production responsibilities

Client-side errors demonstrate the interaction. Repeat authoritative validation on the server, preserve submitted values and render equivalent errors when JavaScript is unavailable.

#### Reference

Intent and safeguards are based on the supplied `govuk-design-md` pattern reference reviewed 9 September 2026. Check the [GOV.UK pattern guidance](https://design-system.service.gov.uk/patterns/validation/) when adapting this example for a live service.

## React pattern examples

These are reference source files using only this repository's UI components and React. To run them, save the four blocks to the filenames shown in one directory and render a named example inside the configured Chakra provider. Imports below use the published govuk-chakra package. The original files remain in src/stories/patterns.

Replace storyHref's Storybook URLs with your application's routes. Implement page titles and focus management for your router; the examples include Storybook-specific title handling. Replace demo confirmations, verification codes and local state with secure service integrations. Never collect real payment card or bank data through a prototype. The Markdown importer does not execute these blocks.

### shared.tsx

```tsx
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Textinput,
  ErrorSummary,
  Radio,
  BackLink,
  Link,
  NotificationBanner,
} from 'govuk-chakra'

export const storyHref = (group: 'ask-users-for' | 'help-users-to' | 'pages', name: string) =>
  `./?path=/story/gov-uk-patterns-${group}--${name}`

export function PatternPage({
  title,
  children,
  back,
  heading = true,
}: {
  title: string
  children: ReactNode
  back?: () => void
  heading?: boolean
}) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const previousTitle = useRef(title)
  useEffect(() => {
    if (
      previousTitle.current !== title ||
      new URLSearchParams(window.location.search).get('viewMode') === 'story'
    )
      ref.current?.focus()
    previousTitle.current = title
  }, [title])
  useEffect(() => {
    // Storybook docs mount several examples together; only set the title in a standalone canvas.
    if (new URLSearchParams(window.location.search).get('viewMode') !== 'story') return
    const previous = document.title
    document.title = `${title} – Example service – GOV.UK`
    return () => {
      document.title = previous
    }
  }, [title])
  return (
    <Box bg="bg" color="fg" minH="100%" px={{ base: 4, md: 8 }} py={8}>
      <Box
        as="main"
        maxW="740px"
        mx="auto"
        ref={ref}
        tabIndex={-1}
        outline="none"
        aria-labelledby={heading ? id : undefined}
      >
        <Stack gap={6} align="stretch">
          {back && (
            <BackLink
              href="#"
              onClick={(event) => {
                event.preventDefault()
                back()
              }}
            >
              Back
            </BackLink>
          )}
          {heading && (
            <Heading id={id} as="h1" size={36}>
              {title}
            </Heading>
          )}
          {children}
        </Stack>
      </Box>
    </Box>
  )
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <NotificationBanner.Root variant="success" heading="Success" role="status">
      <NotificationBanner.Body>{children}</NotificationBanner.Body>
    </NotificationBanner.Root>
  )
}

export function Errors({ errors, prefix }: { errors: Record<string, string>; prefix: string }) {
  return Object.keys(errors).length > 0 ? (
    <ErrorSummary.Root key={JSON.stringify(errors)}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        {Object.entries(errors).map(([key, message]) => (
          <ErrorSummary.Item key={key}>
            <ErrorSummary.Link
              href={`#${prefix}-${key}`}
              onClick={(event) => {
                const target = event.currentTarget.ownerDocument.getElementById(`${prefix}-${key}`)
                if (!target) return
                event.preventDefault()
                const control = target.matches('input, textarea, select')
                  ? target
                  : target.querySelector<HTMLElement>('input, textarea, select, button')
                const focusTarget = control ?? target
                focusTarget.focus()
                target.scrollIntoView({ block: 'center' })
              }}
            >
              {message}
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        ))}
      </ErrorSummary.List>
    </ErrorSummary.Root>
  ) : null
}

export interface FieldSpec {
  key: string
  label: string
  hint?: string
  type?: 'text' | 'email' | 'tel' | 'password'
  autoComplete?: string
  inputMode?: 'numeric' | 'email' | 'tel' | 'text'
  optional?: boolean
  width?: 'full' | '20' | '10' | '5' | '4' | '3' | '2'
  validate?: (value: string) => string | undefined
}

export function FieldsForm({
  fields,
  initial = {},
  onComplete,
  submitLabel = 'Continue',
  children,
  prefix: suppliedPrefix,
  pageLabel = false,
}: {
  fields: FieldSpec[]
  initial?: Record<string, string>
  onComplete: (values: Record<string, string>) => void
  submitLabel?: string
  children?: ReactNode
  prefix?: string
  pageLabel?: boolean
}) {
  const id = useId()
  const prefix = suppliedPrefix ?? id
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Box asChild>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          const next: Record<string, string> = {}
          fields.forEach((field) => {
            const value = values[field.key] ?? ''
            if (!field.optional && !value.trim())
              next[field.key] = `Enter ${field.label.toLowerCase()}`
            else if (value.trim()) {
              const message = field.validate?.(value)
              if (message) next[field.key] = message
            }
          })
          setErrors(next)
          if (!Object.keys(next).length) onComplete(values)
        }}
      >
        <Stack gap={6} align="stretch">
          <Errors errors={errors} prefix={prefix} />
          {fields.map((field) => (
            <Stack gap={2} key={field.key}>
              <Textinput
                id={`${prefix}-${field.key}`}
                name={field.key}
                label={
                  pageLabel ? (
                    <Heading as="h1" size={36}>
                      {field.label}
                    </Heading>
                  ) : (
                    field.label
                  )
                }
                hint={field.hint}
                error={errors[field.key]}
                type={field.type === 'password' && showPassword ? 'text' : (field.type ?? 'text')}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                spellCheck={false}
                autoCapitalize="none"
                width={field.width ?? 'full'}
                value={values[field.key] ?? ''}
                onChange={(event) =>
                  setValues((current) => ({ ...current, [field.key]: event.target.value }))
                }
              />
              {field.type === 'password' && (
                <Button
                  alignSelf="start"
                  variant="secondary"
                  type="button"
                  aria-controls={`${prefix}-${field.key}`}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide password' : 'Show password'}
                </Button>
              )}
            </Stack>
          ))}
          {children}
          <Button type="submit" alignSelf="start">
            {submitLabel}
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export function Choice({
  legend,
  options,
  value,
  onChange,
  error,
  id,
}: {
  legend: string
  options: string[]
  value: string
  onChange: (value: string) => void
  error?: string
  id?: string
}) {
  const name = useId()
  return (
    <Radio.Group legend={legend} error={error}>
      <Radio.Root
        id={id}
        name={name}
        value={value}
        onValueChange={(details) => onChange(details.value ?? '')}
      >
        {options.map((option) => (
          <Radio.Item key={option} value={option}>
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>{option}</Radio.ItemText>
          </Radio.Item>
        ))}
      </Radio.Root>
    </Radio.Group>
  )
}

export function ContactLink() {
  return (
    <Link href={storyHref('help-users-to', 'contact-a-department-or-service-team')} target="_top">
      Get help with your application
    </Link>
  )
}

export function Completed({
  onBack,
  children = 'Your answer has been recorded for this example.',
}: {
  onBack: () => void
  children?: ReactNode
}) {
  return (
    <PatternPage title="Answer recorded" back={onBack}>
      <Notice>{children}</Notice>
      <Text fontSize={19}>You can go back to change your answer.</Text>
    </PatternPage>
  )
}
```

### AskUsersFor.tsx

```tsx
import { useId, useState, type ReactNode } from 'react'
import { Box, Button, DateInput, Link, Stack, Text } from 'govuk-chakra'
import { Completed, ContactLink, Errors, FieldsForm, PatternPage, type FieldSpec } from './shared'

function AnswerJourney({
  title,
  fields,
  children,
  sensitive = false,
}: {
  title: string
  fields: FieldSpec[]
  children?: ReactNode
  sensitive?: boolean
}) {
  const [answer, setAnswer] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  if (done)
    return (
      <Completed onBack={() => setDone(false)}>
        {sensitive
          ? 'The details passed the example checks. No transaction has been made.'
          : 'Your answer has been recorded for this example.'}
      </Completed>
    )
  return (
    <PatternPage title={title}>
      {children}
      <FieldsForm
        fields={fields}
        initial={answer}
        onComplete={(values) => {
          setAnswer(sensitive ? {} : values)
          setDone(true)
        }}
      />
    </PatternPage>
  )
}
const digits = (value: string) => value.replace(/[\s-]/g, '')

export function AddressesExample() {
  return (
    <AnswerJourney
      title="What is your postal address?"
      fields={[
        { key: 'line1', label: 'Address line 1', autoComplete: 'address-line1' },
        {
          key: 'line2',
          label: 'Address line 2 (optional)',
          autoComplete: 'address-line2',
          optional: true,
        },
        { key: 'town', label: 'Town or city', autoComplete: 'address-level2' },
        {
          key: 'postcode',
          label: 'Postcode or ZIP code (optional)',
          autoComplete: 'postal-code',
          optional: true,
          width: '10',
        },
        { key: 'country', label: 'Country', autoComplete: 'country-name' },
      ]}
    >
      <Text>
        We will send your decision letter to this address. You can enter an address outside the UK.
      </Text>
    </AnswerJourney>
  )
}

export function BankDetailsExample() {
  return (
    <AnswerJourney
      title="What are your bank details?"
      sensitive
      fields={[
        { key: 'name', label: 'Name on the account', autoComplete: 'name' },
        {
          key: 'sort',
          label: 'Sort code',
          hint: 'For example, 12-34-56',
          inputMode: 'numeric',
          width: '10',
          validate: (value) =>
            /^\d{6}$/.test(digits(value)) ? undefined : 'Enter a sort code with 6 digits',
        },
        {
          key: 'account',
          label: 'Account number',
          hint: 'This must be 8 digits long.',
          inputMode: 'numeric',
          width: '10',
          validate: (value) =>
            /^\d{8}$/.test(digits(value)) ? undefined : 'Enter an account number with 8 digits',
        },
        {
          key: 'roll',
          label: 'Building society roll number (optional)',
          hint: 'You can find this on your building society statement.',
          optional: true,
        },
      ]}
    >
      <Text>
        We need these details to pay your refund into a UK bank or building society account.
      </Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function DatesExample({
  optional = false,
  onComplete,
  onBack,
  initialValue,
  onDateChange,
}: {
  optional?: boolean
  onComplete?: () => void
  onBack?: () => void
  initialValue?: { day: string; month: string; year: string }
  onDateChange?: (value: { day: string; month: string; year: string }) => void
} = {}) {
  const prefix = useId()
  const [value, setValue] = useState(initialValue ?? { day: '', month: '', year: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  if (done) return <Completed onBack={() => setDone(false)} />
  return (
    <PatternPage title="What is your date of birth?" heading={false} back={onBack}>
      <Box asChild>
        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            if (optional && Object.values(value).every((part) => !part.trim())) {
              onComplete?.()
              return
            }
            const next: Record<string, string> = {}
            for (const part of ['day', 'month', 'year'] as const) {
              if (!value[part].trim()) next[part] = `Enter the ${part} of your date of birth`
              else if (!/^\d+$/.test(value[part])) next[part] = `Enter the ${part} using numbers`
            }
            const day = Number(value.day),
              month = Number(value.month),
              year = Number(value.year)
            if (!Object.keys(next).length) {
              if (month < 1 || month > 12) next.month = 'Enter a month between 1 and 12'
              if (year < 1000 || year > 9999) next.year = 'Enter a year with 4 digits'
              const date = new Date(0)
              date.setFullYear(year, month - 1, day)
              date.setHours(0, 0, 0, 0)
              if (day < 1 || day > 31 || (!next.month && date.getMonth() !== month - 1))
                next.day = 'Enter a real day for this month and year'
              if (!Object.keys(next).length && date > new Date())
                next.year = 'Your date of birth must be in the past'
            }
            setErrors(next)
            if (!Object.keys(next).length) {
              if (onComplete) onComplete()
              else setDone(true)
            }
          }}
        >
          <Stack gap={6}>
            <Errors errors={errors} prefix={prefix} />
            <DateInput.Root asPageHeading showHint invalid={Object.keys(errors).length > 0}>
              <DateInput.Legend>What is your date of birth?</DateInput.Legend>
              <DateInput.Hint>
                For example, 31 3 1980
                {optional
                  ? '. This question is optional. You can leave all three fields blank.'
                  : ''}
              </DateInput.Hint>
              <DateInput.Error>{Object.values(errors).join('. ')}</DateInput.Error>
              <DateInput.Container>
                {(['day', 'month', 'year'] as const).map((part) => (
                  <DateInput.Field key={part}>
                    <DateInput.Label htmlFor={`${prefix}-${part}`}>
                      {part[0].toUpperCase() + part.slice(1)}
                    </DateInput.Label>
                    <DateInput.Input
                      id={`${prefix}-${part}`}
                      name={part}
                      autoComplete={`bday-${part}`}
                      inputWidth={part === 'year' ? '4' : '2'}
                      value={value[part]}
                      aria-invalid={Boolean(errors[part])}
                      onChange={(event) => {
                        const next = { ...value, [part]: event.target.value }
                        setValue(next)
                        onDateChange?.(next)
                      }}
                    />
                  </DateInput.Field>
                ))}
              </DateInput.Container>
            </DateInput.Root>
            <Button alignSelf="start" type="submit">
              Continue
            </Button>
          </Stack>
        </form>
      </Box>
    </PatternPage>
  )
}

export function EmailAddressesExample() {
  return (
    <AnswerJourney
      title="What is your email address?"
      fields={[
        {
          key: 'email',
          label: 'Email address',
          type: 'email',
          autoComplete: 'email',
          inputMode: 'email',
          validate: (value) =>
            /^[^\s@]+@[^\s@]+$/.test(value.trim())
              ? undefined
              : 'Enter an email address in the correct format, like name@example.com',
        },
      ]}
    >
      <Text>We will use this to send updates about your application.</Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function EqualityInformationExample() {
  const [step, setStep] = useState<'intro' | 'question' | 'done'>('intro')
  const [skipped, setSkipped] = useState(false)
  const [date, setDate] = useState({ day: '', month: '', year: '' })
  if (step === 'done')
    return (
      <Completed onBack={() => setStep('intro')}>
        {skipped
          ? 'You have skipped the optional equality questions. You can still use the service.'
          : 'You have completed the optional equality section. You can still use the service if you left the answer blank.'}
      </Completed>
    )
  return (
    <>
      {step === 'question' && (
        <Box>
          <DatesExample
            initialValue={date}
            onDateChange={setDate}
            optional
            onBack={() => setStep('intro')}
            onComplete={() => {
              setSkipped(false)
              setStep('done')
            }}
          />
        </Box>
      )}
      {step === 'intro' && (
        <PatternPage title="Help us improve this service">
          <Text>
            You have checked your application answers. You can now choose to answer an equality
            monitoring question. This helps us understand whether people of different ages can use
            the service.
          </Text>
          <Text>
            This question is optional. Your answer is used for equality monitoring separately from
            decisions about your application. Choosing not to answer will not affect your
            application.
          </Text>
          <Button alignSelf="start" onClick={() => setStep('question')}>
            Answer the optional question
          </Button>
          <Link
            href="#"
            onClick={(event) => {
              event.preventDefault()
              setSkipped(true)
              setStep('done')
            }}
          >
            Skip this question and continue
          </Link>
        </PatternPage>
      )}
    </>
  )
}

export function NamesExample() {
  return (
    <AnswerJourney
      title="What is your full name?"
      fields={[{ key: 'name', label: 'Full name', autoComplete: 'name' }]}
    >
      <Text>Enter the name you want us to use when we contact you.</Text>
    </AnswerJourney>
  )
}

export function NationalInsuranceNumbersExample() {
  return (
    <AnswerJourney
      title="What is your National Insurance number?"
      sensitive
      fields={[
        {
          key: 'ni',
          label: 'National Insurance number',
          hint: 'It is on your payslip, P60 or benefit letters. For example, QQ 12 34 56 C.',
          width: '20',
          validate: (value) =>
            /^[a-z]{2}\d{6}[a-d]$/i.test(value.replace(/\s/g, ''))
              ? undefined
              : 'Enter a National Insurance number in the correct format',
        },
      ]}
    >
      <Text>We use this to match your application to your contribution record.</Text>
      <ContactLink />
    </AnswerJourney>
  )
}

export function PasswordsExample() {
  return (
    <AnswerJourney
      title="Create a password"
      sensitive
      fields={[
        {
          key: 'password',
          label: 'Password',
          type: 'password',
          autoComplete: 'new-password',
          hint: 'Use at least 8 characters. You can use spaces. Do not use a common password.',
          validate: (value) =>
            value.length < 8
              ? 'Your password must be at least 8 characters'
              : ['password', 'password123', '12345678', 'qwerty123'].includes(value.toLowerCase())
                ? 'Choose a less common password'
                : undefined,
        },
      ]}
    >
      <Text>You can paste a password or use a password manager.</Text>
    </AnswerJourney>
  )
}

export function PaymentCardDetailsExample() {
  return (
    <AnswerJourney
      title="Enter your card details"
      sensitive
      fields={[
        {
          key: 'card',
          label: 'Card number',
          autoComplete: 'cc-number',
          inputMode: 'numeric',
          validate: (value) =>
            /^\d{13,19}$/.test(digits(value))
              ? undefined
              : 'Enter a card number with between 13 and 19 digits',
        },
        {
          key: 'expiry',
          label: 'Expiry date',
          hint: 'For example, 03/30',
          autoComplete: 'cc-exp',
          width: '10',
          validate: (value) => {
            const match = /^(\d{1,2})\s*\/\s*(\d{2}|\d{4})$/.exec(value.trim())
            if (!match || Number(match[1]) < 1 || Number(match[1]) > 12)
              return 'Enter an expiry date in the format MM/YY'
            const year = match[2].length === 2 ? 2000 + Number(match[2]) : Number(match[2])
            return new Date(year, Number(match[1]), 1) <= new Date()
              ? 'Enter a card expiry date that has not passed'
              : undefined
          },
        },
        { key: 'holder', label: 'Name on card', autoComplete: 'cc-name' },
        {
          key: 'security',
          label: 'Card security code',
          hint: 'The last 3 digits on the back of your card, or 4 digits on the front of an American Express card.',
          autoComplete: 'cc-csc',
          inputMode: 'numeric',
          width: '5',
          validate: (value) =>
            /^\d{3,4}$/.test(value.trim()) ? undefined : 'Enter a security code with 3 or 4 digits',
        },
      ]}
    >
      <Text>We accept Visa, Mastercard and American Express.</Text>
    </AnswerJourney>
  )
}

export function PhoneNumbersExample() {
  return (
    <AnswerJourney
      title="What is your phone number?"
      fields={[
        {
          key: 'phone',
          label: 'Phone number (optional)',
          type: 'tel',
          autoComplete: 'tel',
          optional: true,
          hint: 'Include the country code for numbers outside the UK.',
        },
      ]}
    >
      <Text>
        We will only call if we need to ask about your application. You can continue without a phone
        number and contact the service another way.
      </Text>
      <ContactLink />
    </AnswerJourney>
  )
}
```

### HelpUsersTo.tsx

```tsx
import { useId, useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Stack,
  SummaryList,
  TaskList,
  Tag,
  Textinput,
  InsetText,
  SkipLink,
  ServiceNavigation,
  GOVUKHeader,
} from 'govuk-chakra'
import { PatternPage, FieldsForm, Choice, Errors, Notice, ContactLink, storyHref } from './shared'

const email = (value: string) =>
  /^[^\s@]+@[^\s@]+$/.test(value.trim())
    ? undefined
    : 'Enter an email address in the correct format, like name@example.com'

export function CheckAServiceIsSuitableExample() {
  const [step, setStep] = useState(0)
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(false)
  const id = useId()
  return (
    <PatternPage
      title={
        step === 0
          ? 'Check if this service is right for you'
          : step === 1
            ? 'Where do you live?'
            : answer === 'England'
              ? 'You can use this example service'
              : 'Use a service where you live'
      }
      back={step ? () => setStep(step - 1) : undefined}
    >
      {step === 0 ? (
        <>
          <Text>
            This fictional service helps adults aged 18 or over apply for a community garden plot in
            England. There is no application fee. One question will help you find the right route.
          </Text>
          <Text>
            If your circumstances are different, the service team can help you understand the rules.
          </Text>
          <Button alignSelf="start" onClick={() => setStep(1)}>
            Check now
          </Button>
        </>
      ) : step === 1 ? (
        <Box asChild>
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              setError(!answer)
              if (answer) setStep(2)
            }}
          >
            <Stack gap={6}>
              <Errors prefix={id} errors={error ? { country: 'Select where you live' } : {}} />
              <Choice
                id={`${id}-country`}
                legend="Where do you live?"
                options={['England', 'Scotland', 'Wales', 'Northern Ireland', 'Somewhere else']}
                value={answer}
                onChange={setAnswer}
                error={error ? 'Select where you live' : undefined}
              />
              <Button alignSelf="start" type="submit">
                Continue
              </Button>
            </Stack>
          </form>
        </Box>
      ) : (
        <>
          <Text>
            {answer === 'England'
              ? 'You meet the location rule. You must also be 18 or over. The application will ask for your contact details.'
              : `This example service covers England. You selected ${answer}. Your local council can explain the options available to you.`}
          </Text>
          <Link
            href={
              answer === 'England'
                ? storyHref('ask-users-for', 'names')
                : 'https://www.gov.uk/find-local-council'
            }
            target="_top"
          >
            {answer === 'England' ? 'Start your application' : 'Find your local council'}
          </Link>
          <Text>
            If this result does not reflect your circumstances, ask the team to explain or review
            it.
          </Text>
        </>
      )}
      <ContactLink />
    </PatternPage>
  )
}

export function CheckAnswersExample() {
  const [values, setValues] = useState({ name: 'Alex Morgan', email: 'alex@example.com' })
  const [editing, setEditing] = useState<'name' | 'email' | null>(null)
  const [submitted, setSubmitted] = useState(false)
  if (submitted)
    return (
      <PatternPage title="Application submitted">
        <Notice>Your example application has been submitted.</Notice>
        <Text>No information has been sent to a service.</Text>
        <Button variant="secondary" alignSelf="start" onClick={() => setSubmitted(false)}>
          Return to answers
        </Button>
      </PatternPage>
    )
  if (editing)
    return (
      <PatternPage
        title={editing === 'name' ? 'Change your full name' : 'Change your email address'}
        back={() => setEditing(null)}
      >
        <FieldsForm
          initial={values}
          fields={[
            {
              key: editing,
              label: editing === 'name' ? 'Full name' : 'Email address',
              autoComplete: editing === 'name' ? 'name' : 'email',
              type: editing === 'email' ? 'email' : 'text',
              validate: editing === 'email' ? email : undefined,
            },
          ]}
          submitLabel="Save and return"
          onComplete={(next) => {
            setValues((current) => ({ ...current, ...next }))
            setEditing(null)
          }}
        />
      </PatternPage>
    )
  return (
    <PatternPage title="Check your answers before sending your application">
      <Heading as="h2" size={24}>
        Personal details
      </Heading>
      <SummaryList.Root>
        {(['name', 'email'] as const).map((key) => (
          <SummaryList.Row key={key}>
            <SummaryList.Key>{key === 'name' ? 'Full name' : 'Email address'}</SummaryList.Key>
            <SummaryList.Value>{values[key]}</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                href={`#change-${key}`}
                visuallyHiddenText={key === 'name' ? 'full name' : 'email address'}
                onClick={(event) => {
                  event.preventDefault()
                  setEditing(key)
                }}
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        ))}
      </SummaryList.Root>
      <Heading as="h2" size={24}>
        Now send your application
      </Heading>
      <Text>
        By submitting, you confirm that these details are correct to the best of your knowledge. The
        service team would review your application and contact you by email.
      </Text>
      <Button alignSelf="start" onClick={() => setSubmitted(true)}>
        Accept and send
      </Button>
    </PatternPage>
  )
}

export function CompleteMultipleTasksExample() {
  const [data, setData] = useState<Record<string, string>>({})
  const [task, setTask] = useState<'name' | 'email' | null>(null)
  const [sent, setSent] = useState(false)
  const [review, setReview] = useState(false)
  if (review)
    return (
      <PatternPage title="Check your application" back={() => setReview(false)}>
        <SummaryList.Root>
          {(['name', 'email'] as const).map((key) => (
            <SummaryList.Row key={key}>
              <SummaryList.Key>{key === 'name' ? 'Full name' : 'Email address'}</SummaryList.Key>
              <SummaryList.Value>{data[key]}</SummaryList.Value>
              <SummaryList.Actions>
                <SummaryList.ActionLink
                  href={`#change-${key}`}
                  visuallyHiddenText={key === 'name' ? 'full name' : 'email address'}
                  onClick={(event) => {
                    event.preventDefault()
                    setReview(false)
                    setTask(key)
                  }}
                >
                  Change
                </SummaryList.ActionLink>
              </SummaryList.Actions>
            </SummaryList.Row>
          ))}
        </SummaryList.Root>
        <Text>
          Confirm these details are correct before sending this example application. No information
          will be sent to a service.
        </Text>
        <Button
          alignSelf="start"
          onClick={() => {
            setSent(true)
            setReview(false)
          }}
        >
          Accept and send
        </Button>
      </PatternPage>
    )
  if (task)
    return (
      <PatternPage
        title={task === 'name' ? 'Your personal details' : 'Your contact details'}
        back={() => setTask(null)}
      >
        <FieldsForm
          fields={[
            {
              key: task,
              label: task === 'name' ? 'Full name' : 'Email address',
              type: task === 'email' ? 'email' : 'text',
              validate: task === 'email' ? email : undefined,
            },
          ]}
          initial={data}
          submitLabel="Save and return to tasks"
          onComplete={(values) => {
            setData((current) => ({ ...current, ...values }))
            setTask(null)
            setSent(false)
          }}
        />
      </PatternPage>
    )
  return (
    <PatternPage title="Your application">
      <Text>
        {Number(Boolean(data.name)) + Number(Boolean(data.email))} of 2 information tasks completed.
        Saved answers are kept while this example is open.
      </Text>
      {sent && <Notice>Your example application has been submitted.</Notice>}
      <TaskList.Root heading="Prepare your application">
        {(['name', 'email'] as const).map((key) => (
          <TaskList.Item
            key={key}
            title={key === 'name' ? 'Personal details' : 'Contact details'}
            href={`#task-${key}`}
            status={data[key] ? 'completed' : 'notStarted'}
            onClick={(event) => {
              event.preventDefault()
              setTask(key)
            }}
          />
        ))}
      </TaskList.Root>
      <TaskList.Root heading="Send your application">
        {data.name && data.email ? (
          <TaskList.Item
            title="Submit your application"
            href="#submit"
            status={sent ? 'completed' : 'notStarted'}
            onClick={(event) => {
              event.preventDefault()
              setReview(true)
            }}
          />
        ) : (
          <Box as="li" py={4} borderBottom="1px solid" borderColor="border">
            <Stack gap={2} align="start">
              <Text fontWeight="700">Submit your application</Text>
              <Text>Complete personal details and contact details first.</Text>
              <Tag variant="gray">Cannot start yet</Tag>
            </Stack>
          </Box>
        )}
      </TaskList.Root>
      <ContactLink />
    </PatternPage>
  )
}

export function ConfirmContactExample({ kind }: { kind: 'phone' | 'email' }) {
  const isPhone = kind === 'phone'
  const [destination, setDestination] = useState(isPhone ? '07700 900123' : 'alex@example.com')
  const [editing, setEditing] = useState(false)
  const [code, setCode] = useState('')
  const [issued, setIssued] = useState(() => Date.now())
  const [generation, setGeneration] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [resends, setResends] = useState(0)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const id = useId()
  const expected = String(123456 + generation)
  const renew = () => {
    setGeneration((value) => value + 1)
    setIssued(Date.now())
    setAttempts(0)
    setCode('')
    setError('')
    setNotice('A new example code is ready. The previous code no longer works.')
  }
  if (editing)
    return (
      <PatternPage
        title={`Change your ${isPhone ? 'phone number' : 'email address'}`}
        back={() => setEditing(false)}
      >
        <FieldsForm
          initial={{ destination }}
          fields={[
            {
              key: 'destination',
              label: isPhone ? 'Mobile phone number' : 'Email address',
              type: isPhone ? 'tel' : 'email',
              autoComplete: isPhone ? 'tel' : 'email',
              validate: isPhone ? undefined : email,
            },
          ]}
          onComplete={(values) => {
            setDestination(values.destination)
            setEditing(false)
            setResends(0)
            renew()
          }}
        />
      </PatternPage>
    )
  if (confirmed)
    return (
      <PatternPage title={`${isPhone ? 'Phone number' : 'Email address'} confirmed`}>
        <Notice>This example confirmation is complete.</Notice>
        <Text>
          The code has been used and cannot be used again. Confirmation checks access to a contact
          method, not identity.
        </Text>
        <ContactLink />
      </PatternPage>
    )
  return (
    <PatternPage title={`Confirm your ${isPhone ? 'phone number' : 'email address'}`}>
      <Text>
        In a live service,{' '}
        {isPhone
          ? `a text message would go to the number ending ${destination.replace(/\D/g, '').slice(-4)}`
          : `an email would go to ${destination}`}
        . Open your {isPhone ? 'messages' : 'email on this or another device'}, then return here and
        enter the code. It expires after 10 minutes.
      </Text>
      <InsetText>
        This is a simulation. No message is sent. Use example code {expected}. Do not enter real
        contact details.
      </InsetText>
      {notice && <Notice>{notice}</Notice>}
      <Box asChild>
        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            if (attempts >= 3) {
              setError('You have tried 3 times. Request a new code or contact the team.')
              return
            }
            if (Date.now() - issued >= 600000) {
              setError('This code has expired. Request a new code.')
              return
            }
            if (code.trim() !== expected) {
              setAttempts((value) => value + 1)
              setError(
                attempts === 2
                  ? 'You have tried 3 times. Request a new code or contact the team.'
                  : 'Enter the 6-digit code from your message'
              )
              return
            }
            setConfirmed(true)
          }}
        >
          <Stack gap={6}>
            <Errors prefix={id} errors={error ? { code: error } : {}} />
            <Textinput
              id={`${id}-code`}
              name="code"
              label="Security code"
              hint="Enter the 6-digit code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              width="10"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              error={error || undefined}
            />
            <Button type="submit" alignSelf="start">
              Confirm {isPhone ? 'phone number' : 'email address'}
            </Button>
          </Stack>
        </form>
      </Box>
      <Button
        variant="secondary"
        alignSelf="start"
        disabled={resends >= 3}
        onClick={() => {
          setResends((value) => value + 1)
          renew()
        }}
      >
        Request a new code
      </Button>
      {resends >= 3 && (
        <Text>
          You have requested 3 replacement codes in this example. Contact the team for another way
          to continue.
        </Text>
      )}
      <Link
        href="#change-contact"
        onClick={(event) => {
          event.preventDefault()
          setEditing(true)
        }}
      >
        Change {isPhone ? 'phone number' : 'email address'}
      </Link>
      <Button
        variant="secondary"
        alignSelf="start"
        onClick={() => {
          setIssued(0)
          setNotice('The example code has expired. Request a new code to continue.')
        }}
      >
        Simulate code expiry
      </Button>
      <Text>
        If you cannot access {isPhone ? 'text messages' : 'email'}, ask the team for another way to
        confirm your details.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ContactADepartmentOrServiceTeamExample() {
  return (
    <PatternPage title="Get help with your application">
      <InsetText>
        These contact details demonstrate the content a service must provide. They are fictional and
        are not monitored.
      </InsetText>
      <Heading as="h2" size={24}>
        Telephone
      </Heading>
      <Text>Example application support: 01632 960000</Text>
      <Text>
        Monday to Friday, 9am to 5pm UK time, except bank holidays. Welsh-language support is
        available during the same hours.
      </Text>
      <Link href="https://www.gov.uk/call-charges" target="_top">
        Find out about call charges
      </Link>
      <Heading as="h2" size={24}>
        If you cannot hear or speak on the phone
      </Heading>
      <Text>
        Use Relay UK with 18001 followed by the service telephone number. You can also contact the
        team by email.
      </Text>
      <Link href="https://www.relayuk.bt.com/" target="_top">
        How to use Relay UK
      </Link>
      <Heading as="h2" size={24}>
        Email
      </Heading>
      <Text>
        Example inbox: applications@example.com. A live service would aim to reply within 2 working
        days.
      </Text>
      <Text>
        Include your application reference, if you have one, and explain what you need help with. Do
        not send passwords, security codes or payment card details.
      </Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Return to the example service start page
      </Link>
    </PatternPage>
  )
}

export function CreateAUsernameExample() {
  const [username, setUsername] = useState('')
  const [editing, setEditing] = useState(true)
  return (
    <PatternPage title={editing ? 'Create a username' : 'Your username is available'}>
      <Text>
        This example discussion service needs a public name for your posts. Choose a name that does
        not reveal your identity. Usernames are not case sensitive.
      </Text>
      {editing ? (
        <FieldsForm
          initial={{ username }}
          fields={[
            {
              key: 'username',
              label: 'Create a username',
              autoComplete: 'username',
              hint: 'Use letters, numbers, hyphens or underscores. For this example, “alex” is already taken.',
              validate: (value) =>
                !/^[a-z0-9_-]+$/i.test(value)
                  ? 'Use only letters, numbers, hyphens or underscores'
                  : value.toLowerCase() === 'alex'
                    ? 'This username is already taken. Try alex_garden or choose another username.'
                    : undefined,
            },
          ]}
          submitLabel="Check availability"
          onComplete={(values) => {
            setUsername(values.username)
            setEditing(false)
          }}
        />
      ) : (
        <>
          <Notice>{username} is available in this example.</Notice>
          <Button variant="secondary" alignSelf="start" onClick={() => setEditing(true)}>
            Change username
          </Button>
        </>
      )}
      <Text>
        In a live service you could recover a forgotten username, change it in account settings, or
        ask the team for help without email access.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function CreateAccountsExample() {
  const [mode, setMode] = useState<'choice' | 'create' | 'signin' | 'done'>('choice')
  const [savedEmail, setSavedEmail] = useState('')
  return (
    <PatternPage
      title={
        mode === 'signin'
          ? 'Sign in'
          : mode === 'done'
            ? 'Example account details checked'
            : 'Create an account'
      }
      back={mode !== 'choice' ? () => setMode('choice') : undefined}
    >
      <Text>
        You can make a one-off application without an account. Create an account only if you need to
        return regularly to manage your garden plot.
      </Text>
      {mode === 'choice' ? (
        <>
          <Button alignSelf="start" onClick={() => setMode('create')}>
            Create an account
          </Button>
          <Link
            href="#signin"
            onClick={(event) => {
              event.preventDefault()
              setMode('signin')
            }}
          >
            Sign in to an existing account
          </Link>
          <Link href={storyHref('ask-users-for', 'names')} target="_top">
            Continue without an account
          </Link>
        </>
      ) : mode === 'done' ? (
        <>
          <Notice>Your example details passed the form checks. No account was created.</Notice>
          <Text>
            Your service application would be retained when you return from account creation.
          </Text>
          <Link href={storyHref('help-users-to', 'confirm-an-email-address')} target="_top">
            Try email confirmation
          </Link>
        </>
      ) : (
        <FieldsForm
          key={mode}
          initial={{ email: savedEmail }}
          fields={[
            {
              key: 'email',
              label: 'Email address',
              type: 'email',
              autoComplete: 'username',
              validate: email,
            },
            {
              key: 'password',
              label: mode === 'create' ? 'Create a password' : 'Password',
              type: 'password',
              autoComplete: mode === 'create' ? 'new-password' : 'current-password',
              hint:
                mode === 'create'
                  ? 'For this example, use at least 12 characters. You can paste a password or use a password manager.'
                  : undefined,
              validate:
                mode === 'create'
                  ? (value) =>
                      value.length < 12 ? 'Enter a password with at least 12 characters' : undefined
                  : undefined,
            },
          ]}
          submitLabel={mode === 'create' ? 'Create an account' : 'Sign in'}
          onComplete={(values) => {
            setSavedEmail(values.email)
            setMode('done')
          }}
        />
      )}
      <Text>
        Contact the team if you have forgotten your password, cannot use email, need to change your
        contact details or want to close an account. In this example no credentials are stored or
        sent.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ExitAPageQuicklyExample() {
  const [ready, setReady] = useState(false)
  return (
    <>
      <SkipLink href="https://www.bbc.co.uk/weather" target="_top">
        Exit this page quickly
      </SkipLink>
      <PatternPage title={ready ? 'Get support safely' : 'Before you continue'}>
        <Button asChild variant="error" alignSelf="start">
          <a href="https://www.bbc.co.uk/weather" target="_top" rel="noreferrer">
            Exit this page
          </a>
        </Button>
        <Text>
          The exit link takes you straight to BBC Weather. It does not remove browser history or
          hide activity from someone monitoring your device or network.
        </Text>
        {!ready ? (
          <>
            <Text>
              If it is safe to continue, use a device you trust. Read the online safety advice
              before sharing personal information.
            </Text>
            <Button alignSelf="start" onClick={() => setReady(true)}>
              Continue to support information
            </Button>
          </>
        ) : (
          <>
            <Text>If you are in immediate danger, call 999 when it is safe to do so.</Text>
            <Link href="https://www.gov.uk/guidance/domestic-abuse-how-to-get-help" target="_top">
              Find domestic abuse support and online safety advice
            </Link>
          </>
        )}
        <Link href="https://www.bbc.co.uk/weather" target="_top" rel="noreferrer">
          Leave this website for BBC Weather
        </Link>
      </PatternPage>
    </>
  )
}

export function NavigateAServiceExample() {
  const [page, setPage] = useState('Applications')
  const pages = ['Applications', 'Messages', 'Account']
  return (
    <>
      <GOVUKHeader.Root>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="https://www.gov.uk/" target="_top">
            <GOVUKHeader.Logotype />
          </GOVUKHeader.Logo>
        </GOVUKHeader.Container>
      </GOVUKHeader.Root>
      <ServiceNavigation.Root aria-label="Garden plot service">
        <ServiceNavigation.ServiceName
          href="#applications"
          onClick={(event) => {
            event.preventDefault()
            setPage('Applications')
          }}
        >
          Manage your garden plot
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav collapsible={false} aria-label="Service sections">
          <ServiceNavigation.List>
            {pages.map((name) => (
              <ServiceNavigation.Item key={name} current={page === name}>
                <ServiceNavigation.Link
                  current={page === name}
                  href={`#${name.toLowerCase()}`}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(name)
                  }}
                >
                  {name}
                </ServiceNavigation.Link>
              </ServiceNavigation.Item>
            ))}
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
      <PatternPage title={page}>
        {page === 'Applications' ? (
          <>
            <Text>You have no applications in this example.</Text>
            <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
              Start an application
            </Link>
          </>
        ) : page === 'Messages' ? (
          <Text>You have no new messages.</Text>
        ) : (
          <>
            <Text>Manage your contact details and account access.</Text>
            <Link href={storyHref('help-users-to', 'create-accounts')} target="_top">
              Explore account options
            </Link>
          </>
        )}
        <ContactLink />
      </PatternPage>
    </>
  )
}

export function ValidationExample() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  return (
    <PatternPage
      title={done ? 'Contact details checked' : 'Your contact details'}
      back={done ? () => setDone(false) : undefined}
    >
      {done ? (
        <Notice>Your example contact details have been checked.</Notice>
      ) : (
        <>
          <Text>
            Leave a field empty or enter an email without an @ sign to try the error recovery. Your
            other answers will stay in place.
          </Text>
          <FieldsForm
            initial={values}
            fields={[
              { key: 'name', label: 'Full name', autoComplete: 'name' },
              {
                key: 'email',
                label: 'Email address',
                type: 'email',
                autoComplete: 'email',
                validate: email,
              },
            ]}
            onComplete={(next) => {
              setValues(next)
              setDone(true)
            }}
          />
        </>
      )}
    </PatternPage>
  )
}

export function StartUsingAServiceExample() {
  return (
    <PatternPage title="Apply for a community garden plot">
      <Text>
        Use this example service to apply for a community garden plot in England. You must be aged
        18 or over.
      </Text>
      <Text>
        There is no application fee. It takes about 10 minutes to apply. The example service would
        contact you within 10 working days.
      </Text>
      <Heading as="h2" size={24}>
        Before you start
      </Heading>
      <Text>
        You will need your name, contact details and home address. Use fictional details in this
        demonstration.
      </Text>
      <Button asChild alignSelf="start">
        <a href={storyHref('help-users-to', 'check-a-service-is-suitable')} target="_top">
          Start now
        </a>
      </Button>
      <Heading as="h2" size={24}>
        Return to an application
      </Heading>
      <Link href={storyHref('help-users-to', 'complete-multiple-tasks')} target="_top">
        Continue your example application
      </Link>
      <Heading as="h2" size={24}>
        Other ways to apply
      </Heading>
      <Text>
        If you cannot apply online, the example support team could help by phone or arrange an
        accessible application format.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}
```

### Pages.tsx

```tsx
import { useState } from 'react'
import {
  Box,
  Button,
  Details,
  Heading,
  Link,
  Panel,
  Stack,
  StepByStep,
  Table,
  Text,
} from 'govuk-chakra'
import { Choice, ContactLink, FieldsForm, Notice, PatternPage, storyHref } from './shared'

export function ConfirmationExample() {
  const [feedback, setFeedback] = useState(false)
  return (
    <PatternPage title="Application complete" heading={false}>
      <Panel heading="Application complete">
        Your reference number<Box as="strong">HDJ2123F</Box>
      </Panel>
      <Text>We have sent a confirmation email to the address you provided.</Text>
      <Heading as="h2" size={24}>
        What happens next
      </Heading>
      <Text>
        We will review your application and email you a decision within 10 working days. You do not
        need to do anything else now.
      </Text>
      <Text>
        Keep your reference number. You will need it if you contact us about your application.
      </Text>
      <ContactLink />
      {feedback ? (
        <Notice>Thank you for your feedback.</Notice>
      ) : (
        <Details.Root>
          <Details.Summary>Give feedback on this service</Details.Summary>
          <Details.Content>
            <FieldsForm
              fields={[
                {
                  key: 'feedback',
                  label: 'How could we improve this service?',
                  hint: 'Do not include personal or financial information.',
                },
              ]}
              onComplete={() => setFeedback(true)}
              submitLabel="Send feedback"
            />
          </Details.Content>
        </Details.Root>
      )}
    </PatternPage>
  )
}

export function CookiesExample() {
  const [analytics, setAnalytics] = useState('No')
  const [saved, setSaved] = useState<string | null>(null)
  return (
    <PatternPage title="Cookies">
      {saved !== null && (
        <Notice>
          Your cookie preferences have been saved for this example. Analytics cookies:{' '}
          {saved === 'Yes' ? 'accepted' : 'rejected'}.
        </Notice>
      )}
      <Text>
        Cookies are small files saved on your phone, tablet or computer when you visit a website.
      </Text>
      <Text>
        This example describes an illustrative service. It does not set cookies or run analytics.
      </Text>
      <Heading as="h2" size={24}>
        Essential cookies
      </Heading>
      <Text>
        These cookies keep the service secure and remember your cookie preferences. They are needed
        for the service to work.
      </Text>
      <CookieTable
        caption="Example essential cookies"
        rows={[
          [
            'service_session',
            'Keeps your answers together while you use the service',
            'When you close your browser',
          ],
          ['cookie_preferences', 'Remembers your cookie choices', '1 year'],
        ]}
      />
      <Heading as="h2" size={24}>
        Analytics cookies (optional)
      </Heading>
      <Text>
        With your permission, we would use analytics cookies to understand how people use the
        service. We would not use these cookies to identify you.
      </Text>
      <CookieTable
        caption="Example analytics cookies"
        rows={[['service_analytics', 'Counts visits to help improve the service', '1 year']]}
      />
      <Box asChild>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSaved(analytics)
          }}
        >
          <Stack gap={6} align="start">
            <Choice
              legend="Do you want to accept analytics cookies?"
              options={['Yes', 'No']}
              value={analytics}
              onChange={(value) => {
                setAnalytics(value)
                setSaved(null)
              }}
            />
            <Button type="submit">Save cookie preferences</Button>
          </Stack>
        </form>
      </Box>
    </PatternPage>
  )
}

function CookieTable({ caption, rows }: { caption: string; rows: string[][] }) {
  return (
    <Box
      overflowX="auto"
      tabIndex={0}
      role="region"
      aria-label={caption}
      _focusVisible={{ outline: '3px solid', outlineColor: 'focus', outlineOffset: '3px' }}
    >
      <Table.Root>
        <Table.Caption>{caption}</Table.Caption>
        <Table.Header>
          <Table.Row>
            {['Name', 'Purpose', 'Expiry'].map((label) => (
              <Table.ColumnHeader key={label} scope="col">
                {label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map(([name, purpose, expiry]) => (
            <Table.Row key={name}>
              <Table.RowHeader scope="row">{name}</Table.RowHeader>
              <Table.Cell>{purpose}</Table.Cell>
              <Table.Cell>{expiry}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export function InterruptionExample() {
  const [stage, setStage] = useState<'question' | 'interrupt' | 'continued'>('question')
  const [values, setValues] = useState<Record<string, string>>({ amount: '25000' })
  if (stage === 'continued')
    return (
      <PatternPage title="Income confirmed" back={() => setStage('interrupt')}>
        <Notice>
          Your monthly income of £{Number(values.amount).toLocaleString('en-GB')} has been recorded
          for this example.
        </Notice>
        <Text>You can now continue your application.</Text>
        <Link href={storyHref('help-users-to', 'check-answers')} target="_top">
          Continue to check your answers
        </Link>
      </PatternPage>
    )
  if (stage === 'interrupt')
    return (
      <PatternPage
        title="Check your monthly income"
        heading={false}
        back={() => setStage('question')}
      >
        <Panel bg="primary.500" heading="Check your monthly income">
          <Stack gap={6} align="center">
            <Text color="common.white" fontSize={24}>
              You entered £{Number(values.amount).toLocaleString('en-GB')} per month.
            </Text>
            <Text color="common.white">
              This is higher than most monthly incomes. We use this amount to decide how much
              support you can get. Check that you have not entered your yearly income.
            </Text>
            <Button variant="inverse" onClick={() => setStage('continued')}>
              Confirm this is my monthly income
            </Button>
            <Button variant="inverse" onClick={() => setStage('question')}>
              Change my monthly income
            </Button>
          </Stack>
        </Panel>
      </PatternPage>
    )
  return (
    <PatternPage title="What is your monthly income?" heading={false}>
      <FieldsForm
        pageLabel
        initial={values}
        fields={[
          {
            key: 'amount',
            label: 'What is your monthly income?',
            hint: 'Enter the amount in pounds before tax. For this example, amounts over £20,000 prompt a check.',
            inputMode: 'numeric',
            width: '10',
            validate: (value) =>
              /^\d+(\.\d{1,2})?$/.test(value.trim())
                ? undefined
                : 'Enter an amount in pounds, like 2500 or 2500.50',
          },
        ]}
        onComplete={(answers) => {
          setValues(answers)
          setStage(Number(answers.amount) > 20000 ? 'interrupt' : 'continued')
        }}
      />
    </PatternPage>
  )
}

export function PageNotFoundExample() {
  return (
    <PatternPage title="Page not found">
      <Text>If you typed the web address, check it is correct.</Text>
      <Text>If you pasted the web address, check you copied the entire address.</Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Go to the service start page
      </Link>
      <ContactLink />
    </PatternPage>
  )
}

export function QuestionExample() {
  const [answer, setAnswer] = useState<Record<string, string>>({})
  const [complete, setComplete] = useState(false)
  return complete ? (
    <PatternPage title="Check your answer" back={() => setComplete(false)}>
      <Text>Your full name is {answer.name}.</Text>
      <Button alignSelf="start" variant="secondary" onClick={() => setComplete(false)}>
        Change your name
      </Button>
      <Link href={storyHref('help-users-to', 'check-answers')} target="_top">
        Continue to check all answers
      </Link>
    </PatternPage>
  ) : (
    <PatternPage title="What is your full name?" heading={false}>
      <FieldsForm
        pageLabel
        initial={answer}
        fields={[
          {
            key: 'name',
            label: 'What is your full name?',
            autoComplete: 'name',
            hint: 'Include any middle names.',
          },
        ]}
        onComplete={(values) => {
          setAnswer(values)
          setComplete(true)
        }}
      />
    </PatternPage>
  )
}

export function ServiceUnavailableExample() {
  return (
    <PatternPage title="Sorry, the service is unavailable">
      <Text>
        You will be able to use the service from 9am on 15 September 2026 (British Summer Time).
      </Text>
      <Text>We have temporarily closed the service to update the application rules.</Text>
      <Text>
        If you saved an application, your answers will be available when the service reopens. You
        will have 30 days from the date you saved them to finish.
      </Text>
      <Text>
        If you need to apply before the service reopens, contact the service team for help.
      </Text>
      <ContactLink />
    </PatternPage>
  )
}

export function ProblemWithServiceExample() {
  return (
    <PatternPage title="Sorry, there is a problem with the service">
      <Text>Try again later.</Text>
      <Text>
        Your saved answers are available for 30 days from the date you last saved them. Any answers
        you entered since then may not have been saved.
      </Text>
      <Link href={storyHref('help-users-to', 'start-using-a-service')} target="_top">
        Return to the service start page
      </Link>
      <ContactLink />
    </PatternPage>
  )
}

const steps = [
  {
    title: 'Check if you can get support',
    text: 'Find out whether this service is suitable before you apply.',
    link: 'Check if this service is suitable',
    slug: 'check-a-service-is-suitable',
  },
  {
    title: 'Prepare your application',
    text: 'Check what information you need and how long an application takes.',
    link: 'Read about applying for support',
    slug: 'start-using-a-service',
  },
  {
    title: 'Apply for support',
    text: 'Complete the application tasks and check your answers before sending your application.',
    link: 'Start your application tasks',
    slug: 'complete-multiple-tasks',
  },
]

export function StepByStepExample() {
  return (
    <PatternPage title="Apply for support: step by step">
      <Text>
        Check whether you can get support, prepare the information you need and make an application.
      </Text>
      <StepByStep
        items={steps.map((step) => ({
          id: step.slug,
          title: step.title,
          content: (
            <Stack gap={3}>
              <Text>{step.text}</Text>
              <Link href={storyHref('help-users-to', step.slug)} target="_top">
                {step.link}
              </Link>
            </Stack>
          ),
        }))}
      />
      <Box
        as="aside"
        borderTop="2px solid"
        borderColor="primary.500"
        pt={4}
        aria-label="Related page navigation example"
      >
        <Heading as="h2" size={24}>
          Part of Apply for support: step by step
        </Heading>
        <Text mt={3}>Related-page navigation example</Text>
        <Box as="ol" pl={6} mt={3}>
          {steps.map((step) => (
            <Box as="li" key={step.slug} mb={3}>
              <Link href={storyHref('help-users-to', step.slug)} target="_top">
                {step.title}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </PatternPage>
  )
}
```
