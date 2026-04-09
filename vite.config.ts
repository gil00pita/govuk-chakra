/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { ViteMcp } from 'vite-plugin-mcp'

// https://vitejs.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const libraryEntries = {
  index: path.resolve(dirname, 'src/lib.ts'),
  chakra: path.resolve(dirname, 'src/govuk-chakra.ts'),
  theme: path.resolve(dirname, 'src/theme-entry.ts'),
  provider: path.resolve(dirname, 'src/provider-entry.ts'),
  charts: path.resolve(dirname, 'src/charts-entry.ts'),
  editor: path.resolve(dirname, 'src/editor-entry.ts'),
  utils: path.resolve(dirname, 'src/utils-entry.ts'),
}

const externalPackages = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/server',
  'react-is',
  '@emotion/react',
  '@emotion/styled',
  'framer-motion',
  '@chakra-ui/charts',
  'recharts',
  'recharts-scale',
  'shiki',
  '@tiptap/core',
  '@tiptap/pm',
  '@tiptap/pm/state',
  '@tiptap/pm/view',
  '@tiptap/pm/model',
  '@tiptap/pm/transform',
  '@tiptap/react',
  '@tiptap/starter-kit',
]

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint . --no-color',
        useFlatConfig: true,
      },
    }),
    ViteMcp(),
  ],
  publicDir: false,
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    lib: {
      entry: libraryEntries,
    },
    rollupOptions: {
      external: (id) =>
        externalPackages.includes(id) ||
        /^react(\/|$)/.test(id) ||
        /^react-dom(\/|$)/.test(id) ||
        /^@emotion\//.test(id) ||
        /^@chakra-ui\//.test(id) ||
        /^@tiptap\//.test(id) ||
        /^recharts(\/|$)/.test(id) ||
        /^shiki(\/|$)/.test(id) ||
        /^framer-motion(\/|$)/.test(id),
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          exports: 'named',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          exports: 'named',
        },
      ],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    setupFiles: ['src/setupTests.ts'],
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['src/**/*.stories.{ts,tsx}'],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
