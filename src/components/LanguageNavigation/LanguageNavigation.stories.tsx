import { Box } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ServiceNavigation } from '@/components/ServiceNavigation'
import { LanguageNavigation } from './LanguageNavigation'

const meta: Meta<typeof LanguageNavigation> = {
  title: 'GOV.UK/Components/Language navigation',
  component: LanguageNavigation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use Language navigation when you provide the same service or page content in more than one language. Use the native name of each language and translate the navigation label for the current page.\n\n' +
          'This component is currently in trial in the GOV.UK Design System. For current guidance, see the GOV.UK Design System language navigation documentation: https://design-system.service.gov.uk/components/language-navigation/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <LanguageNavigation.Root>
      <LanguageNavigation.List>
        <LanguageNavigation.Item>
          <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/cy" lang="cy">
            Cymraeg
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
      </LanguageNavigation.List>
    </LanguageNavigation.Root>
  ),
}

export const MultipleLanguages: Story = {
  render: () => (
    <LanguageNavigation.Root>
      <LanguageNavigation.List>
        <LanguageNavigation.Item>
          <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/fr" lang="fr">
            Français
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/hi" lang="hi">
            हिंदी
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/ja" lang="ja">
            日本語
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/ur" lang="ur" dir="rtl">
            اردو
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href="#/zh" lang="zh">
            中文
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
      </LanguageNavigation.List>
    </LanguageNavigation.Root>
  ),
}

export const WithLanguageDescription: Story = {
  render: () => (
    <LanguageNavigation.Root landmarkLabel="Dewis iaith" lang="cy">
      <LanguageNavigation.List>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link
            href="#/en"
            lang="en"
            languageDescriptionText="Change the language to English"
          >
            English
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Current lang="cy">Cymraeg</LanguageNavigation.Current>
        </LanguageNavigation.Item>
      </LanguageNavigation.List>
    </LanguageNavigation.Root>
  ),
}

export const Inverse: Story = {
  render: () => (
    <Box bg="primary.700" p={6}>
      <LanguageNavigation.Root inverse mb={0}>
        <LanguageNavigation.List>
          <LanguageNavigation.Item>
            <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
          </LanguageNavigation.Item>
          <LanguageNavigation.Item>
            <LanguageNavigation.Link href="#/cy" lang="cy">
              Cymraeg
            </LanguageNavigation.Link>
          </LanguageNavigation.Item>
        </LanguageNavigation.List>
      </LanguageNavigation.Root>
    </Box>
  ),
}

export const WithinServiceNavigation: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.ServiceContainer>
        <ServiceNavigation.ServiceName href="#">Service name</ServiceNavigation.ServiceName>
        <ServiceNavigation.Toggle />
      </ServiceNavigation.ServiceContainer>
      <ServiceNavigation.Nav>
        <ServiceNavigation.List>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href="#">Item 1</ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item current>
            <ServiceNavigation.Link href="#" current>
              Item 2
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
        </ServiceNavigation.List>
      </ServiceNavigation.Nav>
      <LanguageNavigation.Root ml={{ base: '15px', md: 'auto' }} mr={{ base: '15px', md: 0 }}>
        <LanguageNavigation.List>
          <LanguageNavigation.Item>
            <LanguageNavigation.Current lang="en">English</LanguageNavigation.Current>
          </LanguageNavigation.Item>
          <LanguageNavigation.Item>
            <LanguageNavigation.Link href="#/cy" lang="cy">
              Cymraeg
            </LanguageNavigation.Link>
          </LanguageNavigation.Item>
        </LanguageNavigation.List>
      </LanguageNavigation.Root>
    </ServiceNavigation.Root>
  ),
}
