import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'

const srcPath = (relativePath = '.') =>
  fileURLToPath(new URL(`../src/${relativePath}`, import.meta.url))

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
    '@storybook/addon-mcp',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    viewport: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  core: {
    disableTelemetry: true,
    disableProjectJson: true,
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias ?? {}),
          '@': srcPath(),
          '@/components': srcPath('components'),
          '@/constant': srcPath('app/constant/index.ts'),
          '@/hoc': srcPath('app/hoc/index.ts'),
          '@/internationalization': srcPath('internationalization/index.ts'),
          '@/providers': srcPath('providers/index.ts'),
          '@/theme': srcPath('theme/index.ts'),
          '@/types': srcPath('types/index.ts'),
          '@/utils': srcPath('utils/index.ts'),
        },
      },
    }
  },
}

export default config
