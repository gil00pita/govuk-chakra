import type { Meta, StoryObj } from '@storybook/react-vite'

import { GOVUKHeader } from './GOVUKHeader'
import { ServiceNavigation } from '@/components/ServiceNavigation'
import { Breadcrumbs } from '../Breadcrumbs'
import { VStack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'
import { PhaseBanner } from '..'

const meta: Meta = {
  title: 'GOV.UK/Components/GOV.UK - Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The GOV.UK header is the global masthead used across GOV.UK. The current pattern is logo-first, with optional utility links aligned to the right.\n\n' +
          'For service-specific names and section navigation, pair it with the `ServiceNavigation` component instead of placing service navigation inside the header.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System header documentation: https://design-system.service.gov.uk/components/header/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <GOVUKHeader>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="#" />
        </GOVUKHeader.Container>
      </GOVUKHeader>
    </>
  ),
}

export const WithServiceName: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.Logo href="#" />
      </GOVUKHeader.Container>
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="#">Service name</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="#" current>
                Navigation item 1
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 2</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 3</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 4</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
    </GOVUKHeader>
  ),
}

export const WithBreadcrumbs: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.Logo href="#" />
      </GOVUKHeader.Container>
      <VStack
        className="app-container-wrapper"
        maxW="1200px"
        paddingTop={{ base: '30px', md: '15px' }}
        paddingBottom={{ base: '50px', md: '20px' }}
        marginLeft="auto"
        marginRight="auto"
        width="100%"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
      >
        <Breadcrumbs w="full">
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
      </VStack>
    </GOVUKHeader>
  ),
}

export const WithServiceNameAndBreadcrumbs: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.Logo href="#" />
      </GOVUKHeader.Container>
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="#">Service name</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="#" current>
                Navigation item 1
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 2</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 3</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 4</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
      <VStack
        className="app-container-wrapper"
        maxW="1200px"
        paddingTop={{ base: '30px', md: '15px' }}
        paddingBottom={{ base: '50px', md: '20px' }}
        marginLeft="auto"
        marginRight="auto"
        width="100%"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
      >
        <Breadcrumbs w="full">
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
      </VStack>
    </GOVUKHeader>
  ),
}
export const WithPhaseBannerAndServiceNameAndBreadcrumbs: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.Logo href="#" />
      </GOVUKHeader.Container>
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="#">Service name</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="#" current>
                Navigation item 1
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 2</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 3</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 4</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
      <PhaseBanner.Root phase="alpha">
        <PhaseBanner.Text>
          This service is in alpha. Your feedback will help us improve it before wider testing.
        </PhaseBanner.Text>
      </PhaseBanner.Root>
      <Breadcrumbs>
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
    </GOVUKHeader>
  ),
}
