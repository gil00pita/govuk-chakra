import type { Meta, StoryObj } from '@storybook/react-vite'

import { GenericHeader } from './GenericHeader'
import { ServiceNavigation } from '@/components/ServiceNavigation'

const meta: Meta = {
  title: 'GOV.UK/Components/Generic header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Use the Generic Header component for public-facing government services that are not part of GOV.UK.\n\n' +
          'It provides a neutral header for your own brand logo and homepage link. Do not use the GOV.UK crown, GOV.UK logotype, GOV.UK blue, or GDS Transport typeface in this header.\n\n' +
          'For service names and navigation links, pair it with the `ServiceNavigation` component instead of placing them inside the header. For GOV.UK guidance, see the Generic header documentation: https://design-system.service.gov.uk/components/generic-header/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.LogoWrapper>
          <GenericHeader.Logo href="#">
            <GenericHeader.Logomark />
            Service name
          </GenericHeader.Logo>
        </GenericHeader.LogoWrapper>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
}

export const TextOnlyLogo: Story = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.LogoWrapper>
          <GenericHeader.Logo href="#" logoText="Department service" />
        </GenericHeader.LogoWrapper>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
}

export const WithServiceNavigation: Story = {
  render: () => (
    <>
      <GenericHeader.Root>
        <GenericHeader.Container>
          <GenericHeader.LogoWrapper>
            <GenericHeader.Logo href="#">
              <GenericHeader.Logomark />
              Department service
            </GenericHeader.Logo>
          </GenericHeader.LogoWrapper>
        </GenericHeader.Container>
      </GenericHeader.Root>
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="#">Apply for a thing</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="#" current>
                Overview
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Eligibility</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Applications</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
    </>
  ),
}
