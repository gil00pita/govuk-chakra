import type { Meta, StoryObj } from '@storybook/react'

import { GovUKFooter } from './GovUKFooter'

const meta: Meta = {
  title: 'GOV.UK/GOV.UK - Footer',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GovUKFooter>
      <GovUKFooter.Container>
        <GovUKFooter.Navigation>
          <GovUKFooter.Section>
            <GovUKFooter.SectionTitle>Services and information</GovUKFooter.SectionTitle>
            <GovUKFooter.List>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">Benefits</GovUKFooter.Link>
              </GovUKFooter.ListItem>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">Births, death, marriages and care</GovUKFooter.Link>
              </GovUKFooter.ListItem>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">Business and self-employed</GovUKFooter.Link>
              </GovUKFooter.ListItem>
            </GovUKFooter.List>
          </GovUKFooter.Section>

          <GovUKFooter.Section>
            <GovUKFooter.SectionTitle>Government activity</GovUKFooter.SectionTitle>
            <GovUKFooter.List>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">Departments</GovUKFooter.Link>
              </GovUKFooter.ListItem>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">News</GovUKFooter.Link>
              </GovUKFooter.ListItem>
              <GovUKFooter.ListItem>
                <GovUKFooter.Link href="#">Guidance and regulation</GovUKFooter.Link>
              </GovUKFooter.ListItem>
            </GovUKFooter.List>
          </GovUKFooter.Section>
        </GovUKFooter.Navigation>

        <GovUKFooter.Meta>
          <GovUKFooter.MetaItem>
            <GovUKFooter.Link href="#">Help</GovUKFooter.Link>
            <GovUKFooter.Link href="#">Cookies</GovUKFooter.Link>
            <GovUKFooter.Link href="#">Contact</GovUKFooter.Link>
            <GovUKFooter.Link href="#">Terms and conditions</GovUKFooter.Link>
          </GovUKFooter.MetaItem>

          <GovUKFooter.MetaText>Built by the Government Digital Service</GovUKFooter.MetaText>
        </GovUKFooter.Meta>
      </GovUKFooter.Container>
    </GovUKFooter>
  ),
}

export const MetaOnly: Story = {
  render: () => (
    <GovUKFooter>
      <GovUKFooter.Container>
        <GovUKFooter.Meta>
          <GovUKFooter.MetaItem>
            <GovUKFooter.Link href="#">Accessibility statement</GovUKFooter.Link>
            <GovUKFooter.Link href="#">Privacy notice</GovUKFooter.Link>
          </GovUKFooter.MetaItem>

          <GovUKFooter.MetaText>© Crown copyright</GovUKFooter.MetaText>
        </GovUKFooter.Meta>
      </GovUKFooter.Container>
    </GovUKFooter>
  ),
}
