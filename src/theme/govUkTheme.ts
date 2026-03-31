import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'
import { govukFontSizes } from '@/utils/px-to-rem'
import avatarRecipe from '@/components/Avatar/Avatar.recipe'
import comboboxRecipe from '@/components/Combobox/Combobox.recipe'
import kbdRecipe from '@/components/Kbd/Kbd.recipe'
import listboxRecipe from '@/components/Listbox/Listbox.recipe'
import highlightRecipe from '@/components/Highlight/Highlight.recipe'
import codeRecipe from '@/components/Code/Code.recipe'
import timelineRecipe from '@/components/Timeline/Timeline.recipe'
import treeViewRecipe from '@/components/TreeView/TreeView.recipe'

const govUkThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: 'govuk', // changes --chakra-* to --govuk-*
  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
      fontSize: govukFontSizes[19],
    },
  },
  theme: {
    // slotRecipe: multiple style objects keyed by slots like root, input, label, item, content.
    slotRecipes: {
      avatar: avatarRecipe,
      combobox: comboboxRecipe,
      listbox: listboxRecipe,
      timeline: timelineRecipe,
      treeView: treeViewRecipe,
    },
    // recipe: one style object, one component surface.
    recipes: {
      code: codeRecipe,
      highlight: highlightRecipe,
      kbd: kbdRecipe,
    },
    breakpoints: {
      sm: '480px',
      md: '640px', // default in GOV.UK but in chakra-ui is 768px, left it 640px to match GOV.UK
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    tokens: {
      colors,
      fonts,
      radii: {
        none: { value: '0' },
        sm: { value: '0' },
        md: { value: '0' },
        lg: { value: '0' },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            base: '{colors.govuk.blue}',
            _dark: '{colors.govuk.darkBlue}',
          },
        },
        bg: {
          value: {
            base: '{colors.govuk.white}',
            _dark: '{colors.grey.900}',
          },
        },
        'bg.muted': {
          value: {
            base: '{colors.govuk.lightGrey}',
            _dark: '{colors.grey.800}',
          },
        },
        'bg.subtle': {
          value: {
            base: '{colors.grey.50}',
            _dark: '{colors.grey.800}',
          },
        },
        'bg.panel': {
          value: {
            base: '{colors.common.white}',
            _dark: '{colors.grey.800}',
          },
        },
        'bg.disabled': {
          value: {
            base: '{colors.grey.100}',
            _dark: '{colors.grey.900}',
          },
        },
        fg: {
          value: {
            base: '{colors.govuk.text}',
            _dark: '{colors.grey.50}',
          },
        },
        'fg.muted': {
          value: {
            base: '{colors.govuk.secondaryText}',
            _dark: '{colors.grey.100/80}',
          },
        },
        'fg.inverted': {
          value: {
            base: '{colors.govuk.white}',
            _dark: '{colors.govuk.text}',
          },
        },
        'fg.disabled': {
          value: {
            base: '{colors.grey.700}',
            _dark: '{colors.grey.300}',
          },
        },
        'fg.link': {
          value: {
            base: '{colors.primary.600}',
            _dark: '{colors.primary.200}',
          },
        },
        'fg.error': {
          value: {
            base: '{colors.red.500}',
            _dark: '{colors.red.400}',
          },
        },
        border: {
          value: {
            base: '{colors.govuk.border}',
            _dark: '{colors.grey.600}',
          },
        },
        'border.input': {
          value: {
            base: '{colors.common.black}',
            _dark: '{colors.common.white}',
          },
        },
        'border.emphasized': {
          value: {
            base: '{colors.grey.400}',
            _dark: '{colors.grey.600}',
          },
        },
        'border.muted': {
          value: {
            base: '{colors.grey.300}',
            _dark: '{colors.grey.600}',
          },
        },
        'border.subtle': {
          value: {
            base: '{colors.grey.100}',
            _dark: '{colors.grey.700}',
          },
        },
        'border.error': {
          value: {
            base: '{colors.red.500}',
            _dark: '{colors.red.400}',
          },
        },
        'border.focus': {
          value: {
            base: '{colors.yellow.500}',
            _dark: '{colors.yellow.500}',
          },
        },
        link: {
          value: {
            base: '{colors.govuk.link}',
            _dark: '{colors.primary.200}',
          },
        },
        'link.hover': {
          value: {
            base: '{colors.govuk.linkHover}',
            _dark: '{colors.primary.100}',
          },
        },
        'link.visited': {
          value: {
            base: '{colors.govuk.linkVisited}',
            _dark: '{colors.purple.200}',
          },
        },
        'link.active': {
          value: {
            base: '{colors.govuk.linkActive}',
            _dark: '{colors.grey.50}',
          },
        },
        focus: {
          value: {
            base: '{colors.yellow.500}',
            _dark: '{colors.yellow.500}',
          },
        },
        'focus.text': {
          value: {
            base: '{colors.govuk.focusText}',
            _dark: '{colors.govuk.text}',
          },
        },
        danger: {
          value: {
            base: '{colors.govuk.red}',
            _dark: '{colors.red.300}',
          },
        },
        info: {
          value: {
            base: '{colors.govuk.blue}',
            _dark: '{colors.primary.200}',
          },
        },
        success: {
          value: {
            base: '{colors.govuk.green}',
            _dark: '{colors.green.300}',
          },
        },
        subtleBg: {
          value: {
            base: '{colors.govuk.lightGrey}',
            _dark: '{colors.grey.800}',
          },
        },
      },
    },
  },
})

export const govUkTheme = createSystem(defaultConfig, govUkThemeConfig)
