# GOV.UK Chakra

`govuk-chakra` is a React component library that applies a GOV.UK-style skin on top of Chakra UI.

It is not a replacement for Chakra. The point is to keep Chakra's composability, theme system, and React ergonomics, while shipping a set of opinionated components and tokens that feel closer to the GOV.UK Design System.

## What This Project Is

- A Chakra-based design skin for React applications
- A set of GOV.UK-flavoured components such as `GovUKHeader`, `GovUKFooter`, `CookieBanner`, `TaskList`, `SummaryList`, and form primitives
- A reusable Chakra system theme exported as `govUkTheme`
- A package that can be published to a package registry and consumed as a library instead of only being run as a local app

## What This Project Is Not

- An official GOV.UK Design System package
- A drop-in clone of `govuk-frontend`
- A full application framework
- A replacement for the GOV.UK Prototype Kit

## Why Build It This Way

The design choice here is deliberate:

- Chakra already solves a lot of React UI plumbing well: composition, theming, tokens, accessibility primitives, and styling ergonomics.
- GOV.UK has a strong visual language and interaction baseline that many public sector products want.
- Combining both gives you a React-first developer experience without forcing teams back into Nunjucks macros or prototype-first workflows.

## Installation

```bash
yarn add govuk-chakra @chakra-ui/react @emotion/react @emotion/styled framer-motion react react-dom
```

## Usage

Wrap your app with the exported provider:

```tsx
import { GovUKProvider } from 'govuk-chakra'

export function AppRoot() {
  return (
    <GovUKProvider>
      <App />
    </GovUKProvider>
  )
}
```

## How Exports Work

This library exposes a single import surface.

It re-exports:

- all Chakra UI components
- then the local GOV.UK-styled wrapper components with the same names

That means wrapped local components take precedence over the Chakra originals for those names.

Example:

```tsx
import { Box, Stack, Heading, Button, Table } from 'govuk-chakra'
```

In that import:

- `Box` and `Stack` come from Chakra UI
- `Heading`, `Button`, and `Table` come from this library's local GOV.UK-styled wrappers

## Importing Components

Import everything from the main package entry:

```tsx
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  Table,
  GovUKHeader,
  GovUKFooter,
  Textinput,
  Separator,
} from 'govuk-chakra'
```

This is the intended usage model:

- use Chakra primitives directly from `govuk-chakra`
- use GOV.UK-wrapped components from the same import
- let the library decide which names are overridden locally

If a component has a local wrapper, the local wrapper is what consumers receive.

If a component does not have a local wrapper, the Chakra UI export is used as-is.

## Example

```tsx
import { Box, Heading, Button, Text, GovUKHeader } from 'govuk-chakra'

export function ExamplePage() {
  return (
    <Box>
      <GovUKHeader />
      <Heading size={48}>Service title</Heading>
      <Text fontSize={19}>This page uses Chakra layout primitives and GOV.UK-styled wrappers from the same package.</Text>
      <Button>Continue</Button>
    </Box>
  )
}
```

## Entry Points

- `govuk-chakra`
  Single combined barrel with Chakra UI exports plus local GOV.UK-styled overrides

- `govuk-chakra/chakra`
  Raw Chakra UI passthrough only, if you need the unmodified Chakra export surface explicitly

## Theme

If you want direct access to the Chakra system rather than the convenience provider:

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import { govUkTheme } from 'govuk-chakra'

export function AppRoot() {
  return (
    <ChakraProvider value={govUkTheme}>
      <App />
    </ChakraProvider>
  )
}
```

## Publishing

This repo is prepared to publish as a package.

Core package outputs:

- ESM bundle: `dist/index.mjs`
- CommonJS bundle: `dist/index.cjs`
- Chakra passthrough bundle: `dist/chakra.mjs`
- Type declarations: `dist/types`

Useful commands:

```bash
yarn build
yarn pack --dry-run
yarn publish
```

## Compared With GOV.UK Prototype Kit

### ✅ Pros

- Better fit for production React apps
- Native TypeScript support across the component surface
- Chakra theming and composition remain available
- Easier to integrate with modern React app architectures
- Lets teams mix GOV.UK-flavoured components with lower-level Chakra primitives
- More natural path for design-system ownership inside a React codebase

### ❌ Cons

- Less batteries-included than the Prototype Kit
- You do not get the same ready-made page templates, routing conventions, or prototype workflow
- You are responsible for more application architecture decisions
- There is a smaller support ecosystem than the official GOV.UK tooling
- Visual parity with GOV.UK needs active maintenance as the upstream design system evolves
- Some teams may prefer the Prototype Kit's speed for early service prototyping

## When To Use This Instead Of The Prototype Kit

Use this project when:

- You are building a React product, not just a prototype
- Your team already uses Chakra UI or wants a component-driven front-end stack
- You want GOV.UK visual language without adopting the full Prototype Kit workflow
- You need a publishable internal or public package

Use the GOV.UK Prototype Kit when:

- The primary goal is fast service prototyping
- Your team is working in the standard GOV.UK prototype workflow
- You want the shortest path to testing service flows with minimal front-end setup

## Status

This project should be treated as a custom design-system layer built on Chakra UI. That is useful, but it also means consumers should expect to maintain alignment with both Chakra and the GOV.UK Design System over time.
