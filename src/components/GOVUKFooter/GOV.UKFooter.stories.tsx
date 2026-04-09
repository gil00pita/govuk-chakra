import type { Meta, StoryObj } from '@storybook/react-vite'

import { GOVUKFooter } from './GOVUKFooter'
import { Box, HStack, LinkOverlay, VStack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'
import { Link } from '../Link'
import { GOVUKCrown } from '../GOVUKCrown'
import { GOVUKOGL } from '../GOVUKOGL'
import { GOVUKCrest } from '../GOVUKCrest'

const meta: Meta = {
  title: 'GOV.UK/Components/GOV.UK - Footer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'GOV.UK footers provide links to important information and services, such as contact details, accessibility information, and legal notices.\n\n' +
          'Use the footer to provide users with easy access to important information and services, and to help them navigate your website.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System footer documentation: https://design-system.service.gov.uk/components/footer/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GOVUKFooter>
      <GOVUKFooter.Container>
        <Box mb={pxToRem(25)}>
          <GOVUKCrown />
        </Box>
        <GOVUKFooter.Navigation>
          <GOVUKFooter.Section>
            <GOVUKFooter.SectionTitle>Services and information</GOVUKFooter.SectionTitle>
            <GOVUKFooter.List>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Benefits</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Births, death, marriages and care</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Business and self-employed</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
            </GOVUKFooter.List>
          </GOVUKFooter.Section>

          <GOVUKFooter.Section>
            <GOVUKFooter.SectionTitle>Government activity</GOVUKFooter.SectionTitle>
            <GOVUKFooter.List>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Departments</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">News</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Guidance and regulation</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
            </GOVUKFooter.List>
          </GOVUKFooter.Section>

          <GOVUKFooter.Section>
            <GOVUKFooter.SectionTitle>Government activity</GOVUKFooter.SectionTitle>
            <GOVUKFooter.List>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Departments</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">News</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
              <GOVUKFooter.ListItem>
                <GOVUKFooter.Link href="#">Guidance and regulation</GOVUKFooter.Link>
              </GOVUKFooter.ListItem>
            </GOVUKFooter.List>
          </GOVUKFooter.Section>
        </GOVUKFooter.Navigation>

        <GOVUKFooter.Meta>
          <VStack alignItems={'flex-start'}>
            <HStack
              w={'full'}
              justifyContent={{ base: 'center', md: 'space-between' }}
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
            >
              <VStack
                w={'full'}
                justifyContent="space-between"
                flexWrap="wrap"
                alignItems={'flex-start'}
                rowGap={pxToRem(16)}
              >
                <GOVUKFooter.MetaItem>
                  <GOVUKFooter.Link href="#">Help</GOVUKFooter.Link>
                  <GOVUKFooter.Link href="#">Cookies</GOVUKFooter.Link>
                  <GOVUKFooter.Link href="#">Contact</GOVUKFooter.Link>
                  <GOVUKFooter.Link href="#">Terms and conditions</GOVUKFooter.Link>
                  <GOVUKFooter.Link href="#">Rhestr o Wasanaethau Cymraeg</GOVUKFooter.Link>
                </GOVUKFooter.MetaItem>
                <Box>
                  <GOVUKFooter.MetaText>
                    Built by the{' '}
                    <GOVUKFooter.Link href="#">Government Digital Service</GOVUKFooter.Link>
                  </GOVUKFooter.MetaText>
                </Box>

                <Box>
                  <GOVUKOGL />
                </Box>

                <HStack
                  alignItems={'flex-start'}
                  w={'full'}
                  flexWrap="wrap"
                  rowGap={pxToRem(16)}
                  display={{ base: 'none', md: 'flex' }}
                  justifyContent="space-between"
                >
                  <GOVUKFooter.MetaText>
                    All content is available under the{' '}
                    <GOVUKFooter.Link href="#">Open Government Licence v3.0</GOVUKFooter.Link>,
                    except where otherwise stated.
                  </GOVUKFooter.MetaText>
                </HStack>
              </VStack>
              <HStack flexShrink={1} minW={pxToRem(136)}>
                <GOVUKFooter.MetaItem position={'relative'}>
                  <LinkOverlay asChild>
                    <Link
                      href="#"
                      display="flex"
                      alignItems="center"
                      gap={pxToRem(10)}
                      flexDirection={'column'}
                      noStyle
                    >
                      <GOVUKCrest />
                      <GOVUKFooter.MetaText>© Crown copyright</GOVUKFooter.MetaText>
                    </Link>
                  </LinkOverlay>
                </GOVUKFooter.MetaItem>
              </HStack>
            </HStack>
          </VStack>
        </GOVUKFooter.Meta>
      </GOVUKFooter.Container>
    </GOVUKFooter>
  ),
}

export const MetaOnly: Story = {
  render: () => (
    <GOVUKFooter>
      <GOVUKFooter.Container>
        <GOVUKFooter.Meta>
          <GOVUKFooter.MetaItem>
            <GOVUKFooter.Link href="#">Accessibility statement</GOVUKFooter.Link>
            <GOVUKFooter.Link href="#">Privacy notice</GOVUKFooter.Link>
          </GOVUKFooter.MetaItem>

          <GOVUKFooter.MetaText>© Crown copyright</GOVUKFooter.MetaText>
        </GOVUKFooter.Meta>
      </GOVUKFooter.Container>
    </GOVUKFooter>
  ),
}
