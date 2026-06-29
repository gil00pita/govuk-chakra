import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'

const srcPath = (relativePath = '.') =>
  fileURLToPath(new URL(`../src/${relativePath}`, import.meta.url))

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.docs.mdx',
    '../src/components/**/*.docs.mdx',
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
    reactDocgenTypescriptOptions: {
      exclude: ['**/*.stories.tsx', '**/.storybook/preview.tsx'],
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
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
      build: {
        ...config.build,
        rolldownOptions: {
          ...config.build?.rolldownOptions,
          experimental: {
            ...config.build?.rolldownOptions?.experimental,
            // Storybook's Vite/Rolldown production build can optimize the
            // @zag-js/i18n-utils barrel into an invalid reference
            // (`i18nCache$2 is not defined`), preventing the preview iframe
            // from booting in visual tests.
            lazyBarrel: false,
          },
        },
      },
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
