import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    // add other addons as needed
    '@storybook/addon-themes',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  core: {
    disableTelemetry: true,
    disableProjectJson: true,
  },
}

export default config
