import type { Meta, StoryObj } from '@storybook/react-vite'

import { GOVUKFooter } from './GOVUKFooter'
import { Box, HStack, Image, LinkBox, LinkOverlay, VStack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'
import { Link } from '../Link'

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
          <svg
            focusable="false"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 60"
            height="30"
            width="32"
            fill="currentcolor"
            className="footer-crown"
          >
            <circle cx="20" cy="17.6" r="3.7"></circle>
            <circle cx="10.2" cy="23.5" r="3.7"></circle>
            <circle cx="3.7" cy="33.2" r="3.7"></circle>
            <circle cx="31.7" cy="30.6" r="3.7"></circle>
            <circle cx="43.3" cy="17.6" r="3.7"></circle>
            <circle cx="53.2" cy="23.5" r="3.7"></circle>
            <circle cx="59.7" cy="33.2" r="3.7"></circle>
            <circle cx="31.7" cy="30.6" r="3.7"></circle>
            <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z"></path>
          </svg>
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
            <HStack>
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
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="govuk-footer__licence-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 483.2 195.7"
                    height="17"
                    width="41"
                  >
                    <path
                      fill="currentColor"
                      d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
                    ></path>
                  </svg>
                </Box>
                <HStack
                  alignItems={'flex-start'}
                  w={'full'}
                  justifyContent="space-between"
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
                    >
                      <Image src="/govuk-crest.svg" />
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
