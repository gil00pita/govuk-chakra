import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'GOV.UK/Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use breadcrumbs to help users understand where they are in a website and move back through the site structure.\n\n' +
          'The final breadcrumb should describe the current page and should not be a link.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System breadcrumbs documentation: https://design-system.service.gov.uk/components/breadcrumbs/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumbs width="720px">
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Passports, travel and living abroad</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Travel abroad</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Foreign travel advice</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item current>
          <Breadcrumbs.Current>Spain</Breadcrumbs.Current>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  ),
}

export const Inverse: Story = {
  render: () => (
    <Breadcrumbs width="720px" inverse bg="primary.500" px={4} py={3}>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Passports, travel and living abroad</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Travel abroad</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item current>
          <Breadcrumbs.Current>Spain</Breadcrumbs.Current>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  ),
}
